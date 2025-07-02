import {
  forwardRef,
  memo,
  type ComponentProps,
  type ForwardedRef,
} from 'react';
import { cn } from './utils/cn';

type Props = Readonly<{
  children?: React.ReactNode;
}> &
  ComponentProps<'button'>;

const ButtonComponent = forwardRef(
  (
    { className, disabled, children, ...rest }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const baseClasses = 'bg-blue-600';

    const normalClasses =
      'bg-blue-600 hover:bg-blue-500 dark:bg-accent-dark-500 dark:hover:bg-accent-dark-700 dark:disabled:bg-accent-dark-300';
    const disabledClasses =
      'cursor-not-allowed bg-gray-400 hover:bg-gray-400 text-gray-300 shadow-lg';

    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          baseClasses,
          // normalClasses,
          disabled && disabledClasses,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export const Button = memo(ButtonComponent);

ButtonComponent.displayName = 'Button';
