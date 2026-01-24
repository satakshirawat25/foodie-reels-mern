// import React, { useRef, useEffect, useState } from "react";
// import "../styles/reels.css";

// const ReelFeed = ({ items, onLike, onSave, emptyMessage }) => {
//   const containerRef = useRef(null);
//   const videoRefs = useRef({});
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollTimeoutRef = useRef(null);

//   // Auto-play video when it comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
    
//         entries.forEach((entry) => {
//           const video = entry.target;
//           if (entry.isIntersecting) {
//             video.play().catch(() => {
//               // Autoplay may be prevented by browser
//             });
//           } else {
//             video.pause();
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     Object.values(videoRefs.current).forEach((video) => {
//       if (video) observer.observe(video);
//     });

//     return () => {
//       Object.values(videoRefs.current).forEach((video) => {
//         if (video) observer.unobserve(video);
//       });
//     };
//   }, [items]);

//   // Handle scroll snapping
//   const handleScroll = () => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;
//     const scrollTop = container.scrollTop;
//     const clientHeight = container.clientHeight;

//     // Calculate which reel is currently visible
//     const newIndex = Math.round(scrollTop / clientHeight);
//     setCurrentIndex(Math.min(newIndex, items.length - 1));

//     // Clear existing timeout
//     if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

//     // Set timeout to snap after scroll ends
//     scrollTimeoutRef.current = setTimeout(() => {
//       handleScrollEnd();
//     }, 150);
//   };

//   // Snap to reel on scroll end
//   const handleScrollEnd = () => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;
//     const clientHeight = container.clientHeight;
//     const scrollTop = container.scrollTop;

//     // Calculate the target scroll position
//     const targetIndex = Math.round(scrollTop / clientHeight);
//     const targetScrollTop = targetIndex * clientHeight;

//     // Smooth scroll to the target
//     container.scrollTo({
//       top: targetScrollTop,
//       behavior: "smooth",
//     });
//   };

//   const handleVisitStore = (item) => {
//     // Navigate to store page - adjust based on your routing structure
//     console.log("Visit store for:", item.foodPartner?.name || item.foodPartner);
//     // You can navigate here if needed: navigate(`/store/${item.foodPartner._id}`)
//   };

//   if (!items || items.length === 0) {
//     return (
//       <div className="reels-empty">
//         <p>{emptyMessage || "No reels available"}</p>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="reels-container"
//       ref={containerRef}
//       onScroll={handleScroll}
//     >
//       {items.map((item, index) => (
//         <div key={item._id || index} className="reel">
//           <video
//             ref={(el) => {
//               if (el) videoRefs.current[item._id || index] = el;
//             }}
//             className="reel-video"
//             src={item.videoUrl}
//             loop
//             muted
//             playsInline
//           />

//           {/* Gradient overlay for text readability */}
//           <div className="reel-gradient-overlay" />

//           {/* Content overlay - positioned at top */}
//           <div className="reel-overlay">
//             <div className="reel-content">
//               <p className="reel-description">{item.description}</p>
//               <button
//                 className="reel-button"
//                 onClick={() => handleVisitStore(item)}
//               >
//                 Visit Store
//               </button>
//             </div>
//           </div>

//           {/* Food partner info */}
//           <div className="reel-footer">
//             <p className="reel-partner-name">
//               {item.foodPartner?.name || "Store"}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReelFeed;




