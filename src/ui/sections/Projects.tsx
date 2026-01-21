import React from 'react';
import { Card, Tag, Button, Row, Col, Typography } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projectsData = [
        {
            title: "Project Alpha",
            description: t('project.alpha'),
            tags: ["React", "Three.js", "GraphQL"],
            image: "https://placehold.co/600x400/1a1a1a/FFF?text=Alpha",
            demo: "#",
            repo: "#"
        },
        {
            title: "Neon Commerce",
            description: t('project.neon'),
            tags: ["Next.js", "Stripe", "Tailwind"],
            image: "https://placehold.co/600x400/222/0f0?text=Neon",
            demo: "#",
            repo: "#"
        },
        {
            title: "AI Chat Interface",
            description: t('project.chat'),
            tags: ["WebSockets", "Node.js", "OpenAI"],
            image: "https://placehold.co/600x400/000/00f?text=AI+Chat",
            demo: "#",
            repo: "#"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="section-container section-right"
        >
            <Card
                title={<Title level={3} style={{ margin: 0 }}>{t('active_projects')}</Title>}
                bordered={false}
                style={{ background: 'transparent', boxShadow: 'none' }}
                headStyle={{ border: 'none', color: '#fff' }}
                bodyStyle={{ padding: 0 }}
            >
                <Row gutter={[16, 16]}>
                    {projectsData.map((project, index) => (
                        <Col span={24} key={index}>
                            <Card
                                hoverable
                                style={{ background: 'rgba(20, 20, 20, 0.8)', border: '1px solid #333', backdropFilter: 'blur(5px)' }}
                                bodyStyle={{ padding: '16px' }}
                            >
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <div style={{
                                            background: '#333',
                                            height: '100%',
                                            minHeight: '100px',
                                            borderRadius: '8px',
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }} />
                                    </Col>
                                    <Col span={16}>
                                        <Title level={4} style={{ color: '#fff', marginTop: 0 }}>{project.title}</Title>
                                        <p style={{ color: '#ccc' }}>{project.description}</p>
                                        <div style={{ marginBottom: '12px' }}>
                                            {project.tags.map(tag => (
                                                <Tag key={tag} color="cyan">{tag}</Tag>
                                            ))}
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <Button type="primary" size="small" icon={<LinkOutlined />} href={project.demo} target="_blank">{t('demo')}</Button>
                                            <Button type="default" size="small" icon={<GithubOutlined />} href={project.repo} target="_blank">{t('code')}</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </motion.div>
    );
};

export default Projects;
