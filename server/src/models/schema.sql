DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS journals;
DROP TABLE IF EXISTS users;


-- User table
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
  password BLOB NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,

  CONSTRAINT id_pk PRIMARY KEY (id)
) ENGINE = INNODB;

-- Journal table
CREATE TABLE journals (
  id INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
  user_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  latitude FLOAT(20) NOT NULL,
  longitude FLOAT(20) NOT NULL,
  create_date LONG NOT NULL,
  notes VARCHAR(255),
  hashtags VARCHAR(255),
  altitude FLOAT(20),
  azimuth FLOAT(20),
  status FLOAT(20),

  CONSTRAINT id_pk PRIMARY KEY (id)
) ENGINE = INNODB;

ALTER TABLE journals
ADD CONSTRAINT user_id_fk
FOREIGN KEY  journals(user_id)
REFERENCES users(id);

-- Photos table
CREATE TABLE photos (
  id INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
  journal_id INTEGER NOT NULL,
  filename VARCHAR(255) NOT NULL,
  type int NOT NULL,
  image_location VARCHAR(255) NOT NULL,
  create_date LONG NOT NULL,
  upload_complete TINYINT(1) NOT NULL, 
  CONSTRAINT id_pk PRIMARY KEY (id)
) ENGINE = INNODB;

ALTER TABLE photos
ADD CONSTRAINT photo_id_fk
FOREIGN KEY  photos(journal_id)
REFERENCES journals(id);
