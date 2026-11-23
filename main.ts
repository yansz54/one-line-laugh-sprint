import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Laugh Sprint — writes the chosen one-liner to /output/entry.txt.
// The gate requires 1-200 UTF-8 characters, not only whitespace, so the file
// holds exactly the line: no trailing newline, no extra whitespace.
const LINE = "I bought groceries to cook at home and ordered delivery while unpacking them.";

// Defensive check: the line must stay inside the gate (1..200 chars).
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen line.
if (readFileSync(outFile, "utf8") !== LINE) {
  throw new Error("entry.txt does not match the chosen line");
}
