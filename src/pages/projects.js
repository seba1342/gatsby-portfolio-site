import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/Header/Header';
import ImageRevealOnHover from '../components/ImageRevealOnHover/ImageRevealOnHover';

import './styles.css';

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div className="container">
      <Header />
      <div className="container__content">
        <p>Here are some projects that I've worked on:</p>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

          return (
            <ImageRevealOnHover
              frontmatter = {frontmatter}
              imgSrc = {featuredImgFluid.src}
              key={frontmatter.path}
            />
          );
        })}
      </div>

    </div>
  );
};

export const query = graphql`
  query ProjectPageQuery {
    allMarkdownRemark( sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            path
            date
            featuredImage {
              childImageSharp{
                fluid (maxWidth:400, quality:100){
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }`;

export default Layout;
