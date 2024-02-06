CREATE TABLE MOVIES (
  MOVIE_ID NUMBER, 
  TITLE VARCHAR2(255 CHAR),
  DESCRIPTION VARCHAR2(4000 char),
  YEAR NUMBER(4,0), 
  RUNTIME NUMBER(4,0),
  CERTIFICATE NUMBER(2,0), 
  BUDGET_CURRENCY VARCHAR2(10 CHAR), 
  WORLD_WIDE_GROSS NUMBER(16,0), 
  BUDGET NUMBER(16,0), 
  IMDB_RATING NUMBER,
  VOTES NUMBER,
  original_Language varchar2(10 char),
  constraint movies_pk primary key (movie_id)
  );


CREATE TABLE persons (
  person_id NUMBER, 
  person_name VARCHAR2(4000 CHAR),
  person_department VARCHAR2(4000 char),
  constraint persons_pk primary key (person_id)
  );

CREATE TABLE movie_cast (
  person_id NUMBER, 
  movie_id number,
  role VARCHAR2(4000 CHAR),
  list_order number,
  constraint movie_cast_pk primary key (movie_id, person_id),
  constraint movie_cast_movie_fk foreign key (movie_id) references movies (movie_id),
  constraint movie_cast_person_fk foreign key (person_id) references persons (person_id)
  );


create sequence movie_comments_seq;


CREATE TABLE movie_comments (
  comment_id number default on null movie_comments_seq.nextval,
  movie_id number,
  username VARCHAR2(255 CHAR),
  comment_text varchar2(4000 char),
  constraint movie_comments_pk primary key (comment_id),
  constraint movie_comments_movie_fk foreign key (movie_id) references movies (movie_id)
  );


create index movie_comments_movie_ix on movie_comments ( movie_id );
