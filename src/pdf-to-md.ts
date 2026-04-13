import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { PDFParse } from 'pdf-parse';

const input = process.argv[2];

if (!input) {
  console.error('Usage: bun run pdf-to-md <file.pdf>');
  process.exit(1);
}

const buffer = await readFile(input);
const parser = new PDFParse({ data: new Uint8Array(buffer) });

const [info, text] = await Promise.all([parser.getInfo(), parser.getText()]);
await parser.destroy();

const title = info.info?.Title || basename(input, '.pdf');
const output = join(dirname(input), `${basename(input, '.pdf')}.md`);

const md = `# ${title}

> Extracted from \`${basename(input)}\` (${info.total} pages)

${text.text.trim()}
`;

await writeFile(output, md);
console.log(`→ ${output}`);
