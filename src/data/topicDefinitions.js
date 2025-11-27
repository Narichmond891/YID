// Topic definitions for chatbot queries
export const topics = {
  "soviet jewry": {
    title: "Soviet Jewish History",
    description: "The story of Jewish life under Soviet rule and the mass emigration waves of the 1970s-1990s.",
    cities: ["Moscow", "St. Petersburg", "Kiev", "Minsk", "Odessa", "Vilnius", "Lviv"],
    timeRange: [1920, 2000],
    focusYear: 1990,
    migrationTheme: "soviet-emigration",
    narrative: "Soviet Jewry faced decades of religious oppression and cultural suppression. The Refusenik movement of the 1970s fought for the right to emigrate. After the fall of the USSR in 1991, over 1 million Soviet Jews emigrated to Israel and the United States.",
    keyEvents: [
      { year: 1917, description: "Russian Revolution begins" },
      { year: 1948, description: "Soviet anti-cosmopolitan campaign" },
      { year: 1970, description: "Beginning of Refusenik movement" },
      { year: 1991, description: "Fall of Soviet Union - mass emigration begins" }
    ]
  },

  "holocaust": {
    title: "The Holocaust",
    description: "The systematic genocide of 6 million Jews during World War II and its aftermath.",
    cities: ["Warsaw", "Budapest", "Prague", "Vienna", "Berlin", "Amsterdam", "Thessaloniki", "Vilnius", "Krakow", "Odessa"],
    timeRange: [1933, 1945],
    focusYear: 1942,
    migrationTheme: "holocaust-flight",
    narrative: "Between 1933-1945, Nazi Germany and its collaborators murdered six million Jews. Communities that had flourished for centuries were decimated. Warsaw's 380,000 Jews were reduced to nearly zero. Thessaloniki lost 96% of its Jewish population.",
    keyEvents: [
      { year: 1933, description: "Hitler comes to power" },
      { year: 1938, description: "Kristallnacht pogrom" },
      { year: 1941, description: "Beginning of systematic extermination" },
      { year: 1945, description: "Liberation of concentration camps" }
    ]
  },

  "israel founding": {
    title: "Founding of Israel",
    description: "The establishment of the State of Israel in 1948 and subsequent waves of immigration.",
    cities: ["Tel Aviv", "Jerusalem", "Haifa", "Rishon LeZion", "Petah Tikva"],
    timeRange: [1880, 1960],
    focusYear: 1948,
    migrationTheme: "holocaust-aftermath",
    narrative: "The founding of Israel in 1948 fulfilled the Zionist dream of a Jewish homeland. Massive immigration waves brought Holocaust survivors from Europe and Jews from Arab countries. Tel Aviv grew from 15,000 to 350,000 between 1920-2000.",
    keyEvents: [
      { year: 1882, description: "First Aliyah begins" },
      { year: 1917, description: "Balfour Declaration" },
      { year: 1948, description: "State of Israel declared" },
      { year: 1950, description: "Law of Return passed" }
    ]
  },

  "sephardic jews": {
    title: "Sephardic Jewish History",
    description: "The story of Jews from Spain, Portugal, North Africa, and the Middle East.",
    cities: ["Istanbul", "Thessaloniki", "Casablanca", "Baghdad", "Tehran", "Marseille", "Barcelona", "Madrid"],
    timeRange: [1492, 2025],
    focusYear: 1950,
    migrationTheme: "sephardic-migration",
    narrative: "After the 1492 Spanish Expulsion, Sephardic Jews spread across the Ottoman Empire, North Africa, and the Mediterranean. In the 20th century, most Jews from Arab countries emigrated to Israel and France, especially after 1948.",
    keyEvents: [
      { year: 1492, description: "Spanish Inquisition - Jews expelled" },
      { year: 1496, description: "Portuguese expulsion" },
      { year: 1948, description: "Mass exodus from Arab countries begins" },
      { year: 1960, description: "Moroccan Jews to France and Israel" }
    ]
  },

  "american jewry": {
    title: "American Jewish Immigration",
    description: "The growth of Jewish communities in the United States from the 1800s to today.",
    cities: ["New York City", "Los Angeles", "Miami", "Chicago", "Philadelphia", "Boston", "San Francisco"],
    timeRange: [1850, 2025],
    focusYear: 1920,
    migrationTheme: "latin-america-immigration",
    narrative: "American Jewry grew from 15,000 in 1840 to over 6 million today. Massive waves came from Eastern Europe (1880-1924), fleeing pogroms and persecution. New York became the largest Jewish city in the world.",
    keyEvents: [
      { year: 1654, description: "First Jews arrive in New Amsterdam" },
      { year: 1880, description: "Beginning of mass Eastern European immigration" },
      { year: 1924, description: "Immigration Act restricts entry" },
      { year: 1945, description: "Post-Holocaust immigration" }
    ]
  },

  "latin america": {
    title: "Latin American Jewish Communities",
    description: "Jewish settlement and growth in South and Central America.",
    cities: ["Buenos Aires", "São Paulo", "Rio de Janeiro", "Mexico City", "Santiago", "Montevideo", "Caracas"],
    timeRange: [1880, 2025],
    focusYear: 1960,
    migrationTheme: "latin-america-immigration",
    narrative: "Over 300,000 Jews settled in Latin America between 1880-1940, primarily from Eastern Europe and the Ottoman Empire. Buenos Aires became home to one of the world's largest Jewish communities.",
    keyEvents: [
      { year: 1889, description: "Baron de Hirsch establishes Argentine colonies" },
      { year: 1920, description: "Peak of immigration wave" },
      { year: 1960, description: "Communities at their height" },
      { year: 2000, description: "Economic crises cause emigration" }
    ]
  },

  "russian jewish history": {
    title: "Russian Jewish History",
    description: "Jews in the Russian Empire and modern Russia.",
    cities: ["Moscow", "St. Petersburg", "Odessa", "Kiev", "Minsk", "Vilnius"],
    timeRange: [1850, 2025],
    focusYear: 1900,
    migrationTheme: "soviet-emigration",
    narrative: "The Pale of Settlement confined most Russian Jews until 1917. Pogroms in the 1880s-1900s drove millions to America. Under Soviet rule, Jewish cultural and religious life was suppressed, leading to mass emigration after 1970.",
    keyEvents: [
      { year: 1791, description: "Pale of Settlement established" },
      { year: 1881, description: "Pogroms begin after Alexander II assassination" },
      { year: 1917, description: "Russian Revolution - Pale abolished" },
      { year: 1970, description: "Emigration begins" }
    ]
  },

  "european jewry": {
    title: "European Jewish Centers",
    description: "Historic Jewish communities across Europe.",
    cities: ["Paris", "London", "Berlin", "Vienna", "Budapest", "Amsterdam", "Prague", "Warsaw"],
    timeRange: [1850, 2025],
    focusYear: 1900,
    migrationTheme: "holocaust-flight",
    narrative: "Europe was the center of world Jewry until WWII. Vienna, Berlin, and Warsaw were major cultural and intellectual hubs. The Holocaust devastated these communities, with only Paris and London maintaining large populations today.",
    keyEvents: [
      { year: 1870, description: "Emancipation in most Western European countries" },
      { year: 1894, description: "Dreyfus Affair in France" },
      { year: 1933, description: "Hitler's rise begins persecution" },
      { year: 1945, description: "Survivors rebuild communities" }
    ]
  }
};

