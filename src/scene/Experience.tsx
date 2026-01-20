import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Lights } from './Lights'
import { LabEnvironment } from './LabEnvironment'
import { CameraRig } from './CameraRig'

export const Experience = () => {
    return (
        <>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
                <CameraRig />
                {/* Disable orbit controls when using CameraRig or allow limited movement */}
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} />
                <Lights />
                <Suspense fallback={null}>
                    <LabEnvironment />
                </Suspense>
                <fog attach="fog" args={['#242424', 5, 30]} />
            </Canvas>
            <Loader />
        </>
    )
}
