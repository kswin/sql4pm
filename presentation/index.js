// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import Sandbox from "../components/sandbox";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = { rows: [] };
  }

  componentDidMount() {
    const db = openDatabase("mydb", "1.0", "Test DB", 2 * 1024 * 1024);

    db.transaction((tx) => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Movies (
          id integer PRIMARY KEY UNIQUE,
          title TEXT,
          genre TEXT
        )
      `);
      tx.executeSql(`
        INSERT INTO Movies (title, genre) VALUES ('Blackhat', 'Action|Crime|Drama|Mystery|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Devils, The', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Marvellous', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Munyurangabo', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('George Washington Slept Here', 'Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Zero Theorem, The', 'Drama|Fantasy|Sci-Fi');
        INSERT INTO Movies (title, genre) VALUES ('The Sinners of Hell', 'Drama|Horror');
        INSERT INTO Movies (title, genre) VALUES ('Raise the Red Lantern (Da hong deng long gao gao gua)', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Reform School Girls', 'Action|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Super Inframan, The (Zhong guo chao ren)', 'Action|Fantasy|Sci-Fi');
        INSERT INTO Movies (title, genre) VALUES ('Incendies', 'Drama|Mystery|War');
        INSERT INTO Movies (title, genre) VALUES ('Judith of Bethulia', 'Adventure|Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Roman Spring of Mrs. Stone, The', 'Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Free the Nipple', 'Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Lizzie McGuire Movie, The', 'Children|Comedy|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Lovely & Amazing', 'Comedy|Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Who Is Killing the Great Chefs of Europe?', 'Comedy|Crime|Mystery');
        INSERT INTO Movies (title, genre) VALUES ('Lucky 7', 'Comedy|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Glue', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Nelly & Monsieur Arnaud', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Young People', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Grandmaster, The (Yi dai zong shi)', 'Action|Drama|IMAX');
        INSERT INTO Movies (title, genre) VALUES ('Lumiere and Company (Lumière et compagnie)', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('Transcendence', 'Drama|Sci-Fi|IMAX');
        INSERT INTO Movies (title, genre) VALUES ('Killjoy', 'Horror');
        INSERT INTO Movies (title, genre) VALUES ('Ax, The (couperet, Le)', 'Comedy|Crime');
        INSERT INTO Movies (title, genre) VALUES ('Just Around the Corner', 'Comedy|Musical');
        INSERT INTO Movies (title, genre) VALUES ('Voyeur (Abel)', 'Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Buck and the Preacher', 'Western');
        INSERT INTO Movies (title, genre) VALUES ('Kummeli V', 'Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Scream 2', 'Comedy|Horror|Mystery|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Dry White Season, A', 'Drama|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Swan, The', 'Comedy|Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Unloved, The', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Blues Harp', 'Crime|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Punks', 'Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Soldier''s Girl', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Lascars', 'Animation|Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Looking for Hortense (Cherchez Hortense) ', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Wszystko, co kocham', 'Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Angele', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Firewalker', 'Adventure');
        INSERT INTO Movies (title, genre) VALUES ('12 Dates of Christmas', 'Children|Comedy|Fantasy|Romance');
        INSERT INTO Movies (title, genre) VALUES ('World Apart, A', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Bullfighter and the Lady', 'Action|Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Two Bits', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Walk in the Sun, A', 'War');
        INSERT INTO Movies (title, genre) VALUES ('Flesh', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Gertie the Dinosaur', 'Animation|Children|Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Emperor of the North (Emperor of the North Pole)', 'Action|Drama|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Murder in Coweta County', 'Crime|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Finding Neverland', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Our Daily Bread (Unser täglich Brot)', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('Once Upon a Time in China (Wong Fei Hung)', 'Action|Adventure|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Autumn in New York', 'Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Earthling, The', 'Adventure|Drama');
        INSERT INTO Movies (title, genre) VALUES ('K-11', 'Crime|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Plutonium Circus', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('Werner - Gekotzt wird später', 'Animation|Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Dark Woods (Villmark)', 'Adventure|Horror|Mystery|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Here Comes the Devil (Ahí va el diablo)', 'Horror|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Other, The', 'Drama|Horror|Mystery');
        INSERT INTO Movies (title, genre) VALUES ('My Louisiana Sky', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Home of Our Own, A', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Network', 'Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Breakfast on Pluto', 'Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('A.I. Artificial Intelligence', 'Adventure|Drama|Sci-Fi');
        INSERT INTO Movies (title, genre) VALUES ('Palindromes', 'Adventure|Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Out of Towners, The', 'Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Saving Otter 501', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('Bad Fucking', 'Comedy');
        INSERT INTO Movies (title, genre) VALUES ('Without Pity', 'Crime|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Sentimental Swordsman, The (To ching chien ko wu ching chien)', 'Action|Adventure');
        INSERT INTO Movies (title, genre) VALUES ('We and the I, The', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Crimes of the Heart', 'Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Earth (Zemlya)', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Garage Olimpo', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Mumblecore', 'Drama|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Hum Aapke Hain Koun...!', 'Comedy|Drama|Musical');
        INSERT INTO Movies (title, genre) VALUES ('Amati Girls, The', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Blossoms in the Dust', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Book of Love', 'Comedy|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Cousins', 'Comedy|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Roseland', 'Drama|Musical|Romance');
        INSERT INTO Movies (title, genre) VALUES ('Messenger, The', 'Drama|Romance|War');
        INSERT INTO Movies (title, genre) VALUES ('Glimmer Man, The', 'Action|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Love the Beast', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('Lake of Fire', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('GLOW: The Story of the Gorgeous Ladies of Wrestling', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('In a Town This Size', 'Documentary');
        INSERT INTO Movies (title, genre) VALUES ('Fantastic Four', 'Action|Adventure|Sci-Fi');
        INSERT INTO Movies (title, genre) VALUES ('Moine, Le (Monk, The)', 'Drama|Mystery|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Saints and Soldiers', 'Action|Adventure|Drama|War');
        INSERT INTO Movies (title, genre) VALUES ('Camille Claudel', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Salvador (Puig Antich)', 'Drama');
        INSERT INTO Movies (title, genre) VALUES ('Track 29', 'Drama|Mystery');
        INSERT INTO Movies (title, genre) VALUES ('Anything Goes', 'Musical');
        INSERT INTO Movies (title, genre) VALUES ('Wicker Park', 'Drama|Romance|Thriller');
        INSERT INTO Movies (title, genre) VALUES ('Lucy', 'Comedy|Drama');
        INSERT INTO Movies (title, genre) VALUES ('Male and Female', 'Adventure|Drama');
      `)

      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Users (
          id integer PRIMARY KEY UNIQUE,
          first_name TEXT,
          last_name TEXT,
          email TEXT
        )
      `);
      tx.executeSql(`
        INSERT INTO Users (first_name, last_name, email) VALUES ('Claudianus', 'Domico', 'cdomico0@webeden.co.uk');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Sibby', 'Pottie', 'spottie1@exblog.jp');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Adeline', 'Skelly', 'askelly2@sina.com.cn');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Pyotr', 'Rau', 'prau3@hugedomains.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Joete', 'Gerrens', 'jgerrens4@berkeley.edu');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Delainey', 'Bather', 'dbather5@wikimedia.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Rolland', 'Hilling', 'rhilling6@exblog.jp');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Tess', 'Koppes', 'tkoppes7@addtoany.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Trixi', 'Minto', 'tminto8@jimdo.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Vivia', 'Deem', 'vdeem9@rakuten.co.jp');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Shell', 'Sutter', 'ssuttera@state.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Sibylle', 'Oxtarby', 'soxtarbyb@jiathis.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Scarface', 'Masselin', 'smasselinc@g.co');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Vittorio', 'Maffeo', 'vmaffeod@fda.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Nada', 'Robertz', 'nrobertze@phoca.cz');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Sayer', 'Nickols', 'snickolsf@jigsy.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Reese', 'Rodders', 'rroddersg@taobao.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Montague', 'Cabrales', 'mcabralesh@home.pl');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Griffin', 'De La Haye', 'gdelahayei@wikia.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Lissa', 'Mielnik', 'lmielnikj@is.gd');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Nancey', 'Hazel', 'nhazelk@typepad.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Nady', 'Murrthum', 'nmurrthuml@bbc.co.uk');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Dominick', 'Scarsbrick', 'dscarsbrickm@youtu.be');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Curt', 'Huckell', 'chuckelln@comcast.net');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Jasmina', 'Deehan', 'jdeehano@wikipedia.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Armand', 'Riceards', 'ariceardsp@abc.net.au');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Roddie', 'Battams', 'rbattamsq@phoca.cz');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Luigi', 'Gueinn', 'lgueinnr@amazon.co.uk');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Salim', 'Echelle', 'sechelles@privacy.gov.au');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Urbano', 'Monkhouse', 'umonkhouset@behance.net');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Letitia', 'Scotsbrook', 'lscotsbrooku@ustream.tv');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Annmarie', 'Mandre', 'amandrev@ftc.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Rosina', 'Frantz', 'rfrantzw@simplemachines.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Udell', 'O''Looney', 'uolooneyx@wiley.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Editha', 'Peckham', 'epeckhamy@redcross.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Hayward', 'Ferrieres', 'hferrieresz@usgs.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Reece', 'Hughlock', 'rhughlock10@berkeley.edu');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Angelia', 'Fellgate', 'afellgate11@xinhuanet.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Jennette', 'Jarmain', 'jjarmain12@list-manage.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Bab', 'Higford', 'bhigford13@prlog.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Christoph', 'Voules', 'cvoules14@flavors.me');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Bevon', 'McConachie', 'bmcconachie15@blinklist.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Farlay', 'Mahony', 'fmahony16@scribd.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Garvy', 'Blacker', 'gblacker17@opera.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Shandy', 'Fisbey', 'sfisbey18@mozilla.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Maison', 'Furnival', 'mfurnival19@blogs.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Sigismond', 'Brimfield', 'sbrimfield1a@newsvine.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Chevalier', 'Skate', 'cskate1b@skyrock.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Melly', 'Colloby', 'mcolloby1c@theglobeandmail.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Mitchael', 'Patrie', 'mpatrie1d@slashdot.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Alia', 'Rubertis', 'arubertis1e@gmpg.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Daile', 'Vergine', 'dvergine1f@friendfeed.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Bren', 'Aveline', 'baveline1g@twitter.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Mickie', 'Moyse', 'mmoyse1h@phpbb.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Iolande', 'Goacher', 'igoacher1i@purevolume.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Dal', 'Simonetto', 'dsimonetto1j@moonfruit.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Vivyan', 'Espadas', 'vespadas1k@google.com.br');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Harv', 'Hoggin', 'hhoggin1l@jimdo.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Pen', 'Sawbridge', 'psawbridge1m@timesonline.co.uk');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Austen', 'Charnick', 'acharnick1n@tinyurl.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Biddie', 'Saiz', 'bsaiz1o@angelfire.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Theodore', 'Tesmond', 'ttesmond1p@unicef.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Ursola', 'Gendricke', 'ugendricke1q@cloudflare.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Timi', 'Wenn', 'twenn1r@seesaa.net');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Alia', 'Gannon', 'agannon1s@spiegel.de');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Katuscha', 'Spellessy', 'kspellessy1t@icq.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Harmonie', 'Greveson', 'hgreveson1u@cdc.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Alidia', 'Phalip', 'aphalip1v@irs.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Viole', 'Baike', 'vbaike1w@unicef.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Erwin', 'McGilroy', 'emcgilroy1x@behance.net');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Edythe', 'Bodimeade', 'ebodimeade1y@google.de');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Adelina', 'Kuschel', 'akuschel1z@cyberchimps.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Mirilla', 'Belf', 'mbelf20@shop-pro.jp');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Annabela', 'Goretti', 'agoretti21@epa.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Mariejeanne', 'Heavens', 'mheavens22@theatlantic.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Clarisse', 'Todaro', 'ctodaro23@howstuffworks.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Julina', 'Southward', 'jsouthward24@netlog.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Corine', 'Licas', 'clicas25@cmu.edu');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Riobard', 'Spurrett', 'rspurrett26@unblog.fr');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Nelly', 'Ragg', 'nragg27@imageshack.us');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Rob', 'Borges', 'rborges28@answers.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Shaylah', 'Klasing', 'sklasing29@businesswire.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Chic', 'Alvy', 'calvy2a@deliciousdays.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Carline', 'Julyan', 'cjulyan2b@prnewswire.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Ches', 'Conner', 'cconner2c@bizjournals.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Darlleen', 'Swift', 'dswift2d@smugmug.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Stacee', 'MacKintosh', 'smackintosh2e@instagram.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Ferne', 'Arnoldi', 'farnoldi2f@fema.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Irita', 'Mann', 'imann2g@slideshare.net');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Dan', 'Koschke', 'dkoschke2h@alibaba.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Laurens', 'Pitney', 'lpitney2i@guardian.co.uk');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Con', 'McWard', 'cmcward2j@archive.org');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Christophorus', 'Cornwell', 'ccornwell2k@census.gov');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Winny', 'Creswell', 'wcreswell2l@1und1.de');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Dolley', 'Gregoire', 'dgregoire2m@wikia.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Klara', 'Sterland', 'ksterland2n@studiopress.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Allison', 'Osborn', 'aosborn2o@1und1.de');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Candi', 'Cubbino', 'ccubbino2p@eventbrite.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Cherey', 'Vaudre', 'cvaudre2q@businessweek.com');
        INSERT INTO Users (first_name, last_name, email) VALUES ('Livvie', 'Quye', 'lquye2r@admin.ch');
      `)
  
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS Watches (
          user_id INTEGER,
          movie_id INTEGER
        )
      `);
      tx.executeSql(`
        INSERT INTO Watches (user_id, movie_id) VALUES (65, 51);
        INSERT INTO Watches (user_id, movie_id) VALUES (71, 47);
        INSERT INTO Watches (user_id, movie_id) VALUES (17, 91);
        INSERT INTO Watches (user_id, movie_id) VALUES (1, 69);
        INSERT INTO Watches (user_id, movie_id) VALUES (8, 92);
        INSERT INTO Watches (user_id, movie_id) VALUES (41, 22);
        INSERT INTO Watches (user_id, movie_id) VALUES (90, 40);
        INSERT INTO Watches (user_id, movie_id) VALUES (70, 93);
        INSERT INTO Watches (user_id, movie_id) VALUES (22, 76);
        INSERT INTO Watches (user_id, movie_id) VALUES (10, 53);
        INSERT INTO Watches (user_id, movie_id) VALUES (98, 84);
        INSERT INTO Watches (user_id, movie_id) VALUES (91, 17);
        INSERT INTO Watches (user_id, movie_id) VALUES (95, 79);
        INSERT INTO Watches (user_id, movie_id) VALUES (23, 57);
        INSERT INTO Watches (user_id, movie_id) VALUES (85, 4);
        INSERT INTO Watches (user_id, movie_id) VALUES (2, 70);
        INSERT INTO Watches (user_id, movie_id) VALUES (62, 91);
        INSERT INTO Watches (user_id, movie_id) VALUES (8, 45);
        INSERT INTO Watches (user_id, movie_id) VALUES (37, 97);
        INSERT INTO Watches (user_id, movie_id) VALUES (93, 75);
        INSERT INTO Watches (user_id, movie_id) VALUES (2, 85);
        INSERT INTO Watches (user_id, movie_id) VALUES (86, 88);
        INSERT INTO Watches (user_id, movie_id) VALUES (74, 9);
        INSERT INTO Watches (user_id, movie_id) VALUES (99, 26);
        INSERT INTO Watches (user_id, movie_id) VALUES (71, 24);
        INSERT INTO Watches (user_id, movie_id) VALUES (94, 23);
        INSERT INTO Watches (user_id, movie_id) VALUES (64, 43);
        INSERT INTO Watches (user_id, movie_id) VALUES (88, 71);
        INSERT INTO Watches (user_id, movie_id) VALUES (69, 44);
        INSERT INTO Watches (user_id, movie_id) VALUES (25, 56);
        INSERT INTO Watches (user_id, movie_id) VALUES (10, 89);
        INSERT INTO Watches (user_id, movie_id) VALUES (25, 32);
        INSERT INTO Watches (user_id, movie_id) VALUES (82, 50);
        INSERT INTO Watches (user_id, movie_id) VALUES (39, 96);
        INSERT INTO Watches (user_id, movie_id) VALUES (100, 44);
        INSERT INTO Watches (user_id, movie_id) VALUES (5, 28);
        INSERT INTO Watches (user_id, movie_id) VALUES (27, 95);
        INSERT INTO Watches (user_id, movie_id) VALUES (19, 38);
        INSERT INTO Watches (user_id, movie_id) VALUES (66, 93);
        INSERT INTO Watches (user_id, movie_id) VALUES (79, 57);
        INSERT INTO Watches (user_id, movie_id) VALUES (94, 58);
        INSERT INTO Watches (user_id, movie_id) VALUES (2, 47);
        INSERT INTO Watches (user_id, movie_id) VALUES (82, 4);
        INSERT INTO Watches (user_id, movie_id) VALUES (36, 100);
        INSERT INTO Watches (user_id, movie_id) VALUES (19, 38);
        INSERT INTO Watches (user_id, movie_id) VALUES (99, 65);
        INSERT INTO Watches (user_id, movie_id) VALUES (80, 2);
        INSERT INTO Watches (user_id, movie_id) VALUES (36, 45);
        INSERT INTO Watches (user_id, movie_id) VALUES (63, 24);
        INSERT INTO Watches (user_id, movie_id) VALUES (33, 83);
        INSERT INTO Watches (user_id, movie_id) VALUES (48, 15);
        INSERT INTO Watches (user_id, movie_id) VALUES (6, 84);
        INSERT INTO Watches (user_id, movie_id) VALUES (61, 41);
        INSERT INTO Watches (user_id, movie_id) VALUES (89, 83);
        INSERT INTO Watches (user_id, movie_id) VALUES (28, 51);
        INSERT INTO Watches (user_id, movie_id) VALUES (56, 27);
        INSERT INTO Watches (user_id, movie_id) VALUES (22, 53);
        INSERT INTO Watches (user_id, movie_id) VALUES (38, 46);
        INSERT INTO Watches (user_id, movie_id) VALUES (100, 41);
        INSERT INTO Watches (user_id, movie_id) VALUES (66, 20);
        INSERT INTO Watches (user_id, movie_id) VALUES (86, 65);
        INSERT INTO Watches (user_id, movie_id) VALUES (29, 78);
        INSERT INTO Watches (user_id, movie_id) VALUES (66, 50);
        INSERT INTO Watches (user_id, movie_id) VALUES (88, 41);
        INSERT INTO Watches (user_id, movie_id) VALUES (13, 18);
        INSERT INTO Watches (user_id, movie_id) VALUES (57, 19);
        INSERT INTO Watches (user_id, movie_id) VALUES (47, 73);
        INSERT INTO Watches (user_id, movie_id) VALUES (16, 93);
        INSERT INTO Watches (user_id, movie_id) VALUES (12, 66);
        INSERT INTO Watches (user_id, movie_id) VALUES (38, 14);
        INSERT INTO Watches (user_id, movie_id) VALUES (42, 74);
        INSERT INTO Watches (user_id, movie_id) VALUES (97, 29);
        INSERT INTO Watches (user_id, movie_id) VALUES (94, 58);
        INSERT INTO Watches (user_id, movie_id) VALUES (89, 12);
        INSERT INTO Watches (user_id, movie_id) VALUES (36, 56);
        INSERT INTO Watches (user_id, movie_id) VALUES (58, 45);
        INSERT INTO Watches (user_id, movie_id) VALUES (19, 44);
        INSERT INTO Watches (user_id, movie_id) VALUES (63, 63);
        INSERT INTO Watches (user_id, movie_id) VALUES (39, 22);
        INSERT INTO Watches (user_id, movie_id) VALUES (19, 93);
        INSERT INTO Watches (user_id, movie_id) VALUES (64, 16);
        INSERT INTO Watches (user_id, movie_id) VALUES (18, 88);
        INSERT INTO Watches (user_id, movie_id) VALUES (67, 11);
        INSERT INTO Watches (user_id, movie_id) VALUES (17, 65);
        INSERT INTO Watches (user_id, movie_id) VALUES (52, 28);
        INSERT INTO Watches (user_id, movie_id) VALUES (21, 75);
        INSERT INTO Watches (user_id, movie_id) VALUES (46, 6);
        INSERT INTO Watches (user_id, movie_id) VALUES (31, 80);
        INSERT INTO Watches (user_id, movie_id) VALUES (44, 56);
        INSERT INTO Watches (user_id, movie_id) VALUES (27, 79);
        INSERT INTO Watches (user_id, movie_id) VALUES (88, 94);
        INSERT INTO Watches (user_id, movie_id) VALUES (68, 91);
        INSERT INTO Watches (user_id, movie_id) VALUES (72, 51);
        INSERT INTO Watches (user_id, movie_id) VALUES (33, 96);
        INSERT INTO Watches (user_id, movie_id) VALUES (77, 71);
        INSERT INTO Watches (user_id, movie_id) VALUES (3, 26);
        INSERT INTO Watches (user_id, movie_id) VALUES (98, 8);
        INSERT INTO Watches (user_id, movie_id) VALUES (22, 9);
        INSERT INTO Watches (user_id, movie_id) VALUES (94, 8);
        INSERT INTO Watches (user_id, movie_id) VALUES (26, 27);
      `);
    });

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM MOVIES", [], (_, results) => {
        const rows = [];
        for (let i = 0; i < results.rows.length; i++) {
          rows.push(results.rows.item(i));
        }
        this.setState({ rows });
      }, null);
    });
  }

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Sandbox rows={this.state.rows} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
