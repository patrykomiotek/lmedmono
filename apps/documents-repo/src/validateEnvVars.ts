import { z } from 'zod';

export const envSchema = z.object({
  VITE_TARGET_ENV: z.enum(['locale', 'staging', 'production', 'tests', 'ci']),

  VITE_API_BASE_URL: z.string().min(1),
  VITE_API_TOKEN: z.string().min(1),
});
