import { z } from 'zod';

// TODO: translations

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail' }),
  password: z.string().min(3, { message: 'Password to short' }),
});

export type LoginDto = z.infer<typeof loginSchema>;
