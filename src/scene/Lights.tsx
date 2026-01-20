export const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.2} color="#b0c4de" />
            <directionalLight
                position={[5, 10, 5]}
                intensity={0.8}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
            <pointLight position={[-2, 2, -2]} intensity={0.5} color="#00ffff" />
            <pointLight position={[2, 3, 0]} intensity={0.3} color="#ff00ff" />
        </>
    )
}
