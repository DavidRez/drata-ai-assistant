import { Assistant } from "@/components/assistant/Assistant"
import { assistantConfig } from "@/constants/data"

export default function HomePage() {
  return (
    <main className="max-w-5xl mr-auto ml-auto px-6 py-24">
      <h1 className="text-4xl mb-12 text-center">
      <span className="text-gray-900">Continuous Trust,</span>
      <br />
      <span className="text-(--cta-blue)">Powered by AI.</span>
      </h1>

      <Assistant config={assistantConfig} />
    </main>
  )
}
