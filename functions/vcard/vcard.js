const { ApolloServer, gql } = require('apollo-server-lambda')
const axios = require("axios")
const faunadb = require('faunadb'),
  q = faunadb.query;
const shortid = require('shortid');

const typeDefs = gql`
  type Query {
    getVCard: [VCard]

    getVCardLink(link: String): [VCard]
  }
  type VCard {
    id: ID!
    c1: String!
    c2: String!
    c3: String!
    rec: String!
    sender: String!
    msg: String!
    link: String!
  }
  type Mutation {
    addVCard(c1: String!, 
      c2: String!,
      c3: String!,
      rec: String!,
      sender: String!,
      msg: String!) : VCard
  }
`

const resolvers = {
  Query: {
    getVCard: async () => {
      try {
        var adminClient = new faunadb.Client({ secret: 'fnAEG_dJZ9ACCA2gw3hSWK5ExfOilUlAMGcSvFdp' })
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index('VCard'))),  
            q.Lambda(x => q.Get(x))
          )
        )
       return result.data.map(d => {
         console.log('data is =========',d)
          return {
            link: d.data.link,
            c1: d.data.c1,
            c2: d.data.c2,
            c3: d.data.c3,
            rec: d.data.rec,
            sender: d.data.sender,
            msg: d.data.msg,
          }
        })
      } catch (err) {
        console.log("error from function:", err)
      }
    },
    getVCardLink: async (_, args) => {
   
      try {
        const result = await adminClient.query(
          q.Get(q.Match(q.Index("VCard_by_link"), args.link)))
      
        return result.data
         
      } catch (err) {
   
        return err.toString()
      }
    },
  },
  Mutation: {
    addVCard: async (_, args) => {
      try {
        const link = shortId.generate();
        console.log(link)
        args.link= link;
        console.log(args)
        const result = await Client.query(
          q.Create(q.Collection("VCard"), {
            data: args,
          })
        );


      axios
        .post("https://api.netlify.com/build_hooks/60772b9272359f0b8b20dddd")
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.error(error)
        });

      console.log(result)
      return result.data;
      }catch (error) {
    return error.toString();
  }
  }
}
}



const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
})

exports.handler = server.createHandler()