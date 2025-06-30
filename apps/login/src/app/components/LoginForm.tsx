import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema, type LoginDto } from '@erezerwacja/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@erezerwacja/common-ui';

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
      <Input name="email" type="email" register={register} errors={errors} />

      <Input
        name="password"
        type="password"
        register={register}
        errors={errors}
      />

      <div>
        <button type="submit">{isSubmitting ? 'Sending...' : 'Send'}</button>
      </div>
    </form>
  );
};
