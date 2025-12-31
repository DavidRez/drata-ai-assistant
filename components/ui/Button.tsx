type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  label: string
  onClick: () => void
}

export function Button({
  variant,
  label,
  onClick,
}: ButtonProps): React.ReactNode {
  return (
    <button
    className={`transition-all duration-300 rounded px-4 py-2 h-fit ${
      variant === "primary"
        ? "bg-(--cta-blue) text-white"
        : "bg-gray-200 text-gray-900"
    }`}
    onClick={onClick}
  >
    {label}
  </button>  
  )
}
