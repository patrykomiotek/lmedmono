import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema, type LoginDto } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });

  const handleLoginForm: SubmitHandler<LoginDto> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLoginForm)}>
      <div>
        <input type="email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <input type="password" {...register('password')} />
        {errors.password && (
          <p className="red-500">{errors.password.message}</p>
        )}
      </div>
      <div>
        <button type="submit">{isSubmitting ? 'Sending...' : 'Send'}</button>
      </div>
    </form>
  );
};
