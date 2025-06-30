import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBrowserHistory } from 'history';

import { loginSchema, type LoginDto } from '@erezerwacja/validators';
import { Input } from '@erezerwacja/common-ui';

const browserHistory = createBrowserHistory();
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

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
    console.log({ REDIRECT_URL });
    browserHistory.push(REDIRECT_URL);
    // window.location();
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
