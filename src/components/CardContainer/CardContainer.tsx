import type { HTMLAttributes, ReactNode } from 'react'

type ColumnCount = 1 | 2 | 3 | 4

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  mobileColumns?: ColumnCount
  tabletColumns?: ColumnCount
  desktopColumns?: ColumnCount
  unstyled?: boolean
}

export function CardContainer({
  children,
  className = '',
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 3,
  unstyled = false,
  ...props
}: CardContainerProps) {
  const mobileColumnClasses: Record<ColumnCount, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  const tabletColumnClasses: Record<ColumnCount, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  const desktopColumnClasses: Record<ColumnCount, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }

  const styles = unstyled
    ? className
    : [
        'grid gap-6 items-stretch [&>*]:h-full',
        mobileColumnClasses[mobileColumns],
        tabletColumnClasses[tabletColumns],
        desktopColumnClasses[desktopColumns],
        className,
      ].join(' ')

  return (
    <div
      className={styles}
      {...props}
    >
      {children}
    </div>
  )
}