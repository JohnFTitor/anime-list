import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const AnimeCard = (props) => {
  const {
    id,
    imgUrl,
    title,
    titleJapanese,
    score,
    year,
    genres,
    type,
  } = props;

  return (
    <Link to={`details/${title}/${id}`} id={id} className="anime-card" data-testid={`${id}-card`}>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <h3>{titleJapanese}</h3>
      <p data-testid="score">{score}</p>
      <p>{year}</p>
      <p>{type}</p>
      <ul className="genres-container">
        {genres.map((genre) => (
          <li key={uuid()} className="genre">
            {genre.name}
          </li>
        ))}
      </ul>
    </Link>
  );
};

AnimeCard.defaultProps = {
  year: 'Not Specified',
};

AnimeCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleJapanese: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(String).isRequired,
  type: PropTypes.string.isRequired,
};

export default AnimeCard;
