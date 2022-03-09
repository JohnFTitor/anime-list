import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import Fetching and Filtering Actions
import { fetchTvAnime, filterAnimeTv } from '../redux/tvAnime/tvAnime';
import { fetchSpecialAnime } from '../redux/specialAnime/specialAnime';
import { fetchMusicAnime } from '../redux/musicAnime/musicAnime';
import { fetchOnaAnime } from '../redux/onaAnime/onaAnime';
import { fetchOvaAnime } from '../redux/ovaAnime/ovaAnime';
import { fetchMovieAnime } from '../redux/movieAnime/movieAnime';
import AnimeCard from './AnimeCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { type, category } = useSelector((state) => state.filtering);
  const { status, dataFiltered } = useSelector((state) => state[type]);

  useEffect(() => {
    switch (type) {
      case 'tvAnime': {
        if (status === 'iddle') {
          dispatch(fetchTvAnime());
        }
        dispatch(filterAnimeTv(category));
        break;
      }
      case 'specialAnime': {
        if (status === 'iddle') {
          dispatch(fetchSpecialAnime());
        }
        break;
      }
      case 'musicAnime': {
        if (status === 'iddle') {
          dispatch(fetchMusicAnime());
        }
        break;
      }
      case 'ovaAnime': {
        if (status === 'iddle') {
          dispatch(fetchOvaAnime());
        }
        break;
      }
      case 'onaAnime': {
        if (status === 'iddle') {
          dispatch(fetchOnaAnime());
        }
        break;
      }
      case 'movieAnime': {
        if (status === 'iddle') {
          dispatch(fetchMovieAnime());
        }
        break;
      }
      default: {
        if (status === 'iddle') {
          dispatch(fetchTvAnime());
        }
      }
    }
  }, [type, category]);

  return (
    <ul className="cards-container">
      {dataFiltered.length > 0 ? dataFiltered.map((anime) => (
        <li key={anime.mal_id}>
          <AnimeCard
            id={anime.mal_id}
            imgUrl={anime.images.webp.large_image_url}
            title={anime.title}
            titleJapanese={anime.title_japanese}
            score={anime.score}
            year={anime.year}
            genres={anime.genres}
          />
        </li>
      )) : <li> Getting Animes </li>}
    </ul>
  );
};

export default HomePage;
