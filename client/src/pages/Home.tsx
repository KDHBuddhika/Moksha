import React from 'react';
import Navbar from '../components/Navbar';
import VideoCarousel from '../components/VideoCarousel';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import SafePlace from '../components/SafePlace';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoCarousel />
      <Stats />
      <SafePlace />
      <Footer />
    </div>
  );
}

export default Home;