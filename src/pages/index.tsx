import * as React from "react"
import mainLogo from "../images/mainLogo.png"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Btounsi from "../components/Btounsi"
import Articles from "../components/Articles"
import VerticalBtounsi from "../components/VerticalBtounsi"

type Props = {
  data: {
    allContentfulPost: {
      nodes: {
        title: string
        slug: string
        contentful_id: string
        mainImage: {
          fluid: any
          file: any
        }
        smallImage: {
          fluid: any
        }
        article: {
          article: string
        }
        description: {
          description: string
        }
      }[]
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const {
    allContentfulPost: { nodes: posts },
  } = data
  return (
    <Layout>
      <Seo title="الأقتصاد بالفلاقي" image={mainLogo} />
      <Hero post={posts[0]} />
      <div className="body-page">
        <div className="body-content">
          <div>
            <Btounsi />
            <Articles posts={posts.slice(posts.length - 6, posts.length - 2)} />
          </div>
          <div className="verticalBtounsi">
            <VerticalBtounsi />
          </div>
          <div>
            <Btounsi />
            <Articles
              posts={posts.slice(posts.length - 10, posts.length - 6)}
            />
          </div>
        </div>
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
        slug
        contentful_id
        mainImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          file {
            url
          }
        }
        smallImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        description {
          description
        }
        article {
          article
        }
      }
    }
  }
`
