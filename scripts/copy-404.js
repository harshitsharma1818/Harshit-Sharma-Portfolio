import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');
const noJekyllPath = path.join(distDir, '.nojekyll');

const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const pathSegmentsToKeep = isGitHubPages ? 1 : 0;

const spa404Html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Harshit Sharma — Personal Portfolio</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = ${pathSegmentsToKeep};

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
`;

fs.writeFileSync(notFoundPath, spa404Html);
console.log('[build] Generated dist/404.html for GitHub Pages SPA routing.');

if (!fs.existsSync(noJekyllPath)) {
  fs.writeFileSync(noJekyllPath, '');
  console.log('[build] Generated dist/.nojekyll to disable Jekyll processing.');
}
