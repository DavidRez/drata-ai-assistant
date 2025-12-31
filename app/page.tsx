import { Assistant } from "@/components/assistant/Assistant"
import { assistantConfig } from "@/constants/data"

export default function HomePage() {
  return (
    <main className="max-w-5xl mr-auto ml-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">
        Homepage Content
      </h1>

      <Assistant config={assistantConfig} />
    </main>
  )
}
