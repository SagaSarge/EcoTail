import { type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const toggleStyles = cva(
  'relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-13',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const toggleHandleStyles = cva(
  'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
  }
)

interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof toggleStyles> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export const Toggle = ({
  className,
  size,
  checked = false,
  onChange,
  label,
  disabled,
  ...props
}: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={toggleStyles({
        size,
        className: `${className} ${
          checked ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
        }`,
      })}
      onClick={() => onChange?.(!checked)}
      disabled={disabled}
      {...props}
    >
      <span className="sr-only">{label}</span>
      <span
        className={toggleHandleStyles({
          size,
          className: `${
            checked
              ? 'translate-x-full rtl:-translate-x-full'
              : 'translate-x-0'
          }`,
        })}
      />
    </button>
  )
} 