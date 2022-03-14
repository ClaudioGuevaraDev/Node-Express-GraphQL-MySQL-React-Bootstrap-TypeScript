import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($user: RegisterUserInput!) {
    registerUser(user: $user) {
      message
    }
  }
`;
