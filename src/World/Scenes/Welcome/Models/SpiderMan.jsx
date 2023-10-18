import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpiderMan = () => {
    const spiderManRef = useRef();
    const spiderManModel = useGLTF('/assets/models/astronaut/source/spiderMan.glb');
    const { animations } = spiderManModel;

    const { actions } = useAnimations(animations, spiderManRef);

    useEffect(() => {
        const action = actions["Swing"];
        if (action) {
            action.play().reset(1).setLoop(THREE.LoopOnce);
        }
    }, [actions]);

    return (
        <mesh ref={spiderManRef} position={[-1, 0.7, -4.1]} rotation={[0, -Math.PI * 0.15, 0]} scale={[1.7, 1.7, 1.7]} receiveShadow>
            <primitive object={spiderManModel.scene} />
        </mesh>
    );
};

export default SpiderMan;
