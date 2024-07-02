import { z } from "zod";

export const signInShcema = z.object({
  username: z.string(),
  password: z.string(),
});
