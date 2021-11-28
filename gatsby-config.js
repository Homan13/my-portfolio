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
        title: `Cerneauism and American Freemasonry`,
        author: `Arturo de Hoyos and S. Brent Morris`,
        link: `https://www.scottishritestore.org/cerneauism-and-american-freemasonry.html`,
      },
      {
        title: `Of Errors & Truth (Man Restored to the Universal Principle of Knowledge)`,
        author: `Louis-Claude de Saint-Martin - Translated by Piers A. Vaughan`,
        link: `https://www.goodreads.com/book/show/35926931-of-errors-truth`,
      },
      {
        title: `Cibola Burn (The Expanse #4)`,
        author: `James S.A. Corey`,
        link: `https://www.goodreads.com/book/show/18656030-cibola-burn`,
      },
    ],
    showsList: [
      {
        title: `Yellowstone`,
        author: `John Linson, Taylor Sheridan`,
        link: `https://www.imdb.com/title/tt4236770/`,
      },
      {
        title: `The Expanse`,
        author: `Daniel Abraham, Mark Fergus, Ty Franck and Hawk Ostby`,
        link: `https://www.imdb.com/title/tt3230854/`,
      },
      {
        title: `Foundation`,
        author: `Josh Friedman, David S. Goyer`,
        link: `https://www.imdb.com/title/tt0804484/`,
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
