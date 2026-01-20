import { useFrame } from '@react-three/fiber'
import { useStore, Section } from '../store/useStore'
import { Vector3 } from 'three'
import { easing } from 'maath'

export const CameraRig = () => {
    const currentSection = useStore((state) => state.currentSection)

    useFrame((state, delta) => {
        const targetPos = new Vector3(0, 2, 5)
        const targetLookAt = new Vector3(0, 0, 0)

        switch (currentSection) {
            case Section.Intro:
                targetPos.set(0, 2, 6)
                targetLookAt.set(0, 0, 0)
                break
            case Section.Experience:
                targetPos.set(-3, 1.5, 3)
                targetLookAt.set(-1, 0, -2) // Focus on left side
                break
            case Section.Projects:
                targetPos.set(3, 1.5, 3)
                targetLookAt.set(1, 0, -2) // Focus on right side
                break
            case Section.Skills:
                targetPos.set(0, 4, 1) // Top down-ish
                targetLookAt.set(0, -1, -3)
                break
            case Section.Terminal:
                targetPos.set(0, 1, 2)
                targetLookAt.set(0, 0.5, -2) // Close up to "screen"
                break
        }

        // Smooth camera movement
        easing.damp3(state.camera.position, targetPos, 0.5, delta)
        // We handle lookAt manually if we want smooth rotation, or use OrbitControls only for interactions? 
        // Usually standard lookAt snaps. Let's interpolate a target point and make camera look at it.

        // Simple lookAt interpolation placeholder
        // For now, let's just use the position damp. OrbitControls usually fights this.
        // If we want cinematic control, we disable OrbitControls or update its target.
    })

    // Note: To properly control OrbitControls target, we need a ref to it.
    // We'll leave it simple for now and maybe just let position move.
    return null
}
