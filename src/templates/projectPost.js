import React from 'react';
import { graphql, Link } from 'gatsby';

import Header from '../components/Header/Header';
import SEO from '../components/SEO/SEO';

import '../pages/styles.css';

const Template = (props) => {
  const { title, excerpt } = props.data.markdownRemark.frontmatter;
  const html = props.data.markdownRemark.html;
  return (
    <>
    <SEO />
    <div className="container">
      <Header />
      <div className="container__content">
        <h1>{title}</h1>
        <p>{excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/projects" className="back-link">{'⬅️'}</Link>
      </div>
    </div>
    </>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        excerpt
      }
    }
  }`;

export default Template;
