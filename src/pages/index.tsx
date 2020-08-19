import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Hero from "../components/Hero";
import Btounsi from "../components/Btounsi";

type Props = {
    data: {
      allContentfulPost: {
        nodes: {
          title: string;
          contentful_id: string;
          mainImage: {
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
  console.log(posts)
  return (
    <Layout>
    <SEO title="Home" />
    <div style={{paddingBottom: "66px"}}>
      <Hero post={posts[0]}/>
      <Btounsi/>
    </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
{
  allContentfulPost {
    nodes {
      title
      contentful_id
      mainImage {
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
