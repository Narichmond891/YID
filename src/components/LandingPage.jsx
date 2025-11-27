import React, { useState } from 'react';

function LandingPage({ onEnterMap }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A5F 50%, #2C5282 100%)',
        zIndex: 10000,
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          margin: '0 0 24px 0',
          fontSize: 'clamp(48px, 8vw, 72px)',
          fontWeight: '700',
          fontFamily: "'Playfair Display', serif",
          background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.5px',
          lineHeight: '1.1',
          maxWidth: '900px'
        }}>
          Youth in the Diaspora
        </h1>

        <p style={{
          margin: '0 0 48px 0',
          fontSize: 'clamp(18px, 3vw, 24px)',
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '0.3px',
          lineHeight: '1.6',
          maxWidth: '700px'
        }}>
          An interactive repository documenting Jewish diaspora communities throughout millennia of history
        </p>

        {/* Primary CTA */}
        <button
          onClick={onEnterMap}
          style={{
            padding: '20px 56px',
            fontSize: '18px',
            fontWeight: '700',
            fontFamily: "'Montserrat', sans-serif",
            background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
            color: '#0A1F44',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '24px'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.4)';
          }}
        >
          Explore the Map
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            padding: '0',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: "'Montserrat', sans-serif",
            background: 'transparent',
            color: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#D4AF37'}
          onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
        >
          {showDetails ? 'Hide Details' : 'Learn More'}
        </button>
      </section>

      {/* Details Section - Progressive Disclosure */}
      {showDetails && (
        <section style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* What is YID */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '48px',
            marginBottom: '40px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h2 style={{
              fontSize: '32px',
              color: '#D4AF37',
              marginBottom: '24px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: '600'
            }}>
              About This Project
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '0',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '300'
            }}>
              YID visualizes Jewish populations across major world cities from <strong style={{ color: '#F4E4C1' }}>1850 to the present day</strong>, demonstrating that Jewish identity has thrived in the diaspora for thousands of years.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}>
            {/* Feature 1 */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                color: '#D4AF37',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600'
              }}>
                Explore Cities
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)',
                margin: '0',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '300'
              }}>
                Click golden markers to discover unique Jewish heritage, cultural traditions, and contributions.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid rgba(220, 20, 60, 0.15)',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                color: '#FF1744',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600'
              }}>
                Historical Events
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)',
                margin: '0',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '300'
              }}>
                Red regions mark periods of persecution - reminders of resilience and the importance of preventing atrocities.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid rgba(65, 105, 225, 0.15)',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                color: '#4169E1',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600'
              }}>
                Migration Routes
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)',
                margin: '0',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '300'
              }}>
                Visualize major migration waves from Eastern Europe, North Africa, and the Soviet Union across centuries.
              </p>
            </div>
          </div>

          {/* How to Use */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '48px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h2 style={{
              fontSize: '28px',
              color: '#F4E4C1',
              marginBottom: '32px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: '600',
              textAlign: 'center'
            }}>
              How to Use
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px'
            }}>
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0A1F44',
                  marginBottom: '16px'
                }}>1</div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '0',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  Use the timeline slider to travel through 175 years of history
                </p>
              </div>

              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0A1F44',
                  marginBottom: '16px'
                }}>2</div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '0',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  Click city markers to explore detailed population data and culture
                </p>
              </div>

              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0A1F44',
                  marginBottom: '16px'
                }}>3</div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '0',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  Toggle migration routes to see movement patterns across time
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button
              onClick={onEnterMap}
              style={{
                padding: '20px 56px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: "'Montserrat', sans-serif",
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
                color: '#0A1F44',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1.5px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.4)';
              }}
            >
              Begin Exploring
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default LandingPage;
