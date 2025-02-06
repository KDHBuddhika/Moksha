import React from 'react';
import Navbar from '../components/Navbar';
import VideoCarousel from '../components/VideoCarousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoCarousel />
  
      <Footer />
    </div>
  );
}

export default Home;