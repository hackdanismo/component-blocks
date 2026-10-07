import type { HTMLAttributes, ReactNode } from 'react'

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  unstyled?: boolean
}

export function Sidebar({
  children,
  className = '',
  unstyled = false,
  ...props
}: SidebarProps) {
  const styles = unstyled
    ? className
    : `w-64 border-r border-gray-200 bg-white p-4 ${className}`

  return (
    <aside className={styles} {...props}>
      {children}
    </aside>
  )
}