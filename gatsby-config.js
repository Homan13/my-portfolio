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
        title: `The Man of Desire (The Way of the Heart)`,
        author: `Louis-Claude de Saint-Martin, Felix Mupidia Lonji (Translator)`,
        link: `https://www.goodreads.com/book/show/36580349-the-man-of-desire`,
      },
      {
        title: `The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win`,
        author: `Gene Kim, Kevin Behr, George Spafford`,
        link: `https://www.goodreads.com/book/show/17255186-the-phoenix-projects`,
      },
      {
        title: `Kabbalah for Dummies`,
        author: `Arthur Kirzweil`,
        link: `https://www.goodreads.com/book/show/302050.Kabbalah_For_Dummies`,
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
