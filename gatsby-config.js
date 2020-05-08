module.exports = {
  siteMetadata: {
    title: `Superstack`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDNNFNEGmB1FH9bCcqNXtXLwf1ukIAhhho",
          authDomain: "superstack-staging.firebaseapp.com",
          databaseURL: "https://superstack-staging.firebaseio.com",
          projectId: "superstack-staging",
          storageBucket: "superstack-staging.appspot.com",
          messagingSenderId: "360750883192",
          appId: "1:360750883192:web:c3dd389bf4b79eb5a8a88d",
          measurementId: "G-K3X5Q7HQJ3"
        }
      }
    },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
