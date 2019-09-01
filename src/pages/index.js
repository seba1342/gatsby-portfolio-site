import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header/Header';

import './styles.css';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="container__content">
        <p>
          Hey <span role="img" aria-label="Sunglasses Emoji Face">😎</span><br></br>
          <br></br>
          My name is Sebastien and I'm a developer and a designer living in Melbourne.
          I am currently studying a double degree in IT and Design at Monash Univeristy.
          I'm passionate about solving problems with others, playing basketball and running.<br></br>
          <br></br>
          In my free time I enjoy playing video/board games, listening to podcasts, reading and binge watching cooking shows on Netflix.
          <br></br>
          <br></br>
          You can find me on <a href='https://instagram.com/designbyseba'>Instagram</a>, <a href='https://www.linkedin.com/in/sebastien-bailouni-956002123/'>LinkedIn</a>,
          and <a href='https://www.strava.com/athletes/35219560'>Strava</a>,
          or reach me via <a href='mailto:sbailouni@gmail.com'>sbailouni@gmail.com</a>.
          <br></br>
          <br></br>
          Head to my <Link to={'/projects'} className='link'>projects</Link> page to see some of my work.
        </p>
      </div>
    </div>
  );
};

export default Layout;
