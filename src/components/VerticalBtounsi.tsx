import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

type Btounsi = {
  btounsi: {
    nodes: {
      childImageSharp: {
        fluid: any
      }
    }[]
  }
}

const VerticalBtounsi: React.FC = () => {
  console.log("aasba")

  const { btounsi } = useStaticQuery<Btounsi>(graphql`
    {
      btounsi: allFile(
        filter: { relativeDirectory: { eq: "verticalBtounsi" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: "125px" }}>
      <a href="https://www.btounsi.com/" target="blank">
        <Image fluid={btounsi.nodes[0].childImageSharp.fluid} />
      </a>
    </div>
  )
}

export default VerticalBtounsi
