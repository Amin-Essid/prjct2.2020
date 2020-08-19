
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `الإقتصاد بالفلاقي`,
    description: `متابعة لأهم تطورات الإقتصاد التونسي و العالمي بالفلاقي`,
    author: `@َAminsid2`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Tajawal`,
            variants: [`200`, `300`, `400`, `500`, `700`, `800`, `900`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: process.env.GATSBY_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.GATSBY_ACCESS_TOKEN,
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

