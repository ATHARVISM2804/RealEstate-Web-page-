import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid, List, MapPin, ChevronDown, X, Home as HomeIcon, BookOpen, Calculator, Download, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import { properties, neighborhoods, locations, propertyTypes, amenitiesList } from '../data/mockData';

type SortOption = 'newest' | 'price-high' | 'price-low';
type ViewMode = 'grid' | 'list';

export default function BuyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const buyProperties = useMemo(() => {
    return properties
      .filter((p) => p.listingType === 'buy')
      .filter((p) => {
        if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
            !p.address.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        if (selectedLocation && !`${p.city}, ${p.state}`.includes(selectedLocation)) {
          return false;
        }
        if (selectedType && selectedType !== 'All Types' && p.type !== selectedType.toLowerCase()) {
          return false;
        }
        if (p.price < priceRange[0] || p.price > priceRange[1]) {
          return false;
        }
        if (bedrooms && p.bedrooms < bedrooms) {
          return false;
        }
        if (bathrooms && p.bathrooms < bathrooms) {
          return false;
        }
        if (selectedAmenities.length > 0 && !selectedAmenities.every((a) => p.amenities.includes(a))) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'price-low') return a.price - b.price;
        return 0;
      });
  }, [searchQuery, selectedLocation, selectedType, priceRange, bedrooms, bathrooms, selectedAmenities, sortBy]);

  const totalPages = Math.ceil(buyProperties.length / itemsPerPage);
  const paginatedProperties = buyProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType('');
    setPriceRange([0, 5000000]);
    setBedrooms(null);
    setBathrooms(null);
    setSelectedAmenities([]);
  };

  const activeFiltersCount = [
    selectedLocation,
    selectedType,
    bedrooms,
    bathrooms,
    selectedAmenities.length > 0,
    priceRange[0] > 0 || priceRange[1] < 5000000,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Modern homes"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Explore over 1 million homes for sale across the country.
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warmGray-400" />
                <input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-charcoal placeholder:text-warmGray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-4 bg-white text-charcoal rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="w-6 h-6 bg-charcoal text-white rounded-full text-xs flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`lg:w-72 flex-shrink-0 ${
              showFilters ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg text-charcoal">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-warmGray-500 hover:text-charcoal flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    Clear all
                  </button>
                )}
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-warmGray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                >
                  <option value="">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-warmGray-700 mb-2">Property Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-warmGray-700 mb-2">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="50000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-warmGray-700 mb-2">Bedrooms</label>
                <div className="flex gap-2">
                  {[null, 1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num ?? 'any'}
                      onClick={() => setBedrooms(num)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                        bedrooms === num
                          ? 'bg-charcoal text-white'
                          : 'bg-warmGray-100 text-warmGray-600 hover:bg-warmGray-200'
                      }`}
                    >
                      {num ?? 'Any'}
                      {num && '+'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-warmGray-700 mb-2">Bathrooms</label>
                <div className="flex gap-2">
                  {[null, 1, 2, 3, 4].map((num) => (
                    <button
                      key={num ?? 'any'}
                      onClick={() => setBathrooms(num)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                        bathrooms === num
                          ? 'bg-charcoal text-white'
                          : 'bg-warmGray-100 text-warmGray-600 hover:bg-warmGray-200'
                      }`}
                    >
                      {num ?? 'Any'}
                      {num && '+'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-2">Amenities</label>
                <div className="flex flex-wrap gap-2">
                  {amenitiesList.slice(0, 8).map((amenity) => (
                    <button
                      key={amenity}
                      onClick={() => toggleAmenity(amenity)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        selectedAmenities.includes(amenity)
                          ? 'bg-charcoal text-white'
                          : 'bg-warmGray-100 text-warmGray-600 hover:bg-warmGray-200'
                      }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <p className="text-warmGray-600">
                <span className="font-semibold text-charcoal">{buyProperties.length}</span> properties found
              </p>
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-warmGray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="price-low">Price (Low to High)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmGray-400 pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex rounded-lg border border-warmGray-200 overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-charcoal text-white' : 'bg-white text-warmGray-600 hover:bg-warmGray-50'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-charcoal text-white' : 'bg-white text-warmGray-600 hover:bg-warmGray-50'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Properties */}
            {paginatedProperties.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-6'
                }
              >
                {paginatedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl">
                <HomeIcon className="w-16 h-16 text-warmGray-300 mx-auto mb-4" />
                <h3 className="text-xl font-display font-semibold text-charcoal mb-2">No properties found</h3>
                <p className="text-warmGray-500 mb-6">Try adjusting your filters to see more results.</p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === i + 1
                        ? 'bg-charcoal text-white'
                        : 'bg-white text-warmGray-600 hover:bg-warmGray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Featured Neighborhoods */}
        <section className="mt-20">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-8">Featured Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.slice(0, 3).map((neighborhood) => (
              <div
                key={neighborhood.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
              >
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-1">{neighborhood.name}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {neighborhood.propertyCount} properties • Avg. ${(neighborhood.avgPrice / 1000).toFixed(0)}k
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide Section */}
        <section className="mt-20 bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-warmGray-500 uppercase tracking-wide">First Time Buyer?</span>
              <h2 className="text-3xl font-display font-bold text-charcoal mt-2 mb-4">
                We're Here to Help You Every Step
              </h2>
              <p className="text-warmGray-600 mb-8">
                Buying your first home is a big decision. Our comprehensive guides and expert agents will help you navigate the process with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Free Consultation
                </Link>
                <button className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-charcoal/5 transition-colors">
                  <Download className="w-5 h-5" />
                  Download Guide
                </button>
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-display font-semibold text-lg text-charcoal mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Mortgage Calculator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-warmGray-600 mb-1">Home Price</label>
                  <input
                    type="text"
                    defaultValue="$500,000"
                    className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warmGray-600 mb-1">Down Payment</label>
                  <input
                    type="text"
                    defaultValue="$100,000"
                    className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warmGray-600 mb-1">Interest Rate</label>
                  <input
                    type="text"
                    defaultValue="6.5%"
                    className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                  />
                </div>
                <div className="pt-4 border-t border-warmGray-200">
                  <p className="text-sm text-warmGray-500">Estimated Monthly Payment</p>
                  <p className="text-3xl font-display font-bold text-charcoal">$2,528/mo</p>
                </div>
                <button className="w-full bg-charcoal text-white py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2">
                  Get Pre-Approved
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
