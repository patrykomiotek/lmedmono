import { z } from 'zod';

export const envSchema = z.object({
  // NODE_ENV = 'development' | 'production'
  VITE_TARGET_ENV: z.enum(['locale', 'staging', 'production', 'tests', 'ci']),

  VITE_REDIRECT_URL: z
    .string()
    .min(1, { message: 'VITE_REDIRECT_URL is required' }),
  // FOO: z.string().min(1),
});
