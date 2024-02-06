create or replace json relational duality view movie_test_jdv as
  movies
  {
    _id: movie_id,
    title,
    description,
    year,
    runtime,
    imdb_rating
  }
;
