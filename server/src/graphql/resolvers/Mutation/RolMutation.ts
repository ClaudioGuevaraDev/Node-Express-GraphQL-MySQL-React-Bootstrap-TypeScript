import { getRepository } from "typeorm";

import { CreateRol } from "../../../interfaces/Rol";
import { Rol } from "../../../entities/Rol";

export const RolMutation = {
  createRol: async (_: undefined, args: CreateRol) => {
    const newRol = getRepository(Rol).create(args.rol);

    try {
      const savedRol = await getRepository(Rol).save(newRol);
      return savedRol;
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY")
        throw new Error("The role already exists.");
    }
  },
};
