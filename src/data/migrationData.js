export const migrationRoutes = [
  {
    id: 1,
    name: "Mass Migration to America",
    from: { lat: 52.0, lon: 21.0, name: "Eastern Europe" },
    to: { lat: 40.7128, lon: -74.0060, name: "New York" },
    startYear: 1881,
    endYear: 1924,
    volume: 2500000,
    description: "Over 2.5 million Jews from Russia, Poland, and Eastern Europe fled persecution and pogroms, immigrating to America.",
    color: "#4169E1"
  },
  {
    id: 2,
    name: "First Aliyah",
    from: { lat: 55.0, lon: 38.0, name: "Russia" },
    to: { lat: 31.7683, lon: 35.2137, name: "Palestine" },
    startYear: 1882,
    endYear: 1903,
    volume: 35000,
    description: "First wave of modern Jewish immigration to Palestine, primarily from Russia and Yemen.",
    color: "#0066CC"
  },
  {
    id: 3,
    name: "Second Aliyah",
    from: { lat: 52.0, lon: 21.0, name: "Russia/Poland" },
    to: { lat: 32.0853, lon: 34.7818, name: "Palestine" },
    startYear: 1904,
    endYear: 1914,
    volume: 40000,
    description: "Second wave driven by pogroms in Russia, forming the basis of the Labor Zionist movement.",
    color: "#0066CC"
  },
  {
    id: 4,
    name: "Flight from Nazi Germany",
    from: { lat: 52.5200, lon: 13.4050, name: "Berlin" },
    to: { lat: 40.7128, lon: -74.0060, name: "New York" },
    startYear: 1933,
    endYear: 1939,
    volume: 300000,
    description: "Jews fleeing Nazi persecution emigrated to America, Britain, Palestine, and South America.",
    color: "#DC143C"
  },
  {
    id: 5,
    name: "Flight from Nazi Germany to Palestine",
    from: { lat: 52.5200, lon: 13.4050, name: "Germany" },
    to: { lat: 31.7683, lon: 35.2137, name: "Palestine" },
    startYear: 1933,
    endYear: 1939,
    volume: 200000,
    description: "Fifth Aliyah - Nearly 250,000 Jews from Germany and Eastern Europe fled to Palestine.",
    color: "#DC143C"
  },
  {
    id: 6,
    name: "Holocaust Survivors to Israel",
    from: { lat: 50.0, lon: 15.0, name: "Central Europe" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1945,
    endYear: 1952,
    volume: 711000,
    description: "Mass immigration of Holocaust survivors and displaced Jews to newly established Israel.",
    color: "#8B0000"
  },
  {
    id: 7,
    name: "Moroccan Jews to Israel",
    from: { lat: 33.5731, lon: -7.5898, name: "Casablanca" },
    to: { lat: 31.7683, lon: 35.2137, name: "Israel" },
    startYear: 1948,
    endYear: 1967,
    volume: 260000,
    description: "Majority of Morocco's 225,000 Jews emigrated, primarily to Israel through Operations Cadima and Yachin.",
    color: "#FF8C00"
  },
  {
    id: 8,
    name: "North African Jews to France",
    from: { lat: 36.7, lon: 3.2, name: "Algeria" },
    to: { lat: 48.8566, lon: 2.3522, name: "Paris" },
    startYear: 1956,
    endYear: 1967,
    volume: 235000,
    description: "Jews from Algeria, Tunisia, and Morocco emigrated to France during decolonization.",
    color: "#FF6347"
  },
  {
    id: 9,
    name: "Iraqi Jews to Israel",
    from: { lat: 33.3, lon: 44.4, name: "Iraq" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1948,
    endYear: 1952,
    volume: 120000,
    description: "Operation Ezra and Nehemiah - Mass exodus of Iraqi Jews following persecution.",
    color: "#FF8C00"
  },
  {
    id: 10,
    name: "Yemeni Jews to Israel",
    from: { lat: 15.5, lon: 48.0, name: "Yemen" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1949,
    endYear: 1950,
    volume: 49000,
    description: "Operation Magic Carpet - Airlift of Yemeni Jews to Israel.",
    color: "#FF8C00"
  },
  {
    id: 11,
    name: "Soviet Jewish Emigration",
    from: { lat: 55.7558, lon: 37.6173, name: "Moscow" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1970,
    endYear: 1989,
    volume: 300000,
    description: "Refusenik movement - Soviet Jews fighting for the right to emigrate to Israel.",
    color: "#4682B4"
  },
  {
    id: 12,
    name: "Mass Soviet Aliyah",
    from: { lat: 55.7558, lon: 37.6173, name: "Former USSR" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1990,
    endYear: 1998,
    volume: 879486,
    description: "Largest immigration wave to Israel - Nearly 900,000 Soviet Jews after USSR collapse.",
    color: "#4682B4"
  },
  {
    id: 13,
    name: "Ethiopian Aliyah - Operation Moses",
    from: { lat: 9.0, lon: 38.7, name: "Ethiopia" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1984,
    endYear: 1985,
    volume: 7000,
    description: "Secret operation to bring Ethiopian Jews to Israel during famine.",
    color: "#228B22"
  },
  {
    id: 14,
    name: "Ethiopian Aliyah - Operation Solomon",
    from: { lat: 9.0, lon: 38.7, name: "Ethiopia" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1991,
    endYear: 1991,
    volume: 15000,
    description: "Dramatic 36-hour airlift of Ethiopian Jews to Israel.",
    color: "#228B22"
  },
  {
    id: 15,
    name: "French Jews to Israel",
    from: { lat: 48.8566, lon: 2.3522, name: "Paris" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 2013,
    endYear: 2025,
    volume: 50000,
    description: "Increasing aliyah from France due to rising antisemitism.",
    color: "#0066CC"
  },
  {
    id: 16,
    name: "German Jews to Americas",
    from: { lat: 52.5200, lon: 13.4050, name: "Berlin" },
    to: { lat: -34.6037, lon: -58.3816, name: "Buenos Aires" },
    startYear: 1933,
    endYear: 1945,
    volume: 50000,
    description: "Jewish refugees from Nazi Germany fled to Argentina and South America.",
    color: "#DC143C"
  },
  {
    id: 17,
    name: "Eastern European Jews to Canada",
    from: { lat: 52.0, lon: 21.0, name: "Poland" },
    to: { lat: 43.6532, lon: -79.3832, name: "Toronto" },
    startYear: 1900,
    endYear: 1930,
    volume: 150000,
    description: "Eastern European Jews emigrated to Canada seeking economic opportunity.",
    color: "#4169E1"
  },
  {
    id: 18,
    name: "Post-WWII Migration to Australia",
    from: { lat: 50.0, lon: 15.0, name: "Europe" },
    to: { lat: -37.8136, lon: 144.9631, name: "Melbourne" },
    startYear: 1945,
    endYear: 1960,
    volume: 35000,
    description: "Holocaust survivors and displaced Jews emigrated to Australia.",
    color: "#8B0000"
  },
  {
    id: 19,
    name: "Libyan Jews to Israel",
    from: { lat: 32.8872, lon: 13.1913, name: "Tripoli" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1949,
    endYear: 1967,
    volume: 30000,
    description: "Gradual exodus of Libyan Jews in three waves to Israel.",
    color: "#FF8C00"
  },
  {
    id: 20,
    name: "Egyptian Jews to Israel",
    from: { lat: 30.0444, lon: 31.2357, name: "Cairo" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1956,
    endYear: 1967,
    volume: 36000,
    description: "Mass exodus after Suez Crisis - from 40,000 Jews in 1956 to 250 by 1970.",
    color: "#FF8C00"
  },
  {
    id: 21,
    name: "Syrian Jews to Israel",
    from: { lat: 33.5138, lon: 36.2765, name: "Damascus" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1948,
    endYear: 1994,
    volume: 15000,
    description: "Gradual emigration from Syria, intensified after 1994 when restrictions eased.",
    color: "#FF8C00"
  },
  {
    id: 22,
    name: "Syrian Jews to New York",
    from: { lat: 33.5138, lon: 36.2765, name: "Damascus" },
    to: { lat: 40.7128, lon: -74.0060, name: "Brooklyn" },
    startYear: 1992,
    endYear: 2000,
    volume: 5000,
    description: "Syrian Jewish community established in Brooklyn, particularly Ocean Parkway.",
    color: "#4169E1"
  },
  {
    id: 23,
    name: "Polish Jews Post-Kielce Pogrom",
    from: { lat: 52.2297, lon: 21.0122, name: "Warsaw" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1946,
    endYear: 1951,
    volume: 100000,
    description: "150,000 Polish Jews fled after 1946 Kielce pogrom via DP camps to Palestine.",
    color: "#8B0000"
  },
  {
    id: 24,
    name: "DP Camps to United States",
    from: { lat: 48.1351, lon: 11.5820, name: "Munich" },
    to: { lat: 40.7128, lon: -74.0060, name: "New York" },
    startYear: 1948,
    endYear: 1952,
    volume: 137000,
    description: "Holocaust survivors resettled in America under Truman Directive and DP Acts.",
    color: "#8B0000"
  },
  {
    id: 25,
    name: "Cuban Jews to Miami",
    from: { lat: 23.1136, lon: -82.3666, name: "Havana" },
    to: { lat: 25.7617, lon: -80.1918, name: "Miami" },
    startYear: 1960,
    endYear: 1970,
    volume: 8000,
    description: "95% of Cuban Jews fled Castro's revolution, mostly settling in Miami.",
    color: "#1ABC9C"
  },
  {
    id: 26,
    name: "Indian Jews - Bene Israel Aliyah",
    from: { lat: 19.0760, lon: 72.8777, name: "Mumbai" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1948,
    endYear: 1960,
    volume: 20000,
    description: "Mass aliyah of Bene Israel community from Maharashtra to Israel.",
    color: "#16A085"
  },
  {
    id: 27,
    name: "Indian Jews - Cochin Aliyah",
    from: { lat: 19.0760, lon: 72.8777, name: "Mumbai" },
    to: { lat: 32.0853, lon: 34.7818, name: "Israel" },
    startYear: 1950,
    endYear: 1960,
    volume: 3000,
    description: "Ancient Cochin Jewish community's 7-year migration to Israel.",
    color: "#16A085"
  },
  {
    id: 28,
    name: "Iranian Jews to Los Angeles",
    from: { lat: 35.6892, lon: 51.3890, name: "Tehran" },
    to: { lat: 34.0522, lon: -118.2437, name: "Los Angeles" },
    startYear: 1979,
    endYear: 2000,
    volume: 30000,
    description: "Post-Revolution Persian Jewish community established in Beverly Hills.",
    color: "#E74C3C"
  },
  {
    id: 29,
    name: "Venezuelan Jews Fleeing Crisis",
    from: { lat: 10.4806, lon: -66.9036, name: "Caracas" },
    to: { lat: 25.7617, lon: -80.1918, name: "Miami" },
    startYear: 2000,
    endYear: 2025,
    volume: 15000,
    description: "Economic crisis driving Venezuelan Jewish emigration to US and Israel.",
    color: "#1ABC9C"
  },
  {
    id: 30,
    name: "Moroccan Jews to France",
    from: { lat: 33.5731, lon: -7.5898, name: "Casablanca" },
    to: { lat: 48.8566, lon: 2.3522, name: "Paris" },
    startYear: 1950,
    endYear: 1970,
    volume: 200000,
    description: "Moroccan Jews moved to France after independence, creating large Sephardic community.",
    color: "#F39C12"
  },
  {
    id: 31,
    name: "Kindertransport to Britain",
    from: { lat: 52.5200, lon: 13.4050, name: "Berlin" },
    to: { lat: 51.5074, lon: -0.1278, name: "London" },
    startYear: 1938,
    endYear: 1939,
    volume: 10000,
    description: "British rescue program saved 10,000 Jewish children from Nazi Germany.",
    color: "#3498DB"
  },
  {
    id: 32,
    name: "Refuge to Shanghai",
    from: { lat: 48.2082, lon: 16.3738, name: "Vienna" },
    to: { lat: 31.2304, lon: 121.4737, name: "Shanghai" },
    startYear: 1938,
    endYear: 1941,
    volume: 17000,
    description: "Shanghai International Settlement provided visa-free refuge for European Jews fleeing Nazis.",
    color: "#E67E22"
  },
  {
    id: 33,
    name: "DP Camps to Israel",
    from: { lat: 48.1351, lon: 11.5820, name: "Munich" },
    to: { lat: 32.0853, lon: 34.7818, name: "Tel Aviv" },
    startYear: 1945,
    endYear: 1952,
    volume: 140000,
    description: "Holocaust survivors from Displaced Persons camps immigrated to newly established Israel.",
    color: "#2ECC71"
  },
  {
    id: 34,
    name: "DP Camps to America",
    from: { lat: 50.0755, lon: 14.4378, name: "Prague" },
    to: { lat: 40.7128, lon: -74.0060, name: "New York City" },
    startYear: 1945,
    endYear: 1952,
    volume: 96000,
    description: "United States admitted approximately 96,000 Jewish Holocaust survivors from DP camps.",
    color: "#9B59B6"
  },
  {
    id: 35,
    name: "First Aliyah - Russian Pogroms",
    from: { lat: 50.4501, lon: 30.5234, name: "Kiev" },
    to: { lat: 31.7683, lon: 35.2137, name: "Jerusalem" },
    startYear: 1881,
    endYear: 1903,
    volume: 25000,
    description: "First major wave of Zionist immigration fleeing Russian pogroms to Ottoman Palestine.",
    color: "#1ABC9C"
  },
  {
    id: 36,
    name: "Second Aliyah",
    from: { lat: 53.9045, lon: 27.5615, name: "Minsk" },
    to: { lat: 32.0853, lon: 34.7818, name: "Tel Aviv" },
    startYear: 1904,
    endYear: 1914,
    volume: 35000,
    description: "Young socialist pioneers from Russian Empire established kibbutzim and Hebrew revival.",
    color: "#E74C3C"
  },
  {
    id: 37,
    name: "Third Aliyah - Post-WWI",
    from: { lat: 52.2297, lon: 21.0122, name: "Warsaw" },
    to: { lat: 32.0853, lon: 34.7818, name: "Tel Aviv" },
    startYear: 1919,
    endYear: 1923,
    volume: 35000,
    description: "Post-WWI immigration from Poland and Russia to British Mandate Palestine.",
    color: "#F39C12"
  },
  {
    id: 38,
    name: "Fifth Aliyah - Nazi Refugees",
    from: { lat: 52.5200, lon: 13.4050, name: "Berlin" },
    to: { lat: 32.0853, lon: 34.7818, name: "Tel Aviv" },
    startYear: 1933,
    endYear: 1939,
    volume: 174000,
    description: "Mass flight from Nazi Germany brought 174,000 Jews to Palestine, especially 1933-1936.",
    color: "#C0392B"
  },
  {
    id: 39,
    name: "Post-WWII to Australia",
    from: { lat: 50.8503, lon: 4.3517, name: "Brussels" },
    to: { lat: -37.8136, lon: 144.9631, name: "Melbourne" },
    startYear: 1945,
    endYear: 1960,
    volume: 35000,
    description: "Holocaust survivors and European Jews sought new life in Australia, primarily Melbourne.",
    color: "#16A085"
  },
  {
    id: 40,
    name: "Eastern European to Canada",
    from: { lat: 50.4501, lon: 30.5234, name: "Kiev" },
    to: { lat: 43.6532, lon: -79.3832, name: "Toronto" },
    startYear: 1900,
    endYear: 1930,
    volume: 125000,
    description: "Mass immigration of Eastern European Jews to Canada, primarily settling in Montreal and Toronto.",
    color: "#2980B9"
  },
  {
    id: 41,
    name: "Belgian Diamond Trade",
    from: { lat: 52.0907, lon: 5.1214, name: "Amsterdam" },
    to: { lat: 51.2194, lon: 4.4025, name: "Antwerp" },
    startYear: 1870,
    endYear: 1930,
    volume: 25000,
    description: "Dutch and Eastern European Jews moved to Antwerp, establishing world's diamond capital.",
    color: "#8E44AD"
  },
  {
    id: 42,
    name: "Shanghai Exodus to San Francisco",
    from: { lat: 31.2304, lon: 121.4737, name: "Shanghai" },
    to: { lat: 37.7749, lon: -122.4194, name: "San Francisco" },
    startYear: 1946,
    endYear: 1953,
    volume: 8000,
    description: "Shanghai Jewish refugees sailed to San Francisco, then crossed US to embark for Israel.",
    color: "#D35400"
  },
  {
    id: 43,
    name: "Turkish Jews to Israel",
    from: { lat: 41.0082, lon: 28.9784, name: "Istanbul" },
    to: { lat: 32.0853, lon: 34.7818, name: "Tel Aviv" },
    startYear: 1948,
    endYear: 1951,
    volume: 34500,
    description: "Nearly 40% of Turkish Jewry made aliyah following Israel's independence.",
    color: "#27AE60"
  },
  {
    id: 44,
    name: "Montreal to Toronto Exodus",
    from: { lat: 45.5017, lon: -73.5673, name: "Montreal" },
    to: { lat: 43.6532, lon: -79.3832, name: "Toronto" },
    startYear: 1976,
    endYear: 1990,
    volume: 25000,
    description: "Quebec separatist movement drove 20,000-30,000 Jews from Montreal to Toronto.",
    color: "#E67E22"
  },
  {
    id: 45,
    name: "Australian Gold Rush",
    from: { lat: 51.5074, lon: -0.1278, name: "London" },
    to: { lat: -37.8136, lon: 144.9631, name: "Melbourne" },
    startYear: 1851,
    endYear: 1870,
    volume: 2800,
    description: "Jewish migration to Australia during gold rush era, Melbourne community tripled.",
    color: "#F1C40F"
  },
  {
    id: 46,
    name: "Soviet Jews to New York",
    from: { lat: 55.7558, lon: 37.6173, name: "Moscow" },
    to: { lat: 40.7128, lon: -74.0060, name: "New York City" },
    startYear: 1970,
    endYear: 1989,
    volume: 250000,
    description: "Refusenik movement: Soviet Jews fled religious persecution to US, settling in Brighton Beach and other NYC areas.",
    color: "#FF6B6B"
  },
  {
    id: 47,
    name: "Post-Soviet to America",
    from: { lat: 55.7558, lon: 37.6173, name: "Moscow" },
    to: { lat: 40.7128, lon: -74.0060, name: "New York City" },
    startYear: 1990,
    endYear: 2010,
    volume: 500000,
    description: "After USSR collapse, massive wave of Russian Jews immigrated to US (NYC, LA, Boston), creating vibrant Russian-Jewish communities.",
    color: "#DC143C"
  },
  {
    id: 48,
    name: "Soviet Jews to Los Angeles",
    from: { lat: 55.7558, lon: 37.6173, name: "Moscow" },
    to: { lat: 34.0522, lon: -118.2437, name: "Los Angeles" },
    startYear: 1975,
    endYear: 2000,
    volume: 200000,
    description: "Major Soviet Jewish community established in West Hollywood, Fairfax, and San Fernando Valley.",
    color: "#9B59B6"
  }
];

// Function to get active migrations for a specific year
export function getMigrationsForYear(year) {
  return migrationRoutes.filter(route =>
    year >= route.startYear && year <= route.endYear
  );
}

// Function to calculate migration intensity for a specific year (for animation)
export function getMigrationIntensity(route, year) {
  if (year < route.startYear || year > route.endYear) return 0;

  const duration = route.endYear - route.startYear + 1;
  const yearsPassed = year - route.startYear + 1;

  // Peak in the middle of the migration period
  const progress = yearsPassed / duration;
  const intensity = Math.sin(progress * Math.PI); // Sine curve for natural flow

  return intensity;
}
