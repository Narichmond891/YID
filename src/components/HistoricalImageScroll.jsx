import React from 'react';

function HistoricalImageScroll() {
  // Local historical images - stored in public/historical/ folder
  const historicalImages = [
    '/historical/1.jpg',
    '/historical/2.jpg',
    '/historical/3.jpg',
    '/historical/4.jpg',
    '/historical/5.jpg',
    '/historical/6.jpg',
    '/historical/7.jpg',
    '/historical/8.jpg',
    '/historical/9.jpg',
    '/historical/10.jpg',
    '/historical/11.jpg',
    '/historical/12.jpg'
  ];

  // Triple the array for seamless infinite scroll
  const tripledImages = [...historicalImages, ...historicalImages, ...historicalImages];

  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      height: '120px',
      background: '#F7FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        animation: 'scroll 90s linear infinite',
        height: '100%',
        willChange: 'transform'
      }}>
        {tripledImages.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              height: '120px',
              width: '180px',
              background: '#E2E8F0'
            }}
          >
            <img
              src={imageUrl}
              alt="Historical Jewish diaspora"
              referrerPolicy="no-referrer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                console.error('Image failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </div>
  );
}

export default HistoricalImageScroll;
