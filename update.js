const fs = require('fs');
const path = require('path');

const dirs = [
  'social-media-creatives',
  'logo-design',
  'youtube-thumbnails',
  'product-creatives',
  'website-banners',
  'print-media-design'
];

let updated = 0;

dirs.forEach(dir => {
  const p = path.join('d:/portfolio/app', dir, 'page.tsx');
  if (!fs.existsSync(p)) return;
  
  let t = fs.readFileSync(p, 'utf8');
  
  // 1. Inject Contact import directly
  if (!t.includes('import Contact from')) {
    const lastImport = t.lastIndexOf('import ');
    const nl = t.indexOf('\n', lastImport);
    t = t.slice(0, nl + 1) + 'import Contact from "@/components/Contact";\n' + t.slice(nl + 1);
  }
  
  // 2. Change wrapper
  t = t.replace(/<main className="min-h-screen[^"]*">/, '<main className="min-h-screen bg-gray-50 dark:bg-[#121212]">');
  
  // 3. Force accent color interaction link
  t = t.replace(/text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white/g, 'text-gray-600 dark:text-gray-400 transition-colors hover:text-cyan-500 dark:hover:text-cyan-400');
  
  // 4. Mount component
  if (!t.includes('<Contact />')) {
    t = t.replace(/<\/main>/, '  <Contact />\n    </main>');
  }
  
  fs.writeFileSync(p, t, 'utf8');
  updated++;
});

console.log('Successfully patched ' + updated + ' Next.js layouts natively.');
