import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

type Btounsi = {
    btounsi: { 
        nodes: {  
            childImageSharp: {
            fixed: any;
    }}[];
}
}

const VerticalBtounsi:React.FC = () => {
    console.log("aasba")

    const {btounsi} = useStaticQuery<Btounsi>(graphql`
    {
      btounsi:allFile(filter: {relativeDirectory: {eq: "verticalBtounsi"}}) {
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
    <div className="verticalBtounsi">
      <a href="https://www.btounsi.com/" target="blank">
        <Image fixed={btounsi.nodes[0].childImageSharp.fixed} />
      </a>
    </div>
  )
}

export default VerticalBtounsi