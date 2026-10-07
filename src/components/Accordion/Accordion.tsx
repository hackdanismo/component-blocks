import type { DetailsHTMLAttributes, ReactNode } from 'react'

interface AccordionProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  title: ReactNode
  unstyled?: boolean
}

export function Accordion({
  title,
  children,
  className = '',
  unstyled = false,
  ...props
}: AccordionProps) {
  const styles = unstyled
    ? className
    : `rounded-md border border-gray-200 bg-white ${className}`

  return (
    <details
      className={styles}
      {...props}
    >
      <summary
        className={
          unstyled
            ? undefined
            : 'cursor-pointer list-none px-4 py-3 font-medium text-gray-900'
        }
      >
        {title}
      </summary>

      <div
        className={
          unstyled
            ? undefined
            : 'border-t border-gray-200 px-4 py-3 text-gray-700'
        }
      >
        {children}
      </div>
    </details>
  )
}