import type { AnchorHTMLAttributes } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

export function Link({
  className = '',
  children,
  variant = 'primary',
  ...props
}: LinkProps) {
  const variantClasses = {
    primary: 'text-blue-600 underline hover:text-blue-700',
    secondary: 'text-gray-700 underline hover:text-gray-900',
  }

  return (
    <a
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}