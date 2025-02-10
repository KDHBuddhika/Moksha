import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Clock, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Meditation', 'Mindfulness', 'Spirituality', 'Yoga', 'Wellness'];

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27",
    category: "Meditation",
    title: "Beginner's Guide to Meditation & Mindfulness",
    description: "Explore meditation techniques and mindful practices to achieve inner peace, balance, focus, clarity, and self-awareness.",
    date: "June 15, 2024",
    readTime: "5 mins",
    comments: 3
  },
  {
    image: "https://images.unsplash.com/photo-1507521989600-fb6a7046b7f6",
    category: "Spirituality",
    title: "Understanding Chakras & Energy Centers",
    description: "Learn about the seven main chakras and how they influence your physical, emotional, and spiritual well-being.",
    date: "June 14, 2024",
    readTime: "7 mins",
    comments: 5
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    category: "Mindfulness",
    title: "Daily Mindfulness Practices",
    description: "Simple mindfulness exercises you can incorporate into your daily routine for better mental clarity.",
    date: "June 13, 2024",
    readTime: "4 mins",
    comments: 2
  },
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    category: "Yoga",
    title: "Morning Yoga Routine for Energy",
    description: "Start your day with this energizing yoga sequence designed to awaken your body and mind.",
    date: "June 12, 2024",
    readTime: "6 mins",
    comments: 4
  },
  {
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83",
    category: "Wellness",
    title: "Holistic Approach to Well-being",
    description: "Discover how to integrate spiritual practices with physical and mental wellness for complete health.",
    date: "June 11, 2024",
    readTime: "8 mins",
    comments: 6
  },
  {
    image: "https://images.unsplash.com/photo-1514716590153-1e183bb45776",
    category: "Meditation",
    title: "Deep Meditation Techniques",
    description: "Advanced meditation practices for experienced practitioners seeking deeper spiritual connection.",
    date: "June 10, 2024",
    readTime: "9 mins",
    comments: 7
  },
  {
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
    category: "Mindfulness",
    title: "Mindful Living in Modern World",
    description: "Tips and strategies for maintaining mindfulness amid the chaos of contemporary life.",
    date: "June 9, 2024",
    readTime: "5 mins",
    comments: 4
  },
  {
    image: "https://images.unsplash.com/photo-1507521989600-fb6a7046b7f6",
    category: "Spirituality",
    title: "Sacred Rituals for Inner Peace",
    description: "Ancient spiritual practices adapted for modern life to help find inner peace and harmony.",
    date: "June 8, 2024",
    readTime: "6 mins",
    comments: 5
  },
  {
    image: "https://images.unsplash.com/photo-1599447332412-6bc6830c815a",
    category: "Wellness",
    title: "Natural Healing Practices",
    description: "Traditional healing methods combined with modern wellness approaches for holistic health.",
    date: "June 7, 2024",
    readTime: "7 mins",
    comments: 3
  }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  const postsPerPage = 6;
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507521989600-fb6a7046b7f6"
            alt="Blog Hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover profound spiritual insights and mindfulness tips to help your journey to inner peace.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === i + 1
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;