const { ApolloServer,gql }=require('apollo-server');
const employees = require('./data/employees.json')
const typeDefs=gql`

type Query {
    employees: [Employee],
}

type Employee {
    id: ID!
    firstName: String
    lastName: String
    designation: String
    department: String
    nearestCity: String
}

`

const resolvers ={
    Query: {
        employees: ()=>{
            return[{
                firstName: "john"
            }]
        }
    }
}

const gqlServer = new ApolloServer({typeDefs,resolvers});


gqlServer.listen({port: process.env.port || 4000})
.then(({url})=>console.log(`listening on port ${url}`));