import { getRepository } from "typeorm";

import { Rol } from "../../../entities/Rol";

export const RolQuery = {
  getAllRoles: async () => {
    const roles = await getRepository(Rol).find({ relations: ["users"] });

    return roles;
  },
};
