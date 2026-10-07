import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  unstyled?: boolean
}

export function Card({
  className = '',
  children,
  unstyled = false,
  ...props
}: CardProps) {
  const styles = unstyled
    ? className
    : `h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  )
}