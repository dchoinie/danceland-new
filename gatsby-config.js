require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Danceland`,
    description: `The History Of A Midwest Ballroom`,
    author: `Steve Wilson`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/header_logo.jpg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Vast Shadow", "Open Sans"],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `earlyYears`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1954`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1955`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1956`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1957`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1958`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1959`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1960`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1961`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1962`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1963`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1964`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1965`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1966`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1967`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1968`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
