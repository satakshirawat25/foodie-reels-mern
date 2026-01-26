import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/reels.css";

// Reusable feed for vertical reels
// Props:
// - items: Array of video items { _id, video, description, likeCount, savesCount, commentsCount, comments, foodPartner }
// - onLike: (item) => void | Promise<void>
// - onSave: (item) => void | Promise<void>
// - emptyMessage: string
const ReelFeed = ({
  items = [],
  onLike,
  onSave,
  emptyMessage = "No videos yet.",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [savedVideos, setSavedVideos] = useState(new Set());
  const scrollContainerRef = useRef(null);
  const isScrolling = useRef(false);
  const videoRefs = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!(video instanceof HTMLVideoElement)) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {
              /* ignore autoplay errors */
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.25, 0.6, 0.9, 1] }
    );

    videoRefs.current.forEach((vid) => observer.observe(vid));
    return () => observer.disconnect();
  }, [items]);

  const setVideoRef = (id) => (el) => {
    if (!el) {
      videoRefs.current.delete(id);
      return;
    }
    videoRefs.current.set(id, el);
  };

  const handleScroll = (e) => {
    if (isScrolling.current || items.length === 0) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const itemHeight = container.clientHeight;
    const delta = scrollTop % itemHeight;

    if (delta > itemHeight / 3) {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || items.length === 0) return;

    isScrolling.current = true;
    const targetScroll = currentIndex * container.clientHeight;

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    const timer = setTimeout(() => {
      isScrolling.current = false;
    }, 600);

    return () => clearTimeout(timer);
  }, [currentIndex, items.length]);

  const handleLike = (item) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(item._id)) {
      newLiked.delete(item._id);
    } else {
      newLiked.add(item._id);
    }
    setLikedVideos(newLiked);
    if (onLike) onLike(item);
  };

  const handleSave = (item) => {
    const newSaved = new Set(savedVideos);
    if (newSaved.has(item._id)) {
      newSaved.delete(item._id);
    } else {
      newSaved.add(item._id);
    }
    setSavedVideos(newSaved);
    if (onSave) onSave(item);
  };

  return (
    <div className="reel-feed-wrapper">
      <div className="reel-feed-container">
        <div
          className="reel-scroll-container"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {items.length === 0 && (
            <div className="empty-state">
              <p>{emptyMessage}</p>
            </div>
          )}

          {items.map((item) => (
            <section key={item._id} className="reel-item" role="listitem">
              <div className="video-header">Video</div>

              <video
                ref={setVideoRef(item._id)}
                className="reel-video"
                src={item.video}
                muted
                playsInline
                loop
                preload="metadata"
              />

              {/* Side Engagement Panel */}
              <div className="engagement-panel">
                <button
                  className={`engagement-btn like-btn ${
                    likedVideos.has(item._id) ? "active" : ""
                  }`}
                  onClick={() => handleLike(item)}
                  title="Like"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span className="engagement-count">
                    {item.likeCount ?? item.likesCount ?? item.likes ?? 0}
                  </span>
                </button>

                <button
                  className={`engagement-btn save-btn ${
                    savedVideos.has(item._id) ? "active" : ""
                  }`}
                  onClick={() => handleSave(item)}
                  title="Save"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  </svg>
                  <span className="engagement-count">
                    {item.savesCount ?? item.bookmarks ?? item.saves ?? 0}
                  </span>
                </button>

                <button className="engagement-btn comment-btn" title="Comment">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="engagement-count">
                    {item.commentsCount ??
                      (Array.isArray(item.comments) ? item.comments.length : 0)}
                  </span>
                </button>

                <button className="engagement-btn share-btn" title="Share">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  <span className="engagement-count">
                    {item.sharesCount ?? item.shares ?? 0}
                  </span>
                </button>
              </div>

              {/* Bottom Content Overlay */}
              <div className="reel-overlay">
                <div className="reel-content">
                  <p className="reel-description">{item.description}</p>
                  {item.foodPartner && (
                    <Link
                      className="visit-store-btn"
                      to={"/food-partner/" + item.foodPartner}
                      aria-label="Visit store"
                    >
                      visit store
                    </Link>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelFeed;
