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

INSERT INTO works (`title`, `slug`, `description`, `short_description`, `image`, `thumbnail`, `logo`, `url`, `work_types`, `languages`, `technologies`) VALUES
('Cyber Namba', 'cyber-namba', 'The cyber platform created to organize cyber-sport competitions.',
'The cyber platform created to organize cyber-sport competitions.',
'images/cn_big.jpg', 'images/cn.jpg', 'images/cn_logo.png', 'http://cybernamba.com/',
'1,2', '1,3,4,5', '1,2,3,4,10'),
('Portfolio', 'portfolio', 'Own portfolio.',
'Own portfolio.',
'', '', 'images/omen_logo.svg', 'http://www.nick-omen.com/',
'1,2', '4,5,6,7', '12,13,15,16,17'),
('Athletic', 'athletic', 'Site created for BodyBuilding event in Almaty, Kazakhstan.',
'Landing page with contact form and blog for NambaExpress service.',
'images/atletic_big.jpg', 'images/atletic.jpg', 'images/wp_logo.png', 'http://atletic.kz/',
'1,2', '1,2,4,5', '2,3,4,7'),
('Namba Express', 'namba-express', 'Landing page with contact form and blog for NambaExpress service.',
'The cyber platform created to organize cyber-sport competitions.',
'images/express_big.jpg', 'images/express.jpg', 'images/express_logo.png', 'http://nambaexpress.kg/',
'1,2', '1,2,4,5', '3,4,7'),
('Global Business Forum', 'global-business-forum', 'Landing page with booking system for Global Business Forum in Almaty, Kazakhstan.',
'Landing page with booking system for Global Business Forum in Almaty, Kazakhstan.',
'images/gbf_big.jpg', 'images/gbf.jpg', 'images/gbf_logo.png', 'http://gbf.adline.kz/',
'1,2', '1,2,4,5', '2,3,4,7,12'),
('Charity Award Site', 'charity-award-site', 'Platform which allows to upload photos and videos people can voute for. The platform include auto-grabbing social networks(facebook, vk, instagram) by tag and create new articles.',
'Platform which allows to upload photos and videos people can voute for. The platform include auto-grabbing social networks(facebook, vk, instagram) by tag and create new articles.',
'images/dobro_big.jpg', 'images/dobro.jpg', 'images/dobro_logo.png', 'http://delaidobro.tv7.kz/',
'1,2', '1,3,4,5,6', '1,2,3,4,6,10,12,16'),
('Official Mul-T-Lock Agent', 'official-mul-t-lock-agent', 'Landing page with contact form for official representative Mul-T-Lock Agency.',
'Landing page with contact form for official representative Mul-T-Lock Agency.',
'images/key_big.jpg', 'images/key.jpg', 'images/key_logo.png', 'http://vzlomunet.kz/',
'1,2', '1,2,4,5', '2,3,4,7'),
('Listed My Car', 'listed-my-car', 'Auto classifieds software targeted on the USA market based on the Flynax.',
'Auto classifieds software targeted on the USA market based on the Flynax.',
'images/lmc_big.jpg', 'images/lmc.jpg', 'images/lmc_logo.png', 'http://www.listedmycar.com/',
'1,2', '1,2,4,5,6', '2,3,8,16');

DROP TABLE IF EXISTS work_types;
CREATE TABLE work_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type CHAR(120) NOT NULL DEFAULT "",
    slug CHAR(32) NOT NULL DEFAULT ""
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO work_types (`id`, `type`, `slug`) VALUES
(1, 'Frontend', 'frontend'),
(2, 'Backend', 'backend'),
(3, 'UI', 'ui'),
(4, 'UX', 'ux');

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lang CHAR(120) NOT NULL DEFAULT "",
    slug CHAR(32) NOT NULL DEFAULT "",
    work_type CHAR(32) NOT NULL DEFAULT ""
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO languages (`id`, `lang`, `slug`, `work_type`) VALUES
(1, 'JavaScript', 'javascript', '1,2'),
(2, 'PHP', 'php', '2'),
(3, 'Python', 'python', '2'),
(4, 'HTML', 'html', '1'),
(5, 'CSS', 'css', '1'),
(6, 'SQL', 'sql', '2'),
(7, 'TypeScript', 'type-script', '1,2');

DROP TABLE IF EXISTS technologies;
CREATE TABLE technologies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tech CHAR(120) NOT NULL DEFAULT "",
    slug CHAR(120) NOT NULL DEFAULT "",
    work_type CHAR(32) NOT NULL DEFAULT ""
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO technologies (`id`, `tech`, `slug`, `work_type`) VALUES
(1, 'Django', 'django', '2'),
(2, 'Bootstrap', 'bootstrap', '1'),
(3, 'jQuery', 'jquery', '1'),
(4, 'AJAX', 'ajax', '1,2'),
(5, 'Google API', 'google-api', '1'),
(6, 'Scrapy', 'scrapy', '2'),
(7, 'WordPress', 'wordpress', '1,2'),
(8, 'Flynax', 'flynax', '1,2'),
(9, 'Yandex API', 'yandex-api', '1'),
(10, 'Grunt', 'grunt', '2'),
(11, 'Gulp', 'gulp', '2'),
(12, 'SASS', 'sass', '2'),
(13, 'restify', 'restify', '2'),
(14, 'ReactJS', 'react-js', '1,2'),
(15, 'Angular 2', 'angular-2', '1,2'),
(16, 'MySQL', 'my-sql', '1,2'),
(17, 'NodeJS', 'node-js', '2');
