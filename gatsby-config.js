/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Kevin Homan`,
    author: `Kevin Homan`,
    firstName: `Kevin`,
    lastName: `Homan`,
    description: `Kevin Homan's Professional Portfolio`,
    occupation: `Solutions Architect`,
    keywords: [`Kevin`, `Homan`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Solutions Architect`,
      `Automater of Things`,
      `Track Day Enthusiast`,
      `Husband and Father`,
    ],
    readingList: [
      {
        title: `Project Hail Mary`,
        author: `Andy Weir`,
        link: `https://www.goodreads.com/book/show/54493401-project-hail-mary`,
      },
      {
        title: `The Meaning of Masonry`,
        author: `W.L. Wilmshurst`,
        link: `https://www.goodreads.com/book/show/823655.The_Meaning_of_Masonry`,
      },
      {
        title: `Treatise on the Reintegration of Beings`,
        author: `Martines de Pasqually`,
        link: `https://www.goodreads.com/book/show/36592037-treatise-on-the-reintegration-of-beings`,
      },
    ],
    showsList: [
      {
        title: `The Umbrella Academy`,
        author: `Steve Blackman, Jeremy Slater`,
        link: `https://www.imdb.com/title/tt1312171/`,
      },
      {
        title: `The Expanse`,
        author: `Daniel Abraham, Mark Fergus, Ty Franck and Hawk Ostby`,
        link: `https://www.imdb.com/title/tt3230854/`,
      },
      {
        title: `Star Wars: The Mandalorian`,
        author: `Jon Favreau`,
        link: `https://www.imdb.com/title/tt8111088/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Homan's Professional Portfolio`,
        short_name: `K. Homan`,
        description: `This is my professional portfolio.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
