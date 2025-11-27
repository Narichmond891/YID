import React, { useState } from 'react';
import { getPopulationForYear } from '../data/populationData';

function CityInfoPanel({ city, selectedYear, onClose, onShowContributeForm }) {
  const [activeTab, setActiveTab] = useState('population');

  if (!city) return null;

  // Check if this is a user-placed pin (has timestamp but no culture)
  const isUserPin = city.timestamp && !city.culture;

  const population = isUserPin ? null : getPopulationForYear(city, selectedYear);

  // Tab configuration
  const tabs = [
    { id: 'population', label: 'Population', icon: '📊' },
    { id: 'culture', label: 'Culture', icon: '✡️' },
    { id: 'landmarks', label: 'Landmarks', icon: '🕍' },
    { id: 'food', label: 'Food', icon: '🍽️' },
    { id: 'music', label: 'Music', icon: '🎵' }
  ];

  // Render simplified panel for user pins
  if (isUserPin) {
    return (
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '420px',
        maxHeight: '85vh',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(10, 31, 68, 0.15)',
        border: '1px solid #E2E8F0',
        overflow: 'auto',
        zIndex: 1000
      }}>
        <div style={{ padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
            <div>
              <h2 style={{
                margin: '0 0 8px 0',
                fontSize: '32px',
                fontFamily: "'Playfair Display', serif",
                color: '#0A1F44',
                fontWeight: '700',
                lineHeight: '1.2'
              }}>
                Custom Location
              </h2>
              <p style={{ margin: '0', fontSize: '16px', color: '#4a5568', fontWeight: '500' }}>
                {city.coordinates[0].toFixed(4)}, {city.coordinates[1].toFixed(4)}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: '#F7FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#4a5568',
                padding: '0',
                lineHeight: '1',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#E2E8F0';
                e.target.style.color = '#0A1F44';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#F7FAFC';
                e.target.style.color = '#4a5568';
              }}
            >
              ×
            </button>
          </div>

          <div style={{
            padding: '16px',
            background: '#F7FAFC',
            borderRadius: '8px',
            marginBottom: '15px',
            border: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: '#0A1F44',
              fontWeight: '600',
              lineHeight: '1.5'
            }}>
              Pin placed successfully. Zoom in on the map to see your marker.
            </p>
          </div>

          <div style={{
            padding: '16px',
            background: '#FFFFFF',
            borderRadius: '8px',
            marginBottom: '25px',
            border: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            <p style={{
              margin: '0',
              fontSize: '15px',
              color: '#4a5568',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              Help us build our community knowledge by contributing information about Jewish history and culture here!
            </p>
          </div>

          <button
            onClick={onShowContributeForm}
            style={{
              marginTop: '30px',
              width: '100%',
              padding: '16px 24px',
              background: '#0A1F44',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(10, 31, 68, 0.15)',
              transition: 'all 0.2s ease',
              fontFamily: "'Montserrat', sans-serif"
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#1E3A5F';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#0A1F44';
            }}
          >
            Contribute Information
          </button>
        </div>
      </div>
    );
  }

  // Create a simple chart showing population over time
  const PopulationChart = () => {
    const maxPop = Math.max(...Object.values(city.populations));

    return (
      <div style={{
        marginTop: '20px',
        padding: '20px',
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E2E8F0'
      }}>
        <h4 style={{
          fontSize: '16px',
          marginBottom: '15px',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44',
          fontWeight: '600'
        }}>
          Population Over Time
        </h4>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px' }}>
          {Object.entries(city.populations).map(([year, pop]) => {
            const height = (pop / maxPop) * 100;
            const isSelected = parseInt(year) === selectedYear;

            return (
              <div
                key={year}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <div style={{
                  fontSize: '11px',
                  fontWeight: isSelected ? '700' : '500',
                  color: isSelected ? '#0A1F44' : '#4a5568'
                }}>
                  {(pop / 1000).toFixed(0)}k
                </div>
                <div
                  style={{
                    width: '100%',
                    height: `${height}%`,
                    background: isSelected ? '#0A1F44' : '#E2E8F0',
                    borderRadius: '4px 4px 0 0',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 2px 8px rgba(10, 31, 68, 0.15)' : 'none'
                  }}
                />
                <div style={{
                  fontSize: '11px',
                  fontWeight: isSelected ? '700' : '500',
                  color: isSelected ? '#0A1F44' : '#4a5568'
                }}>
                  {year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Population Tab Content
  const PopulationTab = () => (
    <div>
      <div style={{
        padding: '20px',
        background: '#F7FAFC',
        borderRadius: '12px',
        marginBottom: '20px',
        border: '1px solid #E2E8F0',
        textAlign: 'center'
      }}>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '12px',
          color: '#4a5568',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: '600'
        }}>
          Jewish Population in {selectedYear}
        </h3>
        <p style={{
          margin: '0',
          fontSize: '36px',
          fontWeight: '700',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44'
        }}>
          {population ? population.toLocaleString() : 'No data'}
        </p>
      </div>

      <PopulationChart />

      {/* Instagram Links */}
      {city.social?.instagram && city.social.instagram.length > 0 && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: 'linear-gradient(135deg, rgba(131, 58, 180, 0.05) 0%, rgba(253, 29, 29, 0.05) 50%, rgba(252, 176, 69, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(131, 58, 180, 0.2)'
        }}>
          <h4 style={{
            fontSize: '14px',
            marginBottom: '12px',
            fontFamily: "'Playfair Display', serif",
            color: '#0A1F44',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '18px' }}>📸</span> Instagram
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {city.social.instagram.map((ig, index) => (
              <a
                key={index}
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  background: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#0A1F44',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: '1px solid rgba(131, 58, 180, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(131, 58, 180, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>
                  {ig.type === 'hashtag' ? `#${ig.value}` : ig.value}
                </span>
                <span style={{ marginLeft: 'auto', opacity: 0.5 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Culture Tab Content
  const CultureTab = () => (
    <div>
      <div style={{
        padding: '20px',
        background: '#F7FAFC',
        borderRadius: '12px',
        marginBottom: '20px',
        border: '1px solid #E2E8F0'
      }}>
        <h3 style={{
          fontSize: '18px',
          marginBottom: '12px',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44',
          fontWeight: '600'
        }}>
          Culture & Heritage
        </h3>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#4a5568',
          margin: '0',
          fontWeight: '400'
        }}>
          {city.culture.description}
        </p>
      </div>

      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E2E8F0'
      }}>
        <h4 style={{
          fontSize: '16px',
          marginBottom: '12px',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44',
          fontWeight: '600'
        }}>
          Traditions
        </h4>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#4a5568',
          margin: '0',
          fontWeight: '400'
        }}>
          {city.culture.traditions}
        </p>
      </div>
    </div>
  );

  // Landmarks Tab Content
  const LandmarksTab = () => (
    <div>
      <div style={{
        padding: '20px',
        background: '#F7FAFC',
        borderRadius: '12px',
        border: '1px solid #E2E8F0'
      }}>
        <h3 style={{
          fontSize: '18px',
          marginBottom: '15px',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44',
          fontWeight: '600'
        }}>
          Notable Landmarks
        </h3>
        <ul style={{
          margin: '0',
          paddingLeft: '20px',
          fontSize: '15px',
          color: '#4a5568',
          lineHeight: '1.8'
        }}>
          {city.culture.landmarks.map((landmark, index) => (
            <li key={index} style={{ marginBottom: '10px', fontWeight: '400' }}>
              {landmark}
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '16px',
        background: '#FFFBEB',
        borderRadius: '8px',
        border: '1px solid #FDE68A',
        fontSize: '14px',
        color: '#92400E',
        lineHeight: '1.6'
      }}>
        <strong>Want to add more landmarks?</strong><br />
        Click "Contribute Information" below to share your knowledge about historical sites and landmarks.
      </div>
    </div>
  );

  // Food Tab Content
  const FoodTab = () => (
    <div>
      <div style={{
        padding: '20px',
        background: '#F7FAFC',
        borderRadius: '12px',
        marginBottom: '20px',
        border: '1px solid #E2E8F0'
      }}>
        <h3 style={{
          fontSize: '18px',
          marginBottom: '15px',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44',
          fontWeight: '600'
        }}>
          Traditional Jewish Cuisine
        </h3>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#4a5568',
          margin: '0 0 15px 0',
          fontWeight: '400'
        }}>
          Jewish communities in {city.name} developed unique culinary traditions that blend local flavors with Jewish dietary laws and customs.
        </p>
        <p style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#4a5568',
          margin: '0',
          fontStyle: 'italic'
        }}>
          Traditional dishes, recipes, and food customs for this community will be added soon through community contributions.
        </p>
      </div>

      <div style={{
        padding: '16px',
        background: '#EFF6FF',
        borderRadius: '8px',
        border: '1px solid #BFDBFE',
        fontSize: '14px',
        color: '#1E40AF',
        lineHeight: '1.6'
      }}>
        <strong>📖 Share Your Family Recipes</strong><br />
        Have traditional recipes or food memories from {city.name}? Click "Contribute Information" to share them with the community!
      </div>
    </div>
  );

  // Music Tab Content
  const MusicTab = () => (
    <div>
      <div style={{
        padding: '20px',
        background: '#F7FAFC',
        borderRadius: '12px',
        marginBottom: '20px',
        border: '1px solid #E2E8F0'
      }}>
        <h3 style={{
          fontSize: '18px',
          marginBottom: '15px',
          fontFamily: "'Playfair Display', serif",
          color: '#0A1F44',
          fontWeight: '600'
        }}>
          Musical Heritage
        </h3>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#4a5568',
          margin: '0 0 15px 0',
          fontWeight: '400'
        }}>
          Music played a central role in the Jewish community of {city.name}, from liturgical prayers to folk songs and celebrations.
        </p>
        <p style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#4a5568',
          margin: '0',
          fontStyle: 'italic'
        }}>
          Traditional songs, instruments, and musical traditions for this community will be added soon through community contributions.
        </p>
      </div>

      <div style={{
        padding: '16px',
        background: '#F0FDF4',
        borderRadius: '8px',
        border: '1px solid #BBF7D0',
        fontSize: '14px',
        color: '#166534',
        lineHeight: '1.6'
      }}>
        <strong>🎶 Preserve Musical Traditions</strong><br />
        Know traditional songs, prayers, or musical customs from {city.name}? Share recordings, lyrics, or stories through our contribution form!
      </div>
    </div>
  );

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '420px',
      maxHeight: '85vh',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(10, 31, 68, 0.15)',
      border: '1px solid #E2E8F0',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000
    }}>
      {/* Header */}
      <div style={{ padding: '24px 30px 0 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
          <div>
            <h2 style={{
              margin: '0 0 8px 0',
              fontSize: '32px',
              fontFamily: "'Playfair Display', serif",
              color: '#0A1F44',
              fontWeight: '700',
              lineHeight: '1.2'
            }}>
              {city.name}
            </h2>
            <p style={{ margin: '0', fontSize: '16px', color: '#4a5568', fontWeight: '500' }}>
              {city.country}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F7FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#4a5568',
              padding: '0',
              lineHeight: '1',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#E2E8F0';
              e.target.style.color = '#0A1F44';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#F7FAFC';
              e.target.style.color = '#4a5568';
            }}
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '2px solid #E2E8F0',
          marginBottom: '20px',
          overflowX: 'auto'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 16px',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #0A1F44' : '2px solid transparent',
                marginBottom: '-2px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? '700' : '500',
                color: activeTab === tab.id ? '#0A1F44' : '#4a5568',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#0A1F44';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#4a5568';
                }
              }}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '0 30px 30px 30px'
      }}>
        {activeTab === 'population' && <PopulationTab />}
        {activeTab === 'culture' && <CultureTab />}
        {activeTab === 'landmarks' && <LandmarksTab />}
        {activeTab === 'food' && <FoodTab />}
        {activeTab === 'music' && <MusicTab />}

        {/* Contribute Button */}
        <button
          onClick={onShowContributeForm}
          style={{
            marginTop: '25px',
            width: '100%',
            padding: '16px 24px',
            background: '#0A1F44',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(10, 31, 68, 0.15)',
            transition: 'all 0.2s ease',
            fontFamily: "'Montserrat', sans-serif"
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#1E3A5F';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#0A1F44';
          }}
        >
          Contribute Information
        </button>
      </div>
    </div>
  );
}

export default CityInfoPanel;
