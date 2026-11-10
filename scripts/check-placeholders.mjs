// Runs after every build (see "postbuild" in package.json). Fails if template
// text is about to go live, warns if the sample projects are still present, and
// fails if any name listed in a git-ignored .confidential file (one per line)
// appears in the output. Keep real client and product names in that file so
// they can never slip onto the site.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const blocking = [/hello@example\.com/, /your-username/, /your-handle/, /Your city, Country/];
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\const blocking = [/hello@example\.com/, /your-username/, /your-handle/, /Your city, Country/];");
const confidential = existsSync(".confidential")
  ? readFileSync(".confidential", "utf8")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((name) => new RegExp(escape(name), "i"))
  : [];
const warnings = [/This is a sample project/];
const hits = [];
const warns = [];

if (!existsSync("dist")) {
  console.error("No dist/ folder. Run `npm run build` first.");
  process.exit(1);
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (path.endsWith(".html")) {
      const html = readFileSync(path, "utf8");
      for (const pattern of blocking) if (pattern.test(html)) hits.push(`${path}: "${pattern.source}"`);
      for (const pattern of confidential) if (pattern.test(html)) hits.push(`${path}: confidential name "${pattern.source}"`);
      for (const pattern of warnings) if (pattern.test(html)) warns.push(path);
    }
  }
}

walk("dist");
if (warns.length > 0) {
  console.warn(`Note: ${warns.length} sample project page(s) are still in the build:\n  ` + warns.join("\n  "));
}
if (hits.length > 0) {
  console.error("Placeholder or confidential text found in the build. Fix src/data/site.ts or the project files first:\n  " + hits.join("\n  "));
  process.exit(1);
}
console.log(`No placeholder text in the build.${confidential.length ? ` Checked ${confidential.length} confidential name(s).` : ""}`);
