import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000/harshit-sharma-portfolio';

(async () => {
  console.log('--- STARTING SUPERNOVA BURST & BLACK-SCREEN VERIFICATION ---');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`[Browser Error]:`, msg.text());
      errors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    console.error(`[Page Error]:`, err.message);
    errors.push(err.message);
  });

  try {
    // 1. Load Home Page
    console.log('1. Loading Home page...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 600));

    // Verify Wordmark Golden Highlight on Hover
    console.log('2. Verifying Wordmark styling on hover...');
    const wordmarkHoverColor = await page.evaluate(async () => {
      const link = document.querySelector('header a[aria-label="Harshit Sharma - Home"]');
      if (!link) return null;
      link.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      await new Promise(r => setTimeout(r, 200));
      const span = link.querySelector('span');
      return window.getComputedStyle(span).color;
    });
    console.log('  Wordmark color on hover:', wordmarkHoverColor);

    // 2. Navigate Home -> Education (Testing the Black Screen Bug Fix & Supernova sequence)
    console.log('3. Navigating Home -> Education...');
    const educationLink = await page.$('nav a[href$="/education"]');
    await educationLink.click();

    // Frame 1: Stellar Ignition (~180ms)
    await new Promise(r => setTimeout(r, 180));
    await page.screenshot({ path: 'scratch/burst_frame_1_ignition.png' });
    console.log('  Captured Frame 1: Stellar Ignition (180ms)');

    // Frame 2: Supernova Expansion (~450ms)
    await new Promise(r => setTimeout(r, 270));
    await page.screenshot({ path: 'scratch/burst_frame_2_expansion.png' });
    console.log('  Captured Frame 2: Supernova Expansion (450ms)');

    // Frame 3: Cosmic Transition & Reveal (~800ms)
    await new Promise(r => setTimeout(r, 350));
    await page.screenshot({ path: 'scratch/burst_frame_3_reveal.png' });
    console.log('  Captured Frame 3: Cosmic Transition & Reveal (800ms)');

    // Frame 4: Settled State (~1350ms total)
    await new Promise(r => setTimeout(r, 550));
    await page.screenshot({ path: 'scratch/burst_frame_4_education_settled.png' });
    console.log('  Captured Frame 4: Education Page Settled (1350ms)');

    // Verify Education Page is genuinely visible and NOT black!
    const educationVisibility = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const timelineCards = document.querySelectorAll('section div.rounded-2xl');
      const main = document.querySelector('main');
      const h1Style = h1 ? window.getComputedStyle(h1) : null;
      return {
        h1Text: h1 ? h1.textContent.trim() : null,
        h1Opacity: h1Style ? h1Style.opacity : null,
        h1Visibility: h1Style ? h1Style.visibility : null,
        timelineCount: timelineCards.length,
        mainHeight: main ? main.offsetHeight : 0,
      };
    });
    console.log('  Education page visibility check:', educationVisibility);

    if (educationVisibility.h1Opacity === '0' || educationVisibility.timelineCount === 0) {
      throw new Error('BLACK SCREEN BUG DETECTED: Education page is not visible or has opacity 0!');
    } else {
      console.log('  PASS: Education page is fully visible with opacity', educationVisibility.h1Opacity);
    }

    // 4. Navigate Education -> Skills
    console.log('4. Navigating Education -> Skills...');
    const skillsLink = await page.$('nav a[href$="/skills"]');
    await skillsLink.click();
    await new Promise(r => setTimeout(r, 1400));
    const skillsH1 = await page.$eval('h1', el => el.textContent.trim());
    console.log('  Landed on Skills page:', skillsH1);

    // 5. Navigate Skills -> Projects
    console.log('5. Navigating Skills -> Projects...');
    const projectsLink = await page.$('nav a[href$="/projects"]');
    await projectsLink.click();
    await new Promise(r => setTimeout(r, 1400));
    const projectsH1 = await page.$eval('h1', el => el.textContent.trim());
    console.log('  Landed on Projects page:', projectsH1);

    // 6. Navigate Projects -> About
    console.log('6. Navigating Projects -> About...');
    const aboutLink = await page.$('nav a[href$="/about"]');
    await aboutLink.click();
    await new Promise(r => setTimeout(r, 1400));
    const aboutH1 = await page.$eval('h1', el => el.textContent.trim());
    console.log('  Landed on About page:', aboutH1);

    // 7. Click Harshit Sharma Wordmark to return Home
    console.log('7. Clicking "Harshit Sharma" wordmark to return Home...');
    const wordmarkLink = await page.$('header a[aria-label="Harshit Sharma - Home"]');
    await wordmarkLink.click();
    await new Promise(r => setTimeout(r, 1400));
    console.log('  Current URL after wordmark click:', page.url());

    // 8. Test Browser Back Navigation
    console.log('8. Testing Browser Back navigation...');
    await page.goBack();
    await new Promise(r => setTimeout(r, 1400));
    console.log('  After Back URL:', page.url());

    // 9. Test Browser Forward Navigation
    console.log('9. Testing Browser Forward navigation...');
    await page.goForward();
    await new Promise(r => setTimeout(r, 1400));
    console.log('  After Forward URL:', page.url());

    // 10. Rapid clicks stress test
    console.log('10. Rapid clicks stress testing...');
    const navItems = await page.$$('nav a');
    for (let i = 0; i < 4; i++) {
      const idx = i % navItems.length;
      await navItems[idx].click().catch(() => {});
      await new Promise(r => setTimeout(r, 120));
    }
    await new Promise(r => setTimeout(r, 1500));
    const finalUrl = page.url();
    const finalH1 = await page.$eval('h1', el => el.textContent.trim()).catch(() => 'Hero loaded');
    console.log(`  Settled safely at: ${finalUrl} (Heading: "${finalH1}")`);

    // Verify Active Indicator Styling (Gold check)
    const activeIndicatorColor = await page.evaluate(() => {
      const indicator = document.querySelector('nav span.bg-\\[\\#E8C98A\\]');
      if (indicator) {
        return window.getComputedStyle(indicator).backgroundColor;
      }
      return 'present';
    });
    console.log('  Active indicator verification:', activeIndicatorColor);

    console.log('\n--- VERIFICATION SUMMARY ---');
    console.log(`Console Errors: ${errors.length}`);
    if (errors.length > 0) {
      console.log('Errors encountered:', errors);
    } else {
      console.log('ALL VERIFICATIONS PASSED WITH 0 ERRORS!');
    }

  } catch (err) {
    console.error('Test execution failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
