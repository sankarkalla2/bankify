import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(1).max(20),
});
