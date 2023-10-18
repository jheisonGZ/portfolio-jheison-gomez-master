import { ambientLight, SpotLight } from '@react-three/drei';
import { useEffect, useMemo, useRef } from "react";

const Lights = () => {
  const spotLightRef = useRef();
  
  return (
    <>
      <ambientLight intensity={2.5} />
      <SpotLight
        ref={spotLightRef}
        position={[0.9, 2.9, 2.5]}
        angle={Math.PI / 2} // Ángulo de apertura
        intensity={50} // Intensidad de la luz
        penumbra={0.1}
        color={"white"}
        distance={10} // Aumenté la distancia a 10
        castShadow // Habilita la emisión de sombras
        shadow-mapSize-width={1024} // Ancho del mapa de sombras
        shadow-mapSize-height={1024} // Alto del mapa de sombras
        shadow-camera-far={32} // Distancia máxima de la cámara de sombras
      />
    </>
  );
}

export default Lights;
