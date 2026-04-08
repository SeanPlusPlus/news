const HN_API = 'https://hacker-news.firebaseio.com/v0';
const TOP_N = 20;

interface HNItem {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
  time: number;
  descendants?: number;
}

const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json() as Promise<T>;
};

const fetchTopStories = async (n: number): Promise<HNItem[]> => {
  const ids = await fetchJson<number[]>(`${HN_API}/topstories.json`);
  const items = await Promise.all(
    ids.slice(0, n).map((id) => fetchJson<HNItem>(`${HN_API}/item/${id}.json`)),
  );
  return items;
};

const formatStory = (story: HNItem, i: number): string => {
  const comments = story.descendants ?? 0;
  const hnLink = `https://news.ycombinator.com/item?id=${story.id}`;
  const url = story.url ?? hnLink;
  return [
    `${i + 1}. ${story.title}`,
    `   ${story.score} pts | ${story.by} | ${comments} comments`,
    `   ${url}`,
  ].join('\n');
};

const stories = await fetchTopStories(TOP_N);
console.log(`\n🔶 Hacker News Top ${TOP_N}\n`);
console.log(stories.map(formatStory).join('\n\n'));
