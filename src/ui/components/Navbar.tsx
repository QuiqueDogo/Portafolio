import React from 'react';
import { Menu } from 'antd';
import { CodeOutlined, UserOutlined, ProjectOutlined, RocketOutlined } from '@ant-design/icons';
import { useStore, Section } from '../../store/useStore';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const { currentSection, setSection } = useStore();
    const { t } = useTranslation();

    const items = [
        { label: t('intro'), key: Section.Intro, icon: <RocketOutlined /> },
        { label: t('experience'), key: Section.Experience, icon: <UserOutlined /> },
        { label: t('projects'), key: Section.Projects, icon: <ProjectOutlined /> },
        { label: t('skills'), key: Section.Skills, icon: <CodeOutlined /> },
        { label: t('terminal'), key: Section.Terminal, icon: <span style={{ fontWeight: 'bold' }}>&gt;_</span> },
    ];

    return (
        <div style={{ pointerEvents: 'auto' }}>
            <Menu
                mode="horizontal"
                theme="dark"
                selectedKeys={[currentSection]}
                onClick={(e) => setSection(e.key as Section)}
                items={items}
                style={{
                    background: 'transparent',
                    borderBottom: 'none',
                    justifyContent: 'center',
                    fontSize: '1rem'
                }}
            />
        </div>
    );
};

export default Navbar;
