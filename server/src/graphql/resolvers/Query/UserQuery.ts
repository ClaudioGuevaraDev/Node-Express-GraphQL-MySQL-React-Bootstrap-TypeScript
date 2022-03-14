import { getRepository } from "typeorm";

import { User } from "../../../entities";

export const UserQuery = {
  getAllUsers: async () => {
    const users = await getRepository(User).find();

    return users;
  },
};
