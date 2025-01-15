import { forwardRef, type InputHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const checkboxStyles = cva(
  'h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-500 focus:ring-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof checkboxStyles> {
  label?: string
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            ref={ref}
            className={checkboxStyles({ variant: error ? 'error' : variant, className })}
            {...props}
          />
          {label && (
            <label className="text-sm text-gray-700 dark:text-gray-200">
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox' 