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
        title: `Morals and Dogma: Annotated Edition`,
        author: `Arturo de Hoyos`,
        link: `https://www.goodreads.com/book/show/13122163-albert-pike-s-morals-and-dogma`,
      },
      {
        title: `The Unicorn Project`,
        author: `Gene Kim`,
        link: `https://www.goodreads.com/book/show/44333183-the-unicorn-project`,
      },
      {
        title: `Approaching the Middle Chamber: The Seven Liberal Arts in Freemasonry & the Western Esoteric Tradition`,
        author: `Jaime Paul Lamb`,
        link: `https://www.goodreads.com/book/show/54392849-approaching-the-middle-chamber`,
      },
    ],
    showsList: [
      {
        title: `The Umbrella Academy`,
        author: `Steve Blackman, Jeremy Slater`,
        link: `https://www.imdb.com/title/tt1312171/`,
      },
      {
        title: `Watchmen`,
        author: `Damon Lindelof`,
        link: `https://www.imdb.com/title/tt7049682/`,
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
