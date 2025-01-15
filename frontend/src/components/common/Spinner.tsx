import { cva, type VariantProps } from 'class-variance-authority'

const spinnerStyles = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface SpinnerProps extends VariantProps<typeof spinnerStyles> {
  className?: string
}

export function Spinner({ size, className }: SpinnerProps): JSX.Element {
  return (
    <div
      className={spinnerStyles({ size, className })}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
} 