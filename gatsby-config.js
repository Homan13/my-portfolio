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
    occupation: `Technical Account Manager`,
    keywords: [`Kevin`, `Homan`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Technical Account Manager`,
      `Automater of Things`,
      `Track Day Enthusiast`,
      `Husband and Father`,
    ],
    readingList: [
      {
        title: `Esoterika - The Symbolism Of The Blue Degrees of Freemasonry`,
        author: `Albert Pike, Arturo de Hoyes (Editor)`,
        link: `https://www.goodreads.com/book/show/8088311-esoterika---the-symbolism-of-the-blue-degrees-of-freemasonry`,
      },
      {
        title: `Man, His True Nature and Ministry`,
        author: `Louis Claude de Saint-Martin`,
        link: `https://www.goodreads.com/book/show/1890094.Man`,
      },
      {
        title: `Second Foundation`,
        author: `Isaac Asimov`,
        link: `https://www.goodreads.com/book/show/29580.Second_Foundation`, 
      },
    ],
    showsList: [
      {
        title: `Yellowstone`,
        author: `John Linson, Taylor Sheridan`,
        link: `https://www.imdb.com/title/tt4236770/`,
      },
      {
        title: `House of the Dragon`,
        author: `Ryan J. Condal and George R.R. Martin`,
        link: `https://www.imdb.com/title/tt11198330/`,
      },
      {
        title: `The Lord of the Rings:: The Rings of Power`,
        author: `Patrick McKay and John D. Payne`,
        link: `https://www.imdb.com/title/tt7631058/`,
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
