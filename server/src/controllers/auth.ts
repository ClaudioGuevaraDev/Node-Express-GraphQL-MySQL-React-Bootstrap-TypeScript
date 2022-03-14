import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entities";

export const validateAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(parseInt(req.params.id));

  if (!user) return res.status(401).json({ message: "User not found." });

  getRepository(User).merge(user, { validated: true });

  try {
    await getRepository(User).save(user);
    return res.json("Validated account.");
  } catch (error) {
    return res.status(500).json({ message: "Error validating account." });
  }
};
