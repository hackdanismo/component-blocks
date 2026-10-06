import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export function Input({
  className = '',
  error = false,
  ...props
}: InputProps) {
  return (
    <input
      className={[
        'w-full rounded-md border px-3 py-2 outline-none',
        'focus:ring-2 focus:ring-blue-500',
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-300',
        className,
      ].join(' ')}
      aria-invalid={error || undefined}
      {...props}
    />
  )
}