import { AssistantMessages } from "@/types/assistant"

type Props = {
  messages: AssistantMessages
  questions: React.ReactNode
}

export function AssistantChatWindow({ messages, questions }: Props) {

  return (
    <div 
      className="bg-white p-4 min-h-[200px] mb-4 gap-2 flex flex-col text-sm text-gray-500 overflow-y-scroll"
    >
      <div className="flex flex-col gap-2">
        {messages.map((message, index) => (
          <p 
            key={`${message.role}-${index}`}
            className={`w-fit max-w-md ${message.role === "assistant" ? "bg-gray-100 p-2 rounded-r-md rounded-bl-md text-gray-600" : "self-end p-2 rounded-l-md rounded-br-md bg-black text-white"}`}
            >{message.content}
          </p>
        ))}
        {questions && questions}
      </div>
    </div>
  )
}