import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Users, Star } from 'lucide-react';

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    name: "David Anderson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in spiritual practices and meditation."
  },
  {
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
    name: "Sarah Chen",
    role: "Head of Meditation",
    bio: "Certified meditation instructor with expertise in mindfulness techniques."
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    name: "Emma Rodriguez",
    role: "Wellness Coach",
    bio: "Specializes in holistic healing and spiritual wellness programs."
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    name: "Michael Wright",
    role: "Spiritual Guide",
    bio: "Expert in ancient spiritual practices and modern mindfulness."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513097633097-329a3a64e0d4"
            alt="About Us Hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We offer a spiritual journey through yoga, meditation, and mindfulness,
            guiding you toward inner peace and well-being.
          </p>
        </div>
      </div>

      {/* Core Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-600 text-sm font-medium mb-4">
                Our Core Vision
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Guiding You Towards Inner Peace
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Moksha, our mission is to foster and guide individuals 
                on their spiritual journey through yoga, meditation, and 
                mindful awakening. We believe that everyone has the 
                potential to experience true peace and liberation by the 
                practice of ancient wisdom in modern times.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By blending ancient wisdom with modern practices, we 
                help individuals achieve a unique transformative growth 
                and enlightenment on Earth.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                alt="Meditation by the beach"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 w-32 h-32 rounded-full flex items-center justify-center text-white">
                <Target className="h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moksha Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e"
                  alt="Spiritual Journey"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -top-6 -left-6 bg-gray-900 p-6 rounded-full">
                  <Star className="h-8 w-8 text-amber-500" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-600 text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Moksha Spiritual Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The journey of Moksha began with a vision to create a 
                sanctuary where individuals could discover their true 
                selves. Born from peace amidst the chaos, inspired by 
                ancient wisdom and modern-day personal transformation, 
                we built a haven where spiritual practices could coexist 
                with the realities of modern living.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The name "Moksha," derived from Sanskrit, symbolizes 
                liberation - freedom from suffering and the realization of one's 
                true nature. Our journey has been one of continuous growth, 
                touching many lives and uniting souls on their paths to 
                inner transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-600 text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-600 text-sm font-medium mb-4">
                Our Community
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Our Customers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We strive to deeply understand your spiritual journey and aspirations. 
                This allows us to guide you through transformative experiences tailored 
                to your unique path. The stories our practitioners share inspire us to 
                continuously evolve and improve.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">95%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">4.9</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                alt="Happy Customers"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-900 p-6 rounded-full">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;