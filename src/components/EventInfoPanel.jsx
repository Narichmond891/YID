import React from 'react';

function EventInfoPanel({ event, onClose }) {
  if (!event) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '480px',
      maxHeight: '85vh',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(139, 0, 0, 0.35)',
      overflow: 'auto',
      zIndex: 1000,
      border: '2px solid rgba(139, 0, 0, 0.3)'
    }}>
      <div style={{ padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: event.type === 'holocaust'
                ? 'linear-gradient(135deg, #8B0000 0%, #A00000 100%)'
                : 'linear-gradient(135deg, #DC143C 0%, #FF1744 100%)',
              color: 'white',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)'
            }}>
              {event.type === 'holocaust' ? 'Holocaust' : 'Pogrom'}
            </div>
            <h2 style={{
              margin: '0 0 8px 0',
              fontSize: '32px',
              fontFamily: "'Playfair Display', serif",
              color: '#8B0000',
              fontWeight: '700',
              lineHeight: '1.2'
            }}>
              {event.name}
            </h2>
            <p style={{
              margin: '0',
              fontSize: '16px',
              color: '#4a5568',
              fontWeight: '600'
            }}>
              {event.startYear === event.endYear
                ? event.startYear
                : `${event.startYear}-${event.endYear}`}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(139, 0, 0, 0.1)',
              border: '1px solid rgba(139, 0, 0, 0.3)',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#8B0000',
              padding: '0',
              lineHeight: '1',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              marginLeft: '15px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(139, 0, 0, 0.2)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(139, 0, 0, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>
        </div>

        <div style={{
          padding: '20px',
          background: 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)',
          borderRadius: '12px',
          marginBottom: '25px',
          borderLeft: '4px solid #8B0000',
          boxShadow: '0 2px 8px rgba(139, 0, 0, 0.1)'
        }}>
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '12px',
            color: '#8B0000',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: '700'
          }}>
            Casualties
          </h3>
          <p style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#333',
            lineHeight: '1.5'
          }}>
            {event.casualties}
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h3 style={{
            fontSize: '20px',
            marginBottom: '15px',
            fontFamily: "'Playfair Display', serif",
            color: '#8B0000',
            fontWeight: '600'
          }}>
            What Happened
          </h3>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#4a5568',
            margin: '0',
            fontWeight: '400'
          }}>
            {event.description}
          </p>
        </div>

        {event.affectedCities && event.affectedCities.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '15px',
              fontFamily: "'Playfair Display', serif",
              color: '#8B0000',
              fontWeight: '600'
            }}>
              Affected Cities on This Map
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {event.affectedCities.map((city, index) => (
                <span
                  key={index}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(139, 0, 0, 0.08)',
                    border: '1px solid rgba(139, 0, 0, 0.2)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#8B0000',
                    fontWeight: '500'
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{
          marginTop: '25px',
          padding: '20px',
          background: 'rgba(250, 248, 243, 0.8)',
          borderRadius: '12px',
          border: '1px solid rgba(139, 0, 0, 0.15)',
          fontSize: '14px',
          lineHeight: '1.7'
        }}>
          <p style={{
            margin: '0 0 12px 0',
            fontWeight: '700',
            fontSize: '15px',
            fontFamily: "'Playfair Display', serif",
            color: '#8B0000'
          }}>
            Why We Remember
          </p>
          <p style={{
            margin: '0',
            color: '#4a5568',
            fontWeight: '400'
          }}>
            These tragic events are marked on this map to honor the victims and ensure their stories are never forgotten. Understanding this history is essential to preventing such atrocities in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventInfoPanel;
