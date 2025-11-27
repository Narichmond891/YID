import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function UserProfile({ onClose }) {
  const { userProfile, updateUserProfile, currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: userProfile?.displayName || '',
    pseudonym: userProfile?.pseudonym || '',
    bio: userProfile?.bio || '',
    languages: userProfile?.languages || [],
    regionsOfInterest: userProfile?.regionsOfInterest || []
  });
  const [newLanguage, setNewLanguage] = useState('');
  const [newRegion, setNewRegion] = useState('');

  const handleSave = async () => {
    await updateUserProfile(formData);
    setIsEditing(false);
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !formData.languages.includes(newLanguage.trim())) {
      setFormData({
        ...formData,
        languages: [...formData.languages, newLanguage.trim()]
      });
      setNewLanguage('');
    }
  };

  const removeLanguage = (lang) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((l) => l !== lang)
    });
  };

  const addRegion = () => {
    if (newRegion.trim() && !formData.regionsOfInterest.includes(newRegion.trim())) {
      setFormData({
        ...formData,
        regionsOfInterest: [...formData.regionsOfInterest, newRegion.trim()]
      });
      setNewRegion('');
    }
  };

  const removeRegion = (region) => {
    setFormData({
      ...formData,
      regionsOfInterest: formData.regionsOfInterest.filter((r) => r !== region)
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 8px 32px rgba(10, 31, 68, 0.3)',
          fontFamily: "'Montserrat', sans-serif"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
              color: '#0A1F44'
            }}
          >
            Your Profile
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              color: '#4a5568',
              cursor: 'pointer',
              padding: '4px 8px'
            }}
          >
            ✕
          </button>
        </div>

        {/* Profile Photo */}
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#0A1F44',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: '700',
              margin: '0 auto 12px',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            {userProfile?.displayName?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div style={{ fontSize: '12px', color: '#4a5568' }}>
            {currentUser?.email}
          </div>
        </div>

        {!isEditing ? (
          /* View Mode */
          <>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4a5568', marginBottom: '4px' }}>
                Display Name
              </div>
              <div style={{ fontSize: '16px', color: '#0A1F44' }}>
                {userProfile?.displayName || 'Not set'}
              </div>
            </div>

            {userProfile?.pseudonym && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#4a5568', marginBottom: '4px' }}>
                  Pseudonym
                </div>
                <div style={{ fontSize: '16px', color: '#0A1F44' }}>
                  {userProfile.pseudonym}
                </div>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4a5568', marginBottom: '4px' }}>
                Bio
              </div>
              <div style={{ fontSize: '14px', color: '#0A1F44', lineHeight: '1.6' }}>
                {userProfile?.bio || 'No bio yet'}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4a5568', marginBottom: '8px' }}>
                Languages
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {userProfile?.languages?.length > 0 ? (
                  userProfile.languages.map((lang) => (
                    <span
                      key={lang}
                      style={{
                        padding: '6px 12px',
                        background: '#F7FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#0A1F44'
                      }}
                    >
                      {lang}
                    </span>
                  ))
                ) : (
                  <span style={{ fontSize: '14px', color: '#4a5568' }}>No languages added</span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4a5568', marginBottom: '8px' }}>
                Regions of Interest
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {userProfile?.regionsOfInterest?.length > 0 ? (
                  userProfile.regionsOfInterest.map((region) => (
                    <span
                      key={region}
                      style={{
                        padding: '6px 12px',
                        background: '#F7FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#0A1F44'
                      }}
                    >
                      {region}
                    </span>
                  ))
                ) : (
                  <span style={{ fontSize: '14px', color: '#4a5568' }}>No regions added</span>
                )}
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginBottom: '24px',
                padding: '16px',
                background: '#F7FAFC',
                borderRadius: '8px'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#0A1F44' }}>
                  {userProfile?.contributionCount || 0}
                </div>
                <div style={{ fontSize: '12px', color: '#4a5568' }}>Contributions</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#0A1F44' }}>
                  {userProfile?.followingCount || 0}
                </div>
                <div style={{ fontSize: '12px', color: '#4a5568' }}>Following</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#0A1F44' }}>
                  {userProfile?.followerCount || 0}
                </div>
                <div style={{ fontSize: '12px', color: '#4a5568' }}>Followers</div>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A5F 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Edit Profile
            </button>
          </>
        ) : (
          /* Edit Mode */
          <>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#0A1F44' }}>
                Display Name
              </label>
              <input
                type="text"
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#0A1F44' }}>
                Pseudonym (Optional)
              </label>
              <input
                type="text"
                value={formData.pseudonym}
                onChange={(e) => setFormData({ ...formData, pseudonym: e.target.value })}
                placeholder="Alternative name to display publicly"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#0A1F44' }}>
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Tell us about yourself and your connection to the Jewish diaspora..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif",
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#0A1F44' }}>
                Languages
              </label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                  placeholder="Add a language"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                />
                <button
                  onClick={addLanguage}
                  style={{
                    padding: '8px 16px',
                    background: '#0A1F44',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Add
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {formData.languages.map((lang) => (
                  <span
                    key={lang}
                    style={{
                      padding: '6px 12px',
                      background: '#F7FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '13px',
                      color: '#0A1F44',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {lang}
                    <button
                      onClick={() => removeLanguage(lang)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#4a5568',
                        cursor: 'pointer',
                        padding: '0 4px',
                        fontSize: '16px'
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#0A1F44' }}>
                Regions of Interest
              </label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <input
                  type="text"
                  value={newRegion}
                  onChange={(e) => setNewRegion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRegion())}
                  placeholder="Add a region"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                />
                <button
                  onClick={addRegion}
                  style={{
                    padding: '8px 16px',
                    background: '#0A1F44',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Add
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {formData.regionsOfInterest.map((region) => (
                  <span
                    key={region}
                    style={{
                      padding: '6px 12px',
                      background: '#F7FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '13px',
                      color: '#0A1F44',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {region}
                    <button
                      onClick={() => removeRegion(region)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#4a5568',
                        cursor: 'pointer',
                        padding: '0 4px',
                        fontSize: '16px'
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleSave}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A5F 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    displayName: userProfile?.displayName || '',
                    pseudonym: userProfile?.pseudonym || '',
                    bio: userProfile?.bio || '',
                    languages: userProfile?.languages || [],
                    regionsOfInterest: userProfile?.regionsOfInterest || []
                  });
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#FFFFFF',
                  color: '#4a5568',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
