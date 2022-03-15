import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($user: RegisterUserInput!) {
    registerUser(user: $user) {
      message
    }
  }
`;

export const LOGIN = gql`
  mutation login($user: LoginInput!) {
    login(user: $user) {
      token
    }
  }
`
