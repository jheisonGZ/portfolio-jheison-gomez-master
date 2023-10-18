import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Drone2 = () => {
    const drone2Ref = useRef();
    const drone2Model = useGLTF("/assets/models/astronaut/source/drone2.glb");
    const { animations } = drone2Model;

    const { actions } = useAnimations(animations, drone2Ref);

    useEffect(() => {
        const action = actions["Scene"];
        if (action) {
            action.play();
        }
    }, [actions]);

    return (
        <mesh ref={drone2Ref} position={[1, 3, -3]} rotation={[0, -Math.PI * -0.30, 0.6]} scale={[1, 1,  1]}>
            <primitive object={drone2Model.scene} />
        </mesh>
    );
};

export default Drone2;

useGLTF.preload('/assets/models/astronaut/source/drone2.glb');
