import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import './styles.css';

const Index = () => {
  return (
    <>
      <SEO />

      <Layout className="">
        <div className="container__content" style={{animationDelay: `100ms`}}>
          <p className="animation-appear" style={{animationDelay: `100ms`}}>
            Hey <span role="img" aria-label="Sunglasses Emoji Face">😎</span>
          </p>
          <p className="animation-appear" style={{animationDelay: `200ms`}}>
            My name is Sebastien and I'm a developer and a designer living in Melbourne.
          </p>
          <p className="animation-appear" style={{animationDelay: `300ms`}}>
            I currently work as a Junior Developer
            for <a href="https://loveandmoney.agency" target="_blank" rel="noopener noreferrer">Love and Money Agency</a> where
            I add a little bit to the internet everyday.
          </p>
          <p className="animation-appear" style={{animationDelay: `400ms`}}>
            I also recently completed a double degree in IT and Design at Monash University.
            I'm inspired to solve problems with others, play basketball and run.
          </p>
          <p className="animation-appear" style={{animationDelay: `500ms`}}>
            In my free time I enjoy playing video/board games, listening to podcasts,
            reading and binge watching cooking shows on Netflix.
          </p>
          <p className="animation-appear" style={{animationDelay: `600ms`}}>
            You can find me on <a href='https://instagram.com/designbyseba'>Instagram</a>
            , <a href='https://www.linkedin.com/in/sebastien-bailouni-956002123/'>LinkedIn</a>,
            and <a href='https://www.strava.com/athletes/35219560'>Strava</a>,
            or reach me via <a href='mailto:sbailouni@gmail.com'>sbailouni@gmail.com</a>.
          </p>
          <p className="animation-appear" style={{animationDelay: `700ms`}}>
            Head to my <Link to={'/projects'} className='link'>projects</Link> page to see some of my work.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Index;
