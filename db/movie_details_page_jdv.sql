create or replace json relational duality view movie_details_page_jdv as
  movies
  {
    _id: movie_id,
    title,
    description,
    year,
    runtime,
    rating: imdb_rating,
    cast: movie_cast
    [
      {
        movieId: movie_id,
        personId: person_id,
        role,
        persons @unnest
        {
          personId2: person_id,
          name: person_name
        }
      }
    ],
    comments: movie_comments @insert
    [
      {
        commentId: comment_id,
        username: username,
        comment: comment_text
      }
    ]
  }
;
