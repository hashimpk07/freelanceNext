import { z } from "zod";

// User schema for validation
export const UserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  role: z.string(),
  permissions: z.array(z.string()).default([]),
});

export type User = z.infer<typeof UserSchema>;
