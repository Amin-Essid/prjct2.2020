import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

type Btounsi = {
  heroBtounsi: {
    nodes: {
      childImageSharp: {
        fixed: any
      }
    }[]
  }
}

const HeroBtounsi: React.FC = () => {
  const { heroBtounsi } = useStaticQuery<Btounsi>(graphql`
    {
      heroBtounsi: allFile(
        filter: { relativeDirectory: { eq: "heroBtounsi" } }
      ) {
        nodes {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div className="heroBtounsi">
      <a href="https://www.btounsi.com/" target="blank">
        <Image fixed={heroBtounsi.nodes[0].childImageSharp.fixed} />
      </a>
    </div>
  )
}

export default HeroBtounsi
