import React, { useState, useEffect } from "react";
import BottomNav from "../../components/BottomNav";
import "../../styles/saved.css";

const Saved = () => {
  const [savedVideos, setSavedVideos] = useState([]);

  useEffect(() => {
    // Load saved videos from localStorage
    const saved = localStorage.getItem("savedVideos");
    if (saved) {
      setSavedVideos(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <div className="saved-page">
        <div className="saved-header">
          <h1>Saved Videos</h1>
        </div>

        <div className="saved-container">
          {savedVideos.length === 0 ? (
            <div className="empty-saved">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              </svg>
              <h2>No saved videos yet</h2>
              <p>Save videos from the feed to view them here</p>
            </div>
          ) : (
            <div className="saved-grid">
              {savedVideos.map((video) => (
                <div key={video._id} className="saved-item">
                  <video
                    className="saved-video"
                    src={video.video}
                    controls
                    playsInline
                  />
                  <div className="saved-item-info">
                    <p className="saved-description">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Saved;
