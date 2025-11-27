import React, { useState } from 'react';
import { topics, findMatchingTopics, findCommunityOrCity } from '../data/topicDefinitions';
import './Chatbot.css';

function Chatbot({ onTopicSelect, citiesData, migrationRoutes, hasActiveSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // First, try to match predefined topics
    const matchedTopics = findMatchingTopics(query);

    if (matchedTopics.length > 0) {
      const topicKey = matchedTopics[0];
      const topic = topics[topicKey];

      // Notify parent component to update map
      onTopicSelect(topic, topicKey);
      setQuery('');
      return;
    }

    // If no topic match, try to find specific communities or cities
    const communityResult = findCommunityOrCity(query, citiesData, migrationRoutes);

    if (communityResult) {
      // Create a custom topic from the community/city search
      const customTopic = {
        title: communityResult.description,
        description: communityResult.description,
        cities: communityResult.cities.map(c => c.name),
        timeRange: [1850, 2025],
        focusYear: 2025,
        migrationTheme: null,
        customMigrations: communityResult.migrations,
        narrative: `Showing ${communityResult.cities.length} cities and ${communityResult.migrations.length} migration routes.`
      };

      onTopicSelect(customTopic, 'custom');
      setQuery('');
      return;
    }

    // If nothing found
    alert("I couldn't find that. Try: Syrian Jews, Iraqi Jews, Holocaust, Soviet Jewry, or any city/country name.");
    setQuery('');
  };

  const handleClear = () => {
    setQuery('');
    onTopicSelect(null, null);
  };

  return (
    <div className="chatbot-container">
      <form onSubmit={handleSubmit} className="chatbot-input-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me about Jewish history..."
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-submit">
          🔍
        </button>
        {hasActiveSearch && (
          <button
            type="button"
            onClick={handleClear}
            className="chatbot-clear"
          >
            ✕ Clear
          </button>
        )}
      </form>
    </div>
  );
}

export default Chatbot;
