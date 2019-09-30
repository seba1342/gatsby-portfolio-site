import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header/Header';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import SEO from '../components/SEO/SEO';

import './styles.css';

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <>
      <SEO
        title={'Projects Page'}
        description={'A list of my projects'}
        pathname={'/projects'}
      />
      <div className="container">
        <Header />
        <div className="container__content">
          <p>Here are some projects that I've worked on:</p>
          <div className="container__projects">
            {edges.map(edge => {
              const { frontmatter } = edge.node;
              const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

              return (
                <ProjectItem
                  key={frontmatter.path}
                  frontmatter={frontmatter}
                  imgSrc={featuredImgFluid.src}
                />
              );

            })}

          </div>

          <p className="footer">
            Nice work making it to the bottom, didn't think anyone would make it this far
            <span role="img" aria-label="medal emoji"> 🥇🥇🥇</span>
          </p>
        </div>

      </div>
    </>
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
                fluid (maxWidth:800, quality:100){
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
