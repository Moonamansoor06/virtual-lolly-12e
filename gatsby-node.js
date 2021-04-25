exports.createPages = async function ({ graphql, actions }) {

    const query = await graphql(`
    query {
        getVCard{
          data
           {
           link
           c1
           c2
           c3
           rec
           sender  
           msg
          }
          }
        }
      
          `);

      const vcard = query.data.getVCard.data;

      vcard.map((vc) => {
          actions.createPage({
              path: `/${vc.link}`,
              component: require.resolve(`./src/templates/vcard.js`),
              context: vc,
          });
      })


}

exports.onCreatePage = async ({page, actions}) => {
    const {createPage} =  actions

    if(page.path.match(/^\/vcard/)){
        page.matchPath = "/vcard/*"

        createPage(page)

    }

}