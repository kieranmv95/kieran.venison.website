export default {
  siteMetadata: {
    title: `Kieran Venison`,
    siteUrl: `https://kieranvenison.co.uk`,
    description: `Personal website of Kieran Venison`,
    twitter: `@kieranmv95`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Open Sans:300,400,600`],
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
