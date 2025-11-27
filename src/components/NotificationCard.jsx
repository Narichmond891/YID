import React, { useState, useEffect } from 'react';
import { getRandomNotification } from '../data/notificationContent';
import './NotificationCard.css';

function NotificationCard() {
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user manually closed recently
    const lastClosedTime = localStorage.getItem('billboardLastClosed');
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

    if (lastClosedTime && (now - parseInt(lastClosedTime)) < fiveMinutes) {
      // Don't show if closed within last 5 minutes
      const remainingTime = fiveMinutes - (now - parseInt(lastClosedTime));

      // Set timeout to show after the remaining time
      const delayedTimeout = setTimeout(() => {
        setNotification(getRandomNotification());
        setIsVisible(true);
      }, remainingTime);

      return () => clearTimeout(delayedTimeout);
    } else {
      // Show first notification after 5 seconds
      const initialTimeout = setTimeout(() => {
        setNotification(getRandomNotification());
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(initialTimeout);
    }
  }, []);

  useEffect(() => {
    if (!notification) return;

    // Auto-rotate to new notification every 30 seconds
    const rotationInterval = setInterval(() => {
      handleAutoRotate();
    }, 30000);

    return () => clearInterval(rotationInterval);
  }, [notification]);

  const handleAutoRotate = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      const newNotification = getRandomNotification(notification?.id);
      setNotification(newNotification);
      setTimeout(() => setIsVisible(true), 800);
    }, 600);
  };

  const handleClose = () => {
    // Store close timestamp
    localStorage.setItem('billboardLastClosed', Date.now().toString());

    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setNotification(null);
    }, 600);
  };

  if (!notification || !isVisible) return null;

  return (
    <div className={`billboard-banner ${isClosing ? 'closing' : ''}`}>
      <button
        className="billboard-close"
        onClick={() => handleClose()}
        aria-label="Close"
      >
        ✕
      </button>

      <div className="billboard-content">
        <div className="billboard-community">{notification.community}</div>

        <h3 className="billboard-title">{notification.title}</h3>

        {notification.image && (
          <div className="billboard-image-container">
            <img
              src={notification.image}
              alt={notification.title}
              className="billboard-image"
            />
          </div>
        )}

        <div className="billboard-scrolling">
          <div className="billboard-scroll-content">
            <p className="billboard-text">{notification.content}</p>

            {notification.recipe && (
              <div className="billboard-section">
                <strong>Recipe:</strong>
                <p>{notification.recipe}</p>
              </div>
            )}

            <div className="billboard-section">
              <strong>History:</strong>
              <p>{notification.history}</p>
            </div>

            {/* Duplicate content for seamless loop */}
            <p className="billboard-text">{notification.content}</p>

            {notification.recipe && (
              <div className="billboard-section">
                <strong>Recipe:</strong>
                <p>{notification.recipe}</p>
              </div>
            )}

            <div className="billboard-section">
              <strong>History:</strong>
              <p>{notification.history}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
