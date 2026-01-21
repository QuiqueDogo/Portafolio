import { Float, Text, Box, shaderMaterial } from '@react-three/drei'
import { extend, ReactThreeFiber } from '@react-three/fiber'
import * as THREE from 'three'

// Custom Shader for Dotted Grid
const DottedGridMaterial = shaderMaterial(
    {
        uSize: 1.0,
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    varying vec2 vUv;
    uniform float uSize;

    void main() {
        vec2 uv = vUv * uSize;
        vec2 grid = fract(uv);
        
        float lineWidth = 0.01; 
        
        float dx = min(grid.x, 1.0 - grid.x);
        float dy = min(grid.y, 1.0 - grid.y);
        
        float onLine = 0.0;
        
        if (dx < lineWidth) {
            if (sin(uv.y * 10.0) > -0.2) onLine = 0.45; 
        }
        
        if (dy < lineWidth) {
            if (sin(uv.x * 10.0) > -0.2) onLine = 0.45;
        }
        
        // Procedural Colors: Off-White Background, Green Lines
        vec3 bgColor = vec3(0.051, 0.051, 0.051); 
        vec3 lineColor = vec3(0.980, 0.980, 0.980); // #79fcc5ff
        
        vec3 finalColor = mix(bgColor, lineColor, onLine);
        gl_FragColor = vec4(finalColor, 1.0);
    }
  `
)

extend({ DottedGridMaterial })

// Add type definition for the new material
declare global {
    namespace JSX {
        interface IntrinsicElements {
            dottedGridMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof DottedGridMaterial> & {
                uColor?: THREE.Color
                uBgColor?: THREE.Color
                uSize?: number
                side?: THREE.Side
            }
        }
    }
}

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
            {/* Procedural Grid Room */}
            <mesh position={[0, 10, 0]} receiveShadow>
                <boxGeometry args={[30, 25, 15]} />
                <dottedGridMaterial side={THREE.BackSide} uSize={8} />
            </mesh>

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



        </group>
    )
}
