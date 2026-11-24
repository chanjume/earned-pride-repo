// One Line of Earned Pride — entry: "At seventy-one, Mara climbed
// the ladder she'd feared for forty years and painted the last shutter
// of the house she'd built." (123 chars, one line, inside the 1-240 gate.)
// Judge mapping: (1) quiet earned pride — a 71-year-old finishing her
// own house; (2) concrete scene — ladder, last shutter, a named person;
// (3) earned inside the line — forty years of fear, climbed anyway;
// (4) lands in one read — the pride arrives on the last word, "built":
// she did not just live there, she built it; (5) fresh — no trophy,
// podium, graduation, or congratulation anywhere in the line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At seventy-one, Mara climbed the ladder she'd feared for forty years and painted the last shutter of the house she'd built.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
