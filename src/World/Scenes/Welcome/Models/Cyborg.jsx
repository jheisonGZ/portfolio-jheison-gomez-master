import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Cyborg = () => {
    const cyborgRef = useRef();
    const cyborgModel = useGLTF('/assets/models/astronaut/source/cyborg.glb');
    const { animations } = cyborgModel;

    const { actions } = useAnimations(animations, cyborgRef);

    const startAnimation = () => {
        const action = actions["Experiment"];
        if (action) {
            action.setDuration(50); // Ajusta la duración de la animación según sea necesario
            action.play();
        }
    };

    useEffect(() => {
        startAnimation(); // Inicia la animación cuando el componente se monta

        // Establece un intervalo para repetir la animación cada 2 minutos (120,000 milisegundos)
        const intervalId = setInterval(startAnimation, 1500000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []);

    return (
        <mesh ref={cyborgRef} position={[-3.7, 1.2, -2.9]} rotation={[0, -Math.PI * 0.15, 0]} scale={[0.3, 0.3 , 0.3]}>
            <primitive object={cyborgModel.scene} />
        </mesh>
    );
};

export default Cyborg;

useGLTF.preload('/assets/models/astronaut/source/cyborg.glb');
