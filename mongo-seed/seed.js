db = db.getSiblingDB('fishShopDB');

db.products.deleteMany({});

db.products.insertMany([
  {
    name: "Betta Fish",
    price: 15,
    quantity: 16,
    type: "Fish",
    image: "/images/betta.png"
  },
  {
    name: "Goldfish",
    price: 8,
    quantity: 46,
    type: "Fish",
    image: "/images/goldfish.png"
  },
  {
    name: "Guppy Fish",
    price: 6,
    quantity: 39,
    type: "Fish",
    image: "/images/guppy.png"
  },
  {
    name: "Angelfish",
    price: 18,
    quantity: 15,
    type: "Fish",
    image: "/images/angelfish.png"
  },
  {
    name: "Neon Tetra",
    price: 5,
    quantity: 56,
    type: "Fish",
    image: "/images/neontetra.png"
  },
  {
    name: "Clownfish",
    price: 22,
    quantity: 10,
    type: "Fish",
    image: "/images/clownfish.png"
  },
  {
    name: "Discus Fish",
    price: 35,
    quantity: 8,
    type: "Fish",
    image: "/images/discusfish.png"
  }
]);

print("✅ All 7 products seeded successfully!");