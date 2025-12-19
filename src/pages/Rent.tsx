import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid, List, ChevronDown, X, Home as HomeIcon, DollarSign, CheckCircle, FileText, Download, Calculator, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import { properties, locations, propertyTypes } from '../data/mockData';

type SortOption = 'newest' | 'rent-high' | 'rent-low';
type ViewMode = 'grid' | 'list';

export default function RentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [petFriendly, setPetFriendly] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const rentalProperties = useMemo(() => {
    return properties
      .filter((p) => p.listingType === 'rent')
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
        if (petFriendly && !p.petFriendly) {
          return false;
        }
        if (furnished && !p.furnished) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rent-high') return b.price - a.price;
        if (sortBy === 'rent-low') return a.price - b.price;
        return 0;
      });
  }, [searchQuery, selectedLocation, selectedType, priceRange, bedrooms, petFriendly, furnished, sortBy]);

  const totalPages = Math.ceil(rentalProperties.length / itemsPerPage);
  const paginatedProperties = rentalProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType('');
    setPriceRange([0, 10000]);
    setBedrooms(null);
    setPetFriendly(false);
    setFurnished(false);
  };

  const activeFiltersCount = [
    selectedLocation,
    selectedType,
    bedrooms,
    petFriendly,
    furnished,
    priceRange[0] > 0 || priceRange[1] < 10000,
  ].filter(Boolean).length;

  const [income, setIncome] = useState(6000);

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80"
            alt="Rental properties"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Find Your Perfect Rental
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Thousands of rentals available now. Find your next home today.
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

              {/* Monthly Rent Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-warmGray-700 mb-2">
                  Monthly Rent: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
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
                  {[null, 1, 2, 3, 4].map((num) => (
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

              {/* Toggles */}
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-warmGray-700">Pet Friendly</span>
                  <button
                    onClick={() => setPetFriendly(!petFriendly)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      petFriendly ? 'bg-charcoal' : 'bg-warmGray-200'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        petFriendly ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-warmGray-700">Furnished</span>
                  <button
                    onClick={() => setFurnished(!furnished)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      furnished ? 'bg-charcoal' : 'bg-warmGray-200'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        furnished ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </label>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <p className="text-warmGray-600">
                <span className="font-semibold text-charcoal">{rentalProperties.length}</span> rentals found
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
                    <option value="rent-high">Rent (High to Low)</option>
                    <option value="rent-low">Rent (Low to High)</option>
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
                <h3 className="text-xl font-display font-semibold text-charcoal mb-2">No rentals found</h3>
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

        {/* Rental Calculator Section */}
        <section className="mt-20 grid lg:grid-cols-2 gap-8">
          {/* Affordability Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="font-display font-semibold text-xl text-charcoal mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Rental Affordability Calculator
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-warmGray-600 mb-2">
                  Monthly Income: ${income.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="2000"
                  max="20000"
                  step="500"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-sm text-warmGray-500 mb-1">Max Affordable Rent</p>
                  <p className="text-2xl font-display font-bold text-charcoal">
                    ${Math.round(income * 0.3).toLocaleString()}/mo
                  </p>
                  <p className="text-xs text-warmGray-400 mt-1">30% of income</p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-sm text-warmGray-500 mb-1">Estimated Move-in Cost</p>
                  <p className="text-2xl font-display font-bold text-charcoal">
                    ${Math.round(income * 0.9).toLocaleString()}
                  </p>
                  <p className="text-xs text-warmGray-400 mt-1">First month + deposit</p>
                </div>
              </div>
              <button className="w-full bg-charcoal text-white py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2">
                Find Rentals in My Budget
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Move-in Costs Estimator */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="font-display font-semibold text-xl text-charcoal mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              Move-in Costs Estimator
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-warmGray-100">
                <span className="text-warmGray-600">First Month's Rent</span>
                <span className="font-semibold text-charcoal">$2,400</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-warmGray-100">
                <span className="text-warmGray-600">Security Deposit</span>
                <span className="font-semibold text-charcoal">$2,400</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-warmGray-100">
                <span className="text-warmGray-600">Application Fee</span>
                <span className="font-semibold text-charcoal">$50</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-warmGray-100">
                <span className="text-warmGray-600">Pet Deposit (if applicable)</span>
                <span className="font-semibold text-charcoal">$500</span>
              </div>
              <div className="flex items-center justify-between py-4 bg-cream rounded-lg px-4 mt-4">
                <span className="font-medium text-charcoal">Total Estimated Move-in Cost</span>
                <span className="text-xl font-bold text-charcoal">$5,350</span>
              </div>
            </div>
          </div>
        </section>

        {/* Renter Resources */}
        <section className="mt-20">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-8">Renter Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                Rental Application Tips
              </h3>
              <p className="text-warmGray-600 text-sm mb-4">
                Learn how to prepare a strong rental application and increase your chances of approval.
              </p>
              <button className="text-charcoal font-medium text-sm hover:underline flex items-center gap-1">
                Read Guide
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                Tenant Rights Guide
              </h3>
              <p className="text-warmGray-600 text-sm mb-4">
                Know your rights as a renter. Understand lease terms, security deposits, and more.
              </p>
              <button className="text-charcoal font-medium text-sm hover:underline flex items-center gap-1">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                Moving Checklist
              </h3>
              <p className="text-warmGray-600 text-sm mb-4">
                Download our comprehensive moving checklist to ensure a smooth transition.
              </p>
              <button className="text-charcoal font-medium text-sm hover:underline flex items-center gap-1">
                Download PDF
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