// Keywords that map to topics
export const keywordMapping = {
  "soviet": ["soviet jewry", "russian jewish history"],
  "russia": ["soviet jewry", "russian jewish history"],
  "ussr": ["soviet jewry"],
  "refusenik": ["soviet jewry"],

  "holocaust": ["holocaust", "european jewry"],
  "shoah": ["holocaust"],
  "nazi": ["holocaust"],
  "wwii": ["holocaust"],
  "world war": ["holocaust"],

  "israel": ["israel founding"],
  "aliyah": ["israel founding"],
  "zion": ["israel founding"],
  "palestine": ["israel founding"],

  "sephardic": ["sephardic jews"],
  "sephardi": ["sephardic jews"],
  "ladino": ["sephardic jews"],
  "morocco": ["sephardic jews"],
  "spain": ["sephardic jews"],

  "america": ["american jewry"],
  "united states": ["american jewry"],
  "immigration": ["american jewry", "latin america"],

  "latin america": ["latin america"],
  "south america": ["latin america"],
  "argentina": ["latin america"],
  "brazil": ["latin america"],

  "europe": ["european jewry"],
  "paris": ["european jewry"],
  "london": ["european jewry"],
  "berlin": ["european jewry"]
};

// Helper function to find matching topics
export function findMatchingTopics(query) {
  const lowerQuery = query.toLowerCase();
  const matchedTopics = new Set();

  // Check direct topic match
  if (topics[lowerQuery]) {
    return [lowerQuery];
  }

  // Check keyword matches
  for (const [keyword, topicList] of Object.entries(keywordMapping)) {
    if (lowerQuery.includes(keyword)) {
      topicList.forEach(topic => matchedTopics.add(topic));
    }
  }

  return Array.from(matchedTopics);
}

