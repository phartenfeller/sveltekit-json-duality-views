create or replace json relational duality view all_movies_jdv as
  movies
  {
    _id: movie_id,
    title,
    year,
    rating: imdb_rating
  }
;
