import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

interface FormProps<TFormValues, Schema> {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: Omit<UseFormProps<TFormValues>, 'resolver'>;
  schema?: Schema;
  className?: string;
}

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  schema,
  className,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit(onSubmit)}
      noValidate
    >
      {children(methods)}
    </form>
  );
}; 