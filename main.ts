// Cat Reviews Its Human — make.fun entry
// Writes exactly one line: a one-star review by a house cat about its human.
// Deterministic: the same line every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. He refills my bowl, then sits in MY sunny spot and calls it his chair. I have filed a formal complaint with the dog.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
