/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hir8mxva9mmq`,
        accessToken: `J0flxZ52L4EmpfqWvXIc76IAkVIIFb6O8KDUIDS_78M`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hir8mxva9mmq`,
        accessToken: `88cKTH_sgpve3Hi_P3iC-IEO-ZBq3TUEeP4OmypIqiw`,
      },
    },

  ],

}
