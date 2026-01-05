type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  placeholder: string
  disabled: boolean
  readonly: boolean
  onClick: () => void
}

export function Input({
  label,
  id,
  placeholder,
  disabled,
  readonly,
  onClick,
}: InputProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2 grow">
    {label && (
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <input
      id={id}
      type="text"
      aria-disabled={disabled}
      readOnly={readonly}
      placeholder={placeholder}
      onClick={onClick}
      className={`flex-1 rounded-md border px-3 py-2 text-sm ${disabled ? "bg-gray-100 border-gray-400" : "bg-white border-gray-700"}`}
    />
    </div>
  )
}
