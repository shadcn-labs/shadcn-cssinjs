import { cn } from './lib/utils'
import { Spinner } from './Spinner'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

export function Button({
  variant = 'primary',
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        loading && 'cursor-not-allowed opacity-70',
        className,
      )}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}
