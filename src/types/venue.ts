// Represents one facility available at the venue.
export interface Facility {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceUnit: string;
  icon: string;
}

// Represents one pricing option.
export interface PricingPlan {
  id: string;
  facility: string;
  price: number;
  unit: string;
  description: string;
}
