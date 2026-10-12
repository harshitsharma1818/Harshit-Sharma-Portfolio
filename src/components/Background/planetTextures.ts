import * as THREE from 'three';

// Ultra-realistic procedural planetary texture generators using Fractal Brownian Motion (FBM)

/**
 * Fast multi-octave Fractal Brownian Motion noise
 */
function fbm(x: number, y: number, octaves = 4): number {
  let val = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    val += amp * (Math.sin(x * freq + i * 1.3) * Math.cos(y * freq + i * 0.9) +
      Math.sin((x * 0.8 + y * 1.2) * freq) * 0.5);
    freq *= 2.1;
    amp *= 0.5;
  }
  return val;
}

/**
 * Photorealistic Radiant Sun Texture
 */
export function createSunTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(1024, 512);
  const data = imgData.data;

  for (let y = 0; y < 512; y++) {
    const lat = (y / 512) * Math.PI;
    const sinLat = Math.sin(lat);
    for (let x = 0; x < 1024; x++) {
      const idx = (y * 1024 + x) * 4;
      const n = fbm(x * 0.04, y * 0.04, 4);
      const turbulence = fbm(x * 0.08 + 2, y * 0.08, 3) * 0.25;
      const val = 0.5 + n * 0.35 + turbulence;

      // Radiant warm gold & intense solar luminescence
      const r = 255;
      const g = Math.min(255, Math.floor(190 + val * 60 * sinLat));
      const b = Math.min(255, Math.floor(60 + val * 85 * sinLat));

      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Soft atmospheric solar coronal flare streaks
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * 1024;
    const y = 80 + Math.random() * 352;
    const rX = 60 + Math.random() * 120;
    const rY = 18 + Math.random() * 35;

    const fGrad = ctx.createRadialGradient(x, y, 0, x, y, rX);
    fGrad.addColorStop(0, 'rgba(255, 255, 245, 0.45)');
    fGrad.addColorStop(0.5, 'rgba(254, 240, 138, 0.2)');
    fGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = fGrad;
    ctx.beginPath();
    ctx.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Cratered Mercury Texture
 */
export function createMercuryTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(1024, 512);
  const data = imgData.data;

  // Rocky ancient regolith with multi-octave impact noise
  for (let y = 0; y < 512; y++) {
    for (let x = 0; x < 1024; x++) {
      const idx = (y * 1024 + x) * 4;
      const n = fbm(x * 0.05, y * 0.05, 5);
      const val = Math.floor(125 + n * 45);

      data[idx] = val;
      data[idx + 1] = Math.floor(val * 0.94);
      data[idx + 2] = Math.floor(val * 0.88);
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Distinct impact craters with central peaks and bright ejecta rays
  const craters = [
    { x: 180, y: 160, r: 24 },
    { x: 340, y: 260, r: 32 },
    { x: 520, y: 140, r: 22 },
    { x: 680, y: 320, r: 28 },
    { x: 820, y: 200, r: 24 },
    { x: 260, y: 380, r: 18 },
    { x: 440, y: 410, r: 26 },
    { x: 740, y: 120, r: 18 },
    { x: 920, y: 340, r: 20 },
    { x: 130, y: 300, r: 16 },
    { x: 600, y: 240, r: 22 },
  ];

  for (const c of craters) {
    ctx.strokeStyle = '#44403c';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#57534e';
    ctx.beginPath();
    ctx.arc(c.x + 1.5, c.y + 1.5, c.r - 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#a8a29e';
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // Ejecta rays
    ctx.strokeStyle = 'rgba(231, 229, 228, 0.35)';
    ctx.lineWidth = 1;
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
      ctx.beginPath();
      ctx.moveTo(c.x + Math.cos(a) * c.r, c.y + Math.sin(a) * c.r);
      ctx.lineTo(c.x + Math.cos(a) * (c.r + 25), c.y + Math.sin(a) * (c.r + 25));
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Venus Atmospheric Swirl Texture
 */
export function createVenusTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const imgData = ctx.createImageData(1024, 512);
  const data = imgData.data;

  // Dense sulfuric acid cloud deck with smooth planetary chevron circulation
  for (let y = 0; y < 512; y++) {
    const chevron = Math.abs(y - 256) * 0.04;
    for (let x = 0; x < 1024; x++) {
      const idx = (y * 1024 + x) * 4;
      const n = fbm((x * 0.02 + chevron), y * 0.03, 4);
      const val = 0.5 + n * 0.28;

      data[idx] = Math.floor(245 + val * 10);
      data[idx + 1] = Math.floor(220 + val * 25);
      data[idx + 2] = Math.floor(165 + val * 45);
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Blue Marble Earth Surface Map
 * Realistic fractal coastlines, ocean depth gradients, lush vegetation, Sahara gold, and polar ice sheets
 */
export function createEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // 1. Deep Abyssal Ocean Base
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
  oceanGrad.addColorStop(0, '#091c33');
  oceanGrad.addColorStop(0.18, '#0b294e');
  oceanGrad.addColorStop(0.5, '#0f3a6b');
  oceanGrad.addColorStop(0.82, '#0b294e');
  oceanGrad.addColorStop(1, '#091c33');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Helper: Draw continent with realistic fractal coastal shelf and interior biomes
  function drawContinent(points: [number, number][], landColor: string, detailColor?: string, desertColor?: string) {
    // Turquoise shallow shelf outline
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.closePath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.32)';
    ctx.stroke();

    // Landmass body
    ctx.fillStyle = landColor;
    ctx.fill();

    // Internal terrain/mountain/vegetation variation
    if (detailColor) {
      ctx.fillStyle = detailColor;
      ctx.beginPath();
      const cx = points.reduce((acc, p) => acc + p[0], 0) / points.length;
      const cy = points.reduce((acc, p) => acc + p[1], 0) / points.length;
      for (let i = 0; i < points.length; i++) {
        const px = cx + (points[i][0] - cx) * 0.6;
        const py = cy + (points[i][1] - cy) * 0.6;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    }

    if (desertColor) {
      ctx.fillStyle = desertColor;
      ctx.beginPath();
      const cx = points.reduce((acc, p) => acc + p[0], 0) / points.length;
      const cy = points.reduce((acc, p) => acc + p[1], 0) / points.length;
      for (let i = 0; i < points.length; i++) {
        const px = cx + (points[i][0] - cx) * 0.35;
        const py = cy + (points[i][1] - cy) * 0.35;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    }
  }

  // North America
  drawContinent([
    [105, 95], [160, 80], [230, 75], [290, 105], [315, 170],
    [275, 225], [240, 255], [210, 275], [175, 245], [135, 205],
    [95, 155], [100, 115]
  ], '#226b27', '#14532d', '#854d0e');

  // Greenland
  drawContinent([
    [320, 42], [375, 38], [395, 72], [345, 92], [315, 62]
  ], '#e2e8f0', '#cbd5e1');

  // South America
  drawContinent([
    [235, 280], [280, 285], [345, 315], [365, 360], [335, 430],
    [285, 480], [260, 440], [235, 370], [215, 320]
  ], '#166534', '#14532d');

  // Europe & British Isles
  drawContinent([
    [475, 110], [525, 90], [575, 100], [565, 150], [525, 170],
    [475, 160], [465, 130]
  ], '#365314', '#4d7c0f');

  // Africa (with Sahara desert gold & Congo rainforest)
  drawContinent([
    [455, 175], [545, 170], [585, 220], [595, 275], [565, 370],
    [525, 420], [485, 380], [435, 280], [425, 215]
  ], '#ca8a04', '#166534', '#eab308');

  // Eurasia (Russia & Central Asia)
  drawContinent([
    [565, 90], [685, 70], [825, 80], [925, 110], [905, 170],
    [845, 210], [765, 210], [685, 190], [605, 170]
  ], '#14532d', '#1e3a1f', '#a16207');

  // Indian Subcontinent
  drawContinent([
    [685, 210], [745, 220], [735, 290], [710, 330], [680, 280], [665, 220]
  ], '#15803d', '#a16207');

  // East Asia & Japan
  drawContinent([
    [785, 210], [835, 230], [865, 270], [825, 320], [775, 280]
  ], '#166534');

  // Australia & New Zealand
  drawContinent([
    [805, 330], [885, 320], [925, 360], [915, 430], [865, 450],
    [795, 410], [785, 360]
  ], '#b45309', '#d97706', '#ca8a04');

  // Antarctica (Southern Ice Shelf)
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 470, 1024, 42);

  // Arctic Ice Cap
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, 1024, 28);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Translucent Earth Cloud Layer
 */
export function createEarthCloudsTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, 1024, 512);

  // Equatorial trade wind cloud bands
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * 1024;
    const y = 170 + Math.random() * 170;
    const rX = 70 + Math.random() * 140;
    const rY = 12 + Math.random() * 26;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, rX);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.42)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Realistic cyclonic spiral swirls
  const cyclones = [
    { x: 210, y: 135 },
    { x: 630, y: 125 },
    { x: 370, y: 395 },
    { x: 790, y: 390 },
  ];

  for (const c of cyclones) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    for (let a = 0; a < Math.PI * 5; a += 0.2) {
      const r = a * 8;
      const pX = c.x + Math.cos(a) * r;
      const pY = c.y + Math.sin(a) * (r * 0.55);
      if (a === 0) ctx.moveTo(pX, pY);
      else ctx.lineTo(pX, pY);
    }
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Cratered Moon Texture
 */
export function createMoonTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#9ca3af';
  ctx.fillRect(0, 0, 512, 256);

  // Dark basaltic plains (Lunar Maria)
  const maria = [
    { x: 180, y: 110, rX: 55, rY: 40 },
    { x: 240, y: 140, rX: 45, rY: 35 },
    { x: 310, y: 100, rX: 60, rY: 45 },
    { x: 140, y: 160, rX: 40, rY: 30 },
  ];

  for (const m of maria) {
    const mGrad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.rX);
    mGrad.addColorStop(0, '#4b5563');
    mGrad.addColorStop(0.8, '#6b7280');
    mGrad.addColorStop(1, 'rgba(107, 114, 128, 0)');
    ctx.fillStyle = mGrad;
    ctx.beginPath();
    ctx.ellipse(m.x, m.y, m.rX, m.rY, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Mars Texture
 */
export function createMarsTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const baseGrad = ctx.createLinearGradient(0, 0, 0, 512);
  baseGrad.addColorStop(0, '#c2410c');
  baseGrad.addColorStop(0.5, '#ea580c');
  baseGrad.addColorStop(1, '#9a3412');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Dark volcanic albedo markings (Syrtis Major & Acidalia Planitia)
  ctx.fillStyle = 'rgba(67, 20, 7, 0.7)';

  // Syrtis Major
  ctx.beginPath();
  ctx.moveTo(440, 200);
  ctx.lineTo(540, 320);
  ctx.lineTo(380, 340);
  ctx.closePath();
  ctx.fill();

  // Acidalia Planitia
  ctx.beginPath();
  ctx.ellipse(720, 180, 120, 60, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Valles Marineris canyon rift
  ctx.strokeStyle = '#431407';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(220, 280);
  ctx.lineTo(360, 290);
  ctx.lineTo(420, 310);
  ctx.stroke();

  // Polar ice caps
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.ellipse(512, 18, 130, 20, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(512, 494, 100, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Jupiter Texture with Turbulent Shear Bands and Great Red Spot
 */
export function createJupiterTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const belts = [
    { y: 0, h: 42, color: '#64748b' },      // North Polar region
    { y: 42, h: 36, color: '#fef3c7' },     // NN Temperate
    { y: 78, h: 42, color: '#b45309' },     // N Temperate Belt
    { y: 120, h: 45, color: '#fffbeb' },    // N Tropical Zone
    { y: 165, h: 55, color: '#78350f' },    // N Equatorial Belt
    { y: 220, h: 45, color: '#fef08a' },    // Equatorial Zone
    { y: 265, h: 65, color: '#9a3412' },    // S Equatorial Belt
    { y: 330, h: 45, color: '#fef9c3' },    // S Tropical Zone
    { y: 375, h: 45, color: '#b45309' },    // S Temperate Belt
    { y: 420, h: 45, color: '#d97706' },    // SS Temperate
    { y: 465, h: 47, color: '#475569' },    // South Polar region
  ];

  for (const b of belts) {
    ctx.fillStyle = b.color;
    ctx.fillRect(0, b.y, 1024, b.h);
  }

  // Wavy fluid shear turbulence across band borders
  for (let i = 0; i < belts.length - 1; i++) {
    const yLine = belts[i].y + belts[i].h;
    ctx.fillStyle = belts[i].color;
    ctx.beginPath();
    ctx.moveTo(0, yLine);
    for (let x = 0; x <= 1024; x += 16) {
      const wave = Math.sin(x * 0.04 + i) * 7 + Math.cos(x * 0.08) * 3;
      ctx.lineTo(x, yLine + wave);
    }
    ctx.lineTo(1024, yLine - 4);
    ctx.lineTo(0, yLine - 4);
    ctx.closePath();
    ctx.fill();
  }

  // The Great Red Spot
  const grsX = 480;
  const grsY = 300;
  const grsGrad = ctx.createRadialGradient(grsX, grsY, 8, grsX, grsY, 55);
  grsGrad.addColorStop(0, '#991b1b');
  grsGrad.addColorStop(0.4, '#dc2626');
  grsGrad.addColorStop(0.8, '#ea580c');
  grsGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');

  ctx.fillStyle = grsGrad;
  ctx.beginPath();
  ctx.ellipse(grsX, grsY, 68, 38, -0.05, 0, Math.PI * 2);
  ctx.fill();

  // White turbulence wake
  ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.beginPath();
  ctx.ellipse(grsX + 90, grsY - 4, 20, 11, 0, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Saturn Golden Atmosphere Texture
 */
export function createSaturnTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const bands = [
    '#ca8a04', '#eab308', '#fef08a', '#fde047',
    '#eab308', '#ca8a04', '#a16207', '#ca8a04',
    '#fde047', '#fef08a', '#eab308', '#854d0e'
  ];

  const h = 512 / bands.length;
  for (let i = 0; i < bands.length; i++) {
    ctx.fillStyle = bands[i];
    ctx.fillRect(0, i * h, 1024, h);
  }

  const haze = ctx.createLinearGradient(0, 0, 0, 512);
  haze.addColorStop(0, 'rgba(161, 98, 7, 0.3)');
  haze.addColorStop(0.5, 'rgba(254, 240, 138, 0.15)');
  haze.addColorStop(1, 'rgba(133, 77, 14, 0.3)');
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, 1024, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Saturn Rings Radial Texture with Cassini Division and Micro-Grooves
 */
export function createSaturnRingsTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, 1024, 64);

  const grad = ctx.createLinearGradient(0, 0, 1024, 0);
  grad.addColorStop(0.0, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(0.06, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(0.10, 'rgba(217, 119, 6, 0.15)'); // D Ring
  grad.addColorStop(0.20, 'rgba(251, 191, 36, 0.45)'); // C Ring (Crepe)
  grad.addColorStop(0.30, 'rgba(254, 243, 199, 0.95)'); // B Ring
  grad.addColorStop(0.52, 'rgba(253, 224, 71, 0.92)');
  grad.addColorStop(0.64, 'rgba(245, 158, 11, 0.85)');
  grad.addColorStop(0.67, 'rgba(0, 0, 0, 0.04)'); // CASSINI DIVISION GAP
  grad.addColorStop(0.72, 'rgba(0, 0, 0, 0.04)');
  grad.addColorStop(0.75, 'rgba(254, 240, 138, 0.82)'); // A Ring
  grad.addColorStop(0.85, 'rgba(251, 191, 36, 0.78)');
  grad.addColorStop(0.89, 'rgba(0, 0, 0, 0.12)'); // Encke Gap
  grad.addColorStop(0.91, 'rgba(251, 191, 36, 0.72)');
  grad.addColorStop(0.97, 'rgba(217, 119, 6, 0.25)'); // F Ring
  grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

/**
 * Photorealistic Uranus Texture
 */
export function createUranusTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#06b6d4');
  grad.addColorStop(0.5, '#67e8f9');
  grad.addColorStop(1, '#06b6d4');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Photorealistic Neptune Texture
 */
export function createNeptuneTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#1e3a8a');
  grad.addColorStop(0.5, '#2563eb');
  grad.addColorStop(1, '#1e3a8a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  ctx.fillStyle = 'rgba(219, 234, 254, 0.65)';
  ctx.beginPath();
  ctx.ellipse(320, 140, 45, 8, -0.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(180, 180, 35, 6, 0.1, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}
