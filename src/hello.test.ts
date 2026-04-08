import { describe, expect, test } from 'bun:test';

describe('hello', () => {
  test('script runs without error', async () => {
    const proc = Bun.spawn(['bun', 'run', 'src/hello.ts'], {
      stdout: 'pipe',
    });
    const output = await new Response(proc.stdout).text();
    expect(output).toContain('Hello, News! Today is');
  });
});
