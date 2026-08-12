const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'config', 'birthday.config.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Extract all memory items
const itemRegex = /\{\s*"id":\s*"([^"]+)",\s*"url":\s*"([^"]+)",\s*"caption":\s*"([^"]+)",\s*"date":\s*"([^"]+)",\s*"tag":\s*"([^"]+)"\s*\}/g;

const items = [];
let match;
while ((match = itemRegex.exec(content)) !== null) {
  items.push({
    id: match[1],
    url: match[2],
    caption: match[3],
    date: match[4],
    tag: match[5],
    raw: match[0],
  });
}

console.log('Extracted', items.length, 'items');

// Filter out avatar.png
const before = items.length;
const filtered = items.filter(m => !m.url.includes('avatar.png'));
console.log('Removed', before - filtered.length, 'avatar.png entries');
console.log('Remaining photos:', filtered.length);

// Collect original positions of ALL items
const origRaws = [];
const scanRegex = /\{\s*"id":\s*"([^"]+)",\s*"url":\s*"([^"]+)",\s*"caption":\s*"([^"]+)",\s*"date":\s*"([^"]+)",\s*"tag":\s*"([^"]+)"\s*\}/g;
let scanMatch;
while ((scanMatch = scanRegex.exec(content)) !== null) {
  origRaws.push({ start: scanMatch.index, end: scanMatch.index + scanMatch[0].length, url: scanMatch[2] });
}

// Remove avatar.png item blocks from content entirely
// Process in reverse to preserve indices
let newContent = content;
for (let i = origRaws.length - 1; i >= 0; i--) {
  if (origRaws[i].url.includes('avatar.png')) {
    // Find the surrounding comma and whitespace to cleanly remove the entry
    const start = origRaws[i].start;
    const end = origRaws[i].end;
    
    // Remove trailing comma if present
    let removeStart = start;
    let removeEnd = end;
    
    // Check if there's a leading comma+newline before this item
    const before = newContent.substring(Math.max(0, start - 5), start);
    const after = newContent.substring(end, end + 5);
    
    if (after.match(/^\s*,/)) {
      // trailing comma after item
      removeEnd = end + newContent.substring(end).match(/^\s*,/)[0].length;
    } else if (before.match(/,\s*$/)) {
      // leading comma before item
      const leadingComma = newContent.substring(0, start).match(/,\s*$/);
      removeStart = start - leadingComma[0].length;
    }
    
    newContent = newContent.substring(0, removeStart) + newContent.substring(removeEnd);
    console.log('Removed avatar.png at index', i);
  }
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Done!');

// Verify
const verify = fs.readFileSync(filePath, 'utf8');
const hasAvatar = verify.includes('avatar.png');
console.log('avatar.png still in gallery config?', hasAvatar);
const firstUrl = verify.match(/"url":\s*"([^"]+)"/);
console.log('First photo URL:', firstUrl ? firstUrl[1] : 'NOT FOUND');
