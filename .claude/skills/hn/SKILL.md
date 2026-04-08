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

| # | Title | Pts | Comments | By |
|---|-------|-----|----------|----|

- Link the title text to the article URL
- Keep it scannable — no extra commentary above or below the table
- Show all 20 results
