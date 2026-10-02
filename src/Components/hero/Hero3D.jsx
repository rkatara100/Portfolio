import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Particles = () => {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 12;
    return arr;
  }, []);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame((_, delta) => {
    const p = ref.current;
    p.rotation.y += delta * 0.04;
    p.rotation.x += (mouse.current.y * 0.3 - p.rotation.x) * 0.02;
    p.position.x += (mouse.current.x * 0.5 - p.position.x) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ff9f1c" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  );
};

const Hero3D = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
    <Particles />
  </Canvas>
);

export default Hero3D;
