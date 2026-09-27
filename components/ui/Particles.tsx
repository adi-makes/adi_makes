'use client';

import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  className?: string;
}

const defaultColors: string[] = ['#ffffff', '#ffffff', '#ffffff'];

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / max(length(mvPos.xyz), 0.001);
    }
    
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 80,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  pixelRatio = 1,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

    // Try WebGL first
    let renderer: Renderer | null = null;
    let gl: any = null;

    try {
      renderer = new Renderer({ dpr: pixelRatio, depth: false, alpha: true });
      gl = renderer?.gl;
    } catch (e) {
      gl = null;
    }

    if (gl && gl.canvas) {
      // ----------------------------------------------------
      // WEBGL MODE
      // ----------------------------------------------------
      let isContextLost = false;
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        isContextLost = true;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
      gl.canvas.addEventListener('webglcontextlost', handleContextLost, false);

      container.appendChild(gl.canvas);
      gl.clearColor(0, 0, 0, 0);

      const camera = new Camera(gl, { fov: 15 });
      camera.position.set(0, 0, cameraDistance);

      const resize = () => {
        if (isContextLost || !container || !renderer) return;
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        renderer.setSize(width, height);
        const aspect = gl.canvas.height > 0 ? gl.canvas.width / gl.canvas.height : 1;
        camera.perspective({ aspect });
      };
      window.addEventListener('resize', resize, false);
      resize();

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current = { x, y };
      };

      if (moveParticlesOnHover) {
        container.addEventListener('mousemove', handleMouseMove);
      }

      const count = particleCount;
      const positions = new Float32Array(count * 3);
      const randoms = new Float32Array(count * 4);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        let x: number, y: number, z: number, len: number;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          z = Math.random() * 2 - 1;
          len = x * x + y * y + z * z;
        } while (len > 1 || len === 0);
        const r = Math.cbrt(Math.random());
        positions.set([x * r, y * r, z * r], i * 3);
        randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
        const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
        colors.set(col, i * 3);
      }

      const geometry = new Geometry(gl, {
        position: { size: 3, data: positions },
        random: { size: 4, data: randoms },
        color: { size: 3, data: colors }
      });

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uSpread: { value: particleSpread },
          uBaseSize: { value: particleBaseSize * pixelRatio },
          uSizeRandomness: { value: sizeRandomness },
          uAlphaParticles: { value: alphaParticles ? 1 : 0 }
        },
        transparent: true,
        depthTest: false
      });

      const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

      let lastTime = performance.now();
      let elapsed = 0;

      const update = (t: number) => {
        if (isContextLost || (gl.isContextLost && gl.isContextLost())) return;
        animationFrameId = requestAnimationFrame(update);
        const delta = t - lastTime;
        lastTime = t;
        elapsed += delta * speed;

        program.uniforms.uTime.value = elapsed * 0.001;

        if (moveParticlesOnHover) {
          particles.position.x = -mouseRef.current.x * particleHoverFactor;
          particles.position.y = -mouseRef.current.y * particleHoverFactor;
        } else {
          particles.position.x = 0;
          particles.position.y = 0;
        }

        if (!disableRotation) {
          particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
          particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
          particles.rotation.z += 0.01 * speed;
        }

        renderer?.render({ scene: particles, camera });
      };

      animationFrameId = requestAnimationFrame(update);

      return () => {
        window.removeEventListener('resize', resize);
        if (moveParticlesOnHover) {
          container.removeEventListener('mousemove', handleMouseMove);
        }
        if (gl?.canvas) {
          gl.canvas.removeEventListener('webglcontextlost', handleContextLost);
        }
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        if (gl?.canvas && container.contains(gl.canvas)) {
          container.removeChild(gl.canvas);
        }
        const loseContext = gl?.getExtension?.('WEBGL_lose_context');
        if (loseContext) {
          loseContext.loseContext();
        }
      };
    } else {
      // ----------------------------------------------------
      // 2D CANVAS FALLBACK MODE (guaranteed to render on all devices)
      // ----------------------------------------------------
      const canvas = document.createElement('canvas');
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      container.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = (canvas.width = container.clientWidth || window.innerWidth);
      let height = (canvas.height = container.clientHeight || window.innerHeight);

      const resize2d = () => {
        if (!container) return;
        width = canvas.width = container.clientWidth || window.innerWidth;
        height = canvas.height = container.clientHeight || window.innerHeight;
      };
      window.addEventListener('resize', resize2d);

      const handleMouseMove2d = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current = { x, y };
      };

      if (moveParticlesOnHover) {
        container.addEventListener('mousemove', handleMouseMove2d);
      }

      type Particle2D = {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
        baseRadius: number;
        color: string;
        alpha: number;
        pulseSpeed: number;
        angle: number;
      };

      const particles2d: Particle2D[] = [];
      const count = Math.min(particleCount, 50);

      for (let i = 0; i < count; i++) {
        const radius = (Math.random() * 2.5 + 1.2) * (particleBaseSize / 100);
        particles2d.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed * 0.8,
          vy: (Math.random() - 0.5) * speed * 0.8,
          radius,
          baseRadius: radius,
          color: palette[Math.floor(Math.random() * palette.length)],
          alpha: Math.random() * 0.6 + 0.3,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          angle: Math.random() * Math.PI * 2,
        });
      }

      const draw2d = () => {
        animationFrameId = requestAnimationFrame(draw2d);
        ctx.clearRect(0, 0, width, height);

        const mx = moveParticlesOnHover ? mouseRef.current.x * particleHoverFactor * 20 : 0;
        const my = moveParticlesOnHover ? -mouseRef.current.y * particleHoverFactor * 20 : 0;

        for (let i = 0; i < particles2d.length; i++) {
          const p = particles2d[i];
          p.angle += p.pulseSpeed;
          const currentRadius = p.baseRadius + Math.sin(p.angle) * 0.5;

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          const renderX = p.x + mx;
          const renderY = p.y + my;

          ctx.beginPath();
          ctx.arc(renderX, renderY, Math.max(0.5, currentRadius), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = alphaParticles ? 8 : 0;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      };

      draw2d();

      return () => {
        window.removeEventListener('resize', resize2d);
        if (moveParticlesOnHover) {
          container.removeEventListener('mousemove', handleMouseMove2d);
        }
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        if (container.contains(canvas)) {
          container.removeChild(canvas);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    pixelRatio
  ]);

  return <div ref={containerRef} className={`relative w-full h-full ${className}`} />;
};

export default Particles;
