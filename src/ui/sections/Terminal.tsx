import React, { useState, useRef, useEffect } from 'react';
import { Card, Input } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Terminal: React.FC = () => {
    const { t } = useTranslation();
    const [history, setHistory] = useState<string[]>(['> SYSTEM_READY...', '> Type "help" for commands.']);
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = '';

        switch (cleanCmd) {
            case 'help':
                response = 'Available commands: about, contact, skills, clear';
                break;
            case 'about':
                response = 'Luis.Dev - A creative developer navigating the digital frontier.';
                break;
            case 'contact':
                response = 'Email: luis@example.com | GitHub: @luisdev';
                break;
            case 'skills':
                response = 'React, Three.js, Node.js, TypeScript... (See Skills section)';
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                response = `Command not found: ${cmd}`;
        }

        setHistory(prev => [...prev, `> ${cmd}`, response]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
                position: 'absolute',
                bottom: '15%',
                left: '25%',
                width: '50%',
                pointerEvents: 'auto',
            }}
        >
            <Card
                title={t('terminal_access')}
                size="small"
                bordered={false}
                style={{ background: '#111', border: '1px solid #333', fontFamily: 'monospace' }}
                headStyle={{ background: '#222', color: '#ccc', borderBottom: '1px solid #333' }}
                bodyStyle={{ padding: '0px' }}
            >
                <div style={{ height: '300px', overflowY: 'auto', padding: '12px', color: '#0f0' }}>
                    {history.map((line, i) => (
                        <div key={i}>{line}</div>
                    ))}
                    <div ref={bottomRef} />
                </div>
                <Input
                    style={{ background: '#000', color: '#fff', border: 'none', borderTop: '1px solid #333' }}
                    prefix={<span style={{ color: '#0f0' }}>$</span>}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onPressEnter={() => {
                        if (input) {
                            handleCommand(input);
                            setInput('');
                        }
                    }}
                    placeholder="Enter command..."
                    autoFocus
                />
            </Card>
        </motion.div>
    );
};

export default Terminal;
