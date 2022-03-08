import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvAnime } from './redux/tvAnime/tvAnime';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import DetailsPage from './components/DetailsPage';

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.tvAnime);

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchTvAnime());
    }
  }, []);

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
