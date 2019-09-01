import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

import './styles.css';

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;

  return (
    <div className="header">
      <Link to={'/'} className='header__brand'><h2>{title}</h2></Link>
      <Link to={'/'} className='header__link' activeClassName='header__link--active'>/home</Link>
      <Link to={'/projects'} className='header__link' activeClassName='header__link--active'>/projects</Link>
      <DarkModeToggle />
    </div>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data =><TitleAndDescription data={data} />}
    />
  );
};

export default Header;
