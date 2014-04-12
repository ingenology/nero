-- User table
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  password BLOB NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,

  CONSTRAINT id_pk PRIMARY KEY (id)
) ENGINE = INNODB;



-- Journal table
DROP TABLE IF EXISTS journals;

CREATE TABLE journals (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  create_date long NOT NULL,
  notes VARCHAR(255) NOT NULL,
  hashtags VARCHAR(255) NOT NULL,
  altitude FLOAT NOT NULL,
  azimuth FLOAT NOT NULL,
  gamma FLOAT NOT NULL,

  CONSTRAINT id_pk PRIMARY KEY (id),
  CONSTRAINT user_id_fk FOREIGN KEY journals(user_id) REFERENCES users(id)
) ENGINE = INNODB;