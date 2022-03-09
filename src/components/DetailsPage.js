import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const params = useParams();

  return (
    <h2>{`${params.title}:${params.id}`}</h2>
  );
};

export default DetailsPage;
