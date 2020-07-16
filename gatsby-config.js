module.exports = {
  siteMetadata: {
    title: 'Jonas Artmeier - Portfolio',
    author: 'Jonas Artmeier',
    description: 'This is Jonas Portfolio from the UpLeveled Bootcamp',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-social-cards',
    //   options: {
    //     // ommit to skip
    //     authorImage: './src/assets/images/screenshot.JPG',
    //     // image to use when no cover in frontmatter
    //     backgroundImage: './src/assets/images/screenshot.JPG',
    //     // author to use when no auth in frontmatter
    //     defaultAuthor: 'Jonas Artmeier',
    //     // card design
    //     design: 'default', // 'default' or 'card'
    //   },
    // },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-169796110-2',
      },
    },
  ],
}
