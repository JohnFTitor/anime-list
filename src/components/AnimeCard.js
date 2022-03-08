import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const AnimeCard = (props) => {
  const {
    id,
    imgUrl,
    title,
    titleJapanese,
    score,
    year,
    genres,
  } = props;

  return (
    <li id={id} className="anime-card">
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <h3>{titleJapanese}</h3>
      <p data-testid="score">{score}</p>
      <p>{year}</p>
      <ul className="genres-container">
        {genres.map((genre) => (
          <li key={uuid()} className="genre">
            {genre.name}
          </li>
        ))}
      </ul>
    </li>
  );
};

AnimeCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleJapanese: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(String).isRequired,
};

export default AnimeCard;