// Helper to search for specific communities or cities
export function findCommunityOrCity(query, citiesData, migrationRoutes) {
  const lowerQuery = query.toLowerCase();

  // Search for city names
  const matchedCities = citiesData.filter(city =>
    city.name.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery)
  );

  // Search for specific community keywords
  const communityKeywords = {
    'syrian': { cities: ['Damascus', 'Aleppo'], country: 'Syria', migrations: ['Syrian'] },
    'iraqi': { cities: ['Baghdad'], country: 'Iraq', migrations: ['Iraqi'] },
    'yemeni': { cities: ['Aden'], country: 'Yemen', migrations: ['Yemeni', 'Magic Carpet'] },
    'ethiopian': { cities: ['Addis Ababa'], country: 'Ethiopia', migrations: ['Ethiopian', 'Moses', 'Solomon'] },
    'moroccan': { cities: ['Casablanca'], country: 'Morocco', migrations: ['Moroccan'] },
    'egyptian': { cities: ['Cairo', 'Alexandria'], country: 'Egypt', migrations: ['Egyptian'] },
    'persian': { cities: ['Tehran'], country: 'Iran', migrations: ['Iranian', 'Persian'] },
    'iranian': { cities: ['Tehran'], country: 'Iran', migrations: ['Iranian', 'Persian'] },
    'cuban': { cities: ['Havana'], country: 'Cuba', migrations: ['Cuban'] },
    'indian': { cities: ['Mumbai', 'Cochin'], country: 'India', migrations: ['Indian', 'Bene Israel', 'Cochin'] },
    'polish': { cities: ['Warsaw', 'Krakow'], country: 'Poland', migrations: ['Polish', 'Kielce'] },
    'german': { cities: ['Berlin', 'Munich', 'Frankfurt'], country: 'Germany', migrations: ['German', 'Nazi'] },
    'russian': { cities: ['Moscow', 'St. Petersburg', 'Odessa'], country: 'Russia', migrations: ['Soviet', 'Russian'] },
    'libyan': { cities: ['Tripoli'], country: 'Libya', migrations: ['Libyan'] },
    'french': { cities: ['Paris', 'Lyon', 'Marseille'], country: 'France', migrations: ['French'] },
    'american': { cities: ['New York City', 'Los Angeles', 'Miami'], country: 'United States', migrations: ['America'] },
    'argentinian': { cities: ['Buenos Aires'], country: 'Argentina', migrations: ['Argentina'] },
    'brazilian': { cities: ['São Paulo', 'Rio de Janeiro'], country: 'Brazil', migrations: ['Brazil'] },
    'israeli': { cities: ['Tel Aviv', 'Jerusalem', 'Haifa'], country: 'Israel Palestine', migrations: ['Aliyah', 'Israel'] },
    'ashkenazi': { cities: ['Warsaw', 'Berlin', 'Budapest', 'Vienna'], country: '', migrations: ['Eastern Europe', 'Ashkenazi'] },
    'sephardic': { cities: ['Istanbul', 'Thessaloniki', 'Casablanca'], country: '', migrations: ['Sephardic', 'North Africa'] }
  };

  // Check for community keywords - match any part of the query
  for (const [keyword, data] of Object.entries(communityKeywords)) {
    // Match if keyword appears anywhere in the query (e.g., "syrian" matches "syrian jews")
    const queryWords = lowerQuery.split(/\s+/);
    const hasKeyword = queryWords.some(word =>
      word.includes(keyword) || keyword.includes(word)
    );

    if (hasKeyword) {
      const cities = citiesData.filter(city =>
        data.cities.some(c => city.name.includes(c)) ||
        (data.country && city.country.toLowerCase().includes(data.country.toLowerCase()))
      );

      const migrations = migrationRoutes.filter(route =>
        data.migrations.some(m => route.name.toLowerCase().includes(m.toLowerCase()))
      );

      if (cities.length > 0 || migrations.length > 0) {
        return {
          type: 'community',
          keyword: keyword,
          cities: cities,
          migrations: migrations,
          description: `Showing ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Jewish communities and migration patterns`
        };
      }
    }
  }

  // If specific cities were found
  if (matchedCities.length > 0) {
    // Find migrations involving these cities
    const cityNames = matchedCities.map(c => c.name);
    const relatedMigrations = migrationRoutes.filter(route =>
      cityNames.some(name =>
        route.name.toLowerCase().includes(name.toLowerCase()) ||
        route.from.name.toLowerCase().includes(name.toLowerCase()) ||
        route.to.name.toLowerCase().includes(name.toLowerCase())
      )
    );

    return {
      type: 'city',
      cities: matchedCities,
      migrations: relatedMigrations,
      description: `Showing information about ${matchedCities.map(c => c.name).join(', ')}`
    };
  }

  return null;
}
