import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const AnimeCard = (props) => {
  const {
    id,
    imgUrl,
    title,
    score,
    year,
    genres,
    type,
  } = props;

  return (
    <Link to={`details/${title}/${id}`} id={id} data-testid={`${id}-card`}>
      <img src={imgUrl} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <div className="row airing">
          <p className="box">{type}</p>
          {year && (<p className="box">{year}</p>)}
        </div>
        <ul className="row genres-container">
          {genres.map((genre) => (
            <li key={uuid()} className="box genre">
              {genre.name}
            </li>
          ))}
        </ul>
        <p className="box score" data-testid="score">{score}</p>
      </div>
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
  score: PropTypes.number.isRequired,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(String).isRequired,
  type: PropTypes.string.isRequired,
};

export default AnimeCard;
