import { useFormContext } from 'react-hook-form';
import { Input, type InputProps } from './Input';

interface FormFieldProps extends Omit<InputProps, 'name'> {
  name: string;
}

export const FormField = ({ name, ...props }: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <Input
      {...register(name)}
      error={error}
      aria-invalid={!!error}
      {...props}
    />
  );
}; 