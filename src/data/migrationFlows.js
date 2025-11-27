// Migration flows between cities over different historical periods
export const migrationFlows = [
  // Soviet Jewish Emigration Wave (1970s-2000s)
  {
    id: 1,
    name: "Soviet Jewish Emigration to US",
    from: "Moscow",
    to: "New York City",
    fromCoords: [55.7558, 37.6173],
    toCoords: [40.7128, -74.0060],
    period: [1970, 2000],
    volume: 250000,
    theme: "soviet-emigration",
    description: "Major wave of Soviet Jewish emigration during Cold War"
  },
  {
    id: 2,
    name: "Soviet Jews to Israel",
    from: "Moscow",
    to: "Tel Aviv",
    fromCoords: [55.7558, 37.6173],
    toCoords: [32.0853, 34.7818],
    period: [1990, 2000],
    volume: 500000,
    theme: "soviet-emigration",
    description: "Massive aliyah after fall of Soviet Union"
  },
  {
    id: 3,
    name: "Ukrainian Jews to Israel",
    from: "Kiev",
    to: "Tel Aviv",
    fromCoords: [50.4501, 30.5234],
    toCoords: [32.0853, 34.7818],
    period: [1990, 2025],
    volume: 300000,
    theme: "soviet-emigration",
    description: "Ongoing emigration from Ukraine"
  },
  {
    id: 4,
    name: "Odessa to Brighton Beach",
    from: "Odessa",
    to: "New York City",
    fromCoords: [46.4825, 30.7233],
    toCoords: [40.7128, -74.0060],
    period: [1975, 2000],
    volume: 100000,
    theme: "soviet-emigration",
    description: "Odessa Jews creating Little Odessa in Brooklyn"
  },

  // Holocaust Survivors & Post-WWII
  {
    id: 5,
    name: "Holocaust Survivors to Israel",
    from: "Warsaw",
    to: "Tel Aviv",
    fromCoords: [52.2297, 21.0122],
    toCoords: [32.0853, 34.7818],
    period: [1945, 1950],
    volume: 50000,
    theme: "holocaust-aftermath",
    description: "Survivors establishing new lives in Israel"
  },
  {
    id: 6,
    name: "Hungarian Jews to US",
    from: "Budapest",
    to: "New York City",
    fromCoords: [47.4979, 19.0402],
    toCoords: [40.7128, -74.0060],
    period: [1945, 1960],
    volume: 80000,
    theme: "holocaust-aftermath",
    description: "Post-war emigration from Hungary"
  },
  {
    id: 7,
    name: "German Jews to US",
    from: "Berlin",
    to: "New York City",
    fromCoords: [52.5200, 13.4050],
    toCoords: [40.7128, -74.0060],
    period: [1933, 1941],
    volume: 150000,
    theme: "holocaust-flight",
    description: "Fleeing Nazi persecution"
  },

  // Sephardic Migrations
  {
    id: 8,
    name: "North African Jews to France",
    from: "Casablanca",
    to: "Paris",
    fromCoords: [33.5731, -7.5898],
    toCoords: [48.8566, 2.3522],
    period: [1950, 1970],
    volume: 200000,
    theme: "sephardic-migration",
    description: "Moroccan Jews moving to France after independence"
  },
  {
    id: 9,
    name: "Iraqi Jews to Israel",
    from: "Istanbul",
    to: "Tel Aviv",
    fromCoords: [41.0082, 28.9784],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1952],
    volume: 120000,
    theme: "sephardic-migration",
    description: "Operation Ezra and Nehemiah"
  },
  {
    id: 10,
    name: "Greek Jews Post-WWII",
    from: "Thessaloniki",
    to: "Tel Aviv",
    fromCoords: [40.6401, 22.9444],
    toCoords: [32.0853, 34.7818],
    period: [1945, 1950],
    volume: 2000,
    theme: "holocaust-aftermath",
    description: "Thessaloniki survivors to Israel"
  },

  // Latin American Waves
  {
    id: 11,
    name: "Eastern European to Argentina",
    from: "Odessa",
    to: "Buenos Aires",
    fromCoords: [46.4825, 30.7233],
    toCoords: [-34.6037, -58.3816],
    period: [1880, 1930],
    volume: 180000,
    theme: "latin-america-immigration",
    description: "Building Latin American Jewish communities"
  },
  {
    id: 12,
    name: "Eastern European to Brazil",
    from: "Warsaw",
    to: "São Paulo",
    fromCoords: [52.2297, 21.0122],
    toCoords: [-23.5505, -46.6333],
    period: [1900, 1930],
    volume: 50000,
    theme: "latin-america-immigration",
    description: "Jewish settlement in Brazil"
  },

  // Middle Eastern Exodus
  {
    id: 13,
    name: "Iranian Jews to Israel",
    from: "Tehran",
    to: "Tel Aviv",
    fromCoords: [35.6892, 51.3890],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1980],
    volume: 65000,
    theme: "middle-east-exodus",
    description: "Persian Jewish emigration"
  },
  {
    id: 14,
    name: "Iranian Jews to Los Angeles",
    from: "Tehran",
    to: "Los Angeles",
    fromCoords: [35.6892, 51.3890],
    toCoords: [34.0522, -118.2437],
    period: [1979, 2000],
    volume: 30000,
    theme: "middle-east-exodus",
    description: "Post-Revolution Persian community in LA"
  },

  // Modern Migrations
  {
    id: 15,
    name: "Venezuelan Jews to US",
    from: "Caracas",
    to: "Miami",
    fromCoords: [10.4806, -66.9036],
    toCoords: [25.7617, -80.1918],
    period: [2000, 2025],
    volume: 15000,
    theme: "modern-migration",
    description: "Economic crisis driving emigration"
  },
  {
    id: 16,
    name: "French Jews to Israel",
    from: "Paris",
    to: "Tel Aviv",
    fromCoords: [48.8566, 2.3522],
    toCoords: [32.0853, 34.7818],
    period: [2000, 2025],
    volume: 50000,
    theme: "modern-migration",
    description: "Recent French aliyah wave"
  },
  {
    id: 17,
    name: "South African Jews to Israel",
    from: "Johannesburg",
    to: "Tel Aviv",
    fromCoords: [-26.2041, 28.0473],
    toCoords: [32.0853, 34.7818],
    period: [1990, 2025],
    volume: 25000,
    theme: "modern-migration",
    description: "Post-apartheid emigration"
  },

  // Operation Magic Carpet & Rescue Operations
  {
    id: 18,
    name: "Operation Magic Carpet - Yemenite Jews",
    from: "Aden",
    to: "Tel Aviv",
    fromCoords: [12.7854, 45.0187],
    toCoords: [32.0853, 34.7818],
    period: [1949, 1950],
    volume: 49000,
    theme: "rescue-operations",
    description: "Airlift of almost entire Yemenite Jewish community"
  },
  {
    id: 19,
    name: "Operation Moses - Ethiopian Jews",
    from: "Addis Ababa",
    to: "Tel Aviv",
    fromCoords: [9.0320, 38.7469],
    toCoords: [32.0853, 34.7818],
    period: [1984, 1985],
    volume: 8000,
    theme: "rescue-operations",
    description: "Secret airlift of Ethiopian Jews via Sudan"
  },
  {
    id: 20,
    name: "Operation Solomon - Ethiopian Jews",
    from: "Addis Ababa",
    to: "Tel Aviv",
    fromCoords: [9.0320, 38.7469],
    toCoords: [32.0853, 34.7818],
    period: [1991, 1991],
    volume: 14325,
    theme: "rescue-operations",
    description: "36-hour airlift of 14,325 Ethiopian Jews"
  },

  // Iraqi Jewish Exodus
  {
    id: 21,
    name: "Iraqi Jews to Israel",
    from: "Baghdad",
    to: "Tel Aviv",
    fromCoords: [33.3152, 44.3661],
    toCoords: [32.0853, 34.7818],
    period: [1950, 1951],
    volume: 125000,
    theme: "middle-east-exodus",
    description: "Mass exodus after Iraq allowed emigration in exchange for citizenship"
  },

  // Libyan Jewish Exodus
  {
    id: 22,
    name: "Libyan Jews to Israel",
    from: "Tripoli",
    to: "Tel Aviv",
    fromCoords: [32.8872, 13.1913],
    toCoords: [32.0853, 34.7818],
    period: [1949, 1967],
    volume: 30000,
    theme: "middle-east-exodus",
    description: "Gradual exodus in three waves from Libya"
  },

  // Egyptian Jewish Exodus
  {
    id: 23,
    name: "Egyptian Jews to Israel",
    from: "Cairo",
    to: "Tel Aviv",
    fromCoords: [30.0444, 31.2357],
    toCoords: [32.0853, 34.7818],
    period: [1956, 1967],
    volume: 36000,
    theme: "middle-east-exodus",
    description: "Exodus accelerated after Suez Crisis"
  },
  {
    id: 24,
    name: "Egyptian Jews to Paris",
    from: "Cairo",
    to: "Paris",
    fromCoords: [30.0444, 31.2357],
    toCoords: [48.8566, 2.3522],
    period: [1956, 1967],
    volume: 4000,
    theme: "middle-east-exodus",
    description: "Some Egyptian Jews relocated to France"
  },

  // Syrian Jewish Exodus
  {
    id: 25,
    name: "Syrian Jews to Israel",
    from: "Damascus",
    to: "Tel Aviv",
    fromCoords: [33.5138, 36.2765],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1994],
    volume: 15000,
    theme: "middle-east-exodus",
    description: "Gradual emigration, intensified after 1994"
  },
  {
    id: 26,
    name: "Syrian Jews to New York",
    from: "Damascus",
    to: "New York City",
    fromCoords: [33.5138, 36.2765],
    toCoords: [40.7128, -74.0060],
    period: [1992, 2000],
    volume: 5000,
    theme: "middle-east-exodus",
    description: "Brooklyn Syrian Jewish community"
  },

  // Post-WWII Displaced Persons
  {
    id: 27,
    name: "DP Camps to Palestine",
    from: "Munich",
    to: "Tel Aviv",
    fromCoords: [48.1351, 11.5820],
    toCoords: [32.0853, 34.7818],
    period: [1945, 1951],
    volume: 177000,
    theme: "holocaust-aftermath",
    description: "Holocaust survivors from DP camps to Palestine/Israel"
  },
  {
    id: 28,
    name: "Polish Jews to Palestine",
    from: "Warsaw",
    to: "Tel Aviv",
    fromCoords: [52.2297, 21.0122],
    toCoords: [32.0853, 34.7818],
    period: [1946, 1951],
    volume: 100000,
    theme: "holocaust-aftermath",
    description: "Post-Kielce pogrom exodus"
  },
  {
    id: 29,
    name: "DP Camps to United States",
    from: "Munich",
    to: "New York City",
    fromCoords: [48.1351, 11.5820],
    toCoords: [40.7128, -74.0060],
    period: [1948, 1952],
    volume: 137000,
    theme: "holocaust-aftermath",
    description: "Displaced persons resettlement to America"
  },

  // Cuban Jewish Exodus
  {
    id: 30,
    name: "Cuban Jews to Miami",
    from: "Havana",
    to: "Miami",
    fromCoords: [23.1136, -82.3666],
    toCoords: [25.7617, -80.1918],
    period: [1960, 1970],
    volume: 8000,
    theme: "modern-migration",
    description: "Fleeing Castro's Communist regime"
  },

  // Indian Jewish Aliyah
  {
    id: 31,
    name: "Indian Jews to Israel - Cochin",
    from: "Mumbai",
    to: "Tel Aviv",
    fromCoords: [19.0760, 72.8777],
    toCoords: [32.0853, 34.7818],
    period: [1950, 1960],
    volume: 3000,
    theme: "asian-aliyah",
    description: "Cochin Jewish community aliyah"
  },
  {
    id: 32,
    name: "Indian Jews to Israel - Bene Israel",
    from: "Mumbai",
    to: "Tel Aviv",
    fromCoords: [19.0760, 72.8777],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1960],
    volume: 20000,
    theme: "asian-aliyah",
    description: "Bene Israel mass aliyah from Maharashtra"
  },

  // North African Jewish Exodus
  {
    id: 33,
    name: "Algerian Jews to France",
    from: "Algiers",
    to: "Paris",
    fromCoords: [36.7538, 3.0588],
    toCoords: [48.8566, 2.3522],
    period: [1962, 1963],
    volume: 130000,
    theme: "sephardic-migration",
    description: "Mass exodus of nearly entire Algerian Jewish community to France after independence"
  },
  {
    id: 34,
    name: "Tunisian Jews to Israel",
    from: "Tunis",
    to: "Tel Aviv",
    fromCoords: [36.8065, 10.1815],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1967],
    volume: 50000,
    theme: "sephardic-migration",
    description: "Mass emigration of Tunisian Jews to Israel after independence"
  },
  {
    id: 35,
    name: "Tunisian Jews to France",
    from: "Tunis",
    to: "Paris",
    fromCoords: [36.8065, 10.1815],
    toCoords: [48.8566, 2.3522],
    period: [1956, 1967],
    volume: 25000,
    theme: "sephardic-migration",
    description: "Tunisian Jews relocating to France after independence"
  },
  {
    id: 36,
    name: "Izmir Jews to Israel",
    from: "Izmir",
    to: "Tel Aviv",
    fromCoords: [38.4237, 27.1428],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1960],
    volume: 15000,
    theme: "sephardic-migration",
    description: "Smyrna Sephardic community emigration to Israel"
  },
  {
    id: 37,
    name: "Izmir Jews to Americas",
    from: "Izmir",
    to: "New York City",
    fromCoords: [38.4237, 27.1428],
    toCoords: [40.7128, -74.0060],
    period: [1900, 1924],
    volume: 20000,
    theme: "sephardic-migration",
    description: "Early 20th century emigration from Ottoman Smyrna to America"
  },
  {
    id: 38,
    name: "Great Eastern European Migration",
    from: "Warsaw",
    to: "New York City",
    fromCoords: [52.2297, 21.0122],
    toCoords: [40.7128, -74.0060],
    period: [1881, 1924],
    volume: 1500000,
    theme: "latin-america-immigration",
    description: "Massive wave of Eastern European Jews fleeing pogroms to America"
  },
  {
    id: 39,
    name: "South African Jews to Australia",
    from: "Johannesburg",
    to: "Melbourne",
    fromCoords: [-26.2041, 28.0473],
    toCoords: [-37.8136, 144.9631],
    period: [1980, 2000],
    volume: 15000,
    theme: "modern-migration",
    description: "Post-apartheid emigration from South Africa to Australia"
  },
  {
    id: 40,
    name: "Moroccan Jews to Israel - Operation Yachin",
    from: "Casablanca",
    to: "Tel Aviv",
    fromCoords: [33.5731, -7.5898],
    toCoords: [32.0853, 34.7818],
    period: [1961, 1964],
    volume: 100000,
    theme: "rescue-operations",
    description: "Secret Mossad operation to airlift Moroccan Jews to Israel"
  },

  // Libyan Jewish Exodus
  {
    id: 41,
    name: "Libyan Jews to Israel",
    from: "Tripoli",
    to: "Tel Aviv",
    fromCoords: [32.8872, 13.1913],
    toCoords: [32.0853, 34.7818],
    period: [1949, 1951],
    volume: 30000,
    theme: "middle-east-exodus",
    description: "Over 90% of Libya's 36,000 Jews emigrated after 1948 riots and independence"
  },
  {
    id: 42,
    name: "Benghazi Jews to Israel",
    from: "Benghazi",
    to: "Tel Aviv",
    fromCoords: [32.1191, 20.0869],
    toCoords: [32.0853, 34.7818],
    period: [1949, 1951],
    volume: 2300,
    theme: "middle-east-exodus",
    description: "Benghazi's 2,500 Jews emigrated after 1945 pogrom and 1948 anti-Jewish riots"
  },
  {
    id: 43,
    name: "Libyan Jews to Italy",
    from: "Tripoli",
    to: "Rome",
    fromCoords: [32.8872, 13.1913],
    toCoords: [41.9028, 12.4964],
    period: [1948, 1949],
    volume: 2500,
    theme: "middle-east-exodus",
    description: "Transit route via Italy for Libyan Jews fleeing to Israel and the West"
  },
  {
    id: 44,
    name: "Alexandria Jews to Israel",
    from: "Alexandria",
    to: "Tel Aviv",
    fromCoords: [31.2001, 29.9187],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1957],
    volume: 18000,
    theme: "middle-east-exodus",
    description: "Mass exodus from Alexandria after 1948 war and 1956 Suez Crisis"
  },
  {
    id: 45,
    name: "Beirut Jews to Israel",
    from: "Beirut",
    to: "Tel Aviv",
    fromCoords: [33.8886, 35.4955],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1975],
    volume: 5500,
    theme: "middle-east-exodus",
    description: "Lebanese Jews fleeing after 1967 war and during Civil War (1975-1990)"
  },
  {
    id: 46,
    name: "Beirut Jews to France",
    from: "Beirut",
    to: "Paris",
    fromCoords: [33.8886, 35.4955],
    toCoords: [48.8566, 2.3522],
    period: [1975, 1990],
    volume: 1500,
    theme: "modern-migration",
    description: "Lebanese Civil War forced remaining Jews to flee to France and West"
  },
  {
    id: 47,
    name: "Aleppo Jews to Israel",
    from: "Aleppo",
    to: "Tel Aviv",
    fromCoords: [36.2021, 37.1343],
    toCoords: [32.0853, 34.7818],
    period: [1947, 1994],
    volume: 8000,
    theme: "middle-east-exodus",
    description: "Syrian Jewish exodus after 1947 anti-Jewish violence and 1992-94 mass exit permits"
  },
  {
    id: 48,
    name: "Aleppo Jews to New York",
    from: "Aleppo",
    to: "New York City",
    fromCoords: [36.2021, 37.1343],
    toCoords: [40.7128, -74.0060],
    period: [1900, 1950],
    volume: 5000,
    theme: "sephardic-migration",
    description: "Aleppian Jews establishing Syrian-Jewish community in Brooklyn"
  },
  {
    id: 49,
    name: "Fez Jews to Israel",
    from: "Fez",
    to: "Tel Aviv",
    fromCoords: [34.0181, -5.0078],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1967],
    volume: 10000,
    theme: "sephardic-migration",
    description: "Moroccan mellah communities emigrating after Israel's establishment"
  },
  {
    id: 50,
    name: "Marrakech Jews to Israel",
    from: "Marrakech",
    to: "Tel Aviv",
    fromCoords: [31.6295, -7.9811],
    toCoords: [32.0853, 34.7818],
    period: [1948, 1967],
    volume: 20000,
    theme: "sephardic-migration",
    description: "Mass aliyah from Morocco's largest mellah communities"
  },
  {
    id: 51,
    name: "Iranian Jews to Israel",
    from: "Tehran",
    to: "Tel Aviv",
    fromCoords: [35.6892, 51.3890],
    toCoords: [32.0853, 34.7818],
    period: [1979, 2000],
    volume: 40000,
    theme: "modern-migration",
    description: "Post-Islamic Revolution exodus from Iran (1979-present)"
  },
  {
    id: 52,
    name: "Shiraz Jews to Israel",
    from: "Shiraz",
    to: "Tel Aviv",
    fromCoords: [29.5918, 52.5836],
    toCoords: [32.0853, 34.7818],
    period: [1979, 2000],
    volume: 10000,
    theme: "modern-migration",
    description: "Southern Iranian Jewish community fleeing after Revolution"
  },
  {
    id: 53,
    name: "Isfahan Jews to Israel",
    from: "Isfahan",
    to: "Tel Aviv",
    fromCoords: [32.6546, 51.6680],
    toCoords: [32.0853, 34.7818],
    period: [1979, 2000],
    volume: 7000,
    theme: "modern-migration",
    description: "Historic Persian Jewish community emigrating post-Revolution"
  }
];

// Theme colors for migration flows
export const migrationThemes = {
  "soviet-emigration": {
    color: "#FF6B6B",
    name: "Soviet Jewish Emigration",
    period: "1970-2000"
  },
  "holocaust-aftermath": {
    color: "#4ECDC4",
    name: "Holocaust Survivors",
    period: "1945-1950"
  },
  "holocaust-flight": {
    color: "#9B59B6",
    name: "Fleeing Nazi Persecution",
    period: "1933-1941"
  },
  "sephardic-migration": {
    color: "#F39C12",
    name: "Sephardic Migrations",
    period: "1948-1970"
  },
  "latin-america-immigration": {
    color: "#3498DB",
    name: "Latin American Immigration",
    period: "1880-1930"
  },
  "middle-east-exodus": {
    color: "#E74C3C",
    name: "Middle Eastern Exodus",
    period: "1948-1980"
  },
  "modern-migration": {
    color: "#1ABC9C",
    name: "Modern Migrations",
    period: "2000-present"
  },
  "rescue-operations": {
    color: "#E67E22",
    name: "Rescue Operations",
    period: "1949-1991"
  },
  "asian-aliyah": {
    color: "#16A085",
    name: "Asian Jewish Aliyah",
    period: "1948-1960"
  }
};
