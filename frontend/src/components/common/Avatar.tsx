import { type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const avatarStyles = cva(
  'inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-14 w-14 text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStyles> {
  src?: string
  alt?: string
  fallback?: string
}

export const Avatar = ({
  className,
  size,
  src,
  alt,
  fallback,
  ...props
}: AvatarProps) => {
  const initials = fallback
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className={avatarStyles({ size, className })} {...props}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {initials}
        </span>
      )}
    </div>
  )
} 