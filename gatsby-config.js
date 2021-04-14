/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  
  plugins: [`gatsby-plugin-netlify`,
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: " GetVCardLink",
      fieldName: " GetVCardLink",
      url: "https://virtual-lolly-12e.netlify.app/.netlify/functions/vcard",
    },
  }
  ],

 
}
