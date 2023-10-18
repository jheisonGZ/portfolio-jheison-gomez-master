import { Center, Float, Text3D } from "@react-three/drei"

const WelcomeText = ({ text }) => {
    return (
        <Center
            position-y={3}
        >
            <Float
                speed={2} // Animation speed
                rotationIntensity={1.5} // XYZ rotation intensity
                floatIntensity={1.5} // Up/down float intensity
            >
                <Text3D
                    font={"/assets/fonts/Bangers_Regular.json"}
                    bevelEnabled
                    bevelSize={0.01}
                    bevelThickness={0.1}
                    height={0.1}
                    lineHeight={0.5}
                    letterSpacing={0.05}
                    size={0.25}
                >
                    {text}
                    <meshNormalMaterial />
                </Text3D>
            </Float>
        </Center>
    )
}

export default WelcomeText;