const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const postsDir = path.join(rootDir, "posts");
const manifestPath = path.join(rootDir, "posts-manifest.js");

const excludedDirs = new Set(["_assets", "Templates", "private"]);

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function walkMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name)) return [];
      return walkMarkdownFiles(fullPath);
    }

    if (!entry.isFile() || !entry.name.endsWith(".md")) return [];
    return [fullPath];
  });
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const frontmatter = { tags: [] };

  if (!match) return frontmatter;

  let activeKey = null;

  match[1].split(/\r?\n/).forEach((line) => {
    const listItem = line.match(/^\s*-\s*(.+?)\s*$/);

    if (listItem && activeKey === "tags") {
      frontmatter.tags.push(stripQuotes(listItem[1].trim()));
      return;
    }

    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyValue) return;

    activeKey = keyValue[1];
    const value = stripQuotes(keyValue[2].trim());

    if (activeKey === "tags") {
      frontmatter.tags = value ? [value] : [];
      return;
    }

    frontmatter[activeKey] = value;
  });

  return frontmatter;
}

function stripQuotes(value) {
  return value.replace(/^["']|["']$/g, "");
}

function firstObsidianImage(markdown) {
  const match = markdown.match(/!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/);
  return match ? match[1].trim() : "";
}

function readExistingViews() {
  if (!fs.existsSync(manifestPath)) return new Map();

  const source = fs.readFileSync(manifestPath, "utf8");
  const views = new Map();
  const itemPattern = /path:\s*"([^"]+)"[\s\S]*?views:\s*(\d+)/g;
  let match;

  while ((match = itemPattern.exec(source)) !== null) {
    views.set(match[1], Number(match[2]));
  }

  return views;
}

function buildPost(filePath, existingViews) {
  const markdown = fs.readFileSync(filePath, "utf8");
  const relativePath = toPosix(path.relative(rootDir, filePath));
  const pathParts = relativePath.split("/");
  const filename = path.basename(filePath, ".md");
  const category = pathParts.slice(1, -1).join(" / ");
  const frontmatter = parseFrontmatter(markdown);
  const imageName = firstObsidianImage(markdown);
  const image = imageName ? `posts/_assets/${filename}/${imageName}` : "";

  return {
    path: relativePath,
    category,
    display: frontmatter.display || filename,
    description: frontmatter.description || "",
    recent: frontmatter.recent || frontmatter.create || "",
    views: existingViews.get(relativePath) || 0,
    tags: frontmatter.tags || [],
    image
  };
}

function formatManifest(posts) {
  return `window.BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n`;
}

const existingViews = readExistingViews();
const posts = walkMarkdownFiles(postsDir)
  .map((filePath) => buildPost(filePath, existingViews))
  .sort((a, b) => {
    const dateCompare = String(b.recent || "").localeCompare(String(a.recent || ""));
    return dateCompare || a.path.localeCompare(b.path);
  });

fs.writeFileSync(manifestPath, formatManifest(posts), "utf8");
console.log(`Generated ${toPosix(path.relative(rootDir, manifestPath))} (${posts.length} posts)`);
