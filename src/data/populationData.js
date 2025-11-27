export const citiesData = [
  {
    id: 1,
    name: "New York City",
    country: "United States",
    coordinates: [40.7128, -74.0060],
    populations: {
      1850: 15000,
      1900: 1000000,
      1920: 1600000,
      1940: 2000000,
      1960: 2000000,
      1980: 1100000,
      2000: 1400000,
      2025: 1600000
    },
    culture: {
      description: "Home to the largest Jewish community outside Israel, with vibrant traditions from Eastern European, Sephardic, and Syrian Jewish communities.",
      landmarks: ["Lower East Side", "Brooklyn Jewish neighborhoods", "Manhattan synagogues"],
      traditions: "Strong Yiddish cultural heritage, diverse Jewish educational institutions"
    }
  },
  {
    id: 2,
    name: "Jerusalem",
    country: "Israel Palestine",
    coordinates: [31.7683, 35.2137],
    populations: {
      1850: 5000,
      1900: 35000,
      1920: 34000,
      1940: 90000,
      1960: 165000,
      1980: 300000,
      2000: 460000,
      2025: 815000
    },
    culture: {
      description: "The spiritual and historical center of Jewish life for millennia, home to the Western Wall and ancient Jewish quarter.",
      landmarks: ["Western Wall", "Old City Jewish Quarter", "Mahane Yehuda Market"],
      traditions: "Center of Jewish religious life, diverse communities from around the world"
    }
  },
  {
    id: 3,
    name: "Tel Aviv",
    country: "Israel Palestine",
    coordinates: [32.0853, 34.7818],
    populations: {
      1850: 0,
      1900: 0,
      1920: 15000,
      1940: 150000,
      1960: 390000,
      1980: 317000,
      2000: 350000,
      2025: 460000
    },
    culture: {
      description: "Modern cultural and economic center of Israel, founded in 1909 as the first modern Jewish city.",
      landmarks: ["Rothschild Boulevard", "Carmel Market", "Bauhaus architecture"],
      traditions: "Secular Jewish culture, arts, technology, and innovation hub"
    }
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    populations: {
      1850: 25000,
      1900: 40000,
      1920: 75000,
      1940: 175000,
      1960: 300000,
      1980: 350000,
      2000: 350000,
      2025: 277000
    },
    social: {
      instagram: [
        { type: 'hashtag', value: 'JewishParis', url: 'https://www.instagram.com/explore/tags/jewishparis/' },
        { type: 'account', value: '@jewish_paris_example', url: 'https://www.instagram.com/jewish_paris_example/' }
      ]
    },
    culture: {
      description: "Largest Jewish community in Europe, with rich Sephardic and Ashkenazi traditions.",
      landmarks: ["Marais district", "Rue des Rosiers", "Grand Synagogue"],
      traditions: "French-Jewish culture, North African Jewish influence"
    }
  },
  {
    id: 5,
    name: "London",
    country: "United Kingdom",
    coordinates: [51.5074, -0.1278],
    populations: {
      1850: 18000,
      1900: 125000,
      1920: 200000,
      1940: 280000,
      1960: 280000,
      1980: 210000,
      2000: 195000,
      2025: 145000
    },
    culture: {
      description: "Historic Jewish community dating back centuries, with strong cultural and educational institutions.",
      landmarks: ["Bevis Marks Synagogue", "Jewish Museum London", "Golders Green"],
      traditions: "Anglo-Jewish culture, established community institutions"
    }
  },
  {
    id: 6,
    name: "Buenos Aires",
    country: "Argentina",
    coordinates: [-34.6037, -58.3816],
    populations: {
      1850: 0,
      1900: 5000,
      1920: 100000,
      1940: 240000,
      1960: 310000,
      1980: 300000,
      2000: 250000,
      2025: 180000
    },
    culture: {
      description: "Largest Jewish community in Latin America, primarily of Eastern European and Syrian descent.",
      landmarks: ["Once neighborhood", "Jewish cultural centers", "Synagogues"],
      traditions: "Yiddish theater, Jewish tango, community organizations"
    }
  },
  {
    id: 7,
    name: "Moscow",
    country: "Russia",
    coordinates: [55.7558, 37.6173],
    populations: {
      1850: 0,
      1900: 8000,
      1920: 28000,
      1940: 400000,
      1960: 500000,
      1980: 285000,
      2000: 200000,
      2025: 95000
    },
    culture: {
      description: "Historical center of Russian Jewry, experienced dramatic changes through Soviet period.",
      landmarks: ["Moscow Choral Synagogue", "Jewish Museum and Tolerance Center"],
      traditions: "Russian-Jewish literature, music, refusenik movement history"
    }
  },
  {
    id: 8,
    name: "Warsaw",
    country: "Poland",
    coordinates: [52.2297, 21.0122],
    populations: {
      1850: 125000,
      1900: 219000,
      1920: 310000,
      1940: 380000,
      1960: 5000,
      1980: 6000,
      2000: 3500,
      2025: 4500
    },
    culture: {
      description: "Once a major center of Jewish life with 380,000 Jews in 1940 - the largest Jewish community in Europe. The Holocaust and Warsaw Ghetto Uprising virtually destroyed the community. Today only 4,500 remain, with a slowly reviving Jewish presence.",
      landmarks: ["POLIN Museum", "Nożyk Synagogue", "Former Ghetto area"],
      traditions: "Memorial culture, revival of Jewish life, historical significance"
    }
  },
  {
    id: 9,
    name: "Berlin",
    country: "Germany",
    coordinates: [52.5200, 13.4050],
    populations: {
      1850: 8000,
      1900: 92000,
      1920: 172000,
      1940: 75000,
      1960: 6000,
      1980: 6000,
      2000: 11000,
      2025: 28000
    },
    culture: {
      description: "Pre-1933 had 160,000 Jews (1/3 of Germany's Jews). Nazi persecution forced mass emigration. Today experiencing renaissance with Russian immigration.",
      landmarks: ["New Synagogue", "Jewish Museum Berlin", "Memorial to the Murdered Jews of Europe"],
      traditions: "Cultural revival, Russian and Israeli immigration, memorial culture"
    }
  },
  {
    id: 10,
    name: "Los Angeles",
    country: "United States",
    coordinates: [34.0522, -118.2437],
    populations: {
      1850: 0,
      1900: 2500,
      1920: 20000,
      1940: 130000,
      1960: 400000,
      1980: 455000,
      2000: 668000,
      2025: 662000
    },
    culture: {
      description: "Second largest Jewish community in the US, major center of Jewish film and entertainment industry.",
      landmarks: ["Fairfax district", "Pico-Robertson", "Valley Beth Shalom"],
      traditions: "Entertainment industry influence, Persian Jewish community, diverse denominations"
    }
  },
  {
    id: 11,
    name: "Miami",
    country: "United States",
    coordinates: [25.7617, -80.1918],
    populations: {
      1850: 0,
      1900: 0,
      1920: 1000,
      1940: 8000,
      1960: 140000,
      1980: 225000,
      2000: 535000,
      2025: 650000
    },
    culture: {
      description: "Growing community with large populations from Latin America and Northeast US.",
      landmarks: ["Miami Beach historic synagogues", "South Florida Jewish centers"],
      traditions: "Retirement destination, Latin American Jewish communities, seasonal residents"
    }
  },
  {
    id: 13,
    name: "São Paulo",
    country: "Brazil",
    coordinates: [-23.5505, -46.6333],
    populations: {
      1850: 0,
      1900: 500,
      1920: 5000,
      1940: 20000,
      1960: 55000,
      1980: 75000,
      2000: 80000,
      2025: 60000
    },
    culture: {
      description: "Largest Jewish community in Brazil, diverse origins including Syrian and Eastern European.",
      landmarks: ["Bom Retiro neighborhood", "Hebraica club", "CIP cultural center"],
      traditions: "Portuguese-Jewish culture, community organizations, Sephardic traditions"
    }
  },
  {
    id: 14,
    name: "Melbourne",
    country: "Australia",
    coordinates: [-37.8136, 144.9631],
    populations: {
      1850: 0,
      1900: 6000,
      1920: 8000,
      1940: 15000,
      1960: 30000,
      1980: 35000,
      2000: 45000,
      2025: 60000
    },
    culture: {
      description: "Vibrant community with strong Holocaust survivor presence and modern Orthodox communities.",
      landmarks: ["St Kilda area", "Caulfield synagogues", "Jewish Holocaust Centre"],
      traditions: "Strong day school system, active cultural life"
    }
  },
  {
    id: 15,
    name: "Casablanca",
    country: "Morocco",
    coordinates: [33.5731, -7.5898],
    populations: {
      1850: 8000,
      1900: 10000,
      1920: 30000,
      1940: 50000,
      1960: 60000,
      1980: 8000,
      2000: 3500,
      2025: 2500
    },
    culture: {
      description: "Once a major center of North African Jewry, now much reduced but historically significant.",
      landmarks: ["Mellah (Jewish quarter)", "Beth-El Synagogue", "Jewish Museum of Casablanca"],
      traditions: "Sephardic and Mizrahi traditions, Judeo-Arabic culture"
    }
  },
  {
    id: 16,
    name: "Vienna",
    country: "Austria",
    coordinates: [48.2082, 16.3738],
    populations: {
      1850: 10000,
      1900: 147000,
      1920: 200000,
      1940: 166000,
      1960: 9000,
      1980: 8000,
      2000: 7000,
      2025: 10000
    },
    culture: {
      description: "Major center of Jewish culture and intellectual life in Europe before WWII, home to prominent figures in arts, sciences, and philosophy. Had 166,000 Jews in 1939 before the Holocaust; today only 10,000 remain.",
      landmarks: ["Stadttempel", "Jewish Museum Vienna", "Judenplatz Holocaust Memorial"],
      traditions: "Viennese Jewish intellectual tradition, Zionist movement history"
    }
  },
  {
    id: 17,
    name: "Budapest",
    country: "Hungary",
    coordinates: [47.4979, 19.0402],
    populations: {
      1850: 20000,
      1900: 185000,
      1920: 200000,
      1940: 200000,
      1960: 80000,
      1980: 80000,
      2000: 80000,
      2025: 47000
    },
    culture: {
      description: "Once one of the largest Jewish communities in Europe with 200,000 Jews in 1940. The Holocaust devastated the community; today only 47,000 remain, still the largest in East Central Europe.",
      landmarks: ["Dohány Street Synagogue", "Jewish Quarter", "Shoes on the Danube memorial"],
      traditions: "Vibrant Jewish cultural life, Neolog Judaism tradition"
    }
  },
  {
    id: 18,
    name: "Odessa",
    country: "Ukraine",
    coordinates: [46.4825, 30.7233],
    populations: {
      1850: 12000,
      1900: 140000,
      1920: 150000,
      1940: 200000,
      1960: 100000,
      1980: 120000,
      2000: 60000,
      2025: 45000
    },
    culture: {
      description: "Major port city and center of Jewish life in southern Russia and Ukraine, known for its vibrant Yiddish culture. Had 200,000 Jews in 1940; the Holocaust, Soviet policies, and post-1991 emigration reduced the community to 45,000 today.",
      landmarks: ["Brodsky Synagogue", "Preobrazhenskaya Street", "Old Jewish Quarter"],
      traditions: "Odessa Jewish humor, Yiddish literature, maritime trade tradition"
    }
  },
  {
    id: 19,
    name: "Lviv",
    country: "Ukraine",
    coordinates: [49.8397, 24.0297],
    populations: {
      1850: 20000,
      1900: 50000,
      1920: 70000,
      1940: 110000,
      1960: 2000,
      1980: 3000,
      2000: 5000,
      2025: 6000
    },
    culture: {
      description: "Important center of Jewish scholarship and Hasidism, once known as 'Little Vienna' of the East. Had 110,000 Jews in 1940; the Holocaust and Soviet persecution decimated the community to just 6,000 today.",
      landmarks: ["Golden Rose Synagogue ruins", "Jewish Quarter", "Space of Synagogues memorial"],
      traditions: "Hasidic traditions, Galician Jewish culture"
    }
  },
  {
    id: 20,
    name: "Vilnius",
    country: "Lithuania",
    coordinates: [54.6872, 25.2797],
    populations: {
      1850: 30000,
      1900: 70000,
      1920: 50000,
      1940: 55000,
      1960: 5000,
      1980: 8000,
      2000: 4000,
      2025: 5000
    },
    culture: {
      description: "Known as the 'Jerusalem of Lithuania,' a center of Jewish learning and Yiddish culture. Had 55,000 Jews in 1940 before the Holocaust virtually destroyed the community. Only 5,000 remain today.",
      landmarks: ["Vilna Gaon Jewish State Museum", "Choral Synagogue", "Old Jewish Quarter"],
      traditions: "Litvak tradition, Vilna Gaon heritage, Yiddish scholarly tradition"
    }
  },
  {
    id: 21,
    name: "Krakow",
    country: "Poland",
    coordinates: [50.0647, 19.9450],
    populations: {
      1850: 13000,
      1900: 25000,
      1920: 30000,
      1940: 60000,
      1960: 1000,
      1980: 500,
      2000: 800,
      2025: 1000
    },
    culture: {
      description: "Ancient Jewish community with rich history, home to Kazimierz district and center of Polish Jewish life. Had 60,000 Jews in 1940; the Holocaust reduced this to just 1,000 today.",
      landmarks: ["Kazimierz Jewish Quarter", "Remuh Synagogue", "Galicia Jewish Museum"],
      traditions: "Traditional Polish Jewish culture, Hasidic heritage"
    }
  },
  {
    id: 22,
    name: "Abidjan",
    country: "Côte d'Ivoire",
    coordinates: [5.3600, -4.0083],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 50,
      1960: 100,
      1980: 150,
      2000: 200,
      2025: 300
    },
    social: {
      instagram: [
        { type: 'hashtag', value: 'JewishIvoryCoast', url: 'https://www.instagram.com/explore/tags/jewishivorycoast/' },
        { type: 'hashtag', value: 'CommunauteJuiveAbidjan', url: 'https://www.instagram.com/explore/tags/communautejuiveabidjan/' }
      ]
    },
    culture: {
      description: "Small but vibrant Jewish community in West Africa, primarily of Sephardic and Lebanese origin.",
      landmarks: ["Abidjan Synagogue", "Jewish Community Center"],
      traditions: "Sephardic traditions, West African Jewish life"
    }
  },
  {
    id: 23,
    name: "Chicago",
    country: "United States",
    coordinates: [41.8781, -87.6298],
    populations: {
      1850: 0,
      1900: 75000,
      1920: 250000,
      1940: 330000,
      1960: 282000,
      1980: 248000,
      2000: 265000,
      2025: 310000
    },
    culture: {
      description: "Third largest Jewish community in the US with strong institutions and diverse neighborhoods.",
      landmarks: ["West Rogers Park", "Skokie", "Highland Park"],
      traditions: "Midwest Jewish culture, strong educational institutions"
    }
  },
  {
    id: 24,
    name: "Philadelphia",
    country: "United States",
    coordinates: [39.9526, -75.1652],
    populations: {
      1850: 8000,
      1900: 75000,
      1920: 200000,
      1940: 295000,
      1960: 335000,
      1980: 295000,
      2000: 285000,
      2025: 327525
    },
    culture: {
      description: "One of America's oldest and most established Jewish communities.",
      landmarks: ["Society Hill", "Northeast Philadelphia", "Main Line"],
      traditions: "Colonial Jewish history, strong community federations"
    }
  },
  {
    id: 25,
    name: "Boston",
    country: "United States",
    coordinates: [42.3601, -71.0589],
    populations: {
      1850: 2000,
      1900: 40000,
      1920: 100000,
      1940: 190000,
      1960: 185000,
      1980: 170000,
      2000: 228000,
      2025: 260000
    },
    culture: {
      description: "Vibrant intellectual and cultural Jewish community with strong universities.",
      landmarks: ["Brookline", "Newton", "Cambridge"],
      traditions: "Academic Jewish culture, strong Zionist movement history"
    }
  },
  {
    id: 26,
    name: "San Francisco",
    country: "United States",
    coordinates: [37.7749, -122.4194],
    populations: {
      1850: 0,
      1900: 15000,
      1920: 25000,
      1940: 35000,
      1960: 70000,
      1980: 210000,
      2000: 210000,
      2025: 250000
    },
    culture: {
      description: "Progressive and diverse Jewish community on the West Coast.",
      landmarks: ["Richmond District", "Peninsula communities"],
      traditions: "Liberal Judaism, technology sector influence"
    }
  },
  {
    id: 27,
    name: "Washington DC",
    country: "United States",
    coordinates: [38.9072, -77.0369],
    populations: {
      1850: 200,
      1900: 5000,
      1920: 13000,
      1940: 28000,
      1960: 81000,
      1980: 160000,
      2000: 215000,
      2025: 215600
    },
    culture: {
      description: "Capital region Jewish community with strong political engagement.",
      landmarks: ["Georgetown", "Bethesda", "Rockville"],
      traditions: "Political activism, strong advocacy organizations"
    }
  },
  {
    id: 28,
    name: "Atlanta",
    country: "United States",
    coordinates: [33.7490, -84.3880],
    populations: {
      1850: 0,
      1900: 2000,
      1920: 10000,
      1940: 12000,
      1960: 17000,
      1980: 30000,
      2000: 86000,
      2025: 119800
    },
    culture: {
      description: "Growing Southern Jewish community with diverse origins.",
      landmarks: ["Buckhead", "Sandy Springs", "Dunwoody"],
      traditions: "Southern Jewish culture, strong community centers"
    }
  },
  {
    id: 29,
    name: "Cleveland",
    country: "United States",
    coordinates: [41.4993, -81.6944],
    populations: {
      1850: 100,
      1900: 30000,
      1920: 75000,
      1940: 85000,
      1960: 80000,
      1980: 70000,
      2000: 81000,
      2025: 86600
    },
    culture: {
      description: "Historic Jewish community with strong institutional base.",
      landmarks: ["Cleveland Heights", "Beachwood", "Jewish Community Center"],
      traditions: "Midwestern Jewish culture, philanthropy"
    }
  },
  {
    id: 30,
    name: "Denver",
    country: "United States",
    coordinates: [39.7392, -104.9903],
    populations: {
      1850: 0,
      1900: 5000,
      1920: 12000,
      1940: 15000,
      1960: 18000,
      1980: 35000,
      2000: 73000,
      2025: 83900
    },
    culture: {
      description: "Mountain West Jewish community with outdoor lifestyle.",
      landmarks: ["Cherry Creek", "Boulder County", "Highland Ranch"],
      traditions: "Western Jewish culture, environmental activism"
    }
  },
  {
    id: 31,
    name: "Phoenix",
    country: "United States",
    coordinates: [33.4484, -112.0740],
    populations: {
      1850: 0,
      1900: 200,
      1920: 800,
      1940: 1500,
      1960: 7500,
      1980: 35000,
      2000: 82000,
      2025: 82900
    },
    culture: {
      description: "Desert community with many retirees and transplants.",
      landmarks: ["Scottsdale", "Paradise Valley"],
      traditions: "Retirement destination, diverse backgrounds"
    }
  },
  {
    id: 32,
    name: "Haifa",
    country: "Israel Palestine",
    coordinates: [32.7940, 34.9896],
    populations: {
      1850: 500,
      1900: 3000,
      1920: 6000,
      1940: 60000,
      1960: 155000,
      1980: 210000,
      2000: 230000,
      2025: 217600
    },
    culture: {
      description: "Major port city with diverse population and Bahai gardens.",
      landmarks: ["Bahai Gardens", "Carmel Center", "German Colony"],
      traditions: "Mixed Jewish-Arab coexistence, technology hub"
    }
  },
  {
    id: 33,
    name: "Rishon LeZion",
    country: "Israel Palestine",
    coordinates: [31.9730, 34.7925],
    populations: {
      1850: 0,
      1900: 400,
      1920: 2000,
      1940: 10000,
      1960: 38000,
      1980: 103000,
      2000: 188000,
      2025: 229300
    },
    culture: {
      description: "One of the first modern Jewish settlements in Israel.",
      landmarks: ["First settlements", "Wine cellars", "Heritage center"],
      traditions: "Pioneering Zionist history, wine culture"
    }
  },
  {
    id: 34,
    name: "Petah Tikva",
    country: "Israel Palestine",
    coordinates: [32.0853, 34.8878],
    populations: {
      1850: 0,
      1900: 300,
      1920: 3500,
      1940: 20000,
      1960: 55000,
      1980: 113000,
      2000: 167000,
      2025: 220900
    },
    culture: {
      description: "Known as the 'Mother of Settlements' in modern Israel.",
      landmarks: ["Yarkon Park", "Historic settlements"],
      traditions: "Agricultural heritage, early Zionist pioneering"
    }
  },
  {
    id: 35,
    name: "Ashdod",
    country: "Israel Palestine",
    coordinates: [31.8044, 34.6553],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 0,
      1960: 4600,
      1980: 65000,
      2000: 155000,
      2025: 200400
    },
    culture: {
      description: "Major port city with diverse immigrant population.",
      landmarks: ["Port of Ashdod", "Beaches", "Maritime museum"],
      traditions: "Maritime culture, immigrant absorption"
    }
  },
  {
    id: 36,
    name: "Netanya",
    country: "Israel Palestine",
    coordinates: [32.3215, 34.8532],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 6000,
      1960: 42000,
      1980: 90000,
      2000: 150000,
      2025: 190000
    },
    culture: {
      description: "Coastal resort city with large French immigrant population.",
      landmarks: ["Coastal promenade", "Beaches", "Diamond industry"],
      traditions: "French Jewish culture, resort lifestyle"
    }
  },
  {
    id: 37,
    name: "Beersheba",
    country: "Israel Palestine",
    coordinates: [31.2530, 34.7915],
    populations: {
      1850: 0,
      1900: 800,
      1920: 2000,
      1940: 6000,
      1960: 45000,
      1980: 110000,
      2000: 170000,
      2025: 185000
    },
    culture: {
      description: "Capital of the Negev desert region.",
      landmarks: ["Old City", "Negev Museum", "Ben Gurion University"],
      traditions: "Desert pioneering, Bedouin-Jewish coexistence"
    }
  },
  {
    id: 38,
    name: "Marseille",
    country: "France",
    coordinates: [43.2965, 5.3698],
    populations: {
      1850: 2000,
      1900: 4000,
      1920: 8000,
      1940: 15000,
      1960: 50000,
      1980: 65000,
      2000: 70000,
      2025: 75000
    },
    culture: {
      description: "Third largest Jewish community in Europe, mostly North African descent.",
      landmarks: ["Grand Synagogue", "Jewish quarter"],
      traditions: "Sephardic and North African Jewish culture"
    }
  },
  {
    id: 40,
    name: "Manchester",
    country: "United Kingdom",
    coordinates: [53.4808, -2.2426],
    populations: {
      1850: 2000,
      1900: 25000,
      1920: 30000,
      1940: 35000,
      1960: 35000,
      1980: 30000,
      2000: 25000,
      2025: 30000
    },
    culture: {
      description: "Major provincial Jewish community in Northern England.",
      landmarks: ["Prestwich", "Broughton Park", "Jewish Museum"],
      traditions: "Industrial Jewish history, textile trade"
    }
  },
  {
    id: 41,
    name: "Antwerp",
    country: "Belgium",
    coordinates: [51.2194, 4.4025],
    populations: {
      1850: 1000,
      1900: 10000,
      1920: 35000,
      1940: 50000,
      1960: 13000,
      1980: 15000,
      2000: 18000,
      2025: 20000
    },
    culture: {
      description: "Major center of Orthodox Judaism and diamond trade.",
      landmarks: ["Diamond district", "Jewish quarter", "Synagogues"],
      traditions: "Ultra-Orthodox communities, diamond industry"
    }
  },
  {
    id: 42,
    name: "Brussels",
    country: "Belgium",
    coordinates: [50.8503, 4.3517],
    populations: {
      1850: 500,
      1900: 5000,
      1920: 30000,
      1940: 50000,
      1960: 24000,
      1980: 20000,
      2000: 20000,
      2025: 20000
    },
    culture: {
      description: "Capital city with diverse Jewish community.",
      landmarks: ["European Quarter", "Jewish Museum of Belgium"],
      traditions: "European Jewish institutions, international community"
    }
  },
  {
    id: 43,
    name: "Rome",
    country: "Italy",
    coordinates: [41.9028, 12.4964],
    populations: {
      1850: 5000,
      1900: 10000,
      1920: 12000,
      1940: 11000,
      1960: 12000,
      1980: 15000,
      2000: 15000,
      2025: 13000
    },
    culture: {
      description: "Ancient Jewish community dating back to Roman times.",
      landmarks: ["Roman Ghetto", "Great Synagogue", "Jewish Museum of Rome"],
      traditions: "Roman Jewish rite, ancient traditions"
    }
  },
  {
    id: 44,
    name: "Milan",
    country: "Italy",
    coordinates: [45.4642, 9.1900],
    populations: {
      1850: 3000,
      1900: 4000,
      1920: 6000,
      1940: 8000,
      1960: 6000,
      1980: 8000,
      2000: 10000,
      2025: 8000
    },
    culture: {
      description: "Financial and fashion capital with established Jewish community.",
      landmarks: ["Central Synagogue", "Jewish quarter"],
      traditions: "Italian Jewish culture, business community"
    }
  },
  {
    id: 45,
    name: "Sydney",
    country: "Australia",
    coordinates: [-33.8688, 151.2093],
    populations: {
      1850: 0,
      1900: 5000,
      1920: 8000,
      1940: 15000,
      1960: 25000,
      1980: 32000,
      2000: 44000,
      2025: 50000
    },
    culture: {
      description: "Largest Jewish community in Australia.",
      landmarks: ["Bondi", "Eastern suburbs", "Great Synagogue"],
      traditions: "Beach culture, strong day school system"
    }
  },
  {
    id: 46,
    name: "Johannesburg",
    country: "South Africa",
    coordinates: [-26.2041, 28.0473],
    populations: {
      1850: 0,
      1900: 2000,
      1920: 25000,
      1940: 50000,
      1960: 110000,
      1980: 118000,
      2000: 70000,
      2025: 50000
    },
    culture: {
      description: "Largest Jewish community in Africa.",
      landmarks: ["Houghton", "Sandton", "Great Park Synagogue"],
      traditions: "Lithuanian Jewish heritage, strong Zionist movement"
    }
  },
  {
    id: 47,
    name: "Mexico City",
    country: "Mexico",
    coordinates: [19.4326, -99.1332],
    populations: {
      1850: 0,
      1900: 100,
      1920: 2500,
      1940: 5000,
      1960: 20000,
      1980: 35000,
      2000: 40000,
      2025: 39777
    },
    culture: {
      description: "Largest Jewish community in Latin America outside Argentina.",
      landmarks: ["Polanco", "Interlomas", "Jewish sports center"],
      traditions: "Sephardic and Ashkenazi communities, strong institutions"
    }
  },
  {
    id: 48,
    name: "Kiev",
    country: "Ukraine",
    coordinates: [50.4501, 30.5234],
    populations: {
      1850: 4500,
      1900: 80000,
      1920: 140000,
      1940: 175000,
      1960: 150000,
      1980: 170000,
      2000: 110000,
      2025: 20000
    },
    culture: {
      description: "Historic center of Ukrainian Jewry, significantly impacted by recent conflicts.",
      landmarks: ["Podil district", "Babi Yar memorial"],
      traditions: "Ukrainian Jewish culture, Hasidic traditions"
    }
  },
  {
    id: 49,
    name: "Istanbul",
    country: "Turkey",
    coordinates: [41.0082, 28.9784],
    populations: {
      1850: 50000,
      1900: 100000,
      1920: 55000,
      1940: 50000,
      1960: 40000,
      1980: 20000,
      2000: 18000,
      2025: 14300
    },
    culture: {
      description: "Ancient Sephardic community, second-largest in Muslim world.",
      landmarks: ["Neve Shalom Synagogue", "Balat district", "Jewish museums"],
      traditions: "Ladino language, Sephardic traditions"
    }
  },
  {
    id: 50,
    name: "Baltimore",
    country: "United States",
    coordinates: [39.2904, -76.6122],
    populations: {
      1850: 4000,
      1900: 25000,
      1920: 65000,
      1940: 75000,
      1960: 85000,
      1980: 92000,
      2000: 106000,
      2025: 115000
    },
    culture: {
      description: "Major center of Orthodox Judaism in America.",
      landmarks: ["Park Heights", "Pikesville", "Ner Israel Rabbinical College"],
      traditions: "Orthodox institutions, strong yeshiva system"
    }
  },
  {
    id: 51,
    name: "Detroit",
    country: "United States",
    coordinates: [42.3314, -83.0458],
    populations: {
      1850: 50,
      1900: 15000,
      1920: 50000,
      1940: 80000,
      1960: 100000,
      1980: 80000,
      2000: 94000,
      2025: 70000
    },
    culture: {
      description: "Historic automotive-era Jewish community.",
      landmarks: ["Oak Park", "West Bloomfield", "Jewish Community Center"],
      traditions: "Labor movement history, automotive industry"
    }
  },
  {
    id: 52,
    name: "Seattle",
    country: "United States",
    coordinates: [47.6062, -122.3321],
    populations: {
      1850: 0,
      1900: 2000,
      1920: 7000,
      1940: 10000,
      1960: 15000,
      1980: 22000,
      2000: 42000,
      2025: 65000
    },
    culture: {
      description: "Pacific Northwest Jewish community with tech industry influence.",
      landmarks: ["Capitol Hill", "Mercer Island", "Seward Park"],
      traditions: "Progressive Judaism, technology sector"
    }
  },
  {
    id: 53,
    name: "Singapore",
    country: "Singapore",
    coordinates: [1.3521, 103.8198],
    populations: {
      1850: 0,
      1900: 200,
      1920: 500,
      1940: 1000,
      1960: 800,
      1980: 1200,
      2000: 2000,
      2025: 2500
    },
    culture: {
      description: "Small but vibrant international Jewish community.",
      landmarks: ["Maghain Aboth Synagogue", "Jewish Welfare Board"],
      traditions: "Baghdadi Jewish heritage, international community"
    }
  },
  {
    id: 54,
    name: "Ramat Gan",
    country: "Israel Palestine",
    coordinates: [32.0719, 34.8242],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 12000,
      1960: 80000,
      1980: 115000,
      2000: 130000,
      2025: 167000
    },
    culture: {
      description: "Major city in Tel Aviv metropolitan area, home to diamond exchange.",
      landmarks: ["Diamond Exchange District", "National Stadium", "Safari Park"],
      traditions: "Business hub, diamond industry"
    }
  },
  {
    id: 55,
    name: "Holon",
    country: "Israel Palestine",
    coordinates: [32.0114, 34.7742],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 3000,
      1960: 65000,
      1980: 133000,
      2000: 165000,
      2025: 192000
    },
    culture: {
      description: "Industrial city in Tel Aviv metropolitan area known for design.",
      landmarks: ["Design Museum Holon", "Children's Museum"],
      traditions: "Industrial heritage, design culture"
    }
  },
  {
    id: 56,
    name: "Bnei Brak",
    country: "Israel Palestine",
    coordinates: [32.0809, 34.8338],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 10000,
      1960: 47000,
      1980: 96000,
      2000: 138000,
      2025: 234000
    },
    culture: {
      description: "Major center of Haredi Judaism in Israel.",
      landmarks: ["Ponevezh Yeshiva", "Religious institutions"],
      traditions: "Ultra-Orthodox lifestyle, Torah study"
    }
  },
  {
    id: 57,
    name: "Bat Yam",
    country: "Israel Palestine",
    coordinates: [32.0188, 34.7498],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 0,
      1960: 22000,
      1980: 130000,
      2000: 145000,
      2025: 131000
    },
    culture: {
      description: "Coastal city south of Tel Aviv with large Russian immigrant population.",
      landmarks: ["Beaches", "Promenade"],
      traditions: "Russian-Jewish culture, beach lifestyle"
    }
  },
  {
    id: 58,
    name: "San Diego",
    country: "United States",
    coordinates: [32.7157, -117.1611],
    populations: {
      1850: 0,
      1900: 200,
      1920: 2000,
      1940: 5000,
      1960: 20000,
      1980: 60000,
      2000: 89000,
      2025: 100000
    },
    culture: {
      description: "Growing Southern California Jewish community.",
      landmarks: ["La Jolla", "University City"],
      traditions: "West Coast lifestyle, biotech industry"
    }
  },
  {
    id: 59,
    name: "Las Vegas",
    country: "United States",
    coordinates: [36.1699, -115.1398],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 100,
      1960: 5000,
      1980: 15000,
      2000: 70000,
      2025: 80000
    },
    culture: {
      description: "Rapidly growing Jewish community in the desert.",
      landmarks: ["Temple Beth Sholom", "Hebrew Academy"],
      traditions: "Entertainment industry, retirement destination"
    }
  },
  {
    id: 60,
    name: "St. Louis",
    country: "United States",
    coordinates: [38.6270, -90.1994],
    populations: {
      1850: 100,
      1900: 20000,
      1920: 60000,
      1940: 75000,
      1960: 65000,
      1980: 57000,
      2000: 54000,
      2025: 54500
    },
    culture: {
      description: "Historic Midwest Jewish community.",
      landmarks: ["Central West End", "Jewish Community Center"],
      traditions: "Midwest Jewish culture, St. Louis bagels"
    }
  },
  {
    id: 61,
    name: "Rehovot",
    country: "Israel Palestine",
    coordinates: [31.8969, 34.8186],
    populations: {
      1850: 0,
      1900: 200,
      1920: 1200,
      1940: 10000,
      1960: 40000,
      1980: 62000,
      2000: 95000,
      2025: 145000
    },
    culture: {
      description: "Science city, home to Weizmann Institute.",
      landmarks: ["Weizmann Institute of Science", "Ayalon Institute"],
      traditions: "Scientific research, citrus farming heritage"
    }
  },
  {
    id: 62,
    name: "Herzliya",
    country: "Israel Palestine",
    coordinates: [32.1624, 34.8436],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 3000,
      1960: 27000,
      1980: 60000,
      2000: 84000,
      2025: 105000
    },
    culture: {
      description: "Affluent coastal city known for tech industry.",
      landmarks: ["Marina", "High-tech park", "Beaches"],
      traditions: "Tech industry, affluent lifestyle"
    }
  },
  {
    id: 63,
    name: "Kfar Saba",
    country: "Israel Palestine",
    coordinates: [32.1842, 34.9077],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 2000,
      1960: 20000,
      1980: 45000,
      2000: 75000,
      2025: 110000
    },
    culture: {
      description: "Sharon plain city with high quality of life.",
      landmarks: ["Kfar Saba Park"],
      traditions: "Family-oriented community"
    }
  },
  {
    id: 64,
    name: "Modiin",
    country: "Israel Palestine",
    coordinates: [31.8969, 35.0104],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 0,
      1960: 0,
      1980: 0,
      2000: 15000,
      2025: 110000
    },
    culture: {
      description: "Modern planned city between Jerusalem and Tel Aviv.",
      landmarks: ["Anava neighborhood", "Park HaMesila"],
      traditions: "New immigrant absorption, Anglo community"
    }
  },
  {
    id: 65,
    name: "Eilat",
    country: "Israel Palestine",
    coordinates: [29.5577, 34.9519],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 0,
      1960: 5000,
      1980: 18000,
      2000: 43000,
      2025: 55000
    },
    culture: {
      description: "Southernmost city, major resort destination on Red Sea.",
      landmarks: ["Coral reefs", "Underwater observatory", "Resort hotels"],
      traditions: "Tourism industry, diving culture"
    }
  },
  {
    id: 66,
    name: "Nahariya",
    country: "Israel Palestine",
    coordinates: [33.0086, 35.0953],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 1500,
      1960: 15000,
      1980: 27000,
      2000: 45000,
      2025: 62000
    },
    culture: {
      description: "Northern coastal city near Lebanon border.",
      landmarks: ["Beaches", "Gaaton River"],
      traditions: "German Jewish founders, coastal lifestyle"
    }
  },
  {
    id: 67,
    name: "Amsterdam",
    country: "Netherlands",
    coordinates: [52.3676, 4.9041],
    populations: {
      1850: 25000,
      1900: 60000,
      1920: 80000,
      1940: 80000,
      1960: 12000,
      1980: 15000,
      2000: 25000,
      2025: 30000
    },
    culture: {
      description: "Had 80,000 Jews in 1940; the Holocaust killed over 75% of Dutch Jewry. Population dropped to just 12,000 by 1960. Community now slowly recovering with 30,000 members today.",
      landmarks: ["Anne Frank House", "Jewish Historical Museum", "Portuguese Synagogue"],
      traditions: "Sephardic and Ashkenazi traditions, memorial culture"
    }
  },
  {
    id: 68,
    name: "Copenhagen",
    country: "Denmark",
    coordinates: [55.6761, 12.5683],
    populations: {
      1850: 2000,
      1900: 4000,
      1920: 6000,
      1940: 6000,
      1960: 5500,
      1980: 6000,
      2000: 6500,
      2025: 7000
    },
    culture: {
      description: "Small but significant Scandinavian Jewish community.",
      landmarks: ["Great Synagogue", "Jewish Museum"],
      traditions: "Danish Jewish rescue story, Nordic Jewish life"
    }
  },
  {
    id: 69,
    name: "Stockholm",
    country: "Sweden",
    coordinates: [59.3293, 18.0686],
    populations: {
      1850: 1000,
      1900: 3000,
      1920: 5000,
      1940: 7000,
      1960: 8000,
      1980: 12000,
      2000: 18000,
      2025: 20000
    },
    culture: {
      description: "Largest Jewish community in Scandinavia.",
      landmarks: ["Great Synagogue", "Jewish Museum"],
      traditions: "Nordic Jewish culture, Raoul Wallenberg legacy"
    }
  },
  {
    id: 70,
    name: "Zurich",
    country: "Switzerland",
    coordinates: [47.3769, 8.5417],
    populations: {
      1850: 500,
      1900: 2000,
      1920: 5000,
      1940: 6000,
      1960: 6000,
      1980: 6500,
      2000: 6500,
      2025: 7000
    },
    culture: {
      description: "Swiss financial center with established Jewish community.",
      landmarks: ["Synagogues", "Jewish Museum of Switzerland"],
      traditions: "Swiss Jewish culture, banking heritage"
    }
  },
  {
    id: 71,
    name: "Geneva",
    country: "Switzerland",
    coordinates: [46.2044, 6.1432],
    populations: {
      1850: 300,
      1900: 1000,
      1920: 2000,
      1940: 2500,
      1960: 3000,
      1980: 4000,
      2000: 5000,
      2025: 5500
    },
    culture: {
      description: "International city with diverse Jewish community.",
      landmarks: ["Synagogues", "International organizations"],
      traditions: "International Jewish community, diplomacy"
    }
  },
  {
    id: 72,
    name: "St. Petersburg",
    country: "Russia",
    coordinates: [59.9343, 30.3351],
    populations: {
      1850: 10000,
      1900: 30000,
      1920: 50000,
      1940: 200000,
      1960: 165000,
      1980: 150000,
      2000: 100000,
      2025: 70000
    },
    culture: {
      description: "Historic Russian Jewish community, second largest in Russia.",
      landmarks: ["Grand Choral Synagogue", "Jewish Community Center"],
      traditions: "Russian Jewish intelligentsia, cultural heritage"
    }
  },
  {
    id: 73,
    name: "Minsk",
    country: "Belarus",
    coordinates: [53.9006, 27.5590],
    populations: {
      1850: 10000,
      1900: 50000,
      1920: 70000,
      1940: 80000,
      1960: 50000,
      1980: 70000,
      2000: 30000,
      2025: 10000
    },
    culture: {
      description: "Historic center of Belarusian Jewry. Had 80,000 Jews in 1940; the Holocaust and Soviet emigration reduced the community to just 10,000 today.",
      landmarks: ["Memorial sites", "Synagogues"],
      traditions: "Belarusian Jewish history, memorial culture"
    }
  },
  {
    id: 74,
    name: "Dallas",
    country: "United States",
    coordinates: [32.7767, -96.7970],
    populations: {
      1850: 0,
      1900: 1000,
      1920: 7000,
      1940: 14000,
      1960: 20000,
      1980: 35000,
      2000: 45000,
      2025: 75000
    },
    culture: {
      description: "Major Texas Jewish community with strong institutions.",
      landmarks: ["North Dallas", "Jewish Community Center"],
      traditions: "Texas Jewish culture, business community"
    }
  },
  {
    id: 75,
    name: "Houston",
    country: "United States",
    coordinates: [29.7604, -95.3698],
    populations: {
      1850: 0,
      1900: 500,
      1920: 4000,
      1940: 8000,
      1960: 18000,
      1980: 32000,
      2000: 42000,
      2025: 51000
    },
    culture: {
      description: "Diverse Texas Jewish community with energy sector ties.",
      landmarks: ["Meyerland", "Jewish Community Center"],
      traditions: "Energy industry, Southern hospitality"
    }
  },
  {
    id: 76,
    name: "Tampa",
    country: "United States",
    coordinates: [27.9506, -82.4572],
    populations: {
      1850: 0,
      1900: 100,
      1920: 500,
      1940: 2000,
      1960: 8000,
      1980: 18000,
      2000: 35000,
      2025: 51100
    },
    culture: {
      description: "Growing Florida Gulf Coast Jewish community.",
      landmarks: ["South Tampa", "St. Petersburg"],
      traditions: "Retirement destination, Cuban Jewish heritage"
    }
  },
  {
    id: 77,
    name: "Minneapolis",
    country: "United States",
    coordinates: [44.9778, -93.2650],
    populations: {
      1850: 0,
      1900: 6000,
      1920: 20000,
      1940: 25000,
      1960: 30000,
      1980: 30000,
      2000: 42000,
      2025: 64800
    },
    culture: {
      description: "Upper Midwest Jewish community with strong institutions.",
      landmarks: ["St. Louis Park", "Highland Park"],
      traditions: "Midwestern values, strong Federation"
    }
  },
  {
    id: 78,
    name: "Pittsburgh",
    country: "United States",
    coordinates: [40.4406, -79.9959],
    populations: {
      1850: 1000,
      1900: 10000,
      1920: 50000,
      1940: 54000,
      1960: 45000,
      1980: 45000,
      2000: 45000,
      2025: 49200
    },
    culture: {
      description: "Historic steel-era Jewish community.",
      landmarks: ["Squirrel Hill", "Tree of Life Synagogue"],
      traditions: "Industrial heritage, strong community bonds"
    }
  },
  {
    id: 79,
    name: "Portland",
    country: "United States",
    coordinates: [45.5152, -122.6784],
    populations: {
      1850: 0,
      1900: 2000,
      1920: 7000,
      1940: 9000,
      1960: 11000,
      1980: 13000,
      2000: 25000,
      2025: 47500
    },
    culture: {
      description: "Pacific Northwest Jewish community.",
      landmarks: ["Hillsdale", "Congregation Neveh Shalom"],
      traditions: "Progressive values, environmental focus"
    }
  },
  {
    id: 80,
    name: "Cincinnati",
    country: "United States",
    coordinates: [39.1031, -84.5120],
    populations: {
      1850: 2000,
      1900: 10000,
      1920: 18000,
      1940: 22000,
      1960: 28000,
      1980: 25000,
      2000: 23000,
      2025: 22500
    },
    culture: {
      description: "Historic Midwest Jewish community, birthplace of Reform Judaism in America.",
      landmarks: ["Hebrew Union College", "Rockdale Temple"],
      traditions: "Reform Judaism heritage, German Jewish culture"
    }
  },
  {
    id: 81,
    name: "Columbus",
    country: "United States",
    coordinates: [39.9612, -82.9988],
    populations: {
      1850: 100,
      1900: 3000,
      1920: 9000,
      1940: 11000,
      1960: 16000,
      1980: 18000,
      2000: 20000,
      2025: 22000
    },
    culture: {
      description: "Ohio capital Jewish community.",
      landmarks: ["Bexley", "Jewish Community Center"],
      traditions: "Midwest values, university ties"
    }
  },
  {
    id: 82,
    name: "Charlotte",
    country: "United States",
    coordinates: [35.2271, -80.8431],
    populations: {
      1850: 0,
      1900: 500,
      1920: 1500,
      1940: 2000,
      1960: 4000,
      1980: 6000,
      2000: 10000,
      2025: 15000
    },
    culture: {
      description: "Largest Jewish community in the Carolinas.",
      landmarks: ["Shalom Park", "Temple Israel"],
      traditions: "New South Jewish culture"
    }
  },
  {
    id: 83,
    name: "Nashville",
    country: "United States",
    coordinates: [36.1627, -86.7816],
    populations: {
      1850: 0,
      1900: 2000,
      1920: 3000,
      1940: 3500,
      1960: 5000,
      1980: 7000,
      2000: 8000,
      2025: 11000
    },
    culture: {
      description: "Growing Tennessee Jewish community.",
      landmarks: ["West End", "Gordon Jewish Community Center"],
      traditions: "Music City culture, Southern hospitality"
    }
  },
  {
    id: 84,
    name: "Austin",
    country: "United States",
    coordinates: [30.2672, -97.7431],
    populations: {
      1850: 0,
      1900: 200,
      1920: 800,
      1940: 1200,
      1960: 2500,
      1980: 5000,
      2000: 12000,
      2025: 16300
    },
    culture: {
      description: "Rapidly growing tech hub Jewish community.",
      landmarks: ["West Austin", "Tarrytown"],
      traditions: "Tech industry, progressive values"
    }
  },
  {
    id: 85,
    name: "Tiberias",
    country: "Israel Palestine",
    coordinates: [32.7940, 35.5308],
    populations: {
      1850: 2000,
      1900: 3600,
      1920: 5000,
      1940: 11000,
      1960: 23000,
      1980: 30000,
      2000: 38000,
      2025: 48000
    },
    culture: {
      description: "Ancient holy city on the Sea of Galilee.",
      landmarks: ["Hot springs", "Tomb of Maimonides", "Old City"],
      traditions: "One of Four Holy Cities, religious significance"
    }
  },
  {
    id: 86,
    name: "Safed",
    country: "Israel Palestine",
    coordinates: [32.9658, 35.4983],
    populations: {
      1850: 4000,
      1900: 8000,
      1920: 9000,
      1940: 10000,
      1960: 12000,
      1980: 16000,
      2000: 24000,
      2025: 38000
    },
    culture: {
      description: "Ancient mystical city, center of Kabbalah.",
      landmarks: ["Artists' Quarter", "Ancient synagogues", "Kabbalah centers"],
      traditions: "Kabbalah, mysticism, art colony"
    }
  },
  {
    id: 87,
    name: "Ashkelon",
    country: "Israel Palestine",
    coordinates: [31.6688, 34.5742],
    populations: {
      1850: 0,
      1900: 500,
      1920: 1000,
      1940: 2000,
      1960: 24000,
      1980: 53000,
      2000: 94000,
      2025: 144000
    },
    culture: {
      description: "Ancient coastal city with modern development.",
      landmarks: ["National Park", "Marina", "Beaches"],
      traditions: "Immigrant absorption, coastal lifestyle"
    }
  },
  {
    id: 88,
    name: "Acre",
    country: "Israel Palestine",
    coordinates: [32.9267, 35.0831],
    populations: {
      1850: 2000,
      1900: 3000,
      1920: 5000,
      1940: 12000,
      1960: 20000,
      1980: 30000,
      2000: 35000,
      2025: 50000
    },
    culture: {
      description: "Ancient Crusader city with mixed population.",
      landmarks: ["Old City", "Crusader fortress", "Templar tunnel"],
      traditions: "Ancient history, mixed coexistence"
    }
  },
  {
    id: 89,
    name: "Lod",
    country: "Israel Palestine",
    coordinates: [31.9520, 34.8876],
    populations: {
      1850: 500,
      1900: 2000,
      1920: 5000,
      1940: 10000,
      1960: 25000,
      1980: 35000,
      2000: 50000,
      2025: 80000
    },
    culture: {
      description: "Ancient city near Ben Gurion Airport.",
      landmarks: ["Old City", "Great Mosque"],
      traditions: "Mixed population, transit hub"
    }
  },
  {
    id: 90,
    name: "Ramla",
    country: "Israel Palestine",
    coordinates: [31.9290, 34.8671],
    populations: {
      1850: 1000,
      1900: 3000,
      1920: 5000,
      1940: 8000,
      1960: 20000,
      1980: 35000,
      2000: 48000,
      2025: 75000
    },
    culture: {
      description: "Historic city in central Israel.",
      landmarks: ["White Tower", "Pool of Arches"],
      traditions: "Mixed population, historic architecture"
    }
  },
  {
    id: 91,
    name: "Munich",
    country: "Germany",
    coordinates: [48.1351, 11.5820],
    populations: {
      1850: 2000,
      1900: 8000,
      1920: 11000,
      1940: 9000,
      1960: 3500,
      1980: 4000,
      2000: 6000,
      2025: 9500
    },
    culture: {
      description: "Second largest Jewish community in Germany.",
      landmarks: ["Ohel Jakob Synagogue", "Jewish Museum Munich"],
      traditions: "Bavarian Jewish culture, growing community"
    }
  },
  {
    id: 92,
    name: "Frankfurt",
    country: "Germany",
    coordinates: [50.1109, 8.6821],
    populations: {
      1850: 5000,
      1900: 20000,
      1920: 29000,
      1940: 26000,
      1960: 4500,
      1980: 5000,
      2000: 6500,
      2025: 7000
    },
    culture: {
      description: "Major financial center with historic Jewish community.",
      landmarks: ["Westend Synagogue", "Jewish Museum Frankfurt"],
      traditions: "Banking heritage, Rothschild family history"
    }
  },
  {
    id: 93,
    name: "Hamburg",
    country: "Germany",
    coordinates: [53.5511, 9.9937],
    populations: {
      1850: 7000,
      1900: 17000,
      1920: 20000,
      1940: 17000,
      1960: 1300,
      1980: 1400,
      2000: 2000,
      2025: 2500
    },
    culture: {
      description: "Historic port city Jewish community.",
      landmarks: ["Synagogue Hohe Weide", "Joseph-Carlebach-Platz"],
      traditions: "Sephardic traditions, maritime trade"
    }
  },
  {
    id: 94,
    name: "Düsseldorf",
    country: "Germany",
    coordinates: [51.2277, 6.7735],
    populations: {
      1850: 500,
      1900: 2000,
      1920: 4500,
      1940: 5000,
      1960: 800,
      1980: 2000,
      2000: 5000,
      2025: 7000
    },
    culture: {
      description: "Third largest Jewish community in Germany.",
      landmarks: ["Community center", "Synagogues"],
      traditions: "Post-war revival, Russian immigration"
    }
  },
  {
    id: 95,
    name: "Cologne",
    country: "Germany",
    coordinates: [50.9375, 6.9603],
    populations: {
      1850: 2000,
      1900: 12000,
      1920: 15000,
      1940: 15000,
      1960: 1000,
      1980: 1500,
      2000: 3500,
      2025: 5000
    },
    culture: {
      description: "Ancient Jewish community, one of oldest in Germany.",
      landmarks: ["Synagogue", "Archaeological excavations", "Medieval mikveh"],
      traditions: "1,700 years of Jewish history"
    }
  },
  {
    id: 96,
    name: "Lyon",
    country: "France",
    coordinates: [45.7640, 4.8357],
    populations: {
      1850: 1000,
      1900: 2000,
      1920: 5000,
      1940: 10000,
      1960: 18000,
      1980: 20000,
      2000: 25000,
      2025: 25000
    },
    culture: {
      description: "Third largest Jewish community in France.",
      landmarks: ["Grande Synagogue", "Jewish quarter"],
      traditions: "French Jewish culture, North African influence"
    }
  },
  {
    id: 97,
    name: "Toulouse",
    country: "France",
    coordinates: [43.6047, 1.4442],
    populations: {
      1850: 500,
      1900: 1500,
      1920: 3000,
      1940: 5000,
      1960: 12000,
      1980: 18000,
      2000: 22000,
      2025: 23000
    },
    culture: {
      description: "Major Jewish community in southern France.",
      landmarks: ["Synagogues", "Jewish community center"],
      traditions: "Sephardic traditions, North African community"
    }
  },
  {
    id: 98,
    name: "Nice",
    country: "France",
    coordinates: [43.7102, 7.2620],
    populations: {
      1850: 500,
      1900: 2000,
      1920: 4000,
      1940: 8000,
      1960: 12000,
      1980: 15000,
      2000: 20000,
      2025: 20000
    },
    culture: {
      description: "French Riviera Jewish community.",
      landmarks: ["Grand Synagogue", "Jewish Museum"],
      traditions: "Mediterranean Jewish life, resort culture"
    }
  },
  {
    id: 99,
    name: "Strasbourg",
    country: "France",
    coordinates: [48.5734, 7.7521],
    populations: {
      1850: 2000,
      1900: 9000,
      1920: 10000,
      1940: 12000,
      1960: 10000,
      1980: 12000,
      2000: 15000,
      2025: 12000
    },
    culture: {
      description: "Historic Alsatian Jewish community.",
      landmarks: ["Grande Synagogue de la Paix", "Jewish Museum"],
      traditions: "Alsatian Jewish traditions, German-French heritage"
    }
  },
  {
    id: 100,
    name: "Birmingham",
    country: "United Kingdom",
    coordinates: [52.4862, -1.8904],
    populations: {
      1850: 500,
      1900: 3000,
      1920: 5000,
      1940: 6000,
      1960: 5000,
      1980: 3500,
      2000: 2500,
      2025: 2150
    },
    culture: {
      description: "Midlands Jewish community.",
      landmarks: ["Singers Hill Synagogue", "Birmingham Hebrew Congregation"],
      traditions: "Industrial heritage, provincial Jewish life"
    }
  },
  {
    id: 101,
    name: "Leeds",
    country: "United Kingdom",
    coordinates: [53.8008, -1.5491],
    populations: {
      1850: 100,
      1900: 15000,
      1920: 25000,
      1940: 25000,
      1960: 20000,
      1980: 15000,
      2000: 10000,
      2025: 8000
    },
    culture: {
      description: "Historic Northern England Jewish community.",
      landmarks: ["Moortown", "Synagogues", "Jewish Quarter"],
      traditions: "Textile trade heritage, Yiddish culture"
    }
  },
  {
    id: 102,
    name: "Glasgow",
    country: "United Kingdom",
    coordinates: [55.8642, -4.2518],
    populations: {
      1850: 200,
      1900: 7000,
      1920: 15000,
      1940: 13000,
      1960: 13000,
      1980: 11000,
      2000: 6000,
      2025: 4000
    },
    culture: {
      description: "Scottish Jewish community.",
      landmarks: ["Garnethill Synagogue", "Jewish community center"],
      traditions: "Scottish Jewish heritage, Gorbals history"
    }
  },
  {
    id: 103,
    name: "Prague",
    country: "Czech Republic",
    coordinates: [50.0755, 14.4378],
    populations: {
      1850: 8000,
      1900: 27000,
      1920: 35000,
      1940: 56000,
      1960: 8000,
      1980: 6000,
      2000: 2000,
      2025: 1600
    },
    culture: {
      description: "Ancient Jewish community with rich cultural heritage. Had 56,000 Jews in 1940 before the Holocaust. Today only 1,600 remain, though the historic Jewish Quarter preserves centuries of Jewish life.",
      landmarks: ["Jewish Quarter", "Old-New Synagogue", "Jewish Museum"],
      traditions: "Medieval Jewish architecture, Golem legend"
    }
  },
  {
    id: 104,
    name: "Thessaloniki",
    country: "Greece",
    coordinates: [40.6401, 22.9444],
    populations: {
      1850: 20000,
      1900: 55000,
      1920: 60000,
      1940: 50000,
      1960: 1500,
      1980: 1200,
      2000: 1200,
      2025: 1500
    },
    culture: {
      description: "Once the 'Jerusalem of the Balkans' with 50,000 Jews in 1940. The Holocaust devastated the Ladino-speaking Sephardic community; 97% were murdered. Only 1,500 remain today.",
      landmarks: ["Jewish Museum", "Holocaust memorial"],
      traditions: "Sephardic Ladino culture, unique Jewish history"
    }
  },
  {
    id: 105,
    name: "Athens",
    country: "Greece",
    coordinates: [37.9838, 23.7275],
    populations: {
      1850: 1000,
      1900: 3000,
      1920: 4000,
      1940: 3500,
      1960: 2500,
      1980: 2800,
      2000: 3000,
      2025: 3000
    },
    culture: {
      description: "Largest Jewish community in modern Greece.",
      landmarks: ["Beth Shalom Synagogue", "Jewish Museum of Greece"],
      traditions: "Romaniote and Sephardic traditions"
    }
  },
  {
    id: 106,
    name: "Bucharest",
    country: "Romania",
    coordinates: [44.4268, 26.1025],
    populations: {
      1850: 5000,
      1900: 40000,
      1920: 60000,
      1940: 70000,
      1960: 60000,
      1980: 25000,
      2000: 10000,
      2025: 3500
    },
    culture: {
      description: "Historic Romanian Jewish center. Had 70,000 Jews in 1940; the Holocaust, Communist emigration, and post-1989 departures reduced the community to just 3,500 today.",
      landmarks: ["Choral Temple", "Jewish Museum", "Memorial sites"],
      traditions: "Romanian Jewish culture, Yiddish theater"
    }
  },
  {
    id: 107,
    name: "Belgrade",
    country: "Serbia",
    coordinates: [44.7866, 20.4489],
    populations: {
      1850: 2000,
      1900: 5000,
      1920: 8000,
      1940: 12000,
      1960: 5000,
      1980: 2500,
      2000: 2000,
      2025: 2000
    },
    culture: {
      description: "Serbian Jewish community, small but active.",
      landmarks: ["Belgrade Synagogue", "Jewish Historical Museum"],
      traditions: "Sephardic traditions, Holocaust remembrance"
    }
  },
  {
    id: 108,
    name: "Sofia",
    country: "Bulgaria",
    coordinates: [42.6977, 23.3219],
    populations: {
      1850: 2000,
      1900: 8000,
      1920: 10000,
      1940: 45000,
      1960: 7000,
      1980: 3000,
      2000: 2000,
      2025: 2000
    },
    culture: {
      description: "Bulgarian Jewish community, saved in WWII.",
      landmarks: ["Sofia Synagogue", "Jewish Museum"],
      traditions: "Sephardic traditions, rescue story"
    }
  },
  {
    id: 109,
    name: "Madrid",
    country: "Spain",
    coordinates: [40.4168, -3.7038],
    populations: {
      1850: 100,
      1900: 1000,
      1920: 2000,
      1940: 3000,
      1960: 3000,
      1980: 3500,
      2000: 12000,
      2025: 15000
    },
    culture: {
      description: "Growing Spanish Jewish community post-Franco.",
      landmarks: ["Madrid Synagogue", "Jewish quarter remnants"],
      traditions: "Sephardic heritage revival, modern community"
    }
  },
  {
    id: 110,
    name: "Barcelona",
    country: "Spain",
    coordinates: [41.3851, 2.1734],
    populations: {
      1850: 0,
      1900: 500,
      1920: 1000,
      1940: 2000,
      1960: 2000,
      1980: 2500,
      2000: 3000,
      2025: 3500
    },
    culture: {
      description: "Catalan Jewish community with medieval roots.",
      landmarks: ["Synagogue of Barcelona", "Call (Jewish Quarter)"],
      traditions: "Medieval Sephardic heritage, revival community"
    }
  },
  {
    id: 111,
    name: "Rio de Janeiro",
    country: "Brazil",
    coordinates: [-22.9068, -43.1729],
    populations: {
      1850: 0,
      1900: 500,
      1920: 5000,
      1940: 15000,
      1960: 40000,
      1980: 35000,
      2000: 35000,
      2025: 30000
    },
    culture: {
      description: "Second largest Jewish community in Brazil.",
      landmarks: ["Copacabana Synagogue", "Jewish community center"],
      traditions: "Brazilian Jewish culture, Carnival participation"
    }
  },
  {
    id: 112,
    name: "Santiago",
    country: "Chile",
    coordinates: [-33.4489, -70.6693],
    populations: {
      1850: 0,
      1900: 500,
      1920: 3000,
      1940: 4000,
      1960: 27000,
      1980: 20000,
      2000: 20000,
      2025: 16000
    },
    culture: {
      description: "Third largest Jewish community in South America.",
      landmarks: ["Círculo Israelita", "Patronato neighborhood"],
      traditions: "Chilean Jewish culture, diverse origins"
    }
  },
  {
    id: 113,
    name: "Montevideo",
    country: "Uruguay",
    coordinates: [-34.9011, -56.1645],
    populations: {
      1850: 0,
      1900: 1000,
      1920: 8000,
      1940: 20000,
      1960: 50000,
      1980: 40000,
      2000: 23000,
      2025: 16000
    },
    culture: {
      description: "Nearly all of Uruguay's Jews live in the capital.",
      landmarks: ["Comunidad Israelita del Uruguay", "Synagogues"],
      traditions: "Eastern European heritage, strong community"
    }
  },
  {
    id: 114,
    name: "Caracas",
    country: "Venezuela",
    coordinates: [10.4806, -66.9036],
    populations: {
      1850: 0,
      1900: 100,
      1920: 500,
      1940: 1000,
      1960: 8000,
      1980: 17000,
      2000: 20000,
      2025: 6000
    },
    culture: {
      description: "Dramatically declining community due to emigration.",
      landmarks: ["Tiferet Israel Synagogue", "Jewish community center"],
      traditions: "Sephardic and Ashkenazi communities, political challenges"
    }
  },
  {
    id: 115,
    name: "Bogota",
    country: "Colombia",
    coordinates: [4.7110, -74.0721],
    populations: {
      1850: 0,
      1900: 0,
      1920: 100,
      1940: 500,
      1960: 4000,
      1980: 5000,
      2000: 5000,
      2025: 6000
    },
    culture: {
      description: "Largest Jewish community in Colombia.",
      landmarks: ["Centro Israelita de Bogotá", "Synagogues"],
      traditions: "Latin American Jewish culture, diverse backgrounds"
    }
  },
  {
    id: 116,
    name: "Lima",
    country: "Peru",
    coordinates: [-12.0464, -77.0428],
    populations: {
      1850: 0,
      1900: 0,
      1920: 200,
      1940: 500,
      1960: 5000,
      1980: 5000,
      2000: 3000,
      2025: 2700
    },
    culture: {
      description: "Most of Peru's small Jewish population.",
      landmarks: ["Asociación Judía de Beneficencia", "Synagogues"],
      traditions: "Small but organized community"
    }
  },
  {
    id: 117,
    name: "Panama City",
    country: "Panama",
    coordinates: [8.9824, -79.5199],
    populations: {
      1850: 0,
      1900: 0,
      1920: 500,
      1940: 2000,
      1960: 2000,
      1980: 4000,
      2000: 8000,
      2025: 10000
    },
    culture: {
      description: "Vibrant Central American Jewish community.",
      landmarks: ["Multiple Orthodox synagogues", "Shevet Ahim Synagogue"],
      traditions: "Strong Orthodox presence, commerce hub"
    }
  },
  {
    id: 118,
    name: "Cape Town",
    country: "South Africa",
    coordinates: [-33.9249, 18.4241],
    populations: {
      1850: 0,
      1900: 4000,
      1920: 12000,
      1940: 18000,
      1960: 23000,
      1980: 25000,
      2000: 21000,
      2025: 16000
    },
    culture: {
      description: "Second largest Jewish community in Africa.",
      landmarks: ["Gardens Shul", "Sea Point Hebrew Congregation"],
      traditions: "Lithuanian heritage, vibrant community"
    }
  },
  {
    id: 119,
    name: "Mumbai",
    country: "India",
    coordinates: [19.0760, 72.8777],
    populations: {
      1850: 5000,
      1900: 10000,
      1920: 15000,
      1940: 20000,
      1960: 20000,
      1980: 8000,
      2000: 5000,
      2025: 4000
    },
    culture: {
      description: "Largest Jewish community in India, mostly Bene Israel.",
      landmarks: ["Magen David Synagogue", "Keneseth Eliyahoo Synagogue"],
      traditions: "Bene Israel traditions, Indian Jewish heritage"
    }
  },
  {
    id: 120,
    name: "Tehran",
    country: "Iran",
    coordinates: [35.6892, 51.3890],
    populations: {
      1850: 3000,
      1900: 10000,
      1920: 15000,
      1940: 40000,
      1960: 65000,
      1980: 80000,
      2000: 20000,
      2025: 15000
    },
    culture: {
      description: "Largest Jewish community in Middle East outside Israel.",
      landmarks: ["Abrishami Synagogue", "Yusef Abad Synagogue"],
      traditions: "Persian Jewish heritage, ancient community"
    }
  },
  {
    id: 121,
    name: "Shanghai",
    country: "China",
    coordinates: [31.2304, 121.4737],
    populations: {
      1850: 0,
      1900: 0,
      1920: 1000,
      1940: 20000,
      1960: 100,
      1980: 50,
      2000: 500,
      2025: 1500
    },
    culture: {
      description: "Small expat Jewish community, historic WWII refuge.",
      landmarks: ["Ohel Moshe Synagogue", "Jewish Refugees Museum"],
      traditions: "WWII refugee history, modern expat community"
    }
  },
  {
    id: 122,
    name: "Tokyo",
    country: "Japan",
    coordinates: [35.6762, 139.6503],
    populations: {
      1850: 0,
      1900: 0,
      1920: 0,
      1940: 0,
      1960: 500,
      1980: 1000,
      2000: 2000,
      2025: 1400
    },
    culture: {
      description: "Small expat Jewish community in Japan.",
      landmarks: ["Jewish Community of Japan", "Chabad House"],
      traditions: "International community, business expats"
    }
  },
  {
    id: 123,
    name: "Damascus",
    country: "Syria",
    coordinates: [33.5138, 36.2765],
    populations: {
      1850: 10000,
      1900: 15000,
      1920: 12000,
      1940: 15000,
      1960: 5000,
      1980: 4000,
      2000: 200,
      2025: 50
    },
    culture: {
      description: "One of the oldest Jewish communities in the world, Syrian Jews maintained rich Sephardic traditions for centuries before mass emigration after 1948.",
      landmarks: ["Jobar Synagogue (destroyed)", "Al-Frangi Synagogue"],
      traditions: "Sephardic liturgy, Arabic-Hebrew culture, pizmonim (religious songs)"
    }
  },
  {
    id: 124,
    name: "Aleppo",
    country: "Syria",
    coordinates: [36.2012, 37.1343],
    populations: {
      1850: 12000,
      1900: 20000,
      1920: 18000,
      1940: 18000,
      1960: 5000,
      1980: 2000,
      2000: 200,
      2025: 10
    },
    culture: {
      description: "Historic center of Sephardic Jewish life, home to the famous Aleppo Codex. Community emigrated largely to Israel, Brooklyn, and Latin America after 1948.",
      landmarks: ["Great Synagogue of Aleppo (destroyed)", "Aleppo Codex (now in Israel)"],
      traditions: "Renowned for Jewish scholarship, pizmonim tradition, Sephardic customs"
    }
  },
  {
    id: 125,
    name: "Toronto",
    country: "Canada",
    coordinates: [43.6532, -79.3832],
    populations: {
      1850: 0,
      1900: 3090,
      1920: 34770,
      1940: 49046,
      1960: 85000,
      1980: 128650,
      2000: 175000,
      2025: 188000
    },
    culture: {
      description: "Canada's largest Jewish community, growing from 157 Jews in 1871 to nearly 190,000 today. Overtook Montreal in the 1970s after Quebec separatist movement.",
      landmarks: ["Bathurst Street Jewish district", "Miles Nadal JCC", "Holy Blossom Temple"],
      traditions: "Diverse community with Orthodox, Conservative, Reform congregations"
    }
  },
  {
    id: 126,
    name: "Montreal",
    country: "Canada",
    coordinates: [45.5017, -73.5673],
    populations: {
      1850: 200,
      1900: 7000,
      1920: 45000,
      1940: 60000,
      1960: 102000,
      1980: 115000,
      2000: 90000,
      2025: 90780
    },
    culture: {
      description: "Historic center of Canadian Jewry until the 1970s. Many Jews left for Toronto during Quebec separatist movement. Strong Sephardic and Hasidic communities.",
      landmarks: ["The Main (Boulevard Saint-Laurent)", "Snowdon", "Outremont Hasidic quarter"],
      traditions: "Bilingual Jewish culture, bagels, Yiddish theater heritage"
    }
  },
  {
    id: 127,
    name: "Vancouver",
    country: "Canada",
    coordinates: [49.2827, -123.1207],
    populations: {
      1850: 0,
      1900: 214,
      1920: 1500,
      1940: 2500,
      1960: 6000,
      1980: 15000,
      2000: 22590,
      2025: 26255
    },
    culture: {
      description: "Canada's third-largest Jewish community, grew 800% between 1901-1931. Diverse community with strong Reform and Conservative presence.",
      landmarks: ["Jewish Community Centre of Greater Vancouver", "Schara Tzedeck Synagogue"],
      traditions: "Pacific Northwest Jewish culture, active Holocaust education"
    }
  },
  {
    id: 128,
    name: "Melbourne",
    country: "Australia",
    coordinates: [-37.8136, 144.9631],
    populations: {
      1850: 200,
      1900: 8000,
      1920: 15000,
      1940: 25000,
      1960: 35000,
      1980: 45000,
      2000: 50000,
      2025: 60000
    },
    culture: {
      description: "Australia's largest Jewish community since the 1850s gold rush. Strong Orthodox, including Chabad presence. Holocaust survivor community.",
      landmarks: ["St Kilda Hebrew Congregation", "Lamm Jewish Library", "Jewish Holocaust Centre"],
      traditions: "Vibrant Orthodox community, kosher infrastructure, Jewish day schools"
    }
  },
  {
    id: 129,
    name: "Sydney",
    country: "Australia",
    coordinates: [-33.8688, 151.2093],
    populations: {
      1850: 1000,
      1900: 5000,
      1920: 10000,
      1940: 18000,
      1960: 28000,
      1980: 35000,
      2000: 42000,
      2025: 45000
    },
    culture: {
      description: "Australia's second-largest Jewish community, concentrated in eastern suburbs. Historic Sephardic and modern Israeli communities.",
      landmarks: ["The Great Synagogue", "Bondi Beach Jewish community", "Sydney Jewish Museum"],
      traditions: "Beach culture combined with Jewish life, strong Zionist movement"
    }
  },
  {
    id: 130,
    name: "Antwerp",
    country: "Belgium",
    coordinates: [51.2194, 4.4025],
    populations: {
      1850: 100,
      1900: 5000,
      1920: 20000,
      1940: 50000,
      1960: 12000,
      1980: 15000,
      2000: 18000,
      2025: 20000
    },
    culture: {
      description: "Major diamond trading center with large ultra-Orthodox Hasidic community. Community devastated in Holocaust, rebuilt after WWII.",
      landmarks: ["Diamond District", "Romi Goldmuntz Center", "Antwerp Central Synagogue"],
      traditions: "Diamond trade, Hasidic culture, Yiddish spoken daily"
    }
  },
  {
    id: 131,
    name: "Brussels",
    country: "Belgium",
    coordinates: [50.8503, 4.3517],
    populations: {
      1850: 400,
      1900: 3000,
      1920: 15000,
      1940: 25000,
      1960: 10000,
      1980: 15000,
      2000: 20000,
      2025: 15000
    },
    culture: {
      description: "Belgium's capital with diverse Jewish community including Sephardic, Ashkenazi, and Israeli expats. EU headquarters attracts Jewish professionals.",
      landmarks: ["Great Synagogue of Europe", "Jewish Museum of Belgium"],
      traditions: "Cosmopolitan community, multiple Jewish day schools"
    }
  },
  {
    id: 132,
    name: "Rotterdam",
    country: "Netherlands",
    coordinates: [51.9225, 4.4792],
    populations: {
      1850: 500,
      1900: 3000,
      1920: 5000,
      1940: 10000,
      1960: 2000,
      1980: 2500,
      2000: 3000,
      2025: 3500
    },
    culture: {
      description: "Port city with historic Jewish trading community. Devastated in Holocaust, small community remains today.",
      landmarks: ["Portuguese Synagogue", "Rotterdam Jewish Community Center"],
      traditions: "Sephardic heritage, maritime Jewish history"
    }
  },
  {
    id: 133,
    name: "Rome",
    country: "Italy",
    coordinates: [41.9028, 12.4964],
    populations: {
      1850: 5000,
      1900: 10000,
      1920: 12000,
      1940: 12000,
      1960: 13000,
      1980: 15000,
      2000: 15000,
      2025: 13000
    },
    culture: {
      description: "One of the oldest continuous Jewish communities in the world, dating to 2nd century BCE. Historic Jewish Ghetto established in 1555.",
      landmarks: ["Great Synagogue of Rome", "Jewish Ghetto", "Jewish Museum of Rome"],
      traditions: "Ancient Roman Jewish rite (Nusach Italki), Roman Jewish cuisine"
    }
  },
  {
    id: 134,
    name: "Milan",
    country: "Italy",
    coordinates: [45.4642, 9.1900],
    populations: {
      1850: 2000,
      1900: 4000,
      1920: 6000,
      1940: 8000,
      1960: 7000,
      1980: 8000,
      2000: 8000,
      2025: 8000
    },
    culture: {
      description: "Northern Italy's largest Jewish community, historic presence since Roman times. Modern, integrated community.",
      landmarks: ["Central Synagogue of Milan", "Jewish Museum of Milan"],
      traditions: "Italian Jewish culture, strong cultural institutions"
    }
  },
  {
    id: 135,
    name: "Basel",
    country: "Switzerland",
    coordinates: [47.5596, 7.5886],
    populations: {
      1850: 300,
      1900: 1500,
      1920: 2000,
      1940: 2500,
      1960: 2800,
      1980: 2600,
      2000: 2600,
      2025: 2600
    },
    culture: {
      description: "Historic Jewish community dating to 1214. Home of the First Zionist Congress in 1897. Jews expelled 1543-1798, community rebuilt.",
      landmarks: ["Basel Synagogue", "First Zionist Congress building", "Jewish Museum of Switzerland"],
      traditions: "Zionist history, Swiss Jewish heritage"
    }
  },
  {
    id: 136,
    name: "Tunis",
    country: "Tunisia",
    coordinates: [36.8065, 10.1815],
    populations: {
      1850: 15000,
      1900: 45000,
      1920: 50000,
      1940: 85000,
      1960: 50000,
      1980: 4000,
      2000: 1500,
      2025: 1000
    },
    culture: {
      description: "Ancient Sephardic community dating back over 2,000 years. On the eve of WWII had 89,000 Jews. Mass emigration to Israel and France after 1956 independence left only 1,000 today.",
      landmarks: ["Ghriba Synagogue on Djerba", "Tunis Great Synagogue", "Jewish quarter of Hara"],
      traditions: "Judeo-Arabic culture, North African Sephardic traditions"
    }
  },
  {
    id: 137,
    name: "Algiers",
    country: "Algeria",
    coordinates: [36.7538, 3.0588],
    populations: {
      1850: 8000,
      1900: 20000,
      1920: 35000,
      1940: 100000,
      1960: 130000,
      1980: 500,
      2000: 0,
      2025: 0
    },
    culture: {
      description: "Major North African Jewish center, grew from 21,000 in 1850 to 140,000 by 1960. French citizenship granted to Algerian Jews in 1870. Nearly 130,000 relocated to France in 1962 after independence. Community ceased to exist by 1990s.",
      landmarks: ["Former Great Synagogue", "Jewish quarter (Casbah)"],
      traditions: "French-Jewish culture, North African traditions, completely emigrated"
    }
  },
  {
    id: 138,
    name: "Izmir",
    country: "Turkey",
    coordinates: [38.4237, 27.1428],
    populations: {
      1850: 25000,
      1900: 55000,
      1920: 30000,
      1940: 20000,
      1960: 10000,
      1980: 2500,
      2000: 1500,
      2025: 1200
    },
    culture: {
      description: "Historic Sephardic community known as Smyrna. Had 55,000 Jews in late 1800s - Ottoman Empire's second largest Jewish community. Mass emigration in early 20th century to Americas, Western Europe, and Israel reduced population to just 1,200 today.",
      landmarks: ["Bet Israel Synagogue", "Former Jewish quarter of Karatas", "Alsancak neighborhood"],
      traditions: "Ladino language, Sephardic culture, Ottoman Jewish heritage"
    }
  },
  {
    id: 139,
    name: "Baghdad",
    country: "Iraq",
    coordinates: [33.3152, 44.3661],
    populations: {
      1850: 20000,
      1900: 50000,
      1920: 60000,
      1940: 77000,
      1960: 5000,
      1980: 400,
      2000: 100,
      2025: 5
    },
    culture: {
      description: "Ancient Babylonian Jewish community dating back 2,600 years. In 1940, 77,000 Jews lived in Baghdad (40% of city). The 1941 Farhud pogrom killed 180 Jews. Operation Ezra & Nehemiah (1950-52) airlifted 120,000 to Israel. Only 5 elderly Jews remain today.",
      landmarks: ["Former Great Synagogue", "Meir Taweig Synagogue", "Jewish cemetery"],
      traditions: "Babylonian Jewish scholarship, Judeo-Arabic culture, ancient synagogue traditions"
    }
  },
  {
    id: 140,
    name: "Basra",
    country: "Iraq",
    coordinates: [30.5085, 47.7835],
    populations: {
      1850: 1000,
      1900: 3000,
      1920: 5000,
      1940: 8000,
      1960: 1000,
      1980: 100,
      2000: 0,
      2025: 0
    },
    culture: {
      description: "Southern Iraqi port city where Jews comprised 25% of population in early 20th century. Jews worked in port authority and trade. Community completely emigrated by 1950s.",
      landmarks: ["Former Jewish quarter", "Old port area"],
      traditions: "Maritime trade, Babylonian Jewish customs"
    }
  },
  {
    id: 141,
    name: "Alexandria",
    country: "Egypt",
    coordinates: [31.2001, 29.9187],
    populations: {
      1850: 4000,
      1900: 10000,
      1920: 20000,
      1940: 24829,
      1960: 8000,
      1980: 200,
      2000: 100,
      2025: 50
    },
    culture: {
      description: "Ancient Mediterranean Jewish center, home to Philo and the Septuagint. In 1937, 24,829 Jews lived here. The 1956 Suez Crisis and 1967 war triggered mass exodus. Only 50 elderly Jews remain.",
      landmarks: ["Eliyahu Hanavi Synagogue", "Jewish cemetery", "Former Jewish quarter"],
      traditions: "Sephardic and Romaniote heritage, Ladino culture, Mediterranean Jewish life"
    }
  },
  {
    id: 142,
    name: "Beirut",
    country: "Lebanon",
    coordinates: [33.8886, 35.4955],
    populations: {
      1850: 500,
      1900: 2000,
      1920: 3500,
      1940: 6000,
      1960: 7000,
      1980: 400,
      2000: 200,
      2025: 29
    },
    culture: {
      description: "Cosmopolitan Lebanese Jewish hub. Grew from 1,000 in 1880 to 9,000 in 1948. The 1967 war caused 6,000 to flee. Civil War (1975) saw 200 killed in pogroms, forcing mass exodus. Only 29 remain.",
      landmarks: ["Maghen Abraham Synagogue", "Wadi Abu Jamil (Jewish quarter)"],
      traditions: "Levantine Jewish culture, Arabic-speaking Jews, commercial tradition"
    }
  },
  {
    id: 143,
    name: "Fez",
    country: "Morocco",
    coordinates: [34.0181, -5.0078],
    populations: {
      1850: 8000,
      1900: 10000,
      1920: 12000,
      1940: 15000,
      1960: 8000,
      1980: 500,
      2000: 150,
      2025: 100
    },
    culture: {
      description: "Ancient Moroccan Jewish center with the mellah (Jewish quarter) dating to 1438. Once held 15,000 Jews. Mass emigration to Israel (1948-1967) reduced population to just 100 today.",
      landmarks: ["Fez Mellah", "Ibn Danan Synagogue", "Jewish cemetery"],
      traditions: "Judeo-Arabic culture, North African Sephardic traditions, mellah life"
    }
  },
  {
    id: 144,
    name: "Marrakech",
    country: "Morocco",
    coordinates: [31.6295, -7.9811],
    populations: {
      1850: 8000,
      1900: 12000,
      1920: 20000,
      1940: 25646,
      1960: 12000,
      1980: 500,
      2000: 260,
      2025: 100
    },
    culture: {
      description: "Major Moroccan Jewish center. Had 25,646 Jews in 1936. The mellah was one of the largest in Morocco. Mass aliyah reduced population to just 100 elderly Jews today.",
      landmarks: ["Marrakech Mellah", "Lazama Synagogue", "Jewish cemetery"],
      traditions: "Moroccan Jewish customs, Judeo-Berber culture, mellah traditions"
    }
  },
  {
    id: 145,
    name: "Shiraz",
    country: "Iran",
    coordinates: [29.5918, 52.5836],
    populations: {
      1850: 3000,
      1900: 5000,
      1920: 8000,
      1940: 10000,
      1960: 17000,
      1980: 8000,
      2000: 3000,
      2025: 2000
    },
    culture: {
      description: "Ancient Persian Jewish community. Second largest in Iran with 18,000 in 1948. After 1979 Revolution, population dropped from 18,000 to 2,000 as many emigrated to Israel and USA.",
      landmarks: ["Shah Cheragh Mosque area", "Shiraz Synagogue", "Jewish quarter"],
      traditions: "Persian Jewish culture, Judeo-Persian language, ancient traditions"
    }
  },
  {
    id: 146,
    name: "Isfahan",
    country: "Iran",
    coordinates: [32.6546, 51.6680],
    populations: {
      1850: 2000,
      1900: 3700,
      1920: 5000,
      1940: 7000,
      1960: 10000,
      1980: 3000,
      2000: 1500,
      2025: 1000
    },
    culture: {
      description: "Historic Persian Jewish center. Had 10,000 Jews in 1948. The Jadid al-Islam (forced converts) community was significant. Post-1979, population declined from 10,000 to 1,000.",
      landmarks: ["Isfahan synagogues", "Jewish quarter", "Historical Jewish sites"],
      traditions: "Persian Jewish scholarship, Judeo-Persian poetry, forced conversion history"
    }
  },
  {
    id: 147,
    name: "Benghazi",
    country: "Libya",
    coordinates: [32.1191, 20.0869],
    populations: {
      1850: 800,
      1900: 2000,
      1920: 2500,
      1940: 2236,
      1960: 200,
      1980: 0,
      2000: 0,
      2025: 0
    },
    culture: {
      description: "Cyrenaican Jewish community. Had 2,500 Jews in 1935. After 1945 pogrom and 1948 riots, most fled to Israel. 1967 Six-Day War riots caused final exodus. Community completely disappeared.",
      landmarks: ["Former Great Synagogue", "Jewish cemetery"],
      traditions: "Libyan Sephardic traditions, North African Jewish culture"
    }
  }
];

