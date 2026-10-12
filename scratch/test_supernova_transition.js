import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000/harshit-sharma-portfolio';

async function testTransition() {
  console.log('--- STARTING SUPERNOVA TRANSITION VERIFICATION ---');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.setViewport({ width: 1440, height: 900 });

  // 1. Load Homepage
  console.log('1. Loading Home page...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

  // 2. Click "About" link and capture mid-transition frames
  console.log('2. Clicking About nav link to capture Supernova stages...');
  const aboutNavLink = await page.$('nav a[href$="/about"]');
  if (aboutNavLink) {
    // Click and capture frames
    await aboutNavLink.click();

    // Frame 1: Stellar Ignition (~100ms)
    await new Promise(r => setTimeout(r, 90));
    await page.screenshot({ path: 'scratch/supernova_frame_ignition.png' });
    console.log('  Captured Frame 1: Stellar Ignition');

    // Frame 2: Supernova Ripple (~220ms)
    await new Promise(r => setTimeout(r, 120));
    await page.screenshot({ path: 'scratch/supernova_frame_ripple.png' });
    console.log('  Captured Frame 2: Supernova Ripple');

    // Frame 3: Cosmic Reveal / Stardust (~360ms)
    await new Promise(r => setTimeout(r, 140));
    await page.screenshot({ path: 'scratch/supernova_frame_reveal.png' });
    console.log('  Captured Frame 3: Cosmic Reveal & Stardust');

    // Wait for transition to complete
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: 'scratch/supernova_frame_complete.png' });
    console.log('  Captured Frame 4: Complete Settled State');
  }

  // 3. Test Navigation Sequence Across All Pages
  const testRoutes = ['/education', '/skills', '/projects', '/achievements', '/contact', '/'];
  for (const route of testRoutes) {
    console.log(`3. Navigating to ${route}...`);
    const link = await page.$(`a[href$="${route}"]`);
    if (link) {
      await link.click();
      await new Promise(r => setTimeout(r, 650));
      const currentUrl = page.url();
      console.log(`  Landed on: ${currentUrl}`);
    }
  }

  // 4. Test Browser Back and Forward
  console.log('4. Testing Browser Back navigation...');
  await page.goBack();
  await new Promise(r => setTimeout(r, 650));
  console.log(`  After Back: ${page.url()}`);

  console.log('5. Testing Browser Forward navigation...');
  await page.goForward();
  await new Promise(r => setTimeout(r, 650));
  console.log(`  After Forward: ${page.url()}`);

  // 5. Test Rapid Click Stress Test
  console.log('6. Stress testing rapid navigation clicks...');
  const navLinks = await page.$$('nav a');
  if (navLinks.length >= 3) {
    // Click 3 links rapidly within 100ms
    await navLinks[1].click();
    await new Promise(r => setTimeout(r, 50));
    await navLinks[2].click();
    await new Promise(r => setTimeout(r, 50));
    await navLinks[0].click();
    await new Promise(r => setTimeout(r, 800));
    console.log(`  After rapid clicking, settled smoothly at: ${page.url()}`);
  }

  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }

  await browser.close();
}

testTransition().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
