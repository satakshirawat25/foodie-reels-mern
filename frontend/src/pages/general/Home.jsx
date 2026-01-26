import React, { useState, useRef, useEffect } from "react";
import "../../styles/home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BottomNav from "../../components/BottomNav";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState({});
  const [saves, setSaves] = useState({});

  const scrollContainerRef = useRef(null);
  const isScrolling = useRef(false);

  /* =======================
     FETCH VIDEOS FROM BACKEND
     ======================= */
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {
        const foodItems = response.data.foodItems || [];
        console.log(response.data)
        setVideos(foodItems);

        // Initialize likes and saves state
        const likesObj = {};
        const savesObj = {};
        foodItems.forEach((item) => {
          likesObj[item._id] = item.likesCount || 0;
          savesObj[item._id] = item.savesCount || 0;
        });
        setLikes(likesObj);
        setSaves(savesObj);
      })
      .catch((error) => {
        console.error("Failed to fetch videos:", error);
      });
  }, []);

  /* =======================
     HANDLE SCROLL SNAP
     ======================= */
  const handleScroll = () => {
    if (isScrolling.current) return;

    const container = scrollContainerRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = container.clientHeight;

    const index = Math.round(scrollTop / itemHeight);
    setCurrentIndex(index);
  };

  /* =======================
     SNAP TO CURRENT VIDEO
     ======================= */
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isScrolling.current = true;

    container.scrollTo({
      top: currentIndex * container.clientHeight,
      behavior: "smooth",
    });

    const timer = setTimeout(() => {
      isScrolling.current = false;
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  /* =======================
     HANDLE LIKE
     ======================= */
  const handleLike = (videoId) => {
    setLikes((prev) => ({
      ...prev,
      [videoId]: (prev[videoId] || 0) + 1,
    }));
  };

  /* =======================
     HANDLE SAVE
     ======================= */
  const handleSave = (videoId) => {
    setSaves((prev) => ({
      ...prev,
      [videoId]: (prev[videoId] || 0) + 1,
    }));
  };

  // async function likedVideo(item){
  //   const response = await axios.post("http://localhost:3000/api/food/like",{foodId:item._id},{withCredentials:true})


  // if(response.data.like){
  //   console.log("Video liked")
  //   setVideos((prev)=>prev.map((v)=>v._id === item._id ? {...v , likesCount: v.likesCount+1}:v))
  // }else{
  //    console.log("Video unliked")
  //   setVideos((prev)=>prev.map((v)=>v._id === item._id ? {...v , likesCount: v.likesCount-1}:v))
  // }
  // }

  async function bookmarkVideo(item){
    const response = await axios.post("http://localhost:3000/api/food/bookmark",{foodId:item._id},{withCredentials:true})


  if(response.data.like){
    console.log("Video bookmarked")
    setVideos((prev)=>prev.map((v)=>v._id === item._id ? {...v , likeCount: v.likeCount+1}:v))
  }else{
     console.log("Video bookmarked")
    setVideos((prev)=>prev.map((v)=>v._id === item._id ? {...v , likeCount: v.likeCount-1}:v))
  }
  }



  return (
    <div className="reel-feed-container">
      <div
        className="reel-scroll-container"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {videos.map((video, index) => (
          <div key={video._id} className="reel-item">
            <video
              className="reel-video"
              src={video.video}
              autoPlay={index === currentIndex}
              loop
              muted
              playsInline
            />

            {/* Right Side Action Icons */}
            <div className="reel-actions">
              <div className="reel-action-group">
                <button
                  className="reel-action"
                  onClick={() => handleLike(video._id)}
                  aria-label="Like"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <span className="reel-action__count">
                  {likes[video._id] || video.likesCount || 0}
                </span>
              </div>

              <div className="reel-action-group">
                <button
                  className="reel-action"
                  onClick={() => handleSave(video._id)}
                  aria-label="Save"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M6 3a1 1 0 0 0-1 1v17l7-4 7 4V4a1 1 0 0 0-1-1H6z" />
                  </svg>
                </button>
                <span className="reel-action__count">
                  {saves[video._id] || video.savesCount || 0}
                </span>
              </div>

              <div className="reel-action-group">
                <button className="reel-action" aria-label="Comments">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </button>
                <span className="reel-action__count">
                  {video.commentsCount || 0}
                </span>
              </div>
            </div>

            {/* Overlay */}
            <div className="reel-overlay">
              <div className="reel-content">
                <p className="reel-description">{video.description}</p>

                <Link
                  className="visit-store-btn"
                  to={"/food-partner/" + video.foodPartner}
                >
                  Visit Store
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Home;