// Years available in the timeline - generate array from 1850 to 2025
export const availableYears = Array.from(
  { length: 2025 - 1850 + 1 },
  (_, i) => 1850 + i
);

// Key years with actual population data
export const dataYears = [1850, 1900, 1920, 1940, 1960, 1980, 2000, 2025];

// Helper function to get population for a city in any year (with interpolation)
export function getPopulationForYear(city, year) {
  // If we have exact data for this year, return it
  if (city.populations[year] !== undefined) {
    return city.populations[year];
  }

  // Find the closest years with data before and after the requested year
  const knownYears = Object.keys(city.populations).map(Number).sort((a, b) => a - b);

  // If year is before all known data
  if (year < knownYears[0]) {
    return city.populations[knownYears[0]];
  }

  // If year is after all known data
  if (year > knownYears[knownYears.length - 1]) {
    return city.populations[knownYears[knownYears.length - 1]];
  }

  // Find surrounding years
  let beforeYear = knownYears[0];
  let afterYear = knownYears[knownYears.length - 1];

  for (let i = 0; i < knownYears.length - 1; i++) {
    if (knownYears[i] <= year && knownYears[i + 1] >= year) {
      beforeYear = knownYears[i];
      afterYear = knownYears[i + 1];
      break;
    }
  }

  // Linear interpolation
  const beforePop = city.populations[beforeYear];
  const afterPop = city.populations[afterYear];
  const ratio = (year - beforeYear) / (afterYear - beforeYear);

  return Math.round(beforePop + (afterPop - beforePop) * ratio);
}
