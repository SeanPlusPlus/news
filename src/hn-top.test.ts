import { describe, expect, test } from 'bun:test';

describe('hn-top', () => {
  test('script outputs top stories', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/hn-top.ts'], {
      stdout: 'pipe',
    });
    const output = await new Response(proc.stdout).text();
    expect(output).toContain('Hacker News Top');
    expect(output).toContain('pts');
  });
});
