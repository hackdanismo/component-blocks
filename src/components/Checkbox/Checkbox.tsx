import type { InputHTMLAttributes } from 'react'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export function Checkbox({
  className = '',
  ...props
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}