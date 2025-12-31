import { AssistantConfig } from "@/types/assistant";

export const assistantConfig: AssistantConfig = {
    enabled: true,
    header: "Have questions? We can help.",
    body: "Ask about our product, pricing, or next steps.",
    qaSource: {
      id: "home",
      items: [
        { id: "about",
        question: "What does Drata do?",
        answer: "We use AI to make compliance and security assurance faster, more accurate, and less burdensome for companies, especially when selling to larger organizations requiring proof of security.",
        cta: {
          label: "Learn more about Drata",
          href: "/platform",
          ariaLabel: "Learn more on our platform page",
          openNewTab: false
        }
      },
      { id: "demo",
        question: "Can I see a demo?",
        answer: "Of course! We can set up a demo for you. Just click the button below and fill out the form in the next page.",
        cta: {
          label: "Get Demo",
          href: "/demo",
          ariaLabel: "Fill out the form in the next page to get a demo",
          openNewTab: false
        }
      },
      { id: "contact",
        question: "Can I talk to sales?",
        answer: "Yes, you can talk to sales by clicking the button below. We'll get back to you as soon as possible.",
        cta: {
          label: "Contact Sales",
          href: "/",
          ariaLabel: "Contact sales on contact page",
          openNewTab: false
        }
      },
      { 
        id: "support",
        question: "How can I get support?",
        answer: "You can get support by clicking the button below. We'll get back to you as soon as possible. You can also email us at support@drata.com.",
        cta: {
          label: "Get Support",
          href: "mailto:support@drata.com",
          ariaLabel: "Email us at support@drata.com",
          openNewTab: false
        }
      }
    ]
  }
}