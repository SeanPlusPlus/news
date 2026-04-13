import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

GlobalWorkerOptions.workerSrc = resolve(
  import.meta.dir,
  '../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
);

const input = process.argv[2];

if (!input) {
  console.error('Usage: bun run pdf-to-md <file.pdf>');
  process.exit(1);
}

const buffer = await readFile(input);
const doc = await getDocument({
  data: new Uint8Array(buffer),
  useWorkerFetch: false,
  isEvalSupported: false,
  useSystemFonts: true,
}).promise;

const meta = await doc.getMetadata();
const title = meta.info?.Title || basename(input, '.pdf');
const pages: string[] = [];

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const content = await page.getTextContent();
  const text = content.items
    .filter((item: unknown): item is { str: string } => {
      return typeof item === 'object' && item !== null && 'str' in item;
    })
    .map((item) => item.str)
    .join(' ');
  pages.push(text);
}

await doc.destroy();

const output = join(dirname(input), `${basename(input, '.pdf')}.md`);

const md = `# ${title}

> Extracted from \`${basename(input)}\` (${doc.numPages} pages)

${pages.join('\n\n')}
`;

await writeFile(output, md);
console.log(`→ ${output}`);
