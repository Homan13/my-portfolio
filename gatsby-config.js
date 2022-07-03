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
        title: `Esoteric Handbook for the Entered Apprentice Mason`,
        author: `Robert V. Lund`,
        link: `https://www.goodreads.com/book/show/41723040-esoteric-handbook-for-the-entered-apprentice-mason`,
      },
      {
        title: `The Chicken Qabalah of Rabbi Lamed Ben Clifford: Dilettante's Guide to What You Do and Do Not Need to Know to Become a Qabalist`,
        author: `Lon Milo DuQuette`,
        link: `https://www.goodreads.com/book/show/420549.The_Chicken_Qabalah_of_Rabbi_Lamed_Ben_Clifford`,
      },
      {
        title: `Tiamat's Wrath (The Expanse)`,
        author: `James S.A. Corey`,
        link: `https://www.goodreads.com/book/show/28335698-tiamat-s-wrath`, 
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
