const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query myQuery  {
    getVCard{
      VCards{
      link
     
 
      
    }}}
    `)

  console.log(data)
  data.getVCard.VCards.forEach(({link }) => {
    actions.createPage({
      path: `VCard/${link}`,
      component: path.resolve(`./src/components/result.js`),
      context: {
        link: link,
    
    }
  })
}
  )
}
