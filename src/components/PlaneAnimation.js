import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
const PlaneAnimation = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
      }));
      return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
      );
}

export default PlaneAnimation