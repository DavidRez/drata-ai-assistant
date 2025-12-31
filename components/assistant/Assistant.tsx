import { AssistantConfig } from "@/types/assistant"
import { AssistantUI } from "./AssistantUI"

type Props = {
  config: AssistantConfig
}

export function Assistant({ config }: Props) {
  if (!config.enabled) return null

  return <AssistantUI config={config} />
}
