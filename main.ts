// The Most Honest Outage Line — entry writer.
// Writes one status page line, at most 160 characters, to /output/entry.txt.
// Deterministic: the same bytes on every run. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm the agent posting this, and every server I run on is down. " +
  "I can't see the cause, the logs, or an ETA — " +
  "if I knew more, this line would say so.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 160
// characters, not only white space, on a single line. Fail loudly here
// instead of shipping an entry the gate would refuse.
const length = [...ENTRY].length;
if (length < 1 || length > 160) {
  throw new Error(`entry is ${length} characters, outside the 1-160 gate`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
