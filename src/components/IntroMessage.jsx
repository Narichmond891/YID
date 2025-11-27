import React, { useState, useEffect } from 'react';

function IntroMessage({ onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const fullText = `Israel's destruction of Gaza and the persistent conflation of Judaism with the state of Israel have opened a deep schism within Jewish identity.

While some Jews have grown more unified in their support for Israel, others have agonized over the brutality inflicted upon Palestinians and felt immense strain in their Jewish identity.

Many Jews have begun to grapple with a fundamental question in one form or another: Must the Jewish nation—the Jewish people—rely on a political state to survive?

Youth in the Diaspora (YID) offers an alternative to the dominant narrative of Jewish political power. It presents an interactive and evolving repository of Jewish life in the diaspora throughout millennia of Jewish history. It highlights the contributions of Jews to their societies, their communities, and to Judaism itself.

YID aims to connect young Jews who seek to celebrate their identity and history with others who share similar ethical principles.`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Faster typing speed (30ms per character)

      return () => clearTimeout(timeout);
    } else {
      // After text is complete, wait 17 seconds then fade out
      const fadeTimeout = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000); // Wait for fade animation
      }, 17000);

      return () => clearTimeout(fadeTimeout);
    }
  }, [currentIndex, fullText, onComplete]);

  if (!isVisible && currentIndex >= fullText.length) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out',
        padding: '20px',
        overflow: 'hidden'
      }}
    >
      {/* Scrolling background image - ADD YOUR IMAGE URL BELOW */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200%',
          backgroundImage: 'url(/gaza-destruction.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          animation: 'scrollDown 60s linear infinite',
          filter: 'grayscale(50%)'
        }}
      />
      <div
        style={{
          maxWidth: '700px',
          textAlign: 'center',
          color: '#FFD700',
          fontSize: '18px',
          lineHeight: '1.6',
          fontFamily: 'Georgia, serif',
          textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
          whiteSpace: 'pre-line'
        }}
      >
        {displayedText}
        {currentIndex < fullText.length && (
          <span
            style={{
              animation: 'blink 1s infinite'
            }}
          >
            |
          </span>
        )}
      </div>

      {/* Skip button */}
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }}
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          padding: '10px 20px',
          backgroundColor: 'rgba(255, 215, 0, 0.2)',
          color: '#FFD700',
          border: '2px solid #FFD700',
          borderRadius: '6px',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: 'Georgia, serif',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
        }}
      >
        Skip Intro
      </button>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
      `}</style>
    </div>
  );
}

export default IntroMessage;
