import React from 'react';
import { Timeline, Card, Typography } from 'antd';
import { ClockCircleOutlined, CodeOutlined, LaptopOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const Experience: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="section-container section-left"
        >
            <Card
                title={<Title level={3} style={{ margin: 0 }}>{t('experience_log')}</Title>}
                variant="outlined"
                style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid #333' }}
                styles={{ header: { borderBottom: '1px solid #333', color: '#fff' }, body: { padding: '24px 24px 0 24px' } }}
            >
                <Timeline
                    mode="alternate"
                    items={[
                        {
                            label: t('period.present'),
                            color: 'green',
                            dot: <CodeOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Text strong style={{ fontSize: '1.1rem', color: '#fff' }}>{t('role.senior')}</Text>
                                    <br />
                                    <Text type="secondary">{t('company.tech')}</Text>
                                    <br />
                                    <Text style={{ color: '#ccc' }}>{t('desc.senior')}</Text>
                                </>
                            ),
                        },
                        {
                            label: t('period.2021'),
                            color: 'blue',
                            dot: <LaptopOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Text strong style={{ fontSize: '1.1rem', color: '#fff' }}>{t('role.fullstack')}</Text>
                                    <br />
                                    <Text type="secondary">{t('company.digital')}</Text>
                                    <br />
                                    <Text style={{ color: '#ccc' }}>{t('desc.fullstack')}</Text>
                                </>
                            ),
                        },
                        {
                            label: t('period.2019'),
                            color: 'gray',
                            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Text strong style={{ fontSize: '1.1rem', color: '#fff' }}>{t('role.junior')}</Text>
                                    <br />
                                    <Text type="secondary">{t('company.startup')}</Text>
                                    <br />
                                    <Text style={{ color: '#ccc' }}>{t('desc.junior')}</Text>
                                </>
                            ),
                        },
                    ]}
                />
            </Card>
        </motion.div>
    );
};

export default Experience;
