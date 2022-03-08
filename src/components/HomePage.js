import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvAnime } from '../redux/tvAnime/tvAnime';
import AnimeCard from './AnimeCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.tvAnime);

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchTvAnime());
    }
  }, []);

  return (
    <ul className="cards-container">
      {data.length > 0 ? data.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          id={anime.mal_id}
          imgUrl={anime.images.webp.large_image_url}
          title={anime.title}
          titleJapanese={anime.title_japanese}
          score={anime.score}
          year={anime.year}
          genres={anime.genres}
        />
      )) : <li> Getting Animes </li>}
    </ul>
  );
};

export default HomePage;
