import * as fs from "node:fs";

// One-liner entry for make.fun "One-Liner Marathon".
// A single comedy joke, one line, 1-280 chars, UTF-8, no trailing newline.
const ENTRY =
  "My therapist quit after our third session — apparently 'have you tried turning your feelings off and on again' isn't a valid coping strategy.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-280
// characters, a single line, not only whitespace. Fail loudly here
// instead of submitting an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 280 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`Entry violates the gate: ${ENTRY.length} chars`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
