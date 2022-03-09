import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getAnimeById } from '../redux/util/APIHandling';
import { changePage } from '../redux/pageDetails/pageDetails';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { title, id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(async () => {
    setAnime(await getAnimeById(id));
    dispatch(changePage(title));
  }, []);

  return (
    (anime.title ? (
      <div className="anime-details">
        <img src={anime.images.webp.large_image_url} alt={anime.title} />
        <div>
          <h2>{anime.title}</h2>
          <h3>{anime.title_japanese}</h3>
        </div>
        <ul>
          {anime.genres.map((genre) => (
            <li key={uuid()}>{genre.name}</li>
          ))}
        </ul>
        <div>
          <p>
            Year:
            {anime.year}
          </p>
          <p>
            Episodes:
            {anime.episodes}
          </p>
          <p>
            Duration:
            {anime.duration}
          </p>
          <p>{anime.status}</p>
        </div>
        <div>
          <p>{anime.rating}</p>
          <p>{anime.score}</p>
          <p>{anime.season}</p>
        </div>
        <p>{anime.synopsis}</p>
        {(anime.trailer.embed_url && (
        <iframe
          src={anime.trailer.embed_url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        ))}
        <ul>
          {anime.producers.map((producer) => (
            <li key={uuid()}>{producer.name}</li>
          ))}
        </ul>
        <ul>
          {anime.studios.map((studio) => (
            <li key={uuid()}>{studio.name}</li>
          ))}
        </ul>
      </div>
    ) : <h2> Getting anime details... </h2>
    )
  );
};

export default DetailsPage;
