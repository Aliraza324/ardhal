// Eagerly import all brand logos and banner images from assets
const allAssetImages = import.meta.glob(
  "../assets/images_2026-09-14_07-35-17/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

// Map verified brand image indexes
const brandIndexMap = {
  GM: 1,
  Ford: 2,
  Jeep: 3,
  Dodge: 4,
  Mopar: 5,
  Chrysler: 6,
  Audi: 7,
  BMW: 8,
  Mercedes: 9,
  Bentley: 10,
  VW: 11,
  Porsche: 12,
  MINI: 13,
  "Rolls Royce": 14,
  Maserati: 15,
  Lamborghini: 16,
  "Range Rover": 17,
  Jaguar: 18,
  Toyota: 19,
  Nissan: 20,
  Lexus: 21,
  Honda: 22,
  Hyundai: 23,
  KIA: 24,
  Mazda: 25,
  MG: 26,
  Tesla: 27,
};

export function getBrandLogo(brandName) {
  if (!brandName) return null;
  const idx = brandIndexMap[brandName];

  // Try image_150x100_<idx>.png
  if (idx) {
    const key1 = `../assets/images_2026-09-14_07-35-17/image_150x100_${idx}.png`;
    if (allAssetImages[key1]) return allAssetImages[key1];

    const key2 = `../assets/images_2026-09-14_07-35-17/brands_${idx}.png`;
    if (allAssetImages[key2]) return allAssetImages[key2];
  }

  // Fallback direct check for brand names
  const directMatchKey = Object.keys(allAssetImages).find((path) =>
    path.toLowerCase().includes(brandName.toLowerCase().replace(/\s+/g, ""))
  );
  if (directMatchKey) return allAssetImages[directMatchKey];

  return null;
}

export const allBrandsList = [
  { name: "Audi", group: "German & European", tag: "Quattro", letter: "A", origin: "Germany" },
  { name: "Bentley", group: "Luxury & Exotic", tag: "Prestige", letter: "B", origin: "UK" },
  { name: "BMW", group: "German & European", tag: "M Power", letter: "B", origin: "Germany" },
  { name: "Chrysler", group: "American Power", tag: "Mopar", letter: "C", origin: "USA" },
  { name: "Dodge", group: "American Power", tag: "Mopar & Hemi", letter: "D", origin: "USA" },
  { name: "Ford", group: "American Power", tag: "Truck & Performance", letter: "F", origin: "USA" },
  { name: "GM", group: "American Power", tag: "Genuine OEM", letter: "G", origin: "USA" },
  { name: "Honda", group: "Japanese & Asian", tag: "VTEC & OEM", letter: "H", origin: "Japan" },
  { name: "Hyundai", group: "Japanese & Asian", tag: "Mobis Genuine", letter: "H", origin: "Korea" },
  { name: "Jaguar", group: "German & European", tag: "Luxury & Sport", letter: "J", origin: "UK" },
  { name: "Jeep", group: "American Power", tag: "4x4 & Trail Rated", letter: "J", origin: "USA" },
  { name: "KIA", group: "Japanese & Asian", tag: "Mobis Genuine", letter: "K", origin: "Korea" },
  { name: "Lamborghini", group: "Luxury & Exotic", tag: "Supercar OEM", letter: "L", origin: "Italy" },
  { name: "Lexus", group: "Japanese & Asian", tag: "Luxury Performance", letter: "L", origin: "Japan" },
  { name: "Maserati", group: "Luxury & Exotic", tag: "Italian Elegance", letter: "M", origin: "Italy" },
  { name: "Mazda", group: "Japanese & Asian", tag: "SkyActiv", letter: "M", origin: "Japan" },
  { name: "Mercedes", group: "German & European", tag: "AMG & Executive", letter: "M", origin: "Germany" },
  { name: "MG", group: "Japanese & Asian", tag: "Modern Parts", letter: "M", origin: "Global" },
  { name: "MINI", group: "German & European", tag: "Euro Standard", letter: "M", origin: "UK" },
  { name: "Mopar", group: "American Power", tag: "Direct OEM", letter: "M", origin: "USA" },
  { name: "Nissan", group: "Japanese & Asian", tag: "Patrol & Nismo", letter: "N", origin: "Japan" },
  { name: "Porsche", group: "Luxury & Exotic", tag: "Stuttgart OEM", letter: "P", origin: "Germany" },
  { name: "Range Rover", group: "German & European", tag: "Luxury SUV", letter: "R", origin: "UK" },
  { name: "Rolls Royce", group: "Luxury & Exotic", tag: "Ultra Luxury", letter: "R", origin: "UK" },
  { name: "Tesla", group: "American Power", tag: "EV Genuine", letter: "T", origin: "USA" },
  { name: "Toyota", group: "Japanese & Asian", tag: "Land Cruiser & OEM", letter: "T", origin: "Japan" },
  { name: "VW", group: "German & European", tag: "German Engineering", letter: "V", origin: "Germany" },
];

export const alphabetList = [
  "#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export const brandGroups = [
  "Featured Brands",
  "Luxury & Exotic",
  "German & European",
  "American Power",
  "Japanese & Asian",
  "All Brands A-Z",
];
