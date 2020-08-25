import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

type Btounsi = {
    btounsi: { 
        nodes: {  
            childImageSharp: {
            fixed: any;
        }}[];
    };
    verticalBtounsi: { 
      nodes: {  
          childImageSharp: {
          fixed: any;
      }}[];
    }
}

const Btounsi:React.FC = () => {

    const {btounsi, verticalBtounsi} = useStaticQuery<Btounsi>(graphql`
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
      verticalBtounsi:allFile(filter: {relativeDirectory: {eq: "verticalBtounsi"}}) {
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
    <div className="btounsi">
      <a className="smallBtounsi" href="https://www.btounsi.com/" target="blank">
        <Image fixed={btounsi.nodes[0].childImageSharp.fixed} />
      </a>
      <a className="bigBtounsi" href="https://www.btounsi.com/" target="blank">
        <Image fixed={verticalBtounsi.nodes[0].childImageSharp.fixed} />
      </a>
    </div>
  )
}

export default Btounsi