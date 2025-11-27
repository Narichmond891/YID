# Jewish Cultural Heritage Map

An interactive world map exploring Jewish populations and cultural heritage across major cities from 1900 to the present day.

## Features

- **Interactive World Map**: Click on cities to learn about their Jewish communities
- **Historical Timeline**: Travel back in time from 1900 to 2025 to see population changes
- **City Information Panels**: Detailed cultural information, landmarks, and traditions for each city
- **Population Visualization**: Dynamic charts showing population trends over time
- **Community Contributions**: Share your own stories and knowledge (stored locally for this prototype)
- **Responsive Design**: Works on desktop and mobile devices

## Technology Stack

- **React** - Frontend framework
- **Leaflet** - Interactive mapping library
- **React-Leaflet** - React components for Leaflet
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd jewish-cultural-map
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

### Exploring the Map

1. **View Cities**: The map displays markers for major cities with Jewish populations. Marker size and color indicate population size.

2. **Timeline**: Use the slider below the map to select different years (1900-2025). The map updates to show populations for that year.

3. **City Details**: Click on any marker to open a detailed panel showing:
   - Current population for the selected year
   - Population chart across all time periods
   - Cultural information and heritage
   - Notable landmarks
   - Traditions and customs

4. **Zoom and Pan**: Use your mouse or touch gestures to navigate the map

### Contributing Information

1. Click on any city marker to open its information panel
2. Click the "Contribute Information" button
3. Fill out the contribution form with your story or information
4. Contributions are saved locally in your browser

## Data

The prototype includes sample data for 15 major cities:
- New York City
- Jerusalem
- Tel Aviv
- Paris
- London
- Buenos Aires
- Moscow
- Warsaw
- Berlin
- Los Angeles
- Toronto
- Miami
- São Paulo
- Melbourne
- Casablanca

Data spans seven time periods: 1900, 1920, 1940, 1960, 1980, 2000, and 2025.

## Future Enhancements

For a production version, consider:
- Backend database for storing contributions
- User authentication
- More cities and time periods
- Historical photos and documents
- Integration with historical archives
- Export functionality
- Search and filter capabilities
- Multiple language support
- Community moderation for contributions

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service.

## License

This is a prototype project for educational and cultural purposes.

## Acknowledgments

Built with care to honor and preserve Jewish cultural heritage around the world.
