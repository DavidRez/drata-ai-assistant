"use client"
import { useRef, useState, useEffect } from "react"
import { AssistantConfig, AssistantMessages, AssistantQA } from "@/types/assistant"
import { setMessages } from "@/utils/messages"
import { AssistantChatWindow } from "./AssitantChatWindow"
import { AssistantInput } from "./AssistantInput"
import { Button } from "../ui/Button"
import Link from "next/link"

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
  const [questionAnswer, setQuestionAnswer] = useState<AssistantQA | null>(null) // The question and answer that the user clicked on
  const [addCta, setAddCta] = useState(false); // Whether to show the CTA
  const questionClickedRef = useRef<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cancel reply if user restarts the conversation
  const cancelTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    questionClickedRef.current = !questionAnswer
  }, [questionAnswer])

  return (
    <section className="bg-white shadow-xs" role="region" aria-label="Chat assistant">
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center flex-col gap-4 mb-4 bg-(--drata-blue) text-white p-4">
        <h2 className="text-xl font-semibold">
          {config.header}
        </h2>
        <Button onClick={() => {
          setMessagesState(initialMessages)
          setQuestionAnswer(null)
          setAddCta(false)
          cancelTimeout()
        }}
        label="New Conversation"
        />
      </div>

      {/* Chat window */}
      <AssistantChatWindow
        messages={messages}
        questions={
          // Suggested Questions
          !questionAnswer && (
            <div className="flex flex-col gap-2 mb-4">
              {config.qaSource.items.map((qa) => (
                <button
                  key={qa.id}
                  className="transition-all duration-300 w-fit max-w-md px-4 py-2 ml-8 border rounded-full text-gray-600 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setMessagesState(setMessages({ role: "user", content: qa.question }, messages))
                    timeoutRef.current = setTimeout(() => {
                      setMessagesState((currentMessages) => 
                        setMessages({ role: "assistant", content: qa.answer || "" }, currentMessages)
                      )
                      setAddCta(true)
                    }, 1000)
                    setQuestionAnswer(qa)
                  }}
                >
                  {qa.question}
                  </button>
                ))}
              </div>
          )
        }
        cta={addCta && (
          <Link
            href={questionAnswer?.cta?.href || ""}
            target={questionAnswer?.cta?.openNewTab ? "_blank" : "_self"}
            rel={questionAnswer?.cta?.openNewTab ? "noopener noreferrer" : undefined}
            aria-label={questionAnswer?.cta?.openNewTab ? "Open in new tab" : "Open in same tab"}
            className="transition-all duration-300 rounded-full px-4 py-2 ml-8 border w-fit text-sm font-medium bg-(--cta-blue) text-white hover:bg-white hover:text-(--cta-blue)"
          >
            {questionAnswer?.cta?.label}
          </Link>
        )
        }
      />

      {/* Input row */}
      <div className="p-4 bg-gray-100">
        <AssistantInput 
          label={config.body || "Ask a question:"} 
          id="question-input" 
          disabled={true} 
          readonly={true}
          placeholder="Choose a question above" 
          onClick={() => {}} />
      </div>
    </section>
  )
}
          