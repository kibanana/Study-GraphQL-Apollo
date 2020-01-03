import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-apollo-hooks';
import { MOVIE_DETAILS } from './queries';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  const { data, error, loading } = useQuery(MOVIE_DETAILS(movieId));
  return (
    <Container>
      <Helmet>
      <title>Movie </title>
      </Helmet>
      { loading && 'Loading' }
      { error && 'Something is wrong' }
      {!loading && data.movie &&
        <React.Fragment>
          {data.movie.title}
          {data.movie.rating}
          {data.movie.medium_cover_image}
          {data.movie.description_intro}
          {data.movie.summary}
          {data.movie.language}
          {data.movie.genres}
        </React.Fragment>
      }
      </Container>
  );
};

export { Detail };