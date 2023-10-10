// pages/index.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog/Blog';

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* The rest of your homepage content */}

      <Blog/>
      {}
    </div>
  );
}
