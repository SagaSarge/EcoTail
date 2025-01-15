import { type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { XMarkIcon } from '@heroicons/react/20/solid'

const alertStyles = cva(
  'relative rounded-lg p-4',
  {
    variants: {
      variant: {
        info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        success: 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
        error: 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertStyles> {
  title?: string
  onClose?: () => void
}

export const Alert = ({
  className,
  variant,
  title,
  children,
  onClose,
  ...props
}: AlertProps) => {
  return (
    <div className={alertStyles({ variant, className })} role="alert" {...props}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-lg p-1.5 hover:bg-black/10"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
      {title && <h3 className="mb-1 font-medium">{title}</h3>}
      <div className="text-sm">{children}</div>
    </div>
  )
} 