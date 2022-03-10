import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getAnimeById } from '../redux/util/APIHandling';
import { changePage } from '../redux/pageDetails/pageDetails';
import '../styles/detailspage.scss';

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
        <div className="anime-description">
          <h2>{anime.title}</h2>
          <h3>{anime.title_japanese}</h3>
        </div>
        <ul className="row genres">
          {anime.genres.map((genre) => (
            <li key={uuid()} className="box genre-box">{genre.name}</li>
          ))}
        </ul>
        <h3 className="title"> Airing Information </h3>
        <div>
          <p className="box details-box">
            {`Year: ${anime.year ? anime.year : 'Not Specified'}`}
          </p>
          <p className="box details-box">
            {`Episodes: ${anime.episodes ? anime.episodes : 'Not Specified'}`}
          </p>
          <p className="box details-box">
            {`Duration: ${anime.duration ? anime.duration : 'Not Specified'}`}
          </p>
          <p className="box details-box">{`Status: ${anime.status ? anime.status : 'Not Specified'}`}</p>
        </div>
        <h3 className="title"> More Information </h3>
        <div>
          <p>{`Rating: ${anime.rating ? anime.rating : 'Not Specified'}`}</p>
          <p>{`Score: ${anime.score}`}</p>
          <p>{`Season: ${anime.season ? anime.season : 'Not Specified'}`}</p>
        </div>
        <h3 className="title"> Synopsis </h3>
        <p className="synopsis">{anime.synopsis}</p>
        <h3 className="title"> Trailer </h3>
        {anime.trailer.embed_url ? (
          <iframe
            src={anime.trailer.embed_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : <p>{'We couldn\'t find any link. Sorry :('}</p>}
        <h3 className="title"> Producers </h3>
        <ul className="row genres">
          {anime.producers.map((producer) => (
            <li key={uuid()} className="box">{producer.name}</li>
          ))}
        </ul>
        <h3 className="title"> Studios </h3>
        <ul className="row genres">
          {anime.studios.map((studio) => (
            <li key={uuid()} className="box">{studio.name}</li>
          ))}
        </ul>
      </div>
    ) : <h2> Getting anime details... </h2>
    )
  );
};

export default DetailsPage;
