import React, { useState } from "react";
import "../../styles/profile.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const {id} = useParams()
  const [profileData] = useState({
    businessName: "Pizza Paradise",
    address: "123 Food Street, Downtown",
    totalMeals: 43,
    customerServed: "15K",
    avatar: "/images/placeholder-avatar.jpg",
    videos: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        thumbnail: `/videos/video${i + 1}.mp4`,
      })),
  });

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <div className="header-content">
          {/* Avatar */}
          <div className="avatar-section">
            <div className="avatar">
              <img src={profileData.avatar} alt={profileData.businessName} />
            </div>
          </div>

        {/* Info Section */}
          <div className="info-section">
            <div className="business-info">
             <input
                type="text"
                className="business-name-input"
                value={profileData.businessName}
                readOnly
              />
              <input
                type="text"
                className="address-input"
                value={profileData.address}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-divider"></div>
          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-label">total meals</p>
              <p className="stat-value">{profileData.totalMeals}</p>
            </div>
            <div className="stat-item">
              <p className="stat-label">customer serve</p>
              <p className="stat-value">{profileData.customerServed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="video-grid-section">
        <div className="video-grid">
          {profileData.videos.map((video) => (
            <div key={video.id} className="video-item">
              <video className="video-placeholder" controls>
                <source src={video.thumbnail} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

