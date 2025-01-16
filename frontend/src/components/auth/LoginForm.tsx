import { z } from 'zod';
import { useAuthStore } from '../../stores/useAuthStore';
import { Form } from '../ui/form/Form';
import { FormField } from '../ui/form/FormField';
import { Button } from '../ui/Button';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { signIn, isLoading, error } = useAuthStore();

  const handleSubmit = async (values: LoginValues) => {
    try {
      await signIn(values.email, values.password);
    } catch (err) {
      // Error is handled by the store
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please sign in to your account
        </p>
      </div>

      <Form<LoginValues>
        onSubmit={handleSubmit}
        schema={loginSchema}
        className="mt-8 space-y-6"
      >
        {({ formState }) => (
          <>
            <div className="space-y-4">
              <FormField
                name="email"
                type="email"
                label="Email address"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

              <FormField
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <div className="text-sm text-red-500">
                {error.message}
              </div>
            )}

            <Button
              onClick={() => {}}
              className="w-full"
              disabled={isLoading || formState.isSubmitting}
            >
              {isLoading || formState.isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign in'
              )}
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}; 