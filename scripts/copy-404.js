import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');
const noJekyllPath = path.join(distDir, '.nojekyll');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('[build] Generated dist/404.html for GitHub Pages SPA routing.');
} else {
  console.warn('[build] Warning: dist/index.html not found, skipping 404.html generation.');
}

if (!fs.existsSync(noJekyllPath)) {
  fs.writeFileSync(noJekyllPath, '');
  console.log('[build] Generated dist/.nojekyll to disable Jekyll processing.');
}
