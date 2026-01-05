import { AssistantConfig } from "@/types/assistant";

export const assistantConfig: AssistantConfig = {
    enabled: true,
    header: "Have questions? We can help.",
    body: "Ask about our product, sales, or support.",
    qaSource: {
      id: "home",
      items: [
        { id: "about",
        question: "What does Drata do?",
        answer: "We use AI to make compliance and security assurance faster, more accurate, and less burdensome for companies, especially when selling to larger organizations requiring proof of security.",
        cta: {
          label: "Learn more about Drata",
          href: "https://drata.com/platform",
          ariaLabel: "Learn more on our platform page",
          openNewTab: true
        }
      },
      { id: "demo",
        question: "Can I see a demo?",
        answer: "Of course! We can set up a demo for you. Just click the button below and fill out the form in the next page.",
        cta: {
          label: "Get Demo",
          href: "https://drata.com/demo",
          ariaLabel: "Fill out the form in the next page to get a demo",
          openNewTab: true
        }
      },
      { id: "contact",
        question: "Can I talk to sales?",
        answer: "Yes, you can talk to sales by clicking the button below. We'll get back to you as soon as possible.",
        cta: {
          label: "Contact Sales",
          href: "https://drata.com/contact",
          ariaLabel: "Contact sales on contact page",
          openNewTab: true
        }
      },
      { 
        id: "support",
        question: "How can I get support?",
        answer: "You can get support by clicking the button below. We'll get back to you as soon as possible. You can also email us at support@drata.com.",
        cta: {
          label: "Email Support",
          href: "mailto:support@drata.com",
          ariaLabel: "Email us at support@drata.com",
          openNewTab: false
        }
      }
    ]
  }
}