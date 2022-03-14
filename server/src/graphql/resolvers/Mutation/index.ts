import { UserMutation } from "./UserMutation";
import { RolMutation } from "./RolMutation";

export const Mutation = {
  ...UserMutation,
  ...RolMutation,
};
