import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { isConfigured } from '../firebase/config';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';

function MapNavBar() {
  const { currentUser, userProfile, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignInClick = () => {
    if (!isConfigured) {
      alert('⚠️ Firebase is not configured yet!\n\nTo enable authentication:\n1. See FIREBASE_SETUP.md\n2. Create a Firebase project\n3. Add your config to src/firebase/config.js\n\nFor now, you can see the UI but authentication won\'t work.');
      return;
    }
    setShowAuthModal(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}
      >
        {!currentUser ? (
          /* Not logged in - Show Sign In button */
          <button
            onClick={handleSignInClick}
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A5F 100%)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(10, 31, 68, 0.2)',
              fontFamily: "'Montserrat', sans-serif",
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 31, 68, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(10, 31, 68, 0.2)';
            }}
          >
            Sign In
          </button>
        ) : (
          /* Logged in - Show user menu */
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(10, 31, 68, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(10, 31, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: "'Montserrat', sans-serif",
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#0A1F44',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                {userProfile?.displayName?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#0A1F44' }}>
                {userProfile?.displayName || 'User'}
              </span>
              <span style={{ fontSize: '12px', color: '#4a5568' }}>▼</span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  border: '1px solid rgba(10, 31, 68, 0.2)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(10, 31, 68, 0.2)',
                  minWidth: '200px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <button
                  onClick={() => {
                    setShowProfileModal(true);
                    setShowUserMenu(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#0A1F44',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F7FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  View Profile
                </button>

                <div style={{ height: '1px', background: '#E2E8F0', margin: '4px 0' }} />

                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#DC2626',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FEE2E2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      {showProfileModal && <UserProfile onClose={() => setShowProfileModal(false)} />}
    </>
  );
}

export default MapNavBar;
