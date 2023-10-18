import { useGLTF } from '@react-three/drei';
import { useState } from 'react';

const Room = () => {
    const modeloRoom = useGLTF('/assets/models/astronaut/source/room.glb');
    const [initialPosition] = useState([0, 0, 0]); // Estado para la posición inicial

    // Restaurar la posición inicial
    const resetPosition = () => {
        // Actualiza la posición del objeto a la posición inicial
        modeloRoom.scene.position.set(...initialPosition);
    };

    // Obtener las dimensiones de la pantalla
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calcular la escala basada en las dimensiones de la pantalla
    const scale = [screenWidth / 1000, screenHeight / 500, screenWidth / 1000];

    return (
        <mesh position={initialPosition} rotation={[0, 0, 0]} scale={[3,3,3]}>
            <primitive object={modeloRoom.scene} />
        </mesh>
    );
};

export default Room;

useGLTF.preload('/assets/models/astronaut/source/room.glb');
