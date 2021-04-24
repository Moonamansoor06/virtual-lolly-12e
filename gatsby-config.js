module.exports = {
plugins: [`gatsby-plugin-netlify`,
  /* {
    resolve: "gatsby-source-graphql",
    options: {
          typeName: "VCard",
         fieldName: "VCards",
      url: "https://virtual-lolly-12e.netlify.app/.netlify/functions/vcard",
    },
    headers: {
      Authorization: `Bearer ${process.env.FAUNA}`
  },
    fetchOptions: {},
  }, */
  {
    resolve: `gatsby-source-faunadb`,
    options: {
      secret: "fnAEG_dJZ9ACCA2gw3hSWK5ExfOilUlAMGcSvFdp",
      index: `getVCard`,
      arguments: ["VCard"],
      type: "VCard",

  },
  

  
  }  
  ],

 
}
