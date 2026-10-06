import type { TextareaHTMLAttributes } from 'react'

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

export function Textarea({
  className = '',
  error = false,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={[
        'w-full rounded-md border px-3 py-2 outline-none',
        'focus:ring-2 focus:ring-blue-500',
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-300',
        className,
      ].join(' ')}
      aria-invalid={error || undefined}
      {...props}
    />
  )
}