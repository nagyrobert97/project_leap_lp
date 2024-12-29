import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-8rem)]">
      <div className="-mt-16">
        <Hero />
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;