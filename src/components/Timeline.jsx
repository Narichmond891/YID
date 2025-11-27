import React from 'react';

function Timeline({ years, selectedYear, onYearChange }) {
  const minYear = years[0];
  const maxYear = years[years.length - 1];

  const handleSliderChange = (e) => {
    const year = parseInt(e.target.value);
    onYearChange(year);
  };

  // Key years to show as labels
  const labelYears = [1850, 1900, 1920, 1940, 1960, 1980, 2000, 2025];

  return (
    <div style={{
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(10, 31, 68, 0.15)',
      border: '1px solid rgba(10, 31, 68, 0.1)',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        textAlign: 'center',
        fontFamily: "'Montserrat', sans-serif",
        color: '#0A1F44',
        fontWeight: '700',
        letterSpacing: '0.5px'
      }}>
        {selectedYear}
      </h3>

      <div style={{ position: 'relative', padding: '0 6px' }}>
        {/* Progress bar track */}
        <div style={{
          position: 'absolute',
          left: '6px',
          right: '6px',
          top: '0',
          height: '4px',
          borderRadius: '2px',
          backgroundColor: '#E2E8F0',
          overflow: 'hidden',
          pointerEvents: 'none',
          border: '1px solid rgba(10, 31, 68, 0.1)'
        }}>
          <div style={{
            height: '100%',
            width: `${((selectedYear - minYear) / (maxYear - minYear)) * 100}%`,
            background: '#0A1F44',
            transition: 'width 0.1s ease'
          }} />
        </div>

        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={selectedYear}
          onChange={handleSliderChange}
          step="1"
          className="timeline-slider"
          style={{
            width: '100%',
            height: '4px',
            borderRadius: '2px',
            outline: 'none',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            background: 'transparent',
            position: 'relative',
            zIndex: 1
          }}
        />

        <div style={{
          position: 'relative',
          marginTop: '8px',
          fontSize: '10px',
          fontWeight: '600',
          height: '16px'
        }}>
          {labelYears.map((year) => {
            const position = ((year - minYear) / (maxYear - minYear)) * 100;
            return (
              <span
                key={year}
                style={{
                  position: 'absolute',
                  left: `${position}%`,
                  transform: 'translateX(-50%)',
                  fontWeight: year === selectedYear ? '700' : '500',
                  color: year === selectedYear ? '#0A1F44' : '#4a5568',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: year === selectedYear ? 'rgba(10, 31, 68, 0.1)' : 'transparent',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Montserrat', sans-serif"
                }}
                onClick={() => onYearChange(year)}
              >
                {year}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
