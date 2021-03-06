const { gql } = require('apollo-server');

const typeDefs = gql`
    type Post {
        id: ID!,
        body: String!,
        createAt: String!,
        username: String!
    }
    type User {
        id: ID!,
        email: String!,
        token: String!,
        username: String!, 
        createAt: String!
    }
    input RegisterInput {
        username: String!,
        password: String!, 
        confirmPassword: String!,
        email: String!
    }
    type Query {
        getPosts: [Post]
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
    }
`

module.exports = typeDefs;