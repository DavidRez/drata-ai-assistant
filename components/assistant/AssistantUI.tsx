"use client"
import { useRef, useState, useEffect } from "react"
import { AssistantConfig, AssistantMessages } from "@/types/assistant"
import { setMessages } from "@/utils/messages"
import { AssistantChatWindow } from "./AssitantChatWindow"
import { AssistantInput } from "./AssistantInput"

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

// Get answer from QA source
const getAnswer = (id: string, config: AssistantConfig) => {
  return config.qaSource.items.find((qa) => qa.id === id)?.answer
}

export function AssistantUI({ config }: Props) {
  const [messages, setMessagesState] = useState<AssistantMessages>(initialMessages)
  const [questionClicked, setQuestionClicked] = useState<boolean>(false)
  const questionClickedRef = useRef<boolean>(false)

  useEffect(() => {
    questionClickedRef.current = questionClicked
  }, [questionClicked])

  return (
    <section className="bg-white shadow-xs">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-4 bg-(--drata-blue) text-white p-4">
        <h2 className="text-xl font-semibold">
          {config.header}
        </h2>
      </div>

      {/* Chat window */}
      <AssistantChatWindow
        messages={messages}
        questions={
          // Suggested Questions
          !questionClicked && (
            <div className="flex flex-col gap-2 mb-4">
              {config.qaSource.items.map((qa) => (
                <span
                  key={qa.id}
                  className="transition-all duration-300 w-fit max-w-md px-4 py-2 border rounded-full text-gray-600 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setMessagesState(setMessages({ role: "user", content: qa.question }, messages))
                    setTimeout(() => {
                      setMessagesState((currentMessages) => 
                        setMessages({ role: "assistant", content: getAnswer(qa.id, config) || "" }, currentMessages)
                      )
                    }, 2000)
                    setQuestionClicked(true)
                  }}
                >
                  {qa.question}
                  </span>
                ))}
              </div>
          )
        }
      />

      {/* Input row */}
      <div className="p-4 bg-gray-100">
        <AssistantInput 
          label={config.body || "Ask a question:"} 
          id="question-input" 
          disabled={true} 
          placeholder="Choose a question above" 
          onClick={() => {}} />
      </div>
    </section>
  )
}
          