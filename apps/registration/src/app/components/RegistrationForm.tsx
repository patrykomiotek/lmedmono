import { SubmitHandler, useForm } from 'react-hook-form';
import { registrationSchema, type RegistrationDto } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@erezerwacja/common-ui';

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
      <Input name="email" type="email" register={register} errors={errors} />

      <Input
        name="password"
        type="password"
        register={register}
        errors={errors}
      />

      <Input
        name="confirmPassword"
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
