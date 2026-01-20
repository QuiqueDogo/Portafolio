import { ConfigProvider, theme } from 'antd'
import { Experience } from './scene/Experience'
import Overlay from './ui/Overlay'

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: '#00b96b',
                    colorBgBase: '#000000',
                    fontFamily: 'Inter, monospace'
                },
            }}
        >
            <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <Experience />

                {/* Overlay Container */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 10
                }}>
                    <Overlay />
                </div>
            </div>
        </ConfigProvider>
    )
}

export default App
