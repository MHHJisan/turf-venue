import { Facility, PricingPlan } from "@/types/venue";

// Temporary venue information.
// We can replace these values with real business information later.
export const venue = {
  name: "ArenaX Sports & Leisure",
  tagline: "Play. Relax. Enjoy.",
  description:
    "A premium indoor sports and leisure destination where you can play, swim, relax, and enjoy great food.",
  location: "Dhaka, Bangladesh",
  phone: "+880 1700-000000",
  email: "info@arenax.com",
  openingHours: "9:00 AM – 11:00 PM",
};

// Temporary facility data.
// These values will eventually come from the database.
export const facilities: Facility[] = [
  {
    id: "football",
    name: "Football Turf",
    slug: "football-turf",
    description:
      "Play competitive football with your friends on our premium indoor football turf.",
    price: 1500,
    priceUnit: "hour",
    icon: "sports_soccer",
  },
  {
    id: "badminton",
    name: "Badminton Court",
    slug: "badminton",
    description:
      "Enjoy a fast-paced badminton session on our professionally maintained indoor court.",
    price: 500,
    priceUnit: "hour",
    icon: "sports_tennis",
  },
  {
    id: "swimming",
    name: "Swimming Pool",
    slug: "swimming-pool",
    description:
      "Take a refreshing swim in our clean and comfortable indoor swimming pool.",
    price: 300,
    priceUnit: "person",
    icon: "pool",
  },
  {
    id: "cafe",
    name: "Juice Bar & Café",
    slug: "juice-bar-cafe",
    description:
      "Relax after your game with fresh juices, coffee, snacks, and delicious food.",
    price: 150,
    priceUnit: "item",
    icon: "local_cafe",
  },
];

// Temporary pricing data.
export const pricingPlans: PricingPlan[] = [
  {
    id: "football-hour",
    facility: "Football Turf",
    price: 1500,
    unit: "hour",
    description: "Perfect for a full football session.",
  },
  {
    id: "badminton-hour",
    facility: "Badminton Court",
    price: 500,
    unit: "hour",
    description: "Book the court for your badminton session.",
  },
  {
    id: "swimming-session",
    facility: "Swimming Pool",
    price: 300,
    unit: "person",
    description: "Single swimming session.",
  },
];
