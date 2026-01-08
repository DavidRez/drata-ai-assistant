"use client"
import { useState } from "react"
import { AssistantConfig, AssistantMessages } from "@/types/assistant"
import { setMessages } from "@/utils/messages"
import { AssistantChatWindow } from "./AssitantChatWindow"
import { AssistantInput } from "./AssistantInput"
import { Button } from "../ui/Button"

type Props = {
  config: AssistantConfig
}

// Initial message for the assistant
const initialMessages: AssistantMessages = [
  {
    role: "assistant",
    content: "Hello! I'm here to answer any questions you have."
  }
]

export function AssistantUI({ config }: Props) {
  const [messages, setMessagesState] = useState<AssistantMessages>(initialMessages)

  //question input
  const [question, setQuestion] = useState<string>("")

  return (
    <section className="bg-white shadow-xs" role="region" aria-label="Chat assistant">
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center gap-4 mb-4 bg-(--drata-blue) text-white p-4">
        <h2 className="text-xl font-semibold">
          {config.header}
        </h2>
        <Button 
          disabled={false}
          onClick={() => {
            setMessagesState(initialMessages)
            setQuestion('')
          }}
          label="New Conversation"
        />
      </div>

      {/* Chat window */}
      <AssistantChatWindow
        messages={messages}
      />

      {/* Input row */}
      <div className="p-4 bg-gray-100">
        <AssistantInput 
          label={config.body || "Type your question here"} 
          id="question-input" 
          disabled={question.length > 0} 
          readonly={question.length > 0}
          placeholder="Type your question here" 
          onClick={(input: string) => {
            setQuestion(input)
            setMessagesState(setMessages({ role: "user", content: input }, messages))
          }} />
      </div>
    </section>
  )
}
          