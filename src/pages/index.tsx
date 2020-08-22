import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Hero from "../components/Hero";
import Btounsi from "../components/Btounsi";
import Articles from "../components/Articles"

type Props = {
    data: {
      allContentfulPost: {
        nodes: {
          title: string;
          slug: string;
          contentful_id: string;
          mainImage: {
            fluid: any;
          };
          smallImage: {
            fluid: any;
          };
          childContentfulPostDescriptionTextNode: {
            description: string;
          };
          childContentfulPostArticleTextNode: {
            article: string;
          };
        }[];
      }
    }
}

const IndexPage: React.FC<Props> = ({data}) => {
  const {
    allContentfulPost: {nodes: posts}
  } = data
  return (
    <Layout>
    <SEO title="Home" />
    <Hero post={posts[0]}/>
    <Btounsi/>
    <Articles posts={posts.slice(posts.length-4, posts.length-1)} />
    <Btounsi/>
    <Articles posts={posts.slice(posts.length-7, posts.length-4)} />
    <Btounsi/>
    <Articles posts={posts.slice(posts.length-10, posts.length-7)} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
{
  allContentfulPost {
    nodes {
      title
      slug
      contentful_id
      mainImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }      
      smallImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      childContentfulPostDescriptionTextNode {
        description
      }
      childContentfulPostArticleTextNode {
        article
      }
    }
  }
}`
