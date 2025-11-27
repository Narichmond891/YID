export const historicalEvents = [
  {
    id: 1,
    name: "First Wave of Pogroms in Russian Empire",
    type: "pogrom",
    startYear: 1881,
    endYear: 1884,
    regions: [
      {
        name: "Ukraine and Southern Russia",
        coordinates: [
          [46.0, 28.0], [48.0, 26.0], [50.5, 24.0], [52.0, 24.0],
          [54.0, 25.0], [56.0, 27.0], [56.0, 38.0], [54.0, 40.0],
          [52.0, 40.0], [50.0, 38.0], [48.0, 36.0], [46.0, 34.0], [46.0, 28.0]
        ]
      }
    ],
    description: "Following the assassination of Tsar Alexander II, extensive pogroms swept through the Russian Empire. The first pogrom occurred in Yelizavetgrad (Ukraine) in April 1881. The most severe attack was in Kyiv over three days beginning April 26, with 762 families completely ruined. These pogroms led to mass emigration of Jews from the Russian Empire.",
    casualties: "Thousands killed and injured, thousands of families ruined",
    affectedCities: ["Kyiv", "Odessa", "Warsaw", "Vilnius"]
  },
  {
    id: 2,
    name: "Kishinev Pogrom",
    type: "pogrom",
    startYear: 1903,
    endYear: 1903,
    regions: [
      {
        name: "Kishinev (Bessarabia)",
        coordinates: [
          [45.5, 26.5], [48.5, 26.5], [48.5, 30.0], [45.5, 30.0], [45.5, 26.5]
        ]
      }
    ],
    description: "An anti-Jewish riot in Kishinev (modern Chișinău, Moldova) on April 19-21, 1903. The pogrom shocked the world and sparked international outrage. It became a turning point, accelerating Zionist movement and Jewish emigration.",
    casualties: "49 Jews killed, 92 severely wounded, 500 slightly injured, 700 houses destroyed, 600 stores pillaged",
    affectedCities: ["Odessa"]
  },
  {
    id: 3,
    name: "Second Wave of Pogroms",
    type: "pogrom",
    startYear: 1903,
    endYear: 1906,
    regions: [
      {
        name: "Pale of Settlement",
        coordinates: [
          [45.0, 20.0], [49.0, 18.0], [53.0, 20.0], [56.0, 22.0],
          [58.0, 24.0], [59.0, 27.0], [59.0, 40.0], [56.0, 40.0],
          [52.0, 38.0], [48.0, 36.0], [45.0, 32.0], [44.0, 28.0], [45.0, 20.0]
        ]
      }
    ],
    description: "Following the 1905 Russian Revolution, pogroms erupted in 660 towns, mainly in Ukraine and the Pale of Settlement. The most serious occurred in Odessa (300+ dead) and Yekaterinoslav (120 dead). The Bialystok pogrom of June 1906 saw Tsarist soldiers murder 200 Jews.",
    casualties: "Over 1,000 killed, thousands wounded across 64 towns and 626 villages",
    affectedCities: ["Odessa", "Kyiv", "Vilnius", "Warsaw"]
  },
  {
    id: 4,
    name: "Russian Civil War Pogroms",
    type: "pogrom",
    startYear: 1918,
    endYear: 1921,
    regions: [
      {
        name: "Ukraine and Belarus",
        coordinates: [
          [46.0, 22.0], [49.0, 20.0], [52.0, 22.0], [54.0, 23.0],
          [56.0, 25.0], [56.0, 38.0], [54.0, 38.0], [51.0, 36.0],
          [48.0, 34.0], [46.0, 30.0], [46.0, 22.0]
        ]
      }
    ],
    description: "During the Russian Civil War, over a thousand pogroms occurred, chiefly in Ukraine and southern Belarus. Various armed groups including White Army forces, Ukrainian nationalists, and Red Army units committed atrocities. This was one of the deadliest waves of anti-Jewish violence before the Holocaust.",
    casualties: "120,000 deaths, equal number of rapes, half a million refugees",
    affectedCities: ["Kyiv", "Odessa", "Vilnius", "Lviv"]
  },
  {
    id: 5,
    name: "Kristallnacht (Night of Broken Glass)",
    type: "pogrom",
    startYear: 1938,
    endYear: 1938,
    regions: [
      {
        name: "Germany",
        coordinates: [
          [47.27, 5.87], [47.56, 7.59], [47.70, 8.23], [47.58, 9.53], [47.65, 10.18],
          [47.55, 10.48], [47.30, 10.73], [47.27, 11.66], [47.58, 12.24], [47.74, 12.76],
          [47.69, 13.06], [48.77, 13.84], [49.00, 13.83], [49.02, 12.84], [49.45, 12.51],
          [49.94, 12.24], [50.27, 12.38], [50.56, 12.09], [50.77, 11.97], [51.05, 11.97],
          [51.27, 12.20], [51.36, 12.68], [51.68, 13.19], [51.98, 14.23], [52.33, 14.12],
          [53.21, 14.35], [53.56, 14.19], [53.89, 14.41], [54.08, 13.74], [54.36, 13.80],
          [54.53, 13.35], [54.47, 12.10], [54.18, 11.96], [54.19, 10.95], [54.36, 10.15],
          [54.74, 9.93], [54.84, 9.28], [54.63, 8.90], [54.42, 8.69], [53.87, 8.92],
          [53.52, 8.54], [53.39, 7.09], [53.63, 6.91], [53.49, 6.16], [53.00, 7.10],
          [52.53, 7.42], [52.06, 7.51], [51.36, 7.01], [50.93, 6.84], [50.33, 6.16],
          [49.80, 6.18], [49.46, 6.42], [49.01, 6.36], [48.73, 6.24], [48.52, 7.57],
          [48.00, 7.57], [47.54, 7.59], [47.27, 5.87]
        ]
      },
      {
        name: "Austria",
        coordinates: [
          [46.37, 9.53], [46.43, 9.60], [46.52, 10.44], [46.63, 10.85], [46.88, 12.15],
          [47.09, 12.78], [47.27, 12.70], [47.53, 12.48], [47.63, 12.69], [47.71, 13.00],
          [47.69, 13.39], [47.74, 13.81], [48.00, 14.63], [48.20, 15.04], [48.30, 15.26],
          [48.59, 15.25], [48.88, 16.07], [48.99, 16.52], [48.99, 16.90], [48.79, 16.96],
          [48.61, 17.11], [48.12, 16.96], [47.71, 17.16], [47.56, 16.56], [47.05, 16.53],
          [46.88, 16.34], [46.67, 16.10], [46.52, 15.15], [46.64, 14.63], [46.43, 13.63],
          [46.27, 13.61], [46.50, 13.02], [46.66, 12.58], [46.85, 12.15], [46.68, 11.15],
          [46.86, 10.44], [46.65, 10.16], [46.90, 9.89], [47.07, 9.59], [46.37, 9.53]
        ]
      }
    ],
    description: "On November 9-10, 1938, Nazi paramilitary forces and German civilians attacked Jewish homes, businesses, and synagogues throughout Germany, Austria, and the Sudetenland. This marked a turning point from discrimination to open violence, foreshadowing the Holocaust.",
    casualties: "91 Jews killed, 30,000 Jewish men arrested and sent to concentration camps, 267 synagogues destroyed, thousands of businesses vandalized",
    affectedCities: ["Berlin", "Vienna"]
  },
  {
    id: 6,
    name: "The Holocaust",
    type: "holocaust",
    startYear: 1939,
    endYear: 1945,
    regions: [
      {
        name: "Nazi-Occupied Europe",
        coordinates: [
          [36.0, -9.5], [43.0, -9.0], [43.5, -1.5], [42.0, 3.0],
          [43.0, 7.0], [45.0, 6.5], [47.5, 6.0], [49.0, 2.5],
          [51.0, 2.0], [51.5, 4.0], [53.0, 7.0], [54.5, 9.0],
          [54.5, 13.0], [54.0, 18.5], [52.0, 20.0], [50.0, 24.0],
          [48.0, 26.0], [46.0, 26.0], [45.0, 28.0], [43.0, 28.0],
          [41.0, 24.0], [40.0, 20.0], [38.0, 15.0], [37.0, 12.0],
          [36.0, 8.0], [36.0, -9.5]
        ]
      },
      {
        name: "Eastern Front",
        coordinates: [
          [54.0, 18.5], [56.0, 20.0], [58.0, 24.0], [59.0, 28.0],
          [60.0, 30.0], [58.0, 32.0], [56.0, 34.0], [54.0, 36.0],
          [52.0, 38.0], [50.0, 38.0], [48.0, 36.0], [46.0, 34.0],
          [45.0, 32.0], [45.0, 28.0], [46.0, 26.0], [48.0, 26.0],
          [50.0, 24.0], [52.0, 20.0], [54.0, 18.5]
        ]
      }
    ],
    description: "The systematic, state-sponsored persecution and murder of six million European Jews by Nazi Germany and its collaborators. Jews were forced into ghettos, subjected to mass shootings, and murdered in extermination camps including Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, and Chełmno. This genocide destroyed two-thirds of European Jewry and entire communities that had existed for centuries.",
    casualties: "Approximately 6 million Jews murdered, including 1.5 million children",
    affectedCities: ["Warsaw", "Berlin", "Vienna", "Budapest", "Vilnius", "Krakow", "Lviv", "Odessa", "Paris", "Amsterdam"]
  },
  {
    id: 7,
    name: "Kielce Pogrom",
    type: "pogrom",
    startYear: 1946,
    endYear: 1946,
    regions: [
      {
        name: "Kielce, Poland",
        coordinates: [
          [49.5, 18.0], [52.0, 18.0], [52.0, 22.0], [49.5, 22.0], [49.5, 18.0]
        ]
      }
    ],
    description: "On July 4, 1946, a violent pogrom against Jewish Holocaust survivors in Kielce, Poland. Based on a false blood libel accusation, a mob of Polish civilians and soldiers murdered 42 Jews and wounded over 40 others. This post-Holocaust violence accelerated the departure of remaining Jews from Poland.",
    casualties: "42 Jews killed, over 40 wounded",
    affectedCities: ["Warsaw", "Krakow"]
  }
];

// Function to get events for a specific year
export function getEventsForYear(year) {
  return historicalEvents.filter(event =>
    year >= event.startYear && year <= event.endYear
  );
}

// Function to check if a city is affected by an event in a given year
export function isCityAffected(cityName, year) {
  const events = getEventsForYear(year);
  return events.some(event =>
    event.affectedCities && event.affectedCities.includes(cityName)
  );
}
