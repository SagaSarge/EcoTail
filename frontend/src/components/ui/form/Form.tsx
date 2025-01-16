import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FormProvider,
} from 'react-hook-form';
import { ZodType } from 'zod';

interface FormProps<TFormValues> {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema?: ZodType<TFormValues>;
  options?: Omit<UseFormProps<TFormValues>, 'resolver'>;
  className?: string;
}

export const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  schema,
  options,
  className,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        {children(methods)}
      </form>
    </FormProvider>
  );
}; 