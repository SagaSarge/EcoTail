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

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800 ${className}`}>
      <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
} 