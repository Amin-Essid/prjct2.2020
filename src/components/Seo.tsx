// /**
//  * SEO component that queries for data with
//  *  Gatsby's useStaticQuery React hook
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
    description?: string;
    lang?: string;
    meta?: any;
    title?: string; 
}

type Site = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    }
  }
}

const Seo: React.FC<Props> = ({ description, lang = 'ar', title }) => {
  const { site } = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}>
        <meta name='description' content={metaDescription} />
        {/* <meta name='image' content={image} /> */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creater' content={site.siteMetadata.author} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={metaDescription} />
        {/* <meta name='twitter:image' content={`${siteUrl}${image}`} /> */}
        <meta property="og:url" content="ameen.netlify.app" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        {/* <meta property="og:image" content={`${siteUrl}${image}`} /> */}
      </Helmet>
  )
}


export default Seo
