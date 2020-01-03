import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';

const Home = () => (
  <Query query={HOME_PAGE}>
  {({loading, data, err}) => {
    if (loading) return <span>loading</span>
    if (err) return <span>some error occured!</span>
    return data.movies.map((movie) => 
      <h2 key={movie.id}>{movie.title} / {movie.rating}</h2>
    )
  }}
  </Query>
);

export { Home };