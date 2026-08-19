import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const base = "https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/fonts/webfonts";
const fonts = [
  ["Vazirmatn-Regular.woff2", `${base}/Vazirmatn-Regular.woff2`],
  ["Vazirmatn-Bold.woff2", `${base}/Vazirmatn-Bold.woff2`]
];

const target = join(process.cwd(), "public", "fonts");
await mkdir(target, { recursive: true });

for (const [name, url] of fonts) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download ${name}: HTTP ${response.status}`);
  await writeFile(join(target, name), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${name}`);
}