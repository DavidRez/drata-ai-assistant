# Drata AI Assistant Documentation

## 1. Architecture / SEO / Accessibility

### Static Site Generation (SSG) with Revalidation

- Use SSG with revalidation for the assistant content so Q/A and CTA text are present in the initial HTML
  - Crawlers can index content
  - No layout shift for users
  - Faster TTFB

### Meta Data

- Use `metadata` for static or `generateMetadata` for dynamic
- Marketing can control CMS fields for meta info that map directly into the metadata fields in the frontend

### Accessibility

- Semantic HTML
- Heading hierarchy
- ARIA roles/labels

## 2. Caching

### Build

#### Next.js SSG with ISR

- **SSG** - ideal since the data (q/a) won't be updated often
  - Use `fetch` and set revalidation
- **ISR** - target and update specific pages without a full rebuild

### Vercel

- **Vercel CDN Cache** - auto enabled when using App Router
  - Used for any static data or assets
- **Vercel auto reroutes** requests to closest point of presence
- **Vercel edge functions** - server side logic to network
  - Great to reduce costs

### Server-side Data Caching

- Cache CMS and knowledge source response using SSG. This is ideal since the data (q/a) won't be updated often
  - Use `fetch` and set revalidation
- **Redis**
  - Allows for sharing of same cache across multiple instances like in AWS

### AI Response Caching

- Reduce repeated LLM calls with cached responses
- **Semantic caching** – return cached output if query is sufficiently similar
  - Example: Redis or vector database
- Options for caching user queries:
  1. **Hashing (exact-match caching)** – normalize query, hash it, store response. Fast, cheap, exact-match only.
  2. **Embeddings / vector caching (similarity-match caching)** – convert query to vector embedding, store in Redis/vector DB, compare new query to cached embeddings, return cached response if similarity above threshold.

## 3. Marketing / Design Collaboration

- The editor can add in the assistant component wherever they want on the page and toggle the component on/off once added to the page.
- By having a reference to a source of question/answers, marketing can easily update q/a without having to change the component. As a result, no redeployment is necessary.

## 4. Productionize

### Analytics

#### Tracking

- Google Analytics custom events or custom JS events
- Assistant interactions feed into a conversion funnel to track engagement and follow-up actions like demo requests or sales inquiries.

#### Scaling to Multiple Real Sources

- Each knowledge source is added to a central system where the content is processed and stored. When a user asks a question, the assistant searches this content and pulls the most relevant information to generate a response.
- Example pipeline:
  - Website content pulls from CMS API
  - Sales documentation pulls from HighSpot API
  - Call transcripts pulls from Gong API
- This allows the assistant to pull from multiple sources without requiring marketing or engineering to manually integrate each source for every update

### Privacy

- **Data minimization** - collect only essential data
- **End to end encryption**
- **Data retention policies** - auto deleting or anonymizing data after a period of time

### Rate Limiting

- Per-IP / per-session limits
- Behavioral - like rapid 403/404 responses from scrapers
- Use middleware or API gateway
  - **API gateway** - better for higher traffic
    - Vercel Pro
    - AWS API Gateway
  - **Middleware**
    - Redis - intercepts requests at the edge
- **Token bucket algorithm** - set number of requests in time window
- Prevent abuse and cost spikes

## 5. AI / LLM Integration

### RAG (Retrieval Augmented Generation)

1. User submits question
2. Query is embedded
3. Relevant documents are retrieved
4. Retrieved content is injected into prompt
5. LLM generates response
6. Response optionally cached semantically

### Scaling

- **Streaming responses**
- **Token limits**
- **Async content updates**
  - New or updated content is added to the assistant's knowledge base asynchronously, so updates don't block the main app and the assistant can scale efficiently
