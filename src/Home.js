import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
// import { Query } from 'react-apollo';
import { MOVIE_HOME } from './queries';
import Movie from './Movie';
import { useQuery } from 'react-apollo-hooks';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => {
  const { data, error, loading } = useQuery(MOVIE_HOME);
  return (
    <Container>
      <Helmet>
      <title>Movie List's Home</title>
      </Helmet>
      { loading && 'Loading' }
      { error && 'Something is wrong' }
      {!loading && data && data.movies &&
        data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
            rating={movie.rating}
          />
        ))}
      </Container>
  );
}
  // (
  // <Query query={HOME_PAGE}>
  // {({loading, data, err}) => {
  //   if (loading) return <span>loading</span>
  //   if (err) return <span>some error occured!</span>
  //   return data.movies.map((movie) => 
  //     <h2 key={movie.id}>{movie.title} / {movie.rating}</h2>
  //   )
  // }}
  // </Query>
  // )
;

export { Home };