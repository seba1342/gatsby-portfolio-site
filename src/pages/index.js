import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header/Header';
import SEO from '../components/SEO/SEO';

import './styles.css';

const Layout = () => {
  return (
    <>
    <SEO />
    <div className="container">
      <Header />
      <div className="container__content">
        <p>
          Hey <span role="img" aria-label="Sunglasses Emoji Face">😎</span>
        </p>
        <p>
          My name is Sebastien and I'm a developer and a designer living in Melbourne.
        </p>
        <p>
          I currently work as a Junior Developer
          for <a href="https://loveandmoney.agency" target="_blank" rel="noopener noreferrer">Love and Money Agency</a> where
          I add a little bit to the internet everyday.
        </p>
        <p>
          I also recently completed a double degree in IT and Design at Monash University.
          I'm inspired to solve problems with others, play basketball and run.
        </p>
        <p>
          In my free time I enjoy playing video/board games, listening to podcasts,
          reading and binge watching cooking shows on Netflix.
        </p>
        <p>
          You can find me on <a href='https://instagram.com/designbyseba'>Instagram</a>
          , <a href='https://www.linkedin.com/in/sebastien-bailouni-956002123/'>LinkedIn</a>,
          and <a href='https://www.strava.com/athletes/35219560'>Strava</a>,
          or reach me via <a href='mailto:sbailouni@gmail.com'>sbailouni@gmail.com</a>.
        </p>
        <p>
          Head to my <Link to={'/projects'} className='link'>projects</Link> page to see some of my work.
        </p>
      </div>
    </div>
    </>
  );
};

export default Layout;
