import React from 'react';
import { Button } from '../ui/Button';
import { Form } from '../ui/form/Form';
import { FormField } from '../ui/form/FormField';
import { loginSchema, type LoginValues } from '../../types/auth';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (values: LoginValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Here you would typically handle the login logic
      console.log('Login values:', values);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-eco-secondary">Welcome back</h2>
        <p className="mt-2 text-sm text-eco-neutral">
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
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full bg-eco-primary hover:bg-eco-primary/90 text-white"
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