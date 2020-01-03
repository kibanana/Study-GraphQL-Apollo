import gql from 'graphql-tag';

export const MOVIE_HOME = gql`
{
  movies(limit: 50, rating: 9) {
    id
    title
    rating
    medium_cover_image
  }
}
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      description_intro
      summary
      language
      genres
    }
  }
`;