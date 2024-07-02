import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be of atleast 2 character")
  .max(20, "username must be no longer than 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email(),
  password: z.string().min(6, { message: "Password must be of 6 character" }),
});
