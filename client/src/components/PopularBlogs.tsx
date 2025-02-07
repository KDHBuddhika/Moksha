import React from 'react';
import { ArrowRight, MoreVertical } from 'lucide-react';

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a",
    date: "June 15,2024",
    title: "Beginner's Guide & Meditation & Mindfulness",
    description: "Explore meditation techniques and mindful soul practices to achieve inner peace, balance, focus, clarity, and self-awareness.",
    views: 5,
    comments: 3
  },
  {
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
    date: "June 15,2024",
    title: "Beginner's Guide & Meditation & Mindfulness",
    description: "Explore meditation techniques and mindful soul practices to achieve inner peace, balance, focus, clarity, and self-awareness.",
    views: 5,
    comments: 3
  },
  {
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e",
    date: "June 15,2024",
    title: "Beginner's Guide & Meditation & Mindfulness",
    description: "Explore meditation techniques and mindful soul practices to achieve inner peace, balance, focus, clarity, and self-awareness.",
    views: 5,
    comments: 3
  }
];

const PopularBlogs = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Popular Blogs</h2>
          <ArrowRight className="h-6 w-6 text-amber-500" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{blog.views} views</span>
                  <span className="mx-2">•</span>
                  <span>{blog.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBlogs;