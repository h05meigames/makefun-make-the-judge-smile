import { mkdirSync, writeFileSync } from "node:fs";

// One original line about a small good thing that happened today: a
// warung seller's quiet kindness, an extra krupuk and a wink, that kept
// the morning smiling long after the moment passed.
const line =
  "The warung uncle slipped an extra krupuk into my bag and winked, 'for the road' — I was still smiling two streets later.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
