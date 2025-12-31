import { AssistantMessage } from "@/types/assistant"

export const setMessages = (message: AssistantMessage, messages: AssistantMessage[]) => {
  return [...messages, message]
}

export const getMessages = (messages: AssistantMessage[]) => {
  return messages.filter((message) => message.role === "assistant")
}