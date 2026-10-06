import type { InputHTMLAttributes } from 'react'

interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export function RadioButton({
  className = '',
  ...props
}: RadioButtonProps) {
  return (
    <input
      type="radio"
      className={`h-4 w-4 cursor-pointer border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}