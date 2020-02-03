exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `type airtable implements Node {
        img1: String
        img2: String
        img3: String
    }`
  createTypes(typeDefs)
}
