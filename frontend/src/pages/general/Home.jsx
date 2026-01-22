import React, { useState } from "react";
import "../../styles/reels.css";

const Home = () => {
  // Sample reels data - replace with actual data from API
  const [reels] = useState([
    {
      id: 1,
      videoUrl: "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
      description:
        "Delicious homemade pizza with fresh mozzarella and basil. Perfect for dinner!",
      storeName: "Pizza Palace",
      storeId: 1,
    },
    {
      id: 2,
      videoUrl: "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
      description:
        "Authentic Indian curry with aromatic spices and creamy sauce.",
      storeName: "Spice House",
      storeId: 2,
    },
    {
      id: 3,
      videoUrl: "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
      description:
        "Crispy fried chicken with golden skin. Order now for delivery!",
      storeName: "Fried Paradise",
      storeId: 3,
    },
    {
      id: 4,
      videoUrl: "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
      description:
        "Fresh sushi rolls with premium ingredients and authentic preparation.",
      storeName: "Sushi Master",
      storeId: 4,
    },
    {
      id: 5,
      videoUrl: "https://ik.imagekit.io/d6iftzltud/f4ea1d85-440e-4939-a299-86714d1f3e64_hljTKB6O_.mp4",
      description:
        "Artisanal pastries and cakes baked fresh daily. Visit us today!",
      storeName: "Sweet Bakery",
      storeId: 5,
    },
  ]);

  const handleVisitStore = (storeId, storeName) => {
    // TODO: Navigate to store page or add store logic
    console.log(`Visiting store: ${storeName} (${storeId})`);
  };

  return (
    <div className="reels-container">
      {reels.map((reel) => (
        <div key={reel.id} className="reel">
          <video
            className="reel-video"
            src={reel.videoUrl}
            loop
            muted
            autoPlay={reel.id === 1}
            playsInline
          />

          {/* Gradient overlay for text readability */}
          <div className="reel-gradient-overlay" />

          {/* Content overlay */}
          <div className="reel-overlay">
            <p className="reel-description">{reel.description}</p>
            <button
              className="reel-button"
              onClick={() => handleVisitStore(reel.storeId, reel.storeName)}
            >
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
