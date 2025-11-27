// Global Jewish population by year (worldwide totals)
// Sources:
// - Sergio DellaPergola (Hebrew University demographer)
// - American Jewish Year Book (AJYB)
// - Jewish Agency for Israel
// - Jewish Virtual Library
// - Times of Israel, JNS.org (2024 data)

export const globalPopulationByYear = {
  1850: 4500000,    // 4.5 million - estimated
  1900: 10600000,   // 10.6 million - AJYB
  1920: 14500000,   // 14.5 million - post-WWI growth
  1940: 16600000,   // 16.6 million - peak before Holocaust
  1945: 11000000,   // 11 million - after Holocaust (6 million Jews murdered 1941-1945)
  1960: 12800000,   // 12.8 million - recovering from Holocaust
  1980: 12900000,   // 12.9 million - period of stagnation
  2000: 13200000,   // 13.2 million
  2025: 15800000    // 15.8 million - Jewish Agency 2024, still 800K less than 1940 peak
};

// Helper function to get global population for any year (with interpolation)
export function getGlobalPopulation(year) {
  const years = Object.keys(globalPopulationByYear).map(Number).sort((a, b) => a - b);

  // If exact year exists, return it
  if (globalPopulationByYear[year]) {
    return globalPopulationByYear[year];
  }

  // Find surrounding years for interpolation
  let lowerYear = years[0];
  let upperYear = years[years.length - 1];

  for (let i = 0; i < years.length - 1; i++) {
    if (year >= years[i] && year <= years[i + 1]) {
      lowerYear = years[i];
      upperYear = years[i + 1];
      break;
    }
  }

  // Linear interpolation
  const lowerPop = globalPopulationByYear[lowerYear];
  const upperPop = globalPopulationByYear[upperYear];
  const yearRange = upperYear - lowerYear;
  const popRange = upperPop - lowerPop;
  const yearOffset = year - lowerYear;

  return Math.round(lowerPop + (popRange * yearOffset / yearRange));
}
