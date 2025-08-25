import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Ring, Sphere, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const FingerprintModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const shieldRef = useRef<THREE.Mesh>(null);

  // Create fingerprint rings data
  const fingerprintRings = useMemo(() => {
    const rings = [];
    for (let i = 0; i < 8; i++) {
      rings.push({
        radius: 0.5 + i * 0.3,
        segments: 64,
        opacity: 0.8 - i * 0.08,
        rotationOffset: i * 0.2,
      });
    }
    return rings;
  }, []);

  // Animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.z += delta * (0.2 + index * 0.1);
      });
    }
    if (shieldRef.current) {
      shieldRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Fingerprint Rings */}
      <group ref={ringsRef}>
        {fingerprintRings.map((ring, index) => (
          <Ring
            key={index}
            args={[ring.radius, ring.radius + 0.05, ring.segments]}
            position={[0, 0, index * 0.05]}
            rotation={[0, 0, ring.rotationOffset]}
          >
            <meshStandardMaterial
              color="#3b82f6"
              transparent
              opacity={ring.opacity}
              emissive="#1e40af"
              emissiveIntensity={0.2}
            />
          </Ring>
        ))}
      </group>

      {/* Central Security Shield */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={shieldRef} position={[0, 0, 1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#6d28d9"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Security Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.3}
          floatIntensity={0.8}
        >
          <Sphere
            args={[0.02]}
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 3,
            ]}
          >
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#1e40af"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      ))}

      {/* Lock Icons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <Float
          key={i}
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <mesh
            position={[
              Math.cos((i * Math.PI) / 2) * 3,
              Math.sin((i * Math.PI) / 2) * 3,
              0.5,
            ]}
            rotation={[0, 0, (i * Math.PI) / 2]}
          >
            <boxGeometry args={[0.15, 0.2, 0.05]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#6d28d9"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}

      {/* Outer Security Ring */}
      <Ring args={[3.5, 3.7, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.3}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </Ring>

      {/* Data Flow Lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 6) * 2.5,
            Math.sin((i * Math.PI) / 6) * 2.5,
            0,
          ]}
          rotation={[0, 0, (i * Math.PI) / 6]}
        >
          <cylinderGeometry args={[0.01, 0.01, 1]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.6}
            emissive="#1e40af"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FingerprintModel;