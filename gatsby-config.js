


module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {        
        typeName: "getLolly",
        fieldName: "getLolly",



        url:"https://virtual-lolly-12e.netlify.app/.netlify/functions/vcard"


      }
    }
  ],
}

