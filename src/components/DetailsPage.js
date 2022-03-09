import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeById } from '../redux/util/APIHandling';

const DetailsPage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(async () => {
    setAnime(await getAnimeById(id));
  }, []);

  return (
    <h2>{`${anime}`}</h2>
  );
};

export default DetailsPage;
