import React from "react";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import BoxAnimation from "../components/BoxAnimation";
import PlaneAnimation from "../components/PlaneAnimation";

const Home = () => {
  return (
    <div style={{
      height:"100%"
    }}>
      <Navbar />
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <BoxAnimation />
          <PlaneAnimation />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;
