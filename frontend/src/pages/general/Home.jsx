// // import React, { useState, useEffect, useRef } from "react";
// -// import "../../styles/reels.css";
// -// import axios from "axios";
// -// import { useNavigate } from "react-router-dom";
// -
// -// const Home = () => {
// -//   const [reels, setReels] = useState([]);
// -//   const [loading, setLoading] = useState(true);
// -//   const [error, setError] = useState(null);
// -//   const videoRefs = useRef([]);
// -//   const navigate = useNavigate();
// -
// -//   // Fetch reels data from API
// -//   useEffect(() => {
// -//     const fetchReels = async () => {
// -//       try {
// -//         const response = await axios.get("/api/food/reels", {
// -//           withCredentials: true,
// -//         });
// -//         setReels(response.data);
// -//       } catch (err) {
// -//         console.error("Error fetching reels:", err);
// -//         setError("Failed to load reels");
// -//         // Fallback to sample data if API fails
// -//         setReels([
// -//           {
// -//             id: 1,
// -//             videoUrl:
// -//               "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -//             description:
// -//               "Delicious homemade pizza with fresh mozzarella and basil. Perfect for dinner!",
// -//             storeName: "Pizza Palace",
// -//             storeId: 1,
// -//           },
// -//           {
// -//             id: 2,
// -//             videoUrl:
// -//               "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -//             description:
// -//               "Authentic Indian curry with aromatic spices and creamy sauce.",
// -//             storeName: "Spice House",
// -//             storeId: 2,
// -//           },
// -//           {
// -//             id: 3,
// -//             videoUrl:
// -//               "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -//             description:
// -//               "Crispy fried chicken with golden skin. Order now for delivery!",
// -//             storeName: "Fried Paradise",
// -//             storeId: 3,
// -//           },
// -//           {
// -//             id: 4,
// -//             videoUrl:
// -//               "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -//             description:
// -//               "Fresh sushi rolls with premium ingredients and authentic preparation.",
// -//             storeName: "Sushi Master",
// -//             storeId: 4,
// -//           },
// -//           {
// -//             id: 5,
// -//             videoUrl:
// -//               "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -//             description:
// -//               "Artisanal pastries and cakes baked fresh daily. Visit us today!",
// -//             storeName: "Sweet Bakery",
// -//             storeId: 5,
// -//           },
// -//         ]);
// -//       } finally {
// -//         setLoading(false);
// -//       }
// -//     };
// -
// -//     fetchReels();
// -//   }, []);
// -
// -//   // Intersection Observer for auto-playing videos
// -//   useEffect(() => {
// -//     const observer = new IntersectionObserver(
// -//       (entries) => {
// -//         entries.forEach((entry) => {
// -//           const video = entry.target;
// -//           if (entry.isIntersecting) {
// -//             video.play().catch((err) => console.log("Video play failed:", err));
// -//           } else {
// -//             video.pause();
// -//           }
// -//         });
// -//       },
// -//       { threshold: 0.5 }
// -//     );
// -
// -//     videoRefs.current.forEach((video) => {
// -//       if (video) observer.observe(video);
// -//     });
// -
// -//     return () => {
// -//       videoRefs.current.forEach((video) => {
// -//         if (video) observer.unobserve(video);
// -//       });
// -//     };
// -//   }, [reels]);
// -
// -//   const handleVisitStore = (storeId, storeName) => {
// -//     // Navigate to store page
// -//     navigate(`/store/${storeId}`);
// -//   };
// -
// -//   return (
// -//     <div className="reels-container">
// -//       {reels.map((reel) => (
// -//         <div key={reel.id} className="reel">
// -//           <video
// -//             className="reel-video"
// -//             src={reel.videoUrl}
// -//             loop
// -//             muted
// -//             autoPlay={reel.id === 1}
// -//             playsInline
// -//           />
// -
// -//           {/* Gradient overlay for text readability */}
// -//           <div className="reel-gradient-overlay" />
// -
// -//           {/* Content overlay */}
// -//           <div className="reel-overlay">
// -//             <p className="reel-description">{reel.description}</p>
// -//             <button
// -//               className="reel-button"
// -//               onClick={() => handleVisitStore(reel.storeId, reel.storeName)}
// -//             >
// -//               Visit Store
// -//             </button>
// -//           </div>
// -//         </div>
// -//       ))}
// -//     </div>
// -//   );
// -// };
// -
// -// export default Home;
// -
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// -z
// -const Home = () => {
// -  const [videos, setVideos] = useState([]);
// -  const videoRefs = useRef(new Map());
// -  const containerRef = useRef(null);
// -
// -  useEffect(() => {
// -    const observer = new IntersectionObserver(
// -      (entries) => {
// -        entries.forEach((entry) => {
// -          const video = entry.target;
// -
// -          // Safety check
// -          if (!(video instanceof HTMLVideoElement)) return;
// -
// -          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
// -            // Play visible video
// -            video.play().catch(() => {
// -              // Ignore autoplay errors
// -            });
// -          } else {
// -            // Pause non-visible video
// -            video.pause();
// -          }
// -        });
// -      },
// -      {
// -        threshold: 0.6,
// -      }
// -    );
// -
// -    // Observe all videos
// -    videoRefs.current.forEach((video) => {
// -      if (video) observer.observe(video);
// -    });
// -
// -    return () => {
// -      observer.disconnect();
// -    };
// -  }, [videos]);
// -
// -  // Fetch videos from backend
// -  useEffect(() => {
// -    axios
// -      .get("/api/food", { withCredentials: true })
// -      .then((response) => {
// -        setVideos(response.data.foodItems);
// -      })
// -      .catch((error) => {
// -        console.error("Error fetching videos:", error);
// -        // Fallback to sample data if API fails
// -        setVideos([
// -          {
// -            _id: 1,
// -            video:
// -              "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -            description:
// -              "Delicious homemade pizza with fresh mozzarella and basil. Perfect for dinner!",
// -            foodPartner: "/store/1",
// -          },
// -          {
// -            _id: 2,
// -            video:
// -              "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -            description:
// -              "Authentic Indian curry with aromatic spices and creamy sauce.",
// -            foodPartner: "/store/2",
// -          },
// -          {
// -            _id: 3,
// -            video:
// -              "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
// -            description:
// -              "Crispy fried chicken with golden skin. Order now for delivery!",
// -            foodPartner: "/store/3",
// -          },
// -        ]);
// -      });
// -  }, []);
// -
// -  // Store video refs
// -  const setVideoRef = (id) => (el) => {
// -    if (el) {
// -      videoRefs.current.set(id);
// -    } else {
// -      videoRefs.current.delete(id);
// -      return;
// -    }
// -    videoRefs.current.set(id, el);
// -  };
// -
// -  return (
// -    <div ref={containerRef} className="reels-page">
// -      <div className="reels-feed" role="list">
// -        {videos.map((item) => (
// -          <section key={item._id} className="reel" role="listitem">
// -            <video
// -              ref={setVideoRef(item._id)}
// -              className="reel-video"
// -              src={item.video}
// -              muted
// -              playsInline
// -              loop
// -              preload="metadata"
// -            />
// -
// -            <div className="reel-overlay">
// -              <div className="reel-overlay-gradient" aria-hidden="true" />
// -
// -              <div className="reel-content">
// -                <p className="reel-description" title={item.description}>
// -                  {item.description}
// -                </p>
// -
// -                <Link
// -                  className="reel-btn"
// -                  to={item.foodPartner}
// -                  aria-label="Visit store"
// -                >
// -                  Visit Store
// -                </Link>
// -              </div>
// -            </div>
// -          </section>
// -        ))}
// -      </div>
// -    </div>
// -  );
// -};
// -
// -export default Home;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef(new Map());
  const containerRef = useRef(null);

  // Fetch videos from backend

  // Intersection Observer for autoplay
  useEffect(() => {
    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (!(video instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {
              // Ignore autoplay errors
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [videos]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/food").then((response) => {
      setVideos(response.data.foodItems);
    });
  });

  // Store video refs
  const setVideoRef = (id) => (el) => {
    if (el) {
      videoRefs.current.set(id, el);
    } else {
      videoRefs.current.delete(id);
    }
  };

  return (
    <div ref={containerRef} className="reels-page">
      <div className="reels-feed" role="list">
        {videos.map((item) => (
          <section key={item._id} className="reel" role="listitem">
            <video
              ref={setVideoRef(item._id)}
              className="reel-video"
              src={item.video}
              muted
              playsInline
              loop
              preload="metadata"
            />

            <div className="reel-overlay">
              <div className="reel-overlay-gradient" aria-hidden="true" />

              <div className="reel-content">
                <p className="reel-description" title={item.description}>
                  {item.description}
                </p>

                <Link
                  className="reel-btn"
                  to={`/food-partner/${item.foodPartner}`}
                  aria-label="Visit store"
                >
                  Visit Store
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
