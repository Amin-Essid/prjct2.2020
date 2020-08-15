import * as React from "react";
import { Link, graphql } from "gatsby";
// import Layout from "../components/layout"
// import SEO from "../components/seo"

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
        }
      }
    }
}

const IndexPage: React.FC<Props> = ({data}) => {
  const posts: {
    allContentfulPost: {nodes: any}
  } = data
  // <Layout>
  //   <SEO title="Home" />
  console.log(posts)
  return (
    <h1>Hello world</h1>
  )
  // </Layout>
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
