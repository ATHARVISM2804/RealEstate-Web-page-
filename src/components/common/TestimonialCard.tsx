import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-warmGray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-warmGray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center">
            <span className="font-semibold text-charcoal">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-charcoal">{testimonial.name}</p>
          <p className="text-warmGray-500 text-sm capitalize">{testimonial.type}</p>
        </div>
      </div>
    </div>
  );
}
