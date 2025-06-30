import { z } from 'zod';
import { loginSchema } from '@erezerwacja/validators';

// TODO: translations

// export const registrationSchema = (t: T) => z

export const registrationSchema = loginSchema
  .merge(
    z.object({
      confirmPassword: z
        .string()
        .min(3, { message: 'Confirm password to short' }),
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

// export const registrationSchema = z
//   .object({
//     email: z.string().email({ message: 'Invalid e-mail' }),
//     password: z.string().min(3, { message: 'Password to short' }),
//     confirmPassword: z
//       .string()
//       .min(3, { message: 'Confirm password to short' }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'Passwords must match',
//     path: ['confirmPassword'],
//   });
// export type RegistrationDto = z.infer<
//   ReturnType<typeof registrationSchema>
// >;
export type RegistrationDto = z.infer<typeof registrationSchema>;
