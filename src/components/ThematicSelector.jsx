import React, { useState, useRef, useEffect } from 'react';
import { topics } from '../data/topicDefinitions';

function ThematicSelector({ onTopicSelect, hasActiveTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions = [
    { key: 'soviet jewry', label: 'Soviet Jewry', description: 'Life under Soviet rule and mass emigration' },
    { key: 'holocaust', label: 'Holocaust', description: 'WWII genocide and its aftermath' },
    { key: 'sephardic jews', label: 'Sephardic Jews', description: 'Spain, North Africa, and Middle East' },
    { key: 'american jewry', label: 'American Jewry', description: 'U.S. immigration and growth' },
    { key: 'latin america', label: 'Latin American Jews', description: 'Communities in South and Central America' },
    { key: 'russian jewish history', label: 'Russian Jewish History', description: 'Imperial Russia and modern Russia' },
    { key: 'european jewry', label: 'European Centers', description: 'Historic communities across Europe' },
    { key: 'israel founding', label: 'Founding of Israel', description: '1948 and immigration waves' }
  ];

  const handleThemeSelect = (themeKey, label) => {
    const topic = topics[themeKey];
    if (!topic) {
      console.error('Topic not found:', themeKey);
      return;
    }
    setSelectedTheme(label);
    onTopicSelect(topic, themeKey);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedTheme(null);
    onTopicSelect(null, null);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '12px 20px',
          background: hasActiveTheme ? '#0A1F44' : 'rgba(255, 255, 255, 0.95)',
          color: hasActiveTheme ? '#FFFFFF' : '#0A1F44',
          border: '1px solid rgba(10, 31, 68, 0.2)',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(10, 31, 68, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          fontFamily: "'Montserrat', sans-serif",
          backdropFilter: 'blur(10px)',
          minWidth: '200px',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          if (hasActiveTheme) {
            e.currentTarget.style.background = '#1E3A5F';
          } else {
            e.currentTarget.style.background = '#F7FAFC';
          }
        }}
        onMouseLeave={(e) => {
          if (hasActiveTheme) {
            e.currentTarget.style.background = '#0A1F44';
          } else {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
          }
        }}
      >
        <span style={{ flex: 1, textAlign: 'left' }}>
          {selectedTheme || 'Thematic Selections'}
        </span>
        <span style={{ fontSize: '12px' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '8px',
            background: 'rgba(255, 255, 255, 0.98)',
            border: '1px solid rgba(10, 31, 68, 0.2)',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(10, 31, 68, 0.2)',
            minWidth: '320px',
            maxHeight: '500px',
            overflowY: 'auto',
            zIndex: 10000,
            backdropFilter: 'blur(10px)'
          }}
        >
          {themeOptions.map((option) => (
            <div
              key={option.key}
              onClick={() => handleThemeSelect(option.key, option.label)}
              style={{
                padding: '14px 16px',
                cursor: 'pointer',
                borderBottom: '1px solid #E2E8F0',
                transition: 'all 0.2s ease',
                background: selectedTheme === option.label ? '#F7FAFC' : 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F7FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = selectedTheme === option.label ? '#F7FAFC' : 'transparent';
              }}
            >
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0A1F44',
                fontFamily: "'Montserrat', sans-serif",
                marginBottom: '4px'
              }}>
                {option.label}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#4a5568',
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.4'
              }}>
                {option.description}
              </div>
            </div>
          ))}

          {/* Clear Selection Option */}
          {hasActiveTheme && (
            <div
              onClick={handleClear}
              style={{
                padding: '14px 16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: '#FFF5F5',
                fontWeight: '600',
                color: '#DC2626',
                fontSize: '14px',
                fontFamily: "'Montserrat', sans-serif",
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FEE2E2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFF5F5';
              }}
            >
              ✕ Clear Selection
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ThematicSelector;
