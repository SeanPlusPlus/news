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

const formatRow = (story: HNItem, i: number): string => {
  const hnLink = `https://news.ycombinator.com/item?id=${story.id}`;
  const url = story.url ?? hnLink;
  const title = story.title.replaceAll('|', '\\|');
  return `| ${i + 1} | [${title}](${url}) |`;
};

const stories = await fetchTopStories(TOP_N);
console.log('| # | Title |');
console.log('|---|-------|');
for (let i = 0; i < stories.length; i++) {
  console.log(formatRow(stories[i]!, i));
}
