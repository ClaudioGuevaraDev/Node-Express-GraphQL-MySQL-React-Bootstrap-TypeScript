import validator from "validator";

import { getRepository } from "typeorm";

// Entities
import { RegisterUser } from "../../../interfaces/User";
import { User, Rol } from "../../../entities";

// Utils
import { encryptPassword } from "../../../utils/handlePassword";
import { sendEmail } from "../../../utils/sendEmail";

export const UserMutation = {
  registerUser: async (_: undefined, args: RegisterUser) => {
    const { user } = args;

    // Validations
    if (user.username.length > 10)
      throw new Error("The username must have at least 10 characters.");

    if (!validator.isEmail(user.email))
      throw new Error("Invalid email address.");

    if (user.password.length < 8)
      throw new Error("The password must be at least 8 characters long.");

    if (user.password !== user.confirmPassword)
      throw new Error("Passwords do not match.");

    const searchUserName = await getRepository(User).find({
      where: {
        username: user.username,
      },
    });

    if (searchUserName.length > 0)
      throw new Error("Username already registered.");

    const searchEmail = await getRepository(User).find({
      where: {
        email: user.email,
      },
    });

    if (searchEmail.length > 0) throw new Error("Email already registered.");

    const rol = await getRepository(Rol).findOne({
      where: {
        name: "Trainer"
      }
    })

    if (!rol) throw new Error("An error occurred while trying to register the account. Please try again.")

    const newUser = getRepository(User).create({
      ...user,
      password: await encryptPassword(user.password),
      rol
    });

    try {
      const savedUser = await getRepository(User).save(newUser);

      sendEmail(savedUser.email, savedUser.id.toString());

      return savedUser;
    } catch (error) {
      throw new Error(
        "An error occurred while trying to register the account. Please try again."
      );
    }
  },
};
