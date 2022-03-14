import { gql } from "apollo-server-express";

export const UserTypeDefs = gql`
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    registerUser(user: RegisterUserInput!): User
  }

  type User {
    id: ID
    username: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  input RegisterUserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
`;
