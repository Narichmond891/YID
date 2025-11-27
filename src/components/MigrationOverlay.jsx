import React from 'react';
import { Polyline, Popup, CircleMarker } from 'react-leaflet';
import { getMigrationsForYear, getMigrationIntensity } from '../data/migrationData';

function MigrationOverlay({ selectedYear, showMigrations, customMigrations = null }) {
  if (!showMigrations) return null;

  // Use custom migrations if provided, otherwise use year-based migrations
  const activeMigrations = customMigrations || getMigrationsForYear(selectedYear);

  // Helper function to create a curved path between two points with offset
  const createCurvedPath = (from, to, offset = 0) => {
    const fromLat = from.lat;
    const fromLon = from.lon;
    const toLat = to.lat;
    const toLon = to.lon;

    // Calculate the control point for the curve
    const midLat = (fromLat + toLat) / 2;
    const midLon = (fromLon + toLon) / 2;

    // Offset the midpoint perpendicular to the line for curve
    const dx = toLon - fromLon;
    const dy = toLat - fromLat;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Adjust curve based on distance
    const curvature = Math.min(distance * 0.2, 15);

    const controlLat = midLat + (dx / distance) * curvature + offset;
    const controlLon = midLon - (dy / distance) * curvature + offset;

    // Generate points along the Bezier curve
    const points = [];
    const steps = 50;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const lat = (1 - t) * (1 - t) * fromLat + 2 * (1 - t) * t * controlLat + t * t * toLat;
      const lon = (1 - t) * (1 - t) * fromLon + 2 * (1 - t) * t * controlLon + t * t * toLon;
      points.push([lat, lon]);
    }

    return points;
  };

  // Create multiple fanned-out paths
  const createFannedPaths = (from, to, numLines = 5) => {
    const paths = [];
    const maxOffset = 3; // degrees offset for fanning

    for (let i = 0; i < numLines; i++) {
      const offset = ((i - Math.floor(numLines / 2)) / numLines) * maxOffset;
      paths.push(createCurvedPath(from, to, offset));
    }

    return paths;
  };

  return (
    <>
      {activeMigrations.map((route) => {
        const paths = createFannedPaths(route.from, route.to, 5);
        const intensity = getMigrationIntensity(route, selectedYear);
        const baseOpacity = 0.2 + (intensity * 0.4);
        const baseWeight = 1.5 + (Math.log10(route.volume / 1000) * 0.3);

        return (
          <React.Fragment key={route.id}>
            {/* Fanned-out blue trajectories */}
            {paths.map((path, pathIdx) => {
              // Center line is more opaque, outer lines fade
              const distanceFromCenter = Math.abs(pathIdx - 2) / 2;
              const pathOpacity = baseOpacity * (1 - distanceFromCenter * 0.4);
              const pathWeight = baseWeight * (1 - distanceFromCenter * 0.3);

              return (
                <Polyline
                  key={`path-${route.id}-${pathIdx}`}
                  positions={path}
                  pathOptions={{
                    color: '#4169E1',
                    weight: pathWeight,
                    opacity: pathOpacity,
                    lineCap: 'round',
                    lineJoin: 'round'
                  }}
                >
                  {pathIdx === 2 && ( // Only show popup on center line
                    <Popup>
                      <div style={{ minWidth: '200px' }}>
                        <h3 style={{
                          margin: '0 0 8px 0',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: '#4169E1'
                        }}>
                          {route.name}
                        </h3>
                        <p style={{ margin: '4px 0', fontSize: '12px' }}>
                          <strong>From:</strong> {route.from.name}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: '12px' }}>
                          <strong>To:</strong> {route.to.name}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: '12px' }}>
                          <strong>Period:</strong> {route.startYear}-{route.endYear}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: '12px' }}>
                          <strong>Volume:</strong> ~{route.volume.toLocaleString()} people
                        </p>
                        <p style={{ margin: '8px 0 0 0', fontSize: '11px', lineHeight: '1.4' }}>
                          {route.description}
                        </p>
                      </div>
                    </Popup>
                  )}
                </Polyline>
              );
            })}

            {/* Origin marker */}
            <CircleMarker
              center={[route.from.lat, route.from.lon]}
              radius={5}
              pathOptions={{
                fillColor: '#4169E1',
                color: '#fff',
                weight: 2,
                opacity: baseOpacity + 0.3,
                fillOpacity: baseOpacity + 0.3
              }}
            />

            {/* Destination marker */}
            <CircleMarker
              center={[route.to.lat, route.to.lon]}
              radius={7}
              pathOptions={{
                fillColor: '#4169E1',
                color: '#fff',
                weight: 2,
                opacity: baseOpacity + 0.4,
                fillOpacity: (baseOpacity + 0.4) * 0.8
              }}
            />

            {/* Animated flow markers along center path */}
            {[0.2, 0.4, 0.6, 0.8].map((position, idx) => {
              const centerPath = paths[2]; // Use center path
              const pointIndex = Math.floor(centerPath.length * position);
              const point = centerPath[pointIndex];
              const flowOpacity = baseOpacity * intensity * (0.5 + Math.sin((selectedYear - route.startYear + idx) * 0.5) * 0.4);

              return point && flowOpacity > 0.1 ? (
                <CircleMarker
                  key={`flow-${route.id}-${idx}`}
                  center={point}
                  radius={4}
                  pathOptions={{
                    fillColor: '#4169E1',
                    color: '#4169E1',
                    weight: 0,
                    opacity: 0,
                    fillOpacity: flowOpacity
                  }}
                />
              ) : null;
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default MigrationOverlay;
