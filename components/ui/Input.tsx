type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  placeholder: string
  disabled: boolean
  readonly: boolean
  value?: string
  inputRef: React.RefObject<HTMLInputElement>
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Input({
  label,
  id,
  placeholder,
  disabled,
  readonly,
  value,
  inputRef,
  handleChange,
  handleKeyDown,
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
      ref={inputRef}
      id={id}
      type="text"
      value={value}
      aria-disabled={disabled}
      readOnly={readonly}
      placeholder={placeholder}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleKeyDown(event)
        }
      }}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
      className={`flex-1 rounded-md border px-3 py-2 text-sm ${disabled ? "bg-gray-100 border-gray-400" : "bg-white border-gray-700"}`}
    />
    </div>
  )
}
