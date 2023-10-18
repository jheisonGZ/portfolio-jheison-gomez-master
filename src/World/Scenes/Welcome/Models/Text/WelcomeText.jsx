import { Suspense } from "react";
import WoodenFence from "./Models/WoodenFence";
import Bee from "./Models/Bee";
import Tree from "./Models/Tree";
import Floor from "./Models/Floor";
import Sign from "./Models/Sign";
import WelcomeText from "./Text/WelcomeText";

const Welcome = () => {
    return (
        <>
 
            <Suspense fallback={null}>
                <Bee position={[2, 2, 0]} scale={1.5} />
                <Tree position={[-2, 0, 2]} scale={0.04} />
                <WoodenFence position={[-1, 0, 2]} rotation-y={Math.PI / 2} />
                <WoodenFence position={[1, 0, 2]} rotation-y={-Math.PI / 2} />
                <Floor rotation-x={-Math.PI / 2} receiveShadow />
                <Sign >
                    <WelcomeText text={`  Welcome`} />
                </Sign>
            </Suspense>
        </>
    )
}

export default Welcome;