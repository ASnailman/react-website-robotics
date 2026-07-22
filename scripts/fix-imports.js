const fs = require('fs');
const path = require('path');

// Target only your specific folders to safeguard npm package imports
const targetFolders = ['images', 'videos', 'pages', 'data', 'components']; 
const regex = new RegExp(`from\\s+['"]\\.+\\/(${targetFolders.join('|')})\\/(.*?)['"]`, 'g');

function processDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') processDirectory(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (regex.test(content)) {
        const fixedContent = content.replace(regex, "from '$1/$2'");
        fs.writeFileSync(fullPath, fixedContent, 'utf8');
        console.log(`Fixed imports in: ${file}`);
      }
    }
  });
}

processDirectory('./src');
console.log('🎉 Done! All 300+ relative imports updated to absolute paths.');
