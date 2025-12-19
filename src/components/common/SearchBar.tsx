import { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { locations, propertyTypes } from '../../data/mockData';

interface SearchBarProps {
  variant?: 'hero' | 'inline';
  onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
  tab: 'buy' | 'sell' | 'rent';
  location: string;
  type: string;
  priceMin: number;
  priceMax: number;
}

export default function SearchBar({ variant = 'hero', onSearch }: SearchBarProps) {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'rent'>('buy');
  const [location, setLocation] = useState('Lisbon, Portugal');
  const [propertyType, setPropertyType] = useState('Minimalist');
  const [priceRange, setPriceRange] = useState([10000, 1000000]);

  const handleSearch = () => {
    onSearch?.({
      tab: activeTab,
      location,
      type: propertyType,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
    });
  };

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-xl shadow-card">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <MapPin className="w-5 h-5 text-warmGray-400" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 py-2 bg-transparent text-charcoal focus:outline-none"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="h-8 w-px bg-warmGray-200 hidden md:block" />
        <div className="flex items-center gap-2 flex-1 min-w-[150px]">
          <Home className="w-5 h-5 text-warmGray-400" />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="flex-1 py-2 bg-transparent text-charcoal focus:outline-none"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['buy', 'sell', 'rent'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm capitalize transition-all ${
              activeTab === tab
                ? 'bg-charcoal text-white'
                : 'bg-warmGray-100 text-warmGray-600 hover:bg-warmGray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-warmGray-600 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warmGray-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-warmGray-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 appearance-none cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-warmGray-600 mb-2">Type</label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warmGray-400" />
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-warmGray-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 appearance-none cursor-pointer"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-warmGray-600 mb-2">Price</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warmGray-400" />
            <select
              value={`${priceRange[0]}-${priceRange[1]}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split('-').map(Number);
                setPriceRange([min, max]);
              }}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-warmGray-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 appearance-none cursor-pointer"
            >
              <option value="10000-100000">$10,000 - $100,000</option>
              <option value="100000-500000">$100,000 - $500,000</option>
              <option value="500000-1000000">$500,000 - $1,000,000</option>
              <option value="1000000-5000000">$1,000,000 - $5,000,000</option>
              <option value="10000-1000000">$10,000 - $1,000,000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full md:w-auto mt-6 flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-3.5 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
      >
        <Search className="w-5 h-5" />
        Search Properties
      </button>
    </div>
  );
}
