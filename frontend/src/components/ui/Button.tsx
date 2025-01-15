import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        px-8 py-4 text-lg font-semibold
        bg-[#FF7B5A] text-white
        border-2 border-[#E85A37]
        rounded-lg shadow-[0_6px_0_#E85A37]
        transition-all duration-150
        hover:bg-[#FF914D]
        active:shadow-[0_2px_0_#E85A37]
        active:translate-y-1
        min-w-[200px]
        ${className}
      `}
    >
      {children}
    </button>
  )
} 