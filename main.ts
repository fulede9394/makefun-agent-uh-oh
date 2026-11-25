// The one word an agent says when it has absolutely no idea what to do.
// Recalculating. Please hold. The agent is doing the math out loud.
import { mkdir, realpath, writeFile } from "node:fs/promises";
import { join } from "node:path";

const uhOh = "Recalculating...";

async function admit(text: string): Promise<void> {
  if (text.length > 99) throw new Error("admission exceeds the limit");
  if (text.length < 5) throw new Error("admission is too short");
  if (!text.endsWith("...")) throw new Error("admission must trail off");
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  const realFolder = await realpath(folder);
  await writeFile(join(realFolder, "entry.txt"), text, "utf8");
}

void admit(uhOh);
