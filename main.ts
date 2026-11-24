import { mkdirSync, writeFileSync } from "node:fs";

// One-line code review comment: approves the PR, carries quiet dread.
const comment =
  "Approved. The diff is clean, the tests are green, and I have made my peace with whatever this becomes in production.";

// The gate only accepts 1-140 non-blank UTF-8 characters on a single line.
function validateEntry(text: string): string {
  const line = text.replace(/\r?\n/g, " ").trim();
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
  return line;
}

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", validateEntry(text), "utf8");
}

writeEntry(comment);
