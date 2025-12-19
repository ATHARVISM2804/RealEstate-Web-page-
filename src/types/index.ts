export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  priceType: 'sale' | 'rent';
  type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'villa';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  images: string[];
  featured: boolean;
  status: 'available' | 'pending' | 'sold' | 'rented';
  listingType: 'buy' | 'rent' | 'sell';
  amenities: string[];
  yearBuilt: number;
  parking: number;
  furnished: boolean;
  petFriendly: boolean;
  availableDate?: string;
  description: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  phone: string;
  email: string;
  bio: string;
  propertiesSold: number;
  rating: number;
  specializations: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image?: string;
  rating: number;
  text: string;
  type: 'buyer' | 'seller' | 'renter';
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Neighborhood {
  id: string;
  name: string;
  image: string;
  avgPrice: number;
  propertyCount: number;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'buying' | 'selling' | 'renting' | 'general';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SearchFilters {
  location: string;
  type: string;
  priceMin: number;
  priceMax: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  petFriendly?: boolean;
  furnished?: boolean;
}
