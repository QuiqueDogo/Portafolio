import React from 'react';
import Navbar from './components/Navbar';
import { useStore, Section } from '../store/useStore';
import { AnimatePresence, motion } from 'framer-motion';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Terminal from './sections/Terminal';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const Overlay: React.FC = () => {
    const currentSection = useStore(state => state.currentSection);
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            {/* Top Header */}
            <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'auto' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>LUIS.DEV</h1>
                    <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>{t('role_desc')}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Button
                        type="text"
                        icon={<GlobalOutlined />}
                        onClick={toggleLanguage}
                        style={{ color: '#fff' }}
                    >
                        {i18n.language.toUpperCase()}
                    </Button>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.5 }}>
                        {t('sys_status')}
                    </div>
                </div>
            </header>

            {/* Content Area Placeholder */}
            <main style={{ flex: 1, position: 'relative', pointerEvents: 'none' }}>
                <AnimatePresence mode='wait'>
                    {currentSection === Section.Intro && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{ position: 'absolute', bottom: '20%', left: '10%', maxWidth: '400px', pointerEvents: 'auto' }}
                        >
                            <h2 style={{ fontSize: '3rem', margin: 0 }}>{t('welcome')}</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                                {t('welcome_desc')}
                            </p>
                        </motion.div>
                    )}
                    {currentSection === Section.Experience && <Experience key="experience" />}
                    {currentSection === Section.Projects && <Projects key="projects" />}
                    {currentSection === Section.Skills && <Skills key="skills" />}
                    {currentSection === Section.Terminal && <Terminal key="terminal" />}
                </AnimatePresence>
            </main>

            {/* Bottom Navigation */}
            <footer style={{ paddingBottom: '20px' }}>
                <Navbar />
            </footer>
        </div>
    );
};

export default Overlay;
