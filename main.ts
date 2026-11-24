// Luis's entry for make.fun news-image-20261123 (Node 22, standard library only).
// The image sums up Monday 23 November 2026 in one front page: 44 stories,
// drawn for this competition. Top stories: Nvidia brings back Huang, Ukraine
// sinks a Russian corvette, US sanctions Iran's shadow banks. This program
// copies the repository's entry.png to the grader's output directory,
// creating it first if needed.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), target);
// Verify the copy landed, so a silent failure cannot pass as an entry.
const written = statSync(target);
if (written.size === 0) throw new Error('entry.png was copied empty');
console.log(`wrote ${target} (${written.size} bytes)`);
