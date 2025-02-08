import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
    name: "David Fernando",
    role: "Founder Asto",
    quote: "This site combines inspiration and practical tools for a spiritual growth, creating a deeply enriching experience for beginners and seasoned seekers."
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Sarah Chen",
    role: "Meditation Expert",
    quote: "An incredible platform that brings together mindfulness and spirituality in a way that's accessible and profound for all practitioners."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Michael Roberts",
    role: "Wellness Coach",
    quote: "The perfect blend of ancient wisdom and modern approach. This platform has transformed how I guide my clients through their spiritual journey."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-black rounded-full p-6 z-10">
              <Quote className="h-8 w-8 text-white" />
            </div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Here What Our</h2>
              <h2 className="text-4xl font-bold text-gray-900">Clients Say..!</h2>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f"
                alt="Testimonial background"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute -bottom-4 right-4 flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;