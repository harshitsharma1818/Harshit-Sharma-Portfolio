import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import {
  createSunTexture,
  createMercuryTexture,
  createVenusTexture,
  createEarthTexture,
  createEarthCloudsTexture,
  createMoonTexture,
  createMarsTexture,
  createJupiterTexture,
  createSaturnTexture,
  createSaturnRingsTexture,
  createUranusTexture,
  createNeptuneTexture,
} from './planetTextures';

interface PlanetObject {
  name: string;
  distance: number;
  speed: number;
  angle: number;
  rotationSpeed: number;
  meshGroup: THREE.Group;
  planetMesh: THREE.Mesh;
  cloudsMesh?: THREE.Mesh;
  moonGroup?: THREE.Group;
}

export const SolarSystemBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 2500);
    camera.position.set(0, 155, 390);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    // Master Solar System Group (Allows fast, coordinated compact scaling)
    const solarGroup = new THREE.Group();
    solarGroup.position.set(0, 18, 0);
    scene.add(solarGroup);

    // 2. Real 3D Physical Lighting (Subtle, balanced, non-glaring)
    const sunLight = new THREE.PointLight(0xfff7e6, 2.2, 1200, 0.3);
    sunLight.position.set(0, 18, 0);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x223044, 0.35);
    scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.16);
    rimLight.position.set(-180, 140, -260);
    scene.add(rimLight);

    // 3. Central Compact Sun (Refined minimalist size: radius 4.8)
    const sunTexture = createSunTexture();
    const sunGeometry = new THREE.SphereGeometry(4.8, 48, 48);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    solarGroup.add(sunMesh);

    // Soft restrained golden corona aura (compact & subtle)
    const coronaCanvas = document.createElement('canvas');
    coronaCanvas.width = 128;
    coronaCanvas.height = 128;
    const cCtx = coronaCanvas.getContext('2d')!;
    const cGrad = cCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    cGrad.addColorStop(0, 'rgba(255, 248, 220, 0.55)');
    cGrad.addColorStop(0.25, 'rgba(245, 158, 11, 0.20)');
    cGrad.addColorStop(0.65, 'rgba(217, 119, 6, 0.05)');
    cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    cCtx.fillStyle = cGrad;
    cCtx.fillRect(0, 0, 128, 128);

    const coronaTexture = new THREE.CanvasTexture(coronaCanvas);
    const coronaMaterial = new THREE.SpriteMaterial({
      map: coronaTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.55,
    });
    const coronaSprite = new THREE.Sprite(coronaMaterial);
    coronaSprite.scale.set(18, 18, 1);
    solarGroup.add(coronaSprite);

    // 4. Photorealistic 3D Planets System
    const planets: PlanetObject[] = [];

    // Helper: Build orbital line loop in 3D (Whisper-thin, architectural)
    function createOrbitLine(radius: number, color = 0xffffff, opacity = 0.07) {
      const segments = 128;
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      return new THREE.LineLoop(geom, mat);
    }

    // --- MERCURY ---
    {
      const distance = 42;
      solarGroup.add(createOrbitLine(distance, 0xd8c7a5, 0.08));

      const meshGroup = new THREE.Group();
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(1.0, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        map: createMercuryTexture(),
        roughness: 0.82,
        metalness: 0.1,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      planets.push({
        name: 'mercury',
        distance,
        speed: 0.015,
        angle: 2.8,
        rotationSpeed: 0.01,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // --- VENUS ---
    {
      const distance = 68;
      solarGroup.add(createOrbitLine(distance, 0xfef3c7, 0.07));

      const meshGroup = new THREE.Group();
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(1.5, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        map: createVenusTexture(),
        roughness: 0.42,
        metalness: 0.05,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      planets.push({
        name: 'venus',
        distance,
        speed: 0.011,
        angle: 0.7,
        rotationSpeed: -0.006,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // --- EARTH & MOON ---
    {
      const distance = 98;
      solarGroup.add(createOrbitLine(distance, 0x38bdf8, 0.08));

      const meshGroup = new THREE.Group();
      meshGroup.rotation.z = THREE.MathUtils.degToRad(23.5);
      solarGroup.add(meshGroup);

      const earthGeom = new THREE.SphereGeometry(2.0, 48, 48);
      const earthMat = new THREE.MeshStandardMaterial({
        map: createEarthTexture(),
        roughness: 0.25,
        metalness: 0.08,
      });
      const earthMesh = new THREE.Mesh(earthGeom, earthMat);
      meshGroup.add(earthMesh);

      const cloudsGeom = new THREE.SphereGeometry(2.08, 48, 48);
      const cloudsMat = new THREE.MeshStandardMaterial({
        map: createEarthCloudsTexture(),
        transparent: true,
        opacity: 0.6,
        blending: THREE.NormalBlending,
        roughness: 0.88,
      });
      const cloudsMesh = new THREE.Mesh(cloudsGeom, cloudsMat);
      meshGroup.add(cloudsMesh);

      const atmoGeom = new THREE.SphereGeometry(2.16, 32, 32);
      const atmoMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });
      const atmoMesh = new THREE.Mesh(atmoGeom, atmoMat);
      meshGroup.add(atmoMesh);

      const moonGroup = new THREE.Group();
      meshGroup.add(moonGroup);

      const moonGeom = new THREE.SphereGeometry(0.52, 32, 32);
      const moonMat = new THREE.MeshStandardMaterial({
        map: createMoonTexture(),
        roughness: 0.88,
      });
      const moonMesh = new THREE.Mesh(moonGeom, moonMat);
      moonMesh.position.set(4.8, 0, 0);
      moonGroup.add(moonMesh);

      planets.push({
        name: 'earth',
        distance,
        speed: 0.0075,
        angle: 4.3,
        rotationSpeed: 0.014,
        meshGroup,
        planetMesh: earthMesh,
        cloudsMesh,
        moonGroup,
      });
    }

    // --- MARS ---
    {
      const distance = 128;
      solarGroup.add(createOrbitLine(distance, 0xd48265, 0.07));

      const meshGroup = new THREE.Group();
      meshGroup.rotation.z = THREE.MathUtils.degToRad(25.2);
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(1.35, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        map: createMarsTexture(),
        roughness: 0.8,
        metalness: 0.08,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      planets.push({
        name: 'mars',
        distance,
        speed: 0.0055,
        angle: 1.6,
        rotationSpeed: 0.013,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // --- JUPITER ---
    {
      const distance = 172;
      solarGroup.add(createOrbitLine(distance, 0xc8b598, 0.07));

      const meshGroup = new THREE.Group();
      meshGroup.rotation.z = THREE.MathUtils.degToRad(3.1);
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(3.8, 48, 48);
      const mat = new THREE.MeshStandardMaterial({
        map: createJupiterTexture(),
        roughness: 0.58,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      planets.push({
        name: 'jupiter',
        distance,
        speed: 0.0035,
        angle: 5.7,
        rotationSpeed: 0.022,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // --- SATURN (Gas giant with authentic 3D rings & Cassini division) ---
    {
      const distance = 224;
      solarGroup.add(createOrbitLine(distance, 0xd4c5a0, 0.07));

      const meshGroup = new THREE.Group();
      meshGroup.rotation.z = THREE.MathUtils.degToRad(26.7);
      meshGroup.rotation.x = THREE.MathUtils.degToRad(8);
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(2.9, 48, 48);
      const mat = new THREE.MeshStandardMaterial({
        map: createSaturnTexture(),
        roughness: 0.58,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      const ringGeom = new THREE.RingGeometry(4.0, 8.0, 64);
      const pos = ringGeom.attributes.position;
      const v3 = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        const dist = v3.length();
        const u = (dist - 4.0) / (8.0 - 4.0);
        ringGeom.attributes.uv.setXY(i, u, 0.5);
      }
      ringGeom.attributes.uv.needsUpdate = true;

      const ringMat = new THREE.MeshStandardMaterial({
        map: createSaturnRingsTexture(),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
        roughness: 0.5,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      meshGroup.add(ringMesh);

      planets.push({
        name: 'saturn',
        distance,
        speed: 0.0024,
        angle: 3.5,
        rotationSpeed: 0.02,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // --- URANUS ---
    {
      const distance = 274;
      solarGroup.add(createOrbitLine(distance, 0x67e8f9, 0.06));

      const meshGroup = new THREE.Group();
      meshGroup.rotation.z = THREE.MathUtils.degToRad(97.8);
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(1.9, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        map: createUranusTexture(),
        roughness: 0.55,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      planets.push({
        name: 'uranus',
        distance,
        speed: 0.0016,
        angle: 2.1,
        rotationSpeed: 0.012,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // --- NEPTUNE ---
    {
      const distance = 320;
      solarGroup.add(createOrbitLine(distance, 0x2563eb, 0.06));

      const meshGroup = new THREE.Group();
      meshGroup.rotation.z = THREE.MathUtils.degToRad(28.3);
      solarGroup.add(meshGroup);

      const geom = new THREE.SphereGeometry(1.8, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        map: createNeptuneTexture(),
        roughness: 0.55,
      });
      const mesh = new THREE.Mesh(geom, mat);
      meshGroup.add(mesh);

      planets.push({
        name: 'neptune',
        distance,
        speed: 0.0012,
        angle: 4.9,
        rotationSpeed: 0.013,
        meshGroup,
        planetMesh: mesh,
      });
    }

    // 5. Sparse Minimalist 3D Starfield
    const starCount = 160;
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xfef08a),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xcbd5e1),
      new THREE.Color(0xd8c7a5),
    ];

    for (let i = 0; i < starCount; i++) {
      const r = 600 + Math.random() * 600;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.85,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
    });
    const starPoints = new THREE.Points(starGeom, starMat);
    scene.add(starPoints);

    // 6. Interactive Mouse Parallax (Subtle 3D depth)
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 7. Responsive Resizing & Ultra-Compact Minimalist Scaling
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;

      // Ultra-compact scaling ensuring text has 100% undisputed prominence
      if (width < 640) {
        solarGroup.scale.set(0.22, 0.22, 0.22);
        camera.position.set(0, 185, 460);
      } else if (width < 1024) {
        solarGroup.scale.set(0.26, 0.26, 0.26);
        camera.position.set(0, 175, 430);
      } else {
        solarGroup.scale.set(0.30, 0.30, 0.30);
        camera.position.set(0, 160, 400);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      if (shouldReduceMotion) {
        renderer.render(scene, camera);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // 8. Animation Loop
    let animId: number | null = null;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.1);

      // Rotate Sun slowly
      sunMesh.rotation.y += 0.0015;

      // Pulse corona subtly
      const time = clock.getElapsedTime();
      coronaSprite.scale.set(
        18 + Math.sin(time * 1.5) * 0.8,
        18 + Math.sin(time * 1.5) * 0.8,
        1
      );

      // Update all planets:
      // Mathematically position planets DIRECTLY on their orbit track line: (cos(angle) * d, 0, sin(angle) * d)
      // Slower, calming speed (* 14) so motion never distracts reading
      for (const p of planets) {
        p.angle += p.speed * delta * 14;
        p.meshGroup.position.set(
          Math.cos(p.angle) * p.distance,
          0,
          Math.sin(p.angle) * p.distance
        );

        p.planetMesh.rotation.y += p.rotationSpeed * delta * 14;

        if (p.cloudsMesh) {
          p.cloudsMesh.rotation.y += (p.rotationSpeed * 1.25) * delta * 14;
        }

        if (p.moonGroup) {
          p.moonGroup.rotation.y += 0.02 * delta * 14;
        }
      }

      // Starfield subtle drift
      starPoints.rotation.y += 0.0001;

      // Smooth camera parallax (calm, restrained)
      const targetCamX = mouseX * 22;
      const targetCamY = (width < 640 ? 185 : 160) + mouseY * 12;
      camera.position.x += (targetCamX - camera.position.x) * 0.025;
      camera.position.y += (targetCamY - camera.position.y) * 0.025;
      camera.lookAt(0, 10, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    if (shouldReduceMotion) {
      renderer.render(scene, camera);
    } else {
      animId = requestAnimationFrame(animate);
    }

    // 9. Pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      } else {
        if (!shouldReduceMotion && !animId) {
          clock.getDelta();
          animId = requestAnimationFrame(animate);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 10. Clean Cleanup on Unmount
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      sunGeometry.dispose();
      sunMaterial.dispose();
      sunTexture.dispose();
      coronaTexture.dispose();
      coronaMaterial.dispose();

      for (const p of planets) {
        p.planetMesh.geometry.dispose();
        if (Array.isArray(p.planetMesh.material)) {
          p.planetMesh.material.forEach((m) => m.dispose());
        } else {
          p.planetMesh.material.dispose();
        }
        if (p.cloudsMesh) {
          p.cloudsMesh.geometry.dispose();
          if (Array.isArray(p.cloudsMesh.material)) {
            p.cloudsMesh.material.forEach((m) => m.dispose());
          } else {
            p.cloudsMesh.material.dispose();
          }
        }
      }

      starGeom.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.68 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-transparent pointer-events-none"
      />
    </motion.div>
  );
};
