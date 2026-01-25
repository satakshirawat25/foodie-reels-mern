// // @refresh reset
// import React, { useState, useRef, useEffect } from "react";
// import "../../styles/home.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = ({ videos = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollContainerRef = useRef(null);
//   const isScrolling = useRef(false);

//   // Mock data if no videos provided
//   // const mockVideos =
//   //   videos.length > 0
//   //     ? videos
//   //     : [
//   //         {
//   //           id: 1,
//   //           videoUrl: "https://ik.imagekit.io/d6iftzltud/dad63ed8-d771-4a68-971f-39e2bff26e50_h8bZZ-Gtd.mp4",
//   //           description:
//   //             "Delicious homemade pizza with fresh mozzarella and organic tomatoes",
//   //           storeUrl: "/create-food",
//   //           storeId: 1,
//   //         },
//   //         {
//   //           id: 2,
//   //           videoUrl: "https://ik.imagekit.io/d6iftzltud/dad63ed8-d771-4a68-971f-39e2bff26e50_h8bZZ-Gtd.mp4",
//   //           description:
//   //             "Fresh sushi rolls made with premium ingredients and fresh fish",
//   //            storeUrl: "/create-food",
//   //           storeId: 2,
//   //         },
//   //         {
//   //           id: 3,
//   //           videoUrl: "https://ik.imagekit.io/d6iftzltud/dad63ed8-d771-4a68-971f-39e2bff26e50_h8bZZ-Gtd.mp4",
//   //           description:
//   //             "Crispy fried chicken with special seasoning and sauce",
//   //           storeUrl: "/create-food",
//   //           storeId: 3,
//   //         },
//   //       ];

//   const handleScroll = (e) => {
//     if (isScrolling.current) return;

//     const container = scrollContainerRef.current;
//     const scrollTop = container.scrollTop;
//     const itemHeight = container.clientHeight;

//     // Detect scroll direction
//     const delta = scrollTop % itemHeight;

//     if (delta > itemHeight / 3) {
//       // Snap to next
//       setCurrentIndex((prev) => Math.min(prev + 1, mockVideos.length - 1));
//     } else {
//       // Snap to current
//       setCurrentIndex((prev) => Math.max(prev - 1, 0));
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     isScrolling.current = true;
//     const targetScroll = currentIndex * container.clientHeight;

//     container.scrollTo({
//       top: targetScroll,
//       behavior: "smooth",
//     });

//     const timer = setTimeout(() => {
//       isScrolling.current = false;
//     }, 600);

//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   const handleVisitStore = (storeId) => {
//     console.log("Visit store:", storeId);
//     // Navigate to store or open store details
//   };


//   useEffect(()=>{
//     axios.get("http://localhost:3000/api/food",{withCredentials:true})
//     .then(response=>{
//       setVideos(response.data)
//     })
//   })

//   return (
//     <div className="reel-feed-container">
//       <div
//         className="reel-scroll-container"
//         ref={scrollContainerRef}
//         onScroll={handleScroll}
//       >
//         {mockVideos.map((video) => (
//           <div key={video._id} className="reel-item">
//             <video
//               className="reel-video"
//               autoPlay={mockVideos.indexOf(video) === currentIndex}
//               loop
//               muted
//               playsInline
//             >
//               <source src={video.videoUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Overlay: Description and Button */}
//             <div className="reel-overlay">
//               <div className="reel-content">
//                 <p className="reel-description">{video.description}</p>
//                 <Link
//                   className="visit-store-btn"
//                   to={"/food-partner/" + item.foodPartner} aria-label="Visit store">
//                   {/* // onClick={() => handleVisitStore(video.storeId)} */}
                
                 
//                 </Link>
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="reel-indicators">
//         {mockVideos.map((_, index) => (
//           <div
//             key={index}
//             className={`indicator ${index === currentIndex ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;





// @refresh reset
import React, { useState, useRef, useEffect } from "react";
import "../../styles/home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollContainerRef = useRef(null);
  const isScrolling = useRef(false);

  /* =======================
     FETCH VIDEOS FROM BACKEND
     ======================= */
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {
        // IMPORTANT: backend usually returns { success, data }
        // console.log("Response from backend:", response);
        setVideos(response.data.foodItems || []);
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
            //  ref={(el) => (videos.current[index] = el)}
              className="reel-video"
              // src={video.videoUrl}
              src={video.video}
              autoPlay
              loop
              muted
              playsInline
            />

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

      {/* Indicators */}
      <div className="reel-indicators">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

