import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000/harshit-sharma-portfolio';
const ARTIFACT_DIR = 'C:\\Users\\sharm\\.gemini\\antigravity\\brain\\85ee7d27-5c19-43d2-9acd-6b78e0f0f302';

const VIEWPORTS = [
  { name: 'Small Mobile', width: 320, height: 568 },
  { name: 'Standard Mobile 360', width: 360, height: 640 },
  { name: 'iPhone 13/14 Mobile', width: 390, height: 844 },
  { name: 'Tablet 768', width: 768, height: 1024 },
  { name: 'Desktop 1440', width: 1440, height: 900 },
];

const ROUTES = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
  { name: 'NotFound', path: '/non-existent-route-for-testing' },
];

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE RESPONSIVE & MOBILE VERIFICATION ---');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const networkErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', request => {
    networkErrors.push(`${request.method()} ${request.url()} - ${request.failure()?.errorText}`);
  });

  const results = {
    overflowIssues: [],
    testedPages: [],
    menuTest: 'PENDING',
    consoleErrors: [],
    networkErrors: []
  };

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

    for (const route of ROUTES) {
      const fullUrl = `${BASE_URL}${route.path}`;
      await page.goto(fullUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      // Short delay for animations to settle
      await new Promise(r => setTimeout(r, 600));

      // Check horizontal overflow
      const overflowData = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const winWidth = window.innerWidth;
        const hasOverflow = docWidth > winWidth || bodyWidth > winWidth;
        return { docWidth, bodyWidth, winWidth, hasOverflow };
      });

      if (overflowData.hasOverflow) {
        const issue = `${route.name} (${vp.width}px): docWidth=${overflowData.docWidth}, winWidth=${overflowData.winWidth}`;
        console.error(`  [OVERFLOW] ${issue}`);
        results.overflowIssues.push(issue);
      } else {
        console.log(`  [OK] ${route.name} (${vp.width}px) - No overflow (scrollWidth: ${overflowData.docWidth}px)`);
      }

      // Capture screenshots for 390px (Mobile) and 1440px (Desktop)
      if (vp.width === 390 && route.path !== '/non-existent-route-for-testing') {
        const filename = `preview_${route.name.toLowerCase()}_mobile.png`;
        const filePath = path.join(ARTIFACT_DIR, filename);
        await page.screenshot({ path: filePath, fullPage: false });
      }
      if (vp.width === 1440 && route.path !== '/non-existent-route-for-testing') {
        const filename = `preview_${route.name.toLowerCase()}.png`;
        const filePath = path.join(ARTIFACT_DIR, filename);
        await page.screenshot({ path: filePath, fullPage: false });
      }

      results.testedPages.push(`${route.name} @ ${vp.width}px`);
    }
  }

  // Mobile Hamburger Menu Interaction & Keyboard Test
  console.log('\n--- TESTING MOBILE MENU INTERACTION & ACCESSIBILITY ---');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  // Find hamburger button
  const hamburgerBtn = await page.$('button[aria-label="Open navigation menu"], button[aria-controls="mobile-navigation-drawer"]');
  if (hamburgerBtn) {
    console.log('  Found mobile hamburger button. Clicking to open...');
    await hamburgerBtn.click();
    await new Promise(r => setTimeout(r, 400));

    // Check if drawer is visible
    const drawerVisible = await page.evaluate(() => {
      const drawer = document.getElementById('mobile-navigation-drawer');
      const bodyOverflow = document.body.style.overflow;
      return {
        isOpen: !!drawer,
        bodyLocked: bodyOverflow === 'hidden'
      };
    });

    console.log(`  Drawer visible: ${drawerVisible.isOpen}, Body scroll lock: ${drawerVisible.bodyLocked}`);

    // Test Escape key closes menu
    console.log('  Pressing Escape key...');
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));

    const drawerClosed = await page.evaluate(() => {
      return !document.getElementById('mobile-navigation-drawer');
    });
    console.log(`  Drawer closed on Escape: ${drawerClosed}`);

    // Re-open and click navigation link to verify auto-close
    const hamburgerBtnAgain = await page.$('button[aria-label="Open navigation menu"], button[aria-controls="mobile-navigation-drawer"]');
    if (hamburgerBtnAgain) {
      await hamburgerBtnAgain.click();
      await new Promise(r => setTimeout(r, 400));

      const aboutLink = await page.$('#mobile-navigation-drawer a[href$="/about"]');
      if (aboutLink) {
        console.log('  Clicking About link inside drawer...');
        await aboutLink.click();
        await new Promise(r => setTimeout(r, 600));

        const navigated = await page.evaluate(() => {
          return window.location.pathname.endsWith('/about') && !document.getElementById('mobile-navigation-drawer');
        });
        console.log(`  Navigated to /about and drawer auto-closed: ${navigated}`);

        if (drawerVisible.isOpen && drawerVisible.bodyLocked && drawerClosed && navigated) {
          results.menuTest = 'PASSED (Open, ScrollLock, Escape, LinkNav, AutoClose all verified)';
        } else {
          results.menuTest = 'PARTIAL';
        }
      }
    }
  } else {
    console.error('  Could not find hamburger button!');
    results.menuTest = 'FAILED (Button not found)';
  }

  results.consoleErrors = consoleErrors;
  results.networkErrors = networkErrors;

  console.log('\n--- TEST SUMMARY ---');
  console.log(`Total Page/Viewport Combinations Tested: ${results.testedPages.length}`);
  console.log(`Horizontal Overflow Issues: ${results.overflowIssues.length}`);
  console.log(`Mobile Menu Interaction: ${results.menuTest}`);
  console.log(`Console Errors: ${results.consoleErrors.length}`);
  console.log(`Network Errors: ${results.networkErrors.length}`);

  await browser.close();
  return results;
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
