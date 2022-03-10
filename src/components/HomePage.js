import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import Fetching and Filtering Actions
import { fetchTvAnime, filterAnimeTv } from '../redux/tvAnime/tvAnime';
import { fetchSpecialAnime, filterAnimeSpecial } from '../redux/specialAnime/specialAnime';
import { fetchMusicAnime, filterAnimeMusic } from '../redux/musicAnime/musicAnime';
import { fetchOnaAnime, filterAnimeOna } from '../redux/onaAnime/onaAnime';
import { fetchOvaAnime, filterAnimeOva } from '../redux/ovaAnime/ovaAnime';
import { fetchMovieAnime, filterAnimeMovie } from '../redux/movieAnime/movieAnime';
import { changePage } from '../redux/pageDetails/pageDetails';
import AnimeCard from './AnimeCard';
import '../styles/homepage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const { type, category } = useSelector((state) => state.pageDetails);
  const { status, dataFiltered } = useSelector((state) => state[type]);

  useEffect(async () => {
    dispatch(changePage('Home page'));
    switch (type) {
      case 'tvAnime': {
        if (status === 'iddle') {
          await dispatch(fetchTvAnime());
        }
        dispatch(filterAnimeTv(category));
        break;
      }
      case 'specialAnime': {
        if (status === 'iddle') {
          await dispatch(fetchSpecialAnime());
        }
        dispatch(filterAnimeSpecial(category));
        break;
      }
      case 'musicAnime': {
        if (status === 'iddle') {
          await dispatch(fetchMusicAnime());
        }
        dispatch(filterAnimeMusic(category));
        break;
      }
      case 'ovaAnime': {
        if (status === 'iddle') {
          await dispatch(fetchOvaAnime());
        }
        dispatch(filterAnimeOva(category));
        break;
      }
      case 'onaAnime': {
        if (status === 'iddle') {
          await dispatch(fetchOnaAnime());
        }
        dispatch(filterAnimeOna(category));
        break;
      }
      case 'movieAnime': {
        if (status === 'iddle') {
          await dispatch(fetchMovieAnime());
        }
        dispatch(filterAnimeMovie(category));
        break;
      }
      default: {
        if (status === 'iddle') {
          await dispatch(fetchTvAnime());
        }
        dispatch(filterAnimeTv(category));
      }
    }
  }, [type, category]);

  return (
    <>
      {status === 'completed' ? (
        <>
          <div className="container">
            <p>{`Type: ${type.match(/\w+(?=Anime)/g)}`}</p>
            <p>{`Category: ${category}`}</p>
            <p>{`Results: ${dataFiltered.length}`}</p>
          </div>
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
                  type={anime.type}
                />
              </li>
            )) : <li> Getting Animes </li>}
          </ul>
        </>
      ) : <h2 style={{ color: 'black' }}> Getting Animes </h2>}
    </>
  );
};

export default HomePage;
