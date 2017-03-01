DROP TABLE IF EXISTS works;
CREATE TABLE works (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title CHAR(100) NOT NULL DEFAULT "",
    slug CHAR(32) NOT NULL DEFAULT "",
    description TINYTEXT NOT NULL DEFAULT "",
    short_description CHAR(140) NOT NULL DEFAULT "",
    image CHAR(120) NOT NULL DEFAULT "",
    thumbnail CHAR(120) NOT NULL DEFAULT "",
    logo CHAR(120) NOT NULL DEFAULT "",
    url CHAR(120) NOT NULL DEFAULT "",
    work_types CHAR(32) NOT NULL DEFAULT "",
    languages CHAR(32) NOT NULL DEFAULT "",
    technologies CHAR(32) NOT NULL DEFAULT ""
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS work_types;
CREATE TABLE work_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name CHAR(120) NOT NULL DEFAULT "",
    slug CHAR(32) NOT NULL DEFAULT ""
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO work_types (`id`, `name`, `slug`) VALUES
(1,'Front-end','front-end'),
(2,'Back-end','back-end'),
(3,'Testing','testing'),
(4,'UI/UX','ui-ux');

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name CHAR(120) NOT NULL DEFAULT "",
    slug CHAR(32) NOT NULL DEFAULT "",
    skill_level INT(3) NOT NULL DEFAULT 0,
    image VARCHAR(60) NOT NULL DEFAULT '',
    experience DATE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
ALTER TABLE languages ADD UNIQUE `language_index`(`name`, `slug`);

DROP TABLE IF EXISTS technologies;
CREATE TABLE technologies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name CHAR(120) NOT NULL DEFAULT "",
    slug CHAR(120) NOT NULL DEFAULT "",
    image CHAR(120) NOT NULL DEFAULT "",
    work_type_id INT(8) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
ALTER TABLE technologies ADD UNIQUE `tech_index` (`name`, `slug`);

INSERT INTO technologies (`name`, `slug`, `work_type_id`) VALUES
('Django','django',2),
('jQuery','jquery',1),
('Angular2','angular2',1),
('Restify','restify',2),
('Django REST Framework','django-rest-framework',2);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username CHAR(32) NOT NULL DEFAULT "",
    email CHAR(64) NOT NULL DEFAULT "",
    password CHAR(255) NOT NULL,
    salt CHAR(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
ALTER TABLE users ADD UNIQUE `user_index` (`username`, `email`);
