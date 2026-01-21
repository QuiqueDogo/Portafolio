import React from 'react';
import { Card, Typography, Progress, Row, Col, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const skillsData = [
    { name: "React / Next.js", level: 95 },
    { name: "Three.js / R3F", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "GraphQL", level: 70 }
];

const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="section-container section-center"
        >
            <Card
                title={<Title level={3} style={{ margin: 0, textAlign: 'center' }}>{t('system_capabilities')}</Title>}
                bordered={false}
                style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid #00b96b' }}
                headStyle={{ borderBottom: '1px solid #333', color: '#fff' }}
                bodyStyle={{ padding: '24px' }}
            >
                <Row gutter={[24, 24]}>
                    {skillsData.map((skill, index) => (
                        <Col span={12} key={index}>
                            <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#fff', fontWeight: 500 }}>{skill.name}</span>
                                <span style={{ color: '#00b96b' }}>{skill.level}%</span>
                            </div>
                            <Progress
                                percent={skill.level}
                                showInfo={false}
                                strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
                                trailColor="#333"
                            />
                        </Col>
                    ))}
                </Row>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    <Title level={5} style={{ color: '#ccc' }}>{t('core_stack')}</Title>
                    <div>
                        {['Vite', 'Zustand', 'Ant Design', 'Framer Motion', 'GSAP', 'Blender'].map(tag => (
                            <Tag key={tag} color="geekblue" style={{ margin: '5px' }}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default Skills;
