import { forwardRef, type ForwardedRef } from 'react';
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
} from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  type?: 'text' | 'email' | 'password';
  label?: string;
};

// without forwardRef (fixed by register)
export const Input = <T extends FieldValues>({
  name,
  register,
  errors,
  label,
  type = 'text',
}: InputProps<T>) => {
  // throw new Error('Input error');

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} type={type} {...register(name)} />
      {errors[name] && (
        <p className="text-red-500">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

// with forwardRef
// export const Input = forwardRef(
//   <T extends FieldValues>(
//     { name, register, errors, label, type = 'text' }: InputProps<T>,
//     ref: ForwardedRef<HTMLInputElement>
//   ) => {
//     return (
//       <div>
//         {label && <label htmlFor={name}>{label}</label>}
//         <input ref={ref} id={name} type={type} {...register(name)} />
//         {errors[name] && (
//           <p className="text-red-500">{errors[name]?.message as string}</p>
//         )}
//       </div>
//     );
//   }
// );
