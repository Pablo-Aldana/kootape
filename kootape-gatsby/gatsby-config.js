module.exports = {
  siteMetadata: {
    title: "Kootape",
    author: "Pablo Aldana",
    description: "Expertos en Kinesionología deportiva"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options:
      {
        name: 'Kootape - Expertos en Kinesionología deportiva',
        short_name: 'Kootape',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
