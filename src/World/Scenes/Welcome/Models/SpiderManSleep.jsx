import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Importa THREE desde la biblioteca Three.js

const SpiderManSleep = () => { // Cambia el nombre del componente a SpiderManSleep
    const spiderManRef = useRef();
    const spiderManModel = useGLTF('/assets/models/astronaut/source/spiderManSleep.glb');
    const { animations } = spiderManModel;

    const { actions } = useAnimations(animations, spiderManRef);

    useEffect(() => { 
    const accion = actions['Spidey']; // Asegúrate de que 'First person' sea el nombre correcto de la animación en tu modelo.
    if (accion) {
        accion.setEffectiveTimeScale(0.1);
        accion.play();
    }
}, [actions]);

    return (
        <mesh ref={spiderManRef} position={[1, 1.2, -3.0]} rotation={[0, -Math.PI * 0.15, 0]} scale={[1.2, 1.2, 1.]}>
            <primitive object={spiderManModel.scene} />
        </mesh>
    );
};

export default SpiderManSleep; // Cambia el nombre de exportación a SpiderManSleep

useGLTF.preload('/assets/models/astronaut/source/spiderManSleep.glb');
