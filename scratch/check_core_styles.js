import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000/harshit-sharma-portfolio';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`);
  await new Promise(r => setTimeout(r, 500));

  const link = await page.$('nav a[href*="/about"]');
  await link.click();

  await new Promise(r => setTimeout(r, 180));
  const coreStyles = await page.evaluate(() => {
    const core = document.querySelector('.w-3\\.5.h-3\\.5');
    if (!core) return 'No core element found';
    const parent = core.parentElement;
    return {
      core: {
        width: core.offsetWidth,
        height: core.offsetHeight,
        computedDisplay: window.getComputedStyle(core).display,
        computedBg: window.getComputedStyle(core).backgroundColor,
        computedBoxShadow: window.getComputedStyle(core).boxShadow,
      },
      parent: {
        computedOpacity: window.getComputedStyle(parent).opacity,
        computedTransform: window.getComputedStyle(parent).transform,
        computedTop: window.getComputedStyle(parent).top,
        computedLeft: window.getComputedStyle(parent).left,
        rect: parent.getBoundingClientRect()
      }
    };
  });
  console.log('Core styles at 180ms:', coreStyles);
  await page.screenshot({ path: 'scratch/inspect_180ms.png' });
  await browser.close();
})();
