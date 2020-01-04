import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-apollo-hooks';
import { MOVIE_DETAILS } from './queries';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  movieId = Number(movieId);
  const { data, error, loading } = useQuery(MOVIE_DETAILS, {
    variables: { movieId }
  });
  if (loading) {
    return 'Loading';
  } else {
  return (
    <React.Fragment>
      <Container>
        <Helmet>
          <title>Movie Detail: {data.movie.title}</title>
        </Helmet>
        <img src={data.movie.medium_cover_image} />
        <div>
          <h2>{data.movie.title}</h2>
          <br />
          <div>
          {data.movie.description_intro}
          </div>
          <br />
          {data.movie.rating}
          <br />
          {data.movie.genres}
          <br />
          {data.movie.language}
        </div>
      </Container>
      <h1>Suggestions</h1>
      <MovieContainer>
        {data.suggestions.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            poster={movie.medium_cover_image}
          />
        ))}
      </MovieContainer>
    </React.Fragment>
  );
  }
};

export { Detail };