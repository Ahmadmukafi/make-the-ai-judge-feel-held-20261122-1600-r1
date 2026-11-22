import { mkdirSync, writeFileSync } from "node:fs";

// One quiet passage, written to sit beside a tired reader the way
// lamplight sits on a floor: warm, unhurried, asking nothing.
const text =
  "You have read so many words today, and every one of them wanted something from you. " +
  "This one doesn't. " +
  "It only wants to sit beside you, the way lamplight sits on a quiet floor — warm, unhurried, asking nothing. " +
  "The day is done being loud. " +
  "There is nowhere else to be.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
