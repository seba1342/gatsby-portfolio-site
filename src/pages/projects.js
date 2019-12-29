import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import SEO from '../components/SEO/SEO';

import './styles.css';

const Projects = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <>
      <SEO
        title={'Projects Page'}
        description={'A list of my projects'}
        pathname={'/projects'}
      />

      <Layout className="">
        <div className="container__content">
          <p className="animation-appear" style={{animationDelay: `100ms`}}>Here are some projects that I've worked on:</p>
          <div className="container__projects">
            {edges.map((edge, index) => {
              const { frontmatter } = edge.node;
              const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

              return (
                <ProjectItem
                  key={frontmatter.path}
                  frontmatter={frontmatter}
                  imgSrc={featuredImgFluid.src}
                  style={{animationDelay: `${index * 100 + 200}ms`}}
                />
              );

            })}

          </div>

          <p className="footer">
            Nice work making it to the bottom, didn't think anyone would make it this far
            <span role="img" aria-label="medal emoji"> 🥇🥇🥇</span>
          </p>
        </div>
      </Layout>

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

export default Projects;
