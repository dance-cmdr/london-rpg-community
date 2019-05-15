const PRIMARY_COLOR = '#8d1123';
const PRIMARY_STRING_COLOR = '#ffffff';
const SECONDARY_COLOR = '#e4cfb7';
const SECONDARY_TEXT_COLOR = '#444342';

module.exports = {
  siteMetadata: {
    title: `London RPG Community`,
    description: `Welcome to London's friendliest RPG Community!`,
    author: `@dance-cmdr`,
    theme: {
      PRIMARY_COLOR,
      PRIMARY_STRING_COLOR,
      SECONDARY_COLOR,
      SECONDARY_TEXT_COLOR,
    },
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: PRIMARY_COLOR,
        theme_color: PRIMARY_COLOR,
        display: `minimal-ui`,
        icon: `src/images/lrpgc-favicon.png`,
      },
    },
    `gatsby-plugin-twitter`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
