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

const Btounsi:React.FC = () => {

    const {btounsi} = useStaticQuery<Btounsi>(graphql`
    {
      btounsi:allFile(filter: {relativeDirectory: {eq: "btounsi"}}) {
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
    console.log(btounsi.nodes[0].childImageSharp.fixed)
  return (
    <div className="btounsi">
        <Image fixed={btounsi.nodes[0].childImageSharp.fixed} />
    </div>
  )
}

export default Btounsi