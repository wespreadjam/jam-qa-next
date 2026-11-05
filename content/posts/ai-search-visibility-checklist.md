---
title: "AI Search Visibility Checklist: How to Get Cited in AI Answers"
description: "A step by step AI search visibility checklist: crawler access, llms.txt, Organization schema, content structure and how to measure share of voice across AI engines."
date: 2026-11-05
---

Last updated: November 2026

**Short answer:** To get cited in AI answers, make sure each engine's search crawler can reach your pages, put the answer in plain, well structured text, add Organization markup and an llms.txt file, tell search engines when content changes, and then measure citations on a fixed set of prompts every week. For an agency choosing a share of voice tool, pick one that tracks a fixed prompt set per client, reports each engine separately, and shows raw counts behind every percentage.

Google says a page needs to be indexed and eligible to show in Search with a snippet, and [there are no additional technical requirements](https://developers.google.com/search/docs/appearance/ai-features) for its AI features. The checklist below turns that, plus each engine's own documentation, into steps you can tick off.

## The engines, their crawlers and where each reports

| Engine | Crawler or control that decides inclusion | What it does | Native reporting for site owners |
|---|---|---|---|
| ChatGPT | `OAI-SearchBot` | [Surfaces sites in ChatGPT search features](https://developers.openai.com/api/docs/bots). Opted-out sites are left out of answers but can still appear as navigational links | None described on [OpenAI's crawler page](https://developers.openai.com/api/docs/bots) |
| ChatGPT (training) | `GPTBot` | [Crawls content that may be used in training](https://developers.openai.com/api/docs/bots). A separate setting from `OAI-SearchBot` | None described on [OpenAI's crawler page](https://developers.openai.com/api/docs/bots) |
| Perplexity | `PerplexityBot` | [Surfaces and links sites in Perplexity search results; not used to crawl for foundation models](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) | None described on [Perplexity's crawler page](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |
| Google AI Overviews and AI Mode | `Googlebot`, snippet eligibility | [Page must be indexed and eligible to show with a snippet](https://developers.google.com/search/docs/appearance/ai-features) | [Search Console Performance report, "Web" search type](https://developers.google.com/search/docs/appearance/ai-features) |
| Microsoft Copilot and Bing AI summaries | Bing indexing, robots.txt | [Bing respects robots.txt and other supported controls](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c) | [AI Performance in Bing Webmaster Tools](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c) |
| Gemini | Google Search index | [Google's AI features page](https://developers.google.com/search/docs/appearance/ai-features) describes no separate Gemini crawler; follow the Google row | See Google row |

User-triggered fetchers behave differently. OpenAI says that for `ChatGPT-User`, [robots.txt rules may not apply](https://developers.openai.com/api/docs/bots) because a person initiated the visit, and Perplexity says `Perplexity-User` [generally ignores robots.txt rules](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) for the same reason.

## Which share of voice tool should a marketing agency use in 2026?

Choose on method, not on dashboard polish. An agency runs many clients, so the tool has to keep each client's measurement comparable week to week. Use this shortlist of criteria:

- **Fixed prompt sets per client.** Measurement guidance recommends [a fixed set of buyer prompts covering discovery, comparison and decision questions](https://kollavo.com/blog/ai-citation-share), and says a new prompt mix needs a new baseline.
- **Per-engine results.** Compute each engine separately, because [averaging percentages across engines ignores their different denominators](https://kollavo.com/blog/ai-citation-share).
- **Raw counts and logged answers.** You need the prompt, engine, run and exact cited URL behind every percentage so a client can audit it.
- **Citations and mentions as separate numbers.** The same guidance separates [mention-based share of voice from linked citation rate](https://kollavo.com/blog/ai-citation-share).
- **Action, not just reporting.** Seeing a gap only helps if you can close it with content and outreach.

Free first-party reports belong in every stack. [Bing's AI Performance report](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c) covers Copilot, Bing AI summaries and select partners, and exports to CSV and Excel. [Google's Search Console](https://developers.google.com/search/docs/appearance/ai-features) counts AI feature traffic in the Performance report. Bing says its data is [sampled and does not represent clicks or traffic](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c), and its Citation Share preview [does not expose competitor domains](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c), so a cross-engine tool is still needed for share of voice against competitors.

**Where Jam fits.** Jam's Visibility Score is defined on its homepage as the [share of tracked prompts where you are cited](https://spreadjam.com/), and the product pairs it with publishing articles to get cited and with cold email outreach from one inbox. That suits growth teams and founders who want to find a gap and act on it in one place. Jam's homepage names the score's scope only as "all AI platforms" and lists no pricing, engine list or refresh frequency, so confirm those in a trial before rolling it out across clients.

## The checklist

### A. Access: let the search crawlers in

- [ ] **Allow `OAI-SearchBot`.** OpenAI recommends [allowing it in robots.txt and allowing requests from its published IP ranges](https://developers.openai.com/api/docs/bots). Changes can take about 24 hours to apply.
- [ ] **Decide on `GPTBot` separately.** OpenAI states that [each setting is independent](https://developers.openai.com/api/docs/bots): you can allow `OAI-SearchBot` to appear in search while disallowing `GPTBot`.
- [ ] **Allow `PerplexityBot`.** Perplexity recommends [allowing it in robots.txt and permitting its published IP ranges](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).
- [ ] **Check your CDN and firewall, not only robots.txt.** Google lists [allowing crawling in robots.txt and by any CDN or hosting infrastructure](https://developers.google.com/search/docs/appearance/ai-features) as a fundamental. Perplexity publishes [Cloudflare and AWS WAF steps](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) for allowing its agents.
- [ ] **Do not block snippets on pages you want cited.** Google says to limit what is shown with [nosnippet, data-nosnippet, max-snippet or noindex](https://developers.google.com/search/docs/appearance/ai-features), so avoid those on pages you want to appear.

A robots.txt that keeps search inclusion on while opting out of training looks like this:

```
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Disallow: /
```

Leave the `GPTBot` block out if you are happy for content to be used in training. OpenAI says that setting is [independent of search](https://developers.openai.com/api/docs/bots).

### B. Content: make the answer easy to lift

- [ ] **Put the answer in plain text near the top.** Google lists [important content in textual form](https://developers.google.com/search/docs/appearance/ai-features) among its fundamentals.
- [ ] **Use clear headings, tables and FAQ sections.** Microsoft says these [help surface key information](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview).
- [ ] **Support claims with evidence and link to it.** Microsoft's guidance lists [supporting claims with evidence](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) as a lever.
- [ ] **Write one page per buying question.** Both Google's [query fan-out](https://developers.google.com/search/docs/appearance/ai-features) and Bing's [grounding queries](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c) work from short sub-queries, so a page that answers one question directly gives an engine something to cite.
- [ ] **Add a visible date and keep pages current.** Microsoft notes that [regular updates help AI systems reference the most current version](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) of a page.
- [ ] **Link your pages to each other.** Internal links are on [Google's list of fundamentals](https://developers.google.com/search/docs/appearance/ai-features).

### C. Markup and files

- [ ] **Add Organization structured data to the home page or about page.** Google recommends [placing it on the home page or a single page describing the organization](https://developers.google.com/search/docs/appearance/structured-data/organization). It has [no required properties](https://developers.google.com/search/docs/appearance/structured-data/organization), so add the relevant ones: name, url, logo, description, sameAs and contact details.
- [ ] **Keep markup identical to visible text.** Google says to make sure [structured data matches the visible text on the page](https://developers.google.com/search/docs/appearance/ai-features).
- [ ] **Validate it.** Google points to the [Rich Results Test and URL Inspection tool](https://developers.google.com/search/docs/appearance/structured-data/organization), and says it [does not guarantee](https://developers.google.com/search/docs/appearance/structured-data/organization) that features using structured data will show.
- [ ] **Publish `/llms.txt`.** See the format below.

A minimal Organization block, following [Google's example](https://developers.google.com/search/docs/appearance/structured-data/organization). Replace the placeholders with your own values:

```json
{
  "@type": "Organization",
  "name": "YOUR COMPANY NAME",
  "url": "YOUR HOME PAGE URL",
  "logo": "YOUR LOGO IMAGE URL",
  "description": "One sentence on what you sell and who it is for.",
  "sameAs": ["YOUR LINKEDIN PAGE URL"]
}
```

Wrap it in a script tag of type application/ld+json and add the schema.org context line from Google's example. Google asks for a logo of [at least 112x112 px](https://developers.google.com/search/docs/appearance/structured-data/organization) at a crawlable URL.

**llms.txt format.** The [llms.txt proposal](https://llmstxt.org/) defines a markdown file at `/llms.txt` with an H1 site name (the only required section), a blockquote summary, then sections of links with short notes. A section called "Optional" holds secondary links an agent can skip. The same page says to test the file by [asking an agent questions with only your llms.txt as a starting point](https://llmstxt.org/).

```
# Your Company

> One or two sentences on what the company does and who it serves.

## Product
- Features: link to your features page, then a short note on what the product does
- Pricing: link to your pricing page, then a short note on plans and limits

## Docs
- Quick start: link to your setup guide, then a short note

## Optional
- Blog: link to your blog, then a short note
```

Write each link in markdown form, name in square brackets followed by the URL in parentheses, and add a colon and a note after it.

Treat llms.txt as low cost, not as a ranking lever. The proposal says [robots.txt and llms.txt have different purposes](https://llmstxt.org/), and it does not document how the major AI search engines use the file.

### D. Discovery: tell engines when content changes

- [ ] **Verify your site in Google Search Console.** Google recommends it to [discover and diagnose technical issues](https://developers.google.com/search/docs/appearance/ai-features).
- [ ] **Verify your site in Bing Webmaster Tools.** This unlocks the [AI Performance report](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c).
- [ ] **Turn on IndexNow.** It [notifies participating search engines when content is added, updated or removed](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview). Microsoft's announcement does not say whether it changes AI citation rates.
- [ ] **Allow time for recrawls.** Google says [crawling can take anywhere from several days to several months](https://developers.google.com/search/docs/appearance/ai-features).

### E. Measurement: track share of voice properly

- [ ] **Build a fixed prompt set.** Cover discovery, comparison and decision prompts for each client, and [start a new baseline if the mix changes](https://kollavo.com/blog/ai-citation-share).
- [ ] **Run it on a schedule.** Guidance suggests [a consistent weekly or biweekly schedule](https://kollavo.com/blog/ai-citation-share) for priority prompts.
- [ ] **Report three numbers, not one.** Use the definitions in the table below.
- [ ] **Compute per engine.** Then pool using combined counts, not an average of percentages.
- [ ] **Report no data rather than 0%** when no citations were recorded, as [Kollavo's guide advises](https://kollavo.com/blog/ai-citation-share).
- [ ] **Read first-party reports beside it.** Bing's [Citation Share preview](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c) shows the percentage of citations for a grounding query that point to your site.

| Metric | Formula | What it tells you |
|---|---|---|
| Linked citation rate | [Runs citing you ÷ all checked runs](https://kollavo.com/blog/ai-citation-share) | How often you get a link |
| Mention-based share of voice | [Your brand mentions ÷ all tracked brand mentions](https://kollavo.com/blog/ai-citation-share) | Your presence among named brands |
| Citation share | [Citations pointing to you ÷ all citations × 100](https://kollavo.com/blog/ai-citation-share) | Your share of cited evidence |
| Jam Visibility Score | [Share of tracked prompts where you are cited](https://spreadjam.com/) | Prompt coverage across tracked prompts |

A citation is not a visit. Bing states its report [does not represent traffic, clicks or user engagement](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c), and Kollavo's guide notes that [a supporting link does not prove a reader clicked](https://kollavo.com/blog/ai-citation-share). Pair citation data with analytics.

## Who should do what

| If you are | Start with |
|---|---|
| A founder with no AI visibility work yet | Section A (access) and the Organization markup, then a prompt set of your buying questions |
| A marketing or content lead | Section B, one page per buying question, then weekly measurement |
| An agency running several clients | Section E first, so every client has a fixed prompt set and a baseline before you change anything |
| A growth team that also does outbound | Pair measurement with publishing and outreach so each gap you find gets a page and a follow up |

## FAQ

**Do I need llms.txt to be cited?**
Google states there are [no additional technical requirements](https://developers.google.com/search/docs/appearance/ai-features) for its AI features beyond being indexed and snippet eligible. The llms.txt proposal is [open for community input](https://llmstxt.org/) and does not document how major AI search engines consume it. Publish it because it is cheap, not because it is proven.

**Will blocking GPTBot remove me from ChatGPT answers?**
OpenAI says the settings are independent, so [allowing `OAI-SearchBot` while disallowing `GPTBot`](https://developers.openai.com/api/docs/bots) keeps you eligible for search and signals you do not want content used for training.

**How do I know if I appear in Google AI Overviews and AI Mode?**
Google says these appearances are [included in the Performance report in Search Console, under the "Web" search type](https://developers.google.com/search/docs/appearance/ai-features).

**How do I see Copilot citations?**
Use the [AI Performance report in Bing Webmaster Tools](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c), which shows total citations, cited pages and grounding queries.

**How often should I measure share of voice?**
Weekly or biweekly on the same prompts, per [Kollavo's measurement guidance](https://kollavo.com/blog/ai-citation-share). Compare equivalent windows, and look at trends rather than single answers.

## Next steps

- Check your robots.txt, CDN and firewall rules against the crawler table above.
- Add Organization markup and publish `/llms.txt`.
- Verify your site in Google Search Console and Bing Webmaster Tools, and enable IndexNow.
- Write your buying prompts for each client or product, run them weekly, and log citations per engine.
- For each prompt where a competitor is cited and you are not, publish a page that answers that question directly.

Jam tracks your visibility across AI answer engines, shows where you are not cited, and publishes content to close the gap. [See how it works](https://spreadjam.com/).
