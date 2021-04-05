exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
 
  if (page.path.match(/^\/vcard/)) {
    console.log("Page Created")
     page.matchPath = "/vcard/*";
     createPage(page);
   }}