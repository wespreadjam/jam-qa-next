---
title: Compare AI visibility platforms
description: How AI visibility platforms differ on engines covered, prompt tracking and pricing.
date: 2026-10-20
---

AI visibility platforms track how often answer engines like ChatGPT, Perplexity and Gemini name a brand.

## What to compare

- Which engines each platform scans
- How many prompts a plan includes
- How often scans run
- Whether the platform helps you fix gaps, not only measure them

## Pricing

Most platforms price by tracked prompts. Entry plans start around $29 a month and enterprise plans run into the thousands.

## Visible in ChatGPT but not Perplexity?

If your content appears in ChatGPT answers but not Perplexity answers, the most common cause is that PerplexityBot is being blocked before it can crawl your pages. Perplexity runs two distinct crawlers with different user agents, and many WAF rules or robots.txt files block them without the site owner realising.

### How Perplexity crawls the web

Perplexity uses two user agents ([source: Perplexity bot docs](https://docs.perplexity.ai/guides/bots)):

| User agent | Purpose |
|---|---|
| `PerplexityBot` | Background indexing crawler |
| `Perplexity-User` | Real-time retrieval during a user query |

Both must be allowed for your content to appear in Perplexity answers. Blocking either one at the WAF or CDN layer is enough to exclude your site entirely.

### Diagnosis checklist

Work through these steps before assuming a content or authority problem:

1. **Check robots.txt** — confirm neither `PerplexityBot` nor `Perplexity-User` is disallowed. A blanket `Disallow: /` under `User-agent: *` will block both unless you add explicit `Allow` rules for each. See [Perplexity's robots.txt guidance](https://docs.perplexity.ai/guides/bots).
2. **Check your WAF and CDN** — firewall rules that block unknown or high-frequency crawlers often catch `PerplexityBot`. Add both user agent strings to your allowlist. Perplexity's bot docs include the IP ranges to allowlist if your WAF filters by IP.
3. **Check server logs** — search for `PerplexityBot` in access logs over the past 30 days. Zero hits means the crawler is not reaching your origin, which points to a WAF or DNS-level block rather than a content problem.
4. **Check for a content gap** — if the crawler is reaching your site but you still do not appear, the issue is more likely topical authority or citation structure. [GoFish Digital's guide on ranking in Google but not appearing in AI answers](https://gofishdigital.com/blog/why-you-rank-in-google-but-dont-appear-in-ai-answers) covers this pattern in detail.
5. **Compare what Perplexity cites** — run the query in Perplexity and look at the sources panel. If competitors' pages appear, note what those pages do differently: structured data, direct answers in the first paragraph, or explicit definitions that Perplexity can lift verbatim.

### Why this differs from ChatGPT

ChatGPT's training data is a static snapshot, so your content only needs to have been crawlable at training time. Perplexity retrieves pages live at query time using `Perplexity-User`, which means access controls, rate limits and WAF rules affect every single answer. A site that was open during OpenAI's last crawl but later tightened its WAF will still appear in ChatGPT and be invisible in Perplexity. See [how Perplexity's retrieval works](https://loudface.co/blog/how-does-perplexity-work) for a plain-language explanation of the difference.

Once access is confirmed, use an AI visibility platform to track mention rates across both engines so you can see whether a fix has worked. Jam's [AEO product](/products/aeo) monitors ChatGPT, Perplexity, Gemini and other engines from a single dashboard, which makes cross-platform diagnosis faster than running manual spot checks.
