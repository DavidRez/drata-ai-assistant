import { AssistantMessages } from "@/types/assistant"
import { useRef, useEffect } from "react"
import Image from "next/image"

type Props = {
  messages: AssistantMessages
}

export function AssistantChatWindow({ messages }: Props) {
    const chatWindow = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chatWindow.current && chatWindow.current.scrollHeight > chatWindow.current.clientHeight) {
            chatWindow.current.scrollTop = chatWindow.current.scrollHeight
        }
    }, [messages, chatWindow])

  return (
    <div 
      ref={chatWindow} 
      className="transition-all duration-300 bg-white p-4 min-h-[200px] max-h-[400px] overflow-y-auto"
      role="log"
      aria-live="polite"
      aria-relevant="additions"
      aria-label="Chat conversation"
    >
      <div className="flex flex-col gap-2">
        {/* Messages */}
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`flex flex-row items-start gap-2 ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
            {/* Assistant Icon */}
            {message.role === "assistant" && (
            <div id="assistant-icon" className="w-6 h-6 relative bg-gray-100 rounded-full overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="Assistant Icon" 
                width={16} 
                height={16} 
                className="absolute top-0 left-0 w-full h-full object-cover" 
              />
            </div>
          )}
          <p 
            key={`${message.role}-${index}`}
            className={`w-fit max-w-md ${message.role === "assistant" ? "bg-gray-100 p-2 rounded-r-md rounded-bl-md text-gray-600" : "p-2 rounded-l-md rounded-br-md bg-(--drata-blue) text-white"}`}
            >{message.content}
          </p>
          </div>
        ))}
      </div>
    </div>
  )
}