export type AssistantConfig = {
    enabled: boolean
    header: string
    body?: string
    qaSource: {
        id: string
        items: AssistantQA[]
    }
    cta?: {
        label: string
        href: string
        ariaLabel: string
        openNewTab: boolean
    }
  }
  
export type AssistantQA = {
  id: string
  question: string
  answer: string
  cta?: {
    label: string
    href: string
    ariaLabel: string
    openNewTab: boolean
  }
}

export type AssistantMessage = {
  role: "user" | "assistant"
  content: string
}

export type AssistantMessages = AssistantMessage[]