import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Auto = () => {
    const autoRef = useRef();
    const autoModel = useGLTF('/assets/models/astronaut/source/auto.glb'); // Cambia la ruta al modelo GLTF del auto
    const { animations } = autoModel;

    const { actions } = useAnimations(animations, autoRef);

    useEffect(() => {
        const action = actions["Take 001"];
        if (action) {
            action.play();
        }
    }, [actions]);

    return (
        <mesh ref={autoRef} position={[-2, 0.6, 1]} rotation={[0, -Math.PI * 0.15, 0]} scale={[0.60, 0.60, 0.60]}>
            <primitive object={autoModel.scene} />
        </mesh>
    );
};

export default Auto;

useGLTF.preload('/assets/models/astronaut/source/auto.glb'); // Cambia la ruta de precarga al modelo GLTF del auto
