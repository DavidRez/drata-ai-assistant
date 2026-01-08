import { Input } from "../ui/Input"
import { Button } from "../ui/Button"
import { useRef, useState } from "react"

type Props = {
    label: string
    id: string
    disabled: boolean
    readonly: boolean
    placeholder: string
    onClick: (input: string) => void
}

export function AssistantInput({ label, id, disabled, readonly, placeholder, onClick }: Props) {
  const [input, setInput] = useState<string>("") // input value
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClick((event.target as HTMLInputElement).value)
      if (inputRef.current) {
        inputRef.current.value = ''
        setInput('') // clear input value
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((event.target as HTMLInputElement).value)
  }

  return (
    <div className="flex flex-wrap items-end gap-2 mb-4">
        <Input
            label={label}
            id={id}
            disabled={disabled}
            inputRef={inputRef as React.RefObject<HTMLInputElement>}
            placeholder={placeholder}
            readonly={readonly}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
        />
        <Button 
          variant="secondary" 
          label="Send" 
          disabled={disabled || input.length === 0} // disable button once question is submitted
          onClick={() => {
            onClick(input)
            if (inputRef.current) {
              inputRef.current.value = ''
              setInput('')
            }
          }} />
    </div>
    )
}