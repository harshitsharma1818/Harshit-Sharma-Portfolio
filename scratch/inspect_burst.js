import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000/harshit-sharma-portfolio';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`);
  await new Promise(r => setTimeout(r, 600));

  // Find all links
  const links = await page.$$eval('nav a', els => els.map(e => e.getAttribute('href')));
  console.log('Nav links:', links);

  // Click About
  const aboutLink = await page.$('nav a[href*="/about"]');
  console.log('About link found:', !!aboutLink);
  await aboutLink.click();

  // Check DOM right after click
  for (const ms of [50, 150, 300, 600, 1000]) {
    await new Promise(r => setTimeout(r, 50));
    const info = await page.evaluate(() => {
      const overlays = Array.from(document.querySelectorAll('.fixed.inset-0'));
      return overlays.map(o => ({
        classes: o.className,
        zIndex: window.getComputedStyle(o).zIndex,
        childCount: o.childElementCount,
        hasSingularity: !!o.querySelector('.w-3\\.5.h-3\\.5'),
        html: o.outerHTML.slice(0, 200)
      }));
    });
    console.log(`At ~${ms}ms: overlays count = ${info.length}`, info);
  }

  await browser.close();
})();
