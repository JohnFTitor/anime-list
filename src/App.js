import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/:title/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
