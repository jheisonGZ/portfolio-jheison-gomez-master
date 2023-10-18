import React from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import "./Info/info.css";
import Experience from "./World/Experience";
import { Loader } from "@react-three/drei"
import Informacion from "./Informacion";


const App = () => {
  return (
    <>
      <Canvas camera={{ position: [2, 0, 5] }}>
        <mesh className="mesh-container">
          <Informacion
            nombre="soy: JHEISON GOMEZ!!"
            biografia="ESTUDIANTE DE DESARROLLO THREE.JS"
          />
          <Experience />
        </mesh>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
