import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Drone = () => {
    const droneRef = useRef();
    const droneModel = useGLTF('/assets/models/astronaut/source/drone.glb');
    const { animations } = droneModel;

    const { actions } = useAnimations(animations, droneRef);

    useEffect(() => {
        const action = actions["Scene"];
        if (action) {
            action.play();
        }
    }, [actions]);

    return (
        <mesh ref={droneRef} position={[1, 4, 2]} rotation={[0, -Math.PI * -0.12, 0.5]} scale={[0.0010, 0.0010, 0.0010]}>
            <primitive object={droneModel.scene} />
        </mesh>
    );
};

export default Drone;

useGLTF.preload('/assets/models/astronaut/source/drone.glb');
