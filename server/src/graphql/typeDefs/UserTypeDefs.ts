import { gql } from "apollo-server-express";

export const UserTypeDefs = gql`
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    registerUser(user: RegisterUserInput!): CreateUserResponse
    registerUserRoot(user: RegisterUserInput!): User
    login(user: LoginInput!): LoginResponse
  }

  type User {
    id: ID
    username: String
    email: String
    password: String
    validated: Boolean
    rol: Rol
    createdAt: String
    updatedAt: String
  }

  type Rol {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type CreateUserResponse {
    user: User
    message: String
  }

  type LoginResponse {
    token: String
  }

  input RegisterUserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }
`;
