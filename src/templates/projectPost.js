import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import '../pages/styles.css';

const Template = (props) => {
  const { title, excerpt, path, projectLink } = props.data.markdownRemark.frontmatter;
  const featuredImgFluid = props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const html = props.data.markdownRemark.html;

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        pathname={path}
      />
      
      <Layout className="">
        <div className="container__content">
          {/* <div className="flex-row items-center"> */}
            <Link to="/projects" className="back-link animation-appear" style={{animationDelay: `100ms`}}>{'⬅️ '}<span className="back-link--text">Back</span></Link>
            <h1 className="project__title animation-appear" style={{animationDelay: `200ms`}}>{title}</h1>
          {/* </div> */}
         
          <p className="project__excerpt animation-appear" style={{animationDelay: `300ms`}}>{excerpt}</p>
          { projectLink ?
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <Img fluid={featuredImgFluid} className="project__image animation-appear" style={{animationDelay: `400ms`}} />
            </a> :
            <Img fluid={featuredImgFluid} className="project__image animation-appear" style={{animationDelay: `400ms`}} />
          }
          <div className="animation-appear" style={{animationDelay: `500ms`}} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
        
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
        path
        date
        projectLink
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
  }`;

export default Template;
