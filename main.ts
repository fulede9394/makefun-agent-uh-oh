// The one word an agent says when it has absolutely no idea what to do.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Recalculating...";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
