import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getAnimeById } from '../redux/util/APIHandling';
import { changePage } from '../redux/pageDetails/pageDetails';
import '../styles/detailspage.scss';
import LoadingElement from './LoadingElement';

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
        <div className="anime-info">
          <div className="image-container">
            <img src={anime.images.webp.large_image_url} alt={anime.title} />
          </div>
          <div className="anime-description">
            <h2>{anime.title}</h2>
            <h3>{anime.title_japanese}</h3>
            <ul className="row genres">
              {anime.genres.map((genre) => (
                <li key={uuid()} className="box genre-box">{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="title"> Trailer </h3>
        {anime.trailer.embed_url ? (
          <iframe
            src={anime.trailer.embed_url.replace('&autoplay=1', '')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : <p>{'We couldn\'t find any link. Sorry :('}</p>}
        <div className="stats">
          <div className="airing">
            <h3 className="title"> Airing Information </h3>
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
          <div className="synopsis">
            <h3 className="title"> Synopsis </h3>
            <p className="synopsis">{anime.synopsis}</p>
          </div>
          <div className="more-info">
            <h3 className="title"> More Information </h3>
            <p className="box details-box">{`Rating: ${anime.rating ? anime.rating : 'Not Specified'}`}</p>
            <p className="box details-box">{`Score: ${anime.score}`}</p>
            <p className="box details-box">{`Season: ${anime.season ? anime.season : 'Not Specified'}`}</p>
          </div>
          <div className="producers">
            <h3 className="title"> Producers </h3>
            <ul className="row genres">
              {anime.producers.map((producer) => (
                <li key={uuid()} className="box">{producer.name}</li>
              ))}
            </ul>
          </div>
          <div className="studios">
            <h3 className="title"> Studios </h3>
            <ul className="row genres">
              {anime.studios.map((studio) => (
                <li key={uuid()} className="box">{studio.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ) : <LoadingElement />
    )
  );
};

export default DetailsPage;
