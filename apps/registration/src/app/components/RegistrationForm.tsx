import { SubmitHandler, useForm } from 'react-hook-form';
import { registrationSchema, type RegistrationDto } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationDto>({
    resolver: zodResolver(registrationSchema),
  });

  const handleLoginForm: SubmitHandler<RegistrationDto> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLoginForm)}>
      <div>
        <input
          type="email"
          {...register('email')}
          className="rounded-sm border-2 border-zinc-700"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="password"
          {...register('password')}
          className="rounded-sm border-2 border-zinc-700"
        />
        {errors.password && (
          <p className="red-500">{errors.password.message}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          {...register('confirmPassword')}
          className="rounded-sm border-2 border-zinc-700"
        />
        {errors.confirmPassword && (
          <p className="red-500">{errors.confirmPassword.message}</p>
        )}
      </div>
      <div>
        <button type="submit">{isSubmitting ? 'Sending...' : 'Send'}</button>
      </div>
    </form>
  );
};
