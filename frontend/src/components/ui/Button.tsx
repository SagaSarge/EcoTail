import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className="relative appearance-none border-0 py-0 px-2 pb-3 min-w-[10em] box-border bg-transparent font-inherit cursor-pointer"
      >
        <div className="button-top relative z-0 flex items-center justify-center py-2 px-4 text-white text-shadow-sm transition-transform duration-200 select-none group-active:translate-y-[6px]">
          {children}
          <div className="absolute inset-0 -z-10 rounded bg-gradient-to-br from-[#3dcd9e] to-[#369d8d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2),0_1px_2px_1px_rgba(255,255,255,0.2)] transition-[border-radius,padding,width] duration-200" />
        </div>

        <div className="button-bottom absolute -z-10 bottom-1 left-1 w-[calc(100%-8px)] h-[calc(100%-10px)] pt-[6px] box-content bg-[#38a19d] rounded-[8px/16px_16px_8px_8px] shadow-[0_2px_3px_0_rgba(0,0,0,0.5),inset_0_-1px_3px_3px_rgba(0,0,0,0.4)] transition-[border-radius,padding-top] duration-200 group-active:rounded-[10px_10px_8px_8px/8px] group-active:pt-0
          [background-image:radial-gradient(4px_8px_at_4px_calc(100%-8px),rgba(255,255,255,0.25),transparent),radial-gradient(4px_8px_at_calc(100%-4px)_calc(100%-8px),rgba(255,255,255,0.25),transparent),radial-gradient(16px_at_-4px_0,white,transparent),radial-gradient(16px_at_calc(100%+4px)_0,white,transparent)]" />

        <div className="button-base absolute -z-20 top-1 left-0 w-full h-[calc(100%-4px)] rounded-xl bg-black/15 shadow-[0_1px_1px_0_black,inset_0_2px_2px_rgba(0,0,0,0.25)]" />
      </button>
    </div>
  )
} 