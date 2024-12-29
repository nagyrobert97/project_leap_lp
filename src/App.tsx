import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PastProjects from './pages/PastProjects';
import Discover from './pages/Discover';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="past-projects" element={<PastProjects />} />
          <Route path="discover" element={<Discover />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;