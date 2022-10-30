import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

const BoxAnimation = () => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
	return (
		<mesh
			onClick={() => {
				api.velocity.set(0, 2, 0);
			}}
			ref={ref}
			position={[0, 2, 0]}
		>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	);
}

export default BoxAnimation