import { Loader, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import Room from "./Scenes/Welcome/Models/Room";
import Cyborg from "./Scenes/Welcome/Models/Cyborg";
import Space from "./Scenes/Welcome/Models/Space";
import Drone from "./Scenes/Welcome/Models/Drone";
import Drone2 from "./Scenes/Welcome/Models/Drone2";
import Auto from "./Scenes/Welcome/Models/Auto";
import SpiderMan from "./Scenes/Welcome/Models/SpiderMan";
import SpiderManSleep from "./Scenes/Welcome/Models/SpiderManSleep";
import Lights from "./Staging/Lights";
import Environment from "./Staging/Environment";


const textureLoader = new THREE.TextureLoader();

const nuevaTexturaCaja = textureLoader.load('/textura1.jpg');
const nuevaTextura = textureLoader.load('/textura2.jpg');
const nuevaTexturaToro = textureLoader.load('/textura3.jpg');
const nuevaTexturaCone = textureLoader.load('/textura4.jpg');

const Experience = () => {
  const boxRef = useRef();
  const sphereRef = useRef();
  const coneRef = useRef();
  const torusRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    const x1 = 3 * Math.cos(time);
    const y1 = 3 * Math.sin(time);

    const x2 = 3 * Math.cos(time + 0);
    const y2 = 3 * Math.sin(time + 1);

    const x3 = 3 * Math.cos(time + 2);
    const y3 = 3 * Math.sin(time + 3);

    const x4 = 3 * Math.cos(time + 3);
    const y4 = 3 * Math.sin(time + 5);

    const separationX = 3;
    const separationY = 3;

    boxRef.current.position.x = x1 * delta - separationX;
    boxRef.current.position.y = y1 - separationY;
    boxRef.current.position.z = 8;

    sphereRef.current.position.x = x2 * delta;
    sphereRef.current.position.y = y2 - separationY;
    sphereRef.current.position.z = 9;

    coneRef.current.position.x = x3 * delta + separationX;
    coneRef.current.position.y = y3 - separationY;
    coneRef.current.position.z = 10;

    torusRef.current.position.x = x4 * delta + 2 * separationX;
    torusRef.current.position.y = y4 - separationY;
    torusRef.current.position.z = 11;
  });

  return (
    <>
       
      <OrbitControls makeDefault />
      <Lights />
      <Room />
      <Cyborg />
      <Space />
      <Drone />
      <Drone2 />
      <Auto />
      <SpiderMan />
      <SpiderManSleep />
      <Environment/>
      
      
      
      <group ref={boxRef} position={[2, 2, -3]} scale={0.6}>
        <mesh castShadow> {/* Habilita el objeto para proyectar sombras */}
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            map={nuevaTexturaCaja}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      <group ref={sphereRef} position={[-4, 8, -2]} scale={0.6}>
        <mesh castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={nuevaTextura}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      <group ref={coneRef} position={[10, 10, 5]} scale={0.6}>
        <mesh castShadow>
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial
            map={nuevaTexturaCone}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      <group ref={torusRef} position={[-2, 0, -5]}>
        <mesh position={[-2, 0, -5]} rotation={[-Math.PI / 4, 0, 0]} scale={0.6}>
          <torusGeometry args={[2, 1, 32, 64]} />
          <meshStandardMaterial
            map={nuevaTexturaToro}
            metalness={0.9}
            roughness={0.1}
          />
          
        </mesh>
        
      </group>  
    </>
  );
};

export default Experience;
