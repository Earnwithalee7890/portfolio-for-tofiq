import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPortfolio from './pages/MainPortfolio';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
