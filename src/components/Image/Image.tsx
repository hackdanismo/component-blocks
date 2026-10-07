import type { ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  unstyled?: boolean
}

export function Image({
  className = '',
  alt,
  unstyled = false,
  ...props
}: ImageProps) {
  const styles = unstyled
    ? className
    : `block h-auto max-w-full rounded-md ${className}`

  return (
    <img
      alt={alt}
      className={styles}
      {...props}
    />
  )
}