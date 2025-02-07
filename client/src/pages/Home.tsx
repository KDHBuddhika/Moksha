import React from 'react';
import Navbar from '../components/Navbar';
import VideoCarousel from '../components/VideoCarousel';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import SafePlace from '../components/SafePlace';
import WhyChooseUs from '../components/WhyChooseUs';
import Packages from '../components/Packages';
import TopDestinations from '../components/TopDestinations';
import PopularBlogs from '../components/PopularBlogs';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoCarousel />
      <Stats />
      <SafePlace />
      <WhyChooseUs />
      <Packages />
      <TopDestinations />
      <PopularBlogs />
      <Footer />
    </div>
  );
}

export default Home;