import { mkdirSync, writeFileSync } from "node:fs";

// One original line about a small good thing that happened today: a
// warung seller's quiet kindness, an extra krupuk and a wink, that kept
// the morning smiling long after the moment passed.
const line =
  "The warung uncle slipped an extra krupuk into my bag and winked, 'for the road' — I was still smiling two streets later.";

// The bounty requires a 1–200 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters like the em dash
// count once, and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
