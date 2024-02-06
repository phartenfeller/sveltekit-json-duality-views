create or replace json relational duality view actor_details_page_jdv as
  persons
  {
    _id: person_id,
    name: person_name,
    movies: movie_cast
    [
      {
        movie_id, 
        person_id,
        role,
        movies @unnest
        {
          title,
          year,
          movieId: movie_id
        }
      }
    ] 
  }
;
