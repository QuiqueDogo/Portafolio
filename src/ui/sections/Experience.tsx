import React from 'react';
import { Timeline, Card, Typography } from 'antd';
import { ClockCircleOutlined, CodeOutlined, LaptopOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const Experience: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            style={{
                position: 'absolute',
                top: '15%',
                left: '5%',
                width: '35%',
                maxHeight: '70%',
                overflowY: 'auto',
                pointerEvents: 'auto',
                paddingRight: '20px'
            }}
        >
            <Card
                title={<Title level={3} style={{ margin: 0 }}>Experience Log</Title>}
                bordered={false}
                style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid #333' }}
                headStyle={{ borderBottom: '1px solid #333', color: '#fff' }}
                bodyStyle={{ padding: '24px 24px 0 24px' }}
            >
                <Timeline
                    mode="left"
                    items={[
                        {
                            label: '2023 - Present',
                            color: 'green',
                            dot: <CodeOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Text strong style={{ fontSize: '1.1rem', color: '#fff' }}>Senior Font-End Developer</Text>
                                    <br />
                                    <Text type="secondary">Tech Corp Inc.</Text>
                                    <br />
                                    <Text style={{ color: '#ccc' }}>Leading the migration to React 18, implementing micro-frontends architecture, and mentoring junior developers.</Text>
                                </>
                            ),
                        },
                        {
                            label: '2021 - 2023',
                            color: 'blue',
                            dot: <LaptopOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Text strong style={{ fontSize: '1.1rem', color: '#fff' }}>Full Stack Developer</Text>
                                    <br />
                                    <Text type="secondary">Digital Solutions Agency</Text>
                                    <br />
                                    <Text style={{ color: '#ccc' }}>Developed e-commerce platforms using Next.js and Node.js. Optimized database queries and improved site performance by 40%.</Text>
                                </>
                            ),
                        },
                        {
                            label: '2019 - 2021',
                            color: 'gray',
                            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                            children: (
                                <>
                                    <Text strong style={{ fontSize: '1.1rem', color: '#fff' }}>Junior Web Developer</Text>
                                    <br />
                                    <Text type="secondary">StartUp Rocket</Text>
                                    <br />
                                    <Text style={{ color: '#ccc' }}>Built responsive landing pages and maintained internal dashboard tools using Vue.js.</Text>
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
