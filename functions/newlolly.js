const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require("faunadb")
const shortId = require("shortid")
const axios = require("axios")
require("dotenv").config()


const q = faunadb.query

const typeDefs = gql`
  type Query {
    getLolly: [Lolly!]
    getLollyByPath(path: String!): [Lolly!]
  
  }
  type Lolly {
    recipientName: String!
    message: String!
    sender: String!
    flavourTop: String!
    flavourMedium: String!
    flavourBottom: String!
    lollyPath: String!
    
  }
  type Mutation {
    createLolly(recipientName: String!, message: String! ,sender: String! ,flavourTop: String! ,flavourMedium: String!, flavourBottom: String!): Lolly
  }
`



const resolvers = {
  Query: {
    getLolly: async (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNA
      })

      try {
        const result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("lollies_index"))),
            q.Lambda(x => q.Get(x))
          )
        )
        console.log(result.data)
        return result.data.map(d => {
          return {
            recipientName: d.data.recipientName,
            message: d.data.message,
            sender: d.data.sender,
            flavourTop: d.data.flavourTop,
            flavourMedium: d.data.flavourMedium,
            flavourBottom: d.data.flavourBottom,
            lollyPath: d.data.lollyPath
          }
        })


      } catch (err) {
        console.log(err)
      }
    },
    getLollyByPath: async (_, {path} )=>{
      console.log(path)

      const client = new faunadb.Client({
        secret: process.env.FAUNA
      })

      try {
        const result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("lolly_by_path"), path )),
            q.Lambda(x=>(q.Get(x)))
        ))
        console.log(result.data)
        return result.data.map(d => {
          return {
            recipientName: d.data.recipientName,
            message: d.data.message,
            sender: d.data.sender,
            flavourTop: d.data.flavourTop,
            flavourMedium: d.data.flavourMedium,
            flavourBottom: d.data.flavourBottom,
            lollyPath: d.data.lollyPath
          }
        })
     
      } catch (err) {
        console.log(err)
      }

    }

  },
  Mutation: {
    createLolly: async (_, args) => {
      console.log(args)
      try {

        const client = new faunadb.Client({
          secret: process.env.FAUNA
        })
        const id = shortId.generate()
        args.lollyPath = id

        const result = await client.query(
          q.Create(q.Collection("lollies"), {
            data: args
          })
        )
        // Calling Netlify Webhook to trigger build. It is disabled manually. This Post request can be enabled for testing purpose otherwise it will cost build resources on Netllify
        
        // axios.post("https://api.netlify.com/build_hooks/60241a0e5db2b10c964b2def", {})
        //   .then(res => {
        //     console.log(`statusCode, ${res.statusCode}`)
        //     console.log(res)
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })
        //


        console.log("result", result)
        console.log("result", result.data)

        return result.data
      } catch (err) {
        console.log(err)
      }


    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }