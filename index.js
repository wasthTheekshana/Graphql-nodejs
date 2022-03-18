const { ApolloServer,gql }=require('apollo-server');

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

const resolver ={
    Query: {
        employees: ()=>{
            return{
                message: "Hello Server"
            }
        }
    }
}

const gqlServer = new ApolloServer({typeDefs});


gqlServer.listen({port: process.env.port || 4000})
.then(({url})=>console.log(`listening on port ${url}`));