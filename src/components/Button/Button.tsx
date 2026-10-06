import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({
  className = '',
  children,
  variant = 'primary',
  /*
   * Without type, native button inside a form defaults to submit.
   * This can cause accidental form submissions.
   */
  type = 'button',
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  }

  return (
    <button
      type={type}
      className={`cursor-pointer rounded-md px-4 py-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
