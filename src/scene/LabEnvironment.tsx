import { Float, MeshReflectorMaterial, Text, Box, Grid } from '@react-three/drei'

// Minimalist Keyboard Component
const Keyboard = (props: any) => {
    return (
        <group {...props}>
            {/* Base */}
            <Box args={[4, 0.2, 1.5]} position={[0, 0, 0]} castShadow receiveShadow>
                <meshStandardMaterial color="#222" roughness={0.2} metalness={0.8} />
            </Box>
            {/* Keys - Procedural Grid */}
            {Array.from({ length: 15 }).map((_, i) => (
                <group key={i} position={[(i - 7) * 0.25, 0.15, 0]}>
                    {Array.from({ length: 5 }).map((_, j) => (
                        <Box key={`${i}-${j}`} args={[0.2, 0.1, 0.2]} position={[0, 0, (j - 2) * 0.25]}>
                            <meshStandardMaterial color="#333" emissive="#00b96b" emissiveIntensity={Math.random() * 0.5} roughness={0.2} />
                        </Box>
                    ))}
                </group>
            ))}
        </group>
    )
}

// Minimalist Computer/Monitor Component
const Computer = ({ position, rotation, scale = 1 }: any) => {
    return (
        <group position={position} rotation={rotation} scale={scale}>
            {/* Screen */}
            <Box args={[2, 1.5, 0.1]} position={[0, 1, 0]} castShadow>
                <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} />
            </Box>
            {/* Display Glow */}
            <Box args={[1.9, 1.4, 0.05]} position={[0, 1, 0.05]}>
                <meshStandardMaterial color="#000" emissive="#00b96b" emissiveIntensity={0.2} />
            </Box>
            {/* Stand */}
            <Box args={[0.2, 1, 0.1]} position={[0, 0.5, 0]} castShadow>
                <meshStandardMaterial color="#222" />
            </Box>
            {/* Base */}
            <Box args={[0.8, 0.1, 0.8]} position={[0, 0, 0]} castShadow>
                <meshStandardMaterial color="#222" />
            </Box>
        </group>
    )
}

export const LabEnvironment = () => {
    return (
        <group>
            {/* Floor with Reflections */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={50}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#1a1a1a"
                    metalness={0.5}
                    mirror={0}
                />
            </mesh>

            {/* Back Wall (Perspective anchor) */}
            <mesh position={[0, 8, -15]} receiveShadow>
                <planeGeometry args={[100, 20]} />
                <meshStandardMaterial color="#111" roughness={0.5} metalness={0.2} />
            </mesh>

            {/* Subtle Grid on Back Wall */}
            <Grid
                position={[0, -2, -14.9]}
                rotation={[Math.PI / 2, 0, 0]}
                args={[40, 40]}
                cellSize={1}
                sectionSize={5}
                sectionColor="#333"
                cellColor="#222"
                fadeDistance={20}
                fadeStrength={1}
            />

            {/* Main Desk Area with Keyboard */}
            <group position={[0, -1, -3]}>
                <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                    <Keyboard rotation={[0.4, 0, 0]} position={[0, 0, 0]} />
                </Float>
            </group>

            {/* Background Computers filling empty space */}
            <group position={[0, -2, -8]}>
                <Computer position={[-4, 0, 2]} rotation={[0, 0.5, 0]} />
                <Computer position={[4, 0, 2]} rotation={[0, -0.5, 0]} />
                <Computer position={[-8, 0, 5]} rotation={[0, 1, 0]} scale={1.2} />
                <Computer position={[8, 0, 5]} rotation={[0, -1, 0]} scale={1.2} />

                {/* Structure Columns */}
                <Box args={[1, 15, 1]} position={[-15, 5, -5]}>
                    <meshStandardMaterial color="#050505" />
                </Box>
                <Box args={[1, 15, 1]} position={[15, 5, -5]}>
                    <meshStandardMaterial color="#050505" />
                </Box>

                {/* Stacked Servers/Towers */}
                <Box args={[2, 6, 2]} position={[-12, 1, 0]}>
                    <meshStandardMaterial color="#111" />
                </Box>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Box key={i} args={[1.8, 0.05, 1.9]} position={[-12, -1.8 + (i * 0.6), 0.1]}>
                        <meshStandardMaterial emissive="#00b96b" emissiveIntensity={0.8} color="#0f0" />
                    </Box>
                ))}

                <Box args={[2, 6, 2]} position={[12, 1, 0]}>
                    <meshStandardMaterial color="#111" />
                </Box>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Box key={i} args={[1.8, 0.05, 1.9]} position={[12, -1.8 + (i * 0.6), 0.1]}>
                        <meshStandardMaterial emissive="#108ee9" emissiveIntensity={0.8} color="#00f" />
                    </Box>
                ))}
            </group>

            {/* Floating Code Text - Bigger and further back */}
            <group position={[0, 4, -14]}>
                <Text
                    fontSize={5}
                    color="#222"
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={0.5}
                >
                    C O D E  L A B
                </Text>
            </group>
        </group>
    )
}
