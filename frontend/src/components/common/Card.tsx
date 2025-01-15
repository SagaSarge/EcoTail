import { type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const cardStyles = cva(
  'rounded-lg bg-white shadow-sm dark:bg-gray-800',
  {
    variants: {
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      padding: 'md',
    },
  }
)

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {
  title?: string
  description?: string
}

export const Card = ({
  className,
  padding,
  title,
  description,
  children,
  ...props
}: CardProps) => {
  return (
    <div className={cardStyles({ padding, className })} {...props}>
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  )
} 