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
    className={`transition-all duration-300 rounded px-4 py-2 w-fit h-fit cursor-pointer ${
      variant === "primary"
        ? "bg-(--cta-blue) text-white border border-(--cta-blue) hover:bg-white hover:text-(--cta-blue)" :
        variant === "secondary"
        ? "bg-gray-200 text-(--drata-blue) border border-(--drata-blue) hover:bg-(--drata-blue) hover:text-white hover:border-white"
        : "bg-(--drata-blue) text-white border border-white hover:bg-white hover:text-(--drata-blue) hover:border-(--drata-blue)"
    }`}
    onClick={onClick}
  >
    {label}
  </button>  
  )
}
