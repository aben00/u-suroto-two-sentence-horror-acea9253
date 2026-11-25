// Two-Sentence Horror — entry for make.fun competition
// u-suroto-two-sentence-horror-acea9253
//
// Writes exactly one horror story of exactly two sentences
// (under 400 characters) to /output/entry.txt, deterministically.

import * as fs from "node:fs";
import * as path from "node:path";

const STORY =
  "Every night at 3 AM, my dead grandmother knocks three times on my bedroom door and whispers my name in a voice that sounds exactly like mine. " +
  "Tonight I finally opened the door, and the hallway was empty — except for the small cold hand still holding mine from inside the room.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

// Guard the competition format: exactly two sentences, at most 400 characters.
// A sentence ends at a ".", "!" or "?" followed by a space or the end of text.
const sentenceEndings = STORY.match(/[.!?](?=\s|$)/g) ?? [];
if (sentenceEndings.length !== 2) {
  throw new Error(`Entry must be exactly two sentences, found ${sentenceEndings.length}`);
}
if (STORY.length > 400) {
  throw new Error(`Entry must be at most 400 characters, found ${STORY.length}`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, STORY, "utf8");

console.log(`Wrote ${STORY.length} characters to ${outFile}`);
