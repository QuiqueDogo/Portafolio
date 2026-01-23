import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Lights } from './Lights'
import { LabEnvironment } from './LabEnvironment'
import { CameraRig } from './CameraRig'

export const Experience = () => {
    return (
        <>
            <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
                <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
                <CameraRig />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} />
                <Lights />
                <Suspense fallback={null}>
                    <LabEnvironment />
                </Suspense>
                <fog attach="fog" args={['#050505', 5, 30]} />
                <color attach="background" args={['#050505']} />
            </Canvas>
            <Loader />
        </>
    )
}
