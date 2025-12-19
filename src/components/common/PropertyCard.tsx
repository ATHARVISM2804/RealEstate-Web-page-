import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Property } from '../../types';
import { useFavorites } from '../../context/FavoritesContext';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  const formatPrice = (price: number, type: 'sale' | 'rent') => {
    if (type === 'rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-40 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <button
            onClick={() => toggleFavorite(property.id)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${favorite ? 'fill-red-500 text-red-500' : 'text-warmGray-600'}`}
            />
          </button>
        </div>
        <div className="p-4">
          <p className="text-lg font-bold text-charcoal">
            {formatPrice(property.price, property.priceType)}
          </p>
          <h3 className="font-semibold text-charcoal mt-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-warmGray-500 text-sm mt-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{property.address}</span>
          </div>
          <div className="flex items-center gap-4 mt-3 text-warmGray-600 text-xs">
            <span className="flex items-center gap-1">
              <Bed className="w-3 h-3" /> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-3 h-3" /> {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <Square className="w-3 h-3" /> {property.sqft}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Status Badge */}
        {property.status !== 'available' && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal text-white text-xs font-medium uppercase">
            {property.status}
          </div>
        )}

        {/* Available Date Badge */}
        {property.availableDate && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-medium">
            Available {new Date(property.availableDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(property.id)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${favorite ? 'fill-red-500 text-red-500' : 'text-warmGray-600'}`}
          />
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="text-2xl font-bold text-white drop-shadow-lg">
            {formatPrice(property.price, property.priceType)}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-lg text-charcoal group-hover:text-charcoal/80 transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 text-warmGray-500 mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{property.address}, {property.city}, {property.state}</span>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-warmGray-100">
          <div className="flex items-center gap-2 text-warmGray-600">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-warmGray-600">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-warmGray-600">
            <Square className="w-4 h-4" />
            <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
