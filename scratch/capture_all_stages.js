import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000/harshit-sharma-portfolio';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`);
  await new Promise(r => setTimeout(r, 600));

  // Click About
  console.log('Clicking About link...');
  const aboutLink = await page.$('nav a[href*="/about"]');
  await aboutLink.click();

  // Phase A: Stellar Ignition (~180ms)
  await new Promise(r => setTimeout(r, 180));
  await page.screenshot({ path: 'scratch/stage_A_stellar_ignition.png' });
  console.log('Captured Stage A: Stellar Ignition (180ms)');

  // Phase B: Supernova Expansion (~450ms)
  await new Promise(r => setTimeout(r, 270));
  await page.screenshot({ path: 'scratch/stage_B_supernova_expansion.png' });
  console.log('Captured Stage B: Supernova Expansion (450ms)');

  // Phase C: Cosmic Transition (~750ms)
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: 'scratch/stage_C_cosmic_transition.png' });
  console.log('Captured Stage C: Cosmic Transition (750ms)');

  // Phase D: New Page Reveal & Settle (~1300ms)
  await new Promise(r => setTimeout(r, 550));
  await page.screenshot({ path: 'scratch/stage_D_page_reveal.png' });
  console.log('Captured Stage D: New Page Reveal (1300ms)');

  await browser.close();
})();
