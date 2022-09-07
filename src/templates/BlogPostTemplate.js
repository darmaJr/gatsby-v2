// src/templates/BlogPostTemplate.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
//import Img from 'gatsby-plugin-image';


//import SEO from '../components/seo';
const BlogPostTemplate = ({ data }) => (
<Layout>
    <title
      title={data.wpPost.title}
      description={data.wpPost.excerpt}
    />
<div className="container post">    
    <img src={data.wpPost.featuredImage?.node.sourceUrl} className="img-responsive" alt="feat-img" />
	 <div className="heading"><h1>{data.wpPost.title}</h1></div>  
	 <div className="author">Penulis: {data.wpPost.author.node.name}</div>  
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
    />
    </div>
  </Layout>	
  )
  
  
export default BlogPostTemplate;
export const query = graphql`
  query ($id: Int!) {
    wpPost(databaseId: { eq: $id }) {
      title
      excerpt
      date(formatString: "MMMM DD, YYYY")
      content
      featuredImage {
      node {
        gatsbyImage(width: 400)
        sourceUrl
      }
    }
    author {
      node {
        name
      }
    }
    }
  }
`;