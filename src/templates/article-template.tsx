import React from "react";
import Image from "gatsby-image";
import { graphql} from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import SEO from '../components/SEO';
import Btounsi from "../components/Btounsi";
import Articles from "../components/Articles";

type Props = {
    data: {
      artcl: {
        article: {
          article: string;
        }
        description: {
          description: string;
        }
        mainImage: {
          fluid: any;
        }
        title: string;
      }
      allPosts: {
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
          article: {
            article: string;
          }
          description: {
            description: string;
          }
        }[];
      };
    };
  }

const ComponentName:React.FC<Props> = ({data}) => {
  const {artcl, allPosts} = data
return <Layout>
  <SEO title={artcl.title} description={artcl.description.description}/>
  <section className="blog-template">
    <div className="blog-img">
      <Image fluid={artcl.mainImage.fluid} />
    </div>
    <div className="blog-title">
      {artcl.title}
    </div>
    <Btounsi/>
    <article className="blog-content">
      <ReactMarkdown source={artcl.article.article} />
    </article>
    <Btounsi/>
  </section>
  <Articles posts={allPosts.nodes.filter(node=>node.title!==artcl.title)} />
</Layout>
}

export const query = graphql`
query GetSinglePost($slug: String) {
  artcl:contentfulPost(slug: {eq: $slug}) {
    article {
      article
    }
    description {
      description
    }
    mainImage {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    title
  }
  allPosts:allContentfulPost(limit: 6) {
    nodes {
      article {
        article
      }
      description {
        description
      }
      smallImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      slug
      contentful_id
    }
  }
}

`

export default ComponentName

// query GetAllPost {
//   allContentfulPost(limit: 6) {
//     nodes {
//       article {
//         article
//       }
//       description {
//         description
//       }
//       smallImage {
//         fluid {
//           src
//         }
//       }
//       title
//     }
//   }
// }