---
name: hn
description: Fetch and display Hacker News top stories as a table
disable-model-invocation: true
---

## HN Top Stories

Run from the project root:

```
bun run hn
```

Parse the output and display as a markdown table:

| # | Title |
|---|-------|

- Title column: the article's human-readable title (e.g. "Project Glasswing: Securing critical software for the AI era"), linked to the URL. Do NOT show the raw URL — show the title text.
- Keep it scannable — no extra commentary above or below the table
- Show all 20 results
