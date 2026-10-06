import type { HTMLAttributes } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2
}

export function Heading({
  level = 1,
  className = '',
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2'

  const levelClasses = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-semibold',
  }

  return (
    <Tag
      className={`${levelClasses[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}