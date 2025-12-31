import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

type Props = {
    label: string
    id: string
    disabled: boolean
    placeholder: string
  onClick: () => void
}

export function AssistantInput({ label, id, disabled, placeholder, onClick }: Props) {
  return (
    <div className="flex flex-wrap items-end gap-2 mb-4">
          <Input
            label={label}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            onClick={() => {}}
          />
          <Button variant="secondary" label="Send" onClick={onClick} />
    </div>
    )
}