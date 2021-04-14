const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query myQuery ($link:String!) {
GetVCardLink {
  getVCardbyLink{
      link
     
 
      
    }}}
    `)

  console.log(data)
  data.GetVCardLink.forEach(({link,c1,c2,c3,sender,msg,rec }) => {
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
