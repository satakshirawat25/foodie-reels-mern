// import React, { useState, useRef, useEffect } from "react";
// import "../styles/reels.css";

// const ReelFeed = ({ videos = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollContainerRef = useRef(null);
//   const isScrolling = useRef(false);

//   // Mock data if no videos provided
//   const mockVideos =
//     videos.length > 0
//       ? videos
//       : [
//           {
//             id: 1,
//             videoUrl: "/videos/video1.mp4",
//             description:
//               "Delicious homemade pizza with fresh mozzarella and organic tomatoes",
//             storeName: "Pizza Paradise",
//             storeId: 1,
//           },
//           {
//             id: 2,
//             videoUrl: "/videos/video2.mp4",
//             description:
//               "Fresh sushi rolls made with premium ingredients and fresh fish",
//             storeName: "Sushi Master",
//             storeId: 2,
//           },
//           {
//             id: 3,
//             videoUrl: "/videos/video3.mp4",
//             description:
//               "Crispy fried chicken with special seasoning and sauce",
//             storeName: "Fried Chicken House",
//             storeId: 3,
//           },
//         ];

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

//   return (
//     <div className="reel-feed-container">
//       <div
//         className="reel-scroll-container"
//         ref={scrollContainerRef}
//         onScroll={handleScroll}
//       >
//         {mockVideos.map((video) => (
//           <div key={video.id} className="reel-item">
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
//                 <button
//                   className="visit-store-btn"
//                   onClick={() => handleVisitStore(video.storeId)}
//                 >
//                   Visit Store
//                 </button>
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

// export default ReelFeed;
