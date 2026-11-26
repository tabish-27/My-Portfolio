import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { BufferAttribute, BufferGeometry } from 'three'

function OrbitalObject() {
  const core = useRef(null)
  const ring = useRef(null)
  const group = useRef(null)
  const particles = useMemo(() => {
    const positions = new Float32Array(180 * 3)

    for (let index = 0; index < positions.length; index += 3) {
      positions[index] = (Math.random() - 0.5) * 7
      positions[index + 1] = (Math.random() - 0.5) * 7
      positions[index + 2] = (Math.random() - 0.5) * 4
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    return geometry
  }, [])

  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.08
      group.current.rotation.y += delta * 0.035
    }

    if (core.current) {
      core.current.rotation.y += delta * 0.18
      core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12
    }

    if (ring.current) {
      ring.current.rotation.z += delta * 0.08
    }
  })

  return (
    <group ref={group}>
        <mesh ref={core} scale={1.05}>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshPhysicalMaterial
            color="#d8fc63"
            roughness={0.2}
            metalness={0.48}
            clearcoat={1}
            clearcoatRoughness={0.12}
            wireframe
          />
        </mesh>
        <mesh scale={0.78}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#20251a"
            emissive="#53642a"
            emissiveIntensity={0.28}
            metalness={0.8}
            roughness={0.26}
          />
        </mesh>
        <mesh ref={ring} rotation={[1.15, 0.18, 0.3]}>
          <torusGeometry args={[1.55, 0.012, 12, 160]} />
          <meshBasicMaterial color="#d8fc63" transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[0.4, 1.1, 0.2]}>
          <torusGeometry args={[1.78, 0.006, 8, 160]} />
          <meshBasicMaterial color="#f3f1e9" transparent opacity={0.28} />
        </mesh>
      <points geometry={particles}>
        <pointsMaterial
          color="#d8fc63"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.54}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function OrbitalScene() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Canvas
      className="orbital-canvas"
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      fallback={<div className="rive-fallback">3D scene is unavailable on this device.</div>}
      aria-label="Animated 3D orbital object"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 3, 4]} intensity={16} color="#d8fc63" />
        <pointLight position={[-3, -2, 2]} intensity={7} color="#ff765e" />
        <OrbitalObject />
      </Suspense>
    </Canvas>
  )
}

export default OrbitalScene
