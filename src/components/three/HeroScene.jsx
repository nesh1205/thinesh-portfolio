import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube({ position, size = 0.6 }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.4;
      ref.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.85}
        wireframe
      />
    </mesh>
  );
}

function GlassPanel({ position, rotation, size = [1.8, 1.2] }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={size} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          roughness={0}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(...size)]} />
        <lineBasicMaterial color="#ffffff" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

function FloatingLaptop({ position }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Screen */}
      <mesh position={[0, 0.35, -0.08]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 0.06]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen glow */}
      <mesh position={[0, 0.35, -0.04]} rotation={[-0.15, 0, 0]}>
        <planeGeometry args={[2, 1.2]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.15}
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Keyboard base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 0.08, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Keyboard detail */}
      <mesh position={[0, 0.05, 0.1]}>
        <boxGeometry args={[1.8, 0.02, 1]} />
        <meshStandardMaterial color="#262626" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Particles({ count = 200 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function GlowOrb({ position, scale = 1 }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime) * 0.05);
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <MeshDistortMaterial
        color="#ffffff"
        transparent
        opacity={0.04}
        distort={0.3}
        speed={1.5}
      />
    </mesh>
  );
}

function SceneContent({ simplified = false }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#ffffff" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.5}
        penumbra={1}
        intensity={0.6}
        color="#ffffff"
      />

      <GlowOrb position={[0, 0, -2]} scale={2} />

      {!simplified && (
        <>
          <FloatingLaptop position={[0, -0.2, 0]} />
          <GlassPanel position={[-2.5, 1, -1]} rotation={[0, 0.4, 0.1]} />
          <GlassPanel position={[2.8, 0.5, -0.5]} rotation={[0, -0.5, -0.1]} size={[1.4, 1]} />
          <GlassPanel position={[1.5, -1.2, 1]} rotation={[0.1, -0.3, 0]} size={[1, 0.8]} />
        </>
      )}

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <RotatingCube position={simplified ? [0, 0, 0] : [-1.8, -0.8, 1.2]} size={simplified ? 0.8 : 0.5} />
      </Float>

      {!simplified && (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          <RotatingCube position={[2.2, 1.5, 0.5]} size={0.35} />
        </Float>
      )}

      <Particles count={simplified ? 80 : 200} />

      {!simplified && (
        <Stars radius={50} depth={30} count={1500} factor={2} saturation={0} fade speed={0.5} />
      )}
    </>
  );
}

export default function HeroScene({ simplified = false, mouseOffset = { x: 0, y: 0 } }) {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={simplified ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !simplified, alpha: true }}
        style={{
          transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Suspense fallback={null}>
          <SceneContent simplified={simplified} />
        </Suspense>
      </Canvas>
    </div>
  );
}
