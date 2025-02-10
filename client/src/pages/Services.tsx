import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Flower2, Utensils, Dumbbell, Users, Calendar } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: "Attractive Destinations",
    description: "Discover sacred places and spiritual retreats across beautiful locations, offering transformative experiences and deep connections.",
    image: "https://images.unsplash.com/photo-1514937561187-d1b7d040d19f",
    features: ["Sacred temples", "Mountain retreats", "Peaceful monasteries", "Meditation centers"]
  },
  {
    icon: Flower2,
    title: "Meditation",
    description: "Expert-guided meditation sessions designed to help you find inner peace, reduce stress, and achieve mental clarity.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    features: ["Guided sessions", "Breathing techniques", "Mindfulness practices", "Stress reduction"]
  },
  {
    icon: Utensils,
    title: "Traditional Food Treats",
    description: "Experience authentic spiritual cuisine that nourishes both body and soul, prepared with traditional recipes and mindful practices.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    features: ["Ayurvedic meals", "Organic ingredients", "Dietary guidance", "Cooking workshops"]
  },
  {
    icon: Dumbbell,
    title: "Yoga Retreats",
    description: "Immersive yoga experiences that combine physical postures, breathing exercises, and meditation for holistic well-being.",
    image: "https://images.unsplash.com/photo-1506126279646-a697353d3166",
    features: ["Daily sessions", "Expert instruction", "All skill levels", "Peaceful settings"]
  },
  {
    icon: Users,
    title: "Cultural Workshops",
    description: "Engage in enriching workshops that explore spiritual traditions, cultural practices, and ancient wisdom teachings.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    features: ["Traditional arts", "Philosophy studies", "Cultural immersion", "Spiritual practices"]
  },
  {
    icon: Calendar,
    title: "Spiritual/Special Events",
    description: "Participate in transformative events and ceremonies that celebrate spiritual traditions and foster community connection.",
    image: "https://images.unsplash.com/photo-1518141532615-4305c9f914c9",
    features: ["Festivals", "Ceremonies", "Community gatherings", "Special celebrations"]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            alt="Services Hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our range of spiritual services designed to nurture your mind, body, and soul.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                  <service.icon className="h-6 w-6 text-amber-500" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join our community and discover the transformative power of our spiritual services.
            Start your journey towards inner peace and enlightenment today.
          </p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;