const { ApolloServer,gql }=require('apollo-server');
// const employees = require('./data/employees.json')
const EmployeeServeice=require('./datasource/file')
const ProjectService=require('./datasource/project')

const typeDefs=gql`

type Query {
    employees(
        id: ID
        firstName: String
        lastName: String
        designation: String
        department: String
        nearestCity: String
    ): [Employee],
    findEmployeeById(id:ID): Employee,

    projects:[Project],
    findprojectById(id:ID): Project
}

type Employee {
    id: ID!
    firstName: String
    lastName: String
    designation: String
    department: String @deprecated (reason : "will be removed in a future release"),
    nearestCity: String
}
type Project {
    id: ID!
    projectName: String
    startDate: String
    client: String   
    employees:[Employee]  
}
`;

const dataSources=()=>({
    EmployeeServeice: new EmployeeServeice(),
    projectService: new ProjectService()
});

const resolvers ={
    Query:  {
        employees: (parent,args,{dataSources},info) =>{
            return dataSources.EmployeeServeice.getEmployees(args);
        },
        findEmployeeById: (parent,{id},{dataSources},info)=>{
            return dataSources.EmployeeServeice.getEmployeeById(id)[0];
        },
        projects: (parent,args,{dataSources},info) =>{
            return dataSources.projectService.getprojects();
        },
        findprojectById:(parent,{id},{dataSources},info)=>{
            return dataSources.projectService.findprojectById(id);
        }

    },
};



const gqlServer = new ApolloServer({typeDefs,resolvers,dataSources});


gqlServer.listen({port: process.env.port || 4000})
.then(({url})=>console.log(`listening on port ${url}`));