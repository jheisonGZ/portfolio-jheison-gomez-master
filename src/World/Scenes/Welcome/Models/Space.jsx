import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

const Space = () => {
    const { camera } = useThree(); // Accede a la cámara actual
    const spaceRef = useRef();
    const spaceModel = useGLTF('/assets/models/astronaut/source/space.glb');
    const { animations } = spaceModel;

    const { actions } = useAnimations(animations, spaceRef);

    useEffect(() => {
        const action = actions['Orbit']; // Asegúrate de que 'Static Pose' sea el nombre correcto de la animación en tu modelo.
        if (action) {
            action.setEffectiveTimeScale(0.1);
            action.play();
        }
    }, [actions]);

    // Ajusta la escala para que el objeto ocupe toda la pantalla
    const aspect = window.innerWidth / window.innerHeight;
    const scaleFactor = aspect > 5 ? aspect : 1; // Escala más grande si la pantalla es más ancha
    const scale = [scaleFactor, 1, 1];

    // Posiciona el objeto detrás de la cámara
    const distance = -5; // Distancia desde la cámara
    const position = [camera.position.x, camera.position.y, camera.position.z - distance];

    return (
        <mesh ref={spaceRef} position={0.10} scale={10}>
            <primitive object={spaceModel.scene} />
        </mesh>
    );
};

export default Space;

useGLTF.preload('/assets/models/astronaut/source/space.glb');
