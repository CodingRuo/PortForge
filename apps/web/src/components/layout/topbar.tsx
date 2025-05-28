"use client";

import { motion } from 'framer-motion';
// import NotificationCenter from '@/components/notifications/notification-center';

interface TopBarProps {
    currentPage: string;
    onNewApp?: () => void;
}

const TopBar = ({ currentPage, onNewApp }: TopBarProps) => {
    const runningServices = 3;

    return (
        <header className="h-16 glass border-l-0 border-b border-slate-600/50 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
                <motion.h2
                    className="text-2xl font-bold text-slate-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentPage}
                </motion.h2>
                <motion.div
                    className="flex items-center space-x-2 text-sm text-slate-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="status-indicator status-running"></span>
                    <span>{runningServices} services running</span>
                </motion.div>
            </div>

            <div className="flex items-center space-x-4">
                {/* Quick Actions
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        className="cyber-button px-4 py-2 rounded-lg text-sm font-medium text-slate-200 flex items-center space-x-2"
                        onClick={onNewApp}
                    >
                        <LucidePlus />
                        <span>New App</span>
                    </Button>
                </motion.div> */}

                {/* Landing Page Link */}
                {/* <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open('/landing', '_blank')}
                        className="text-slate-300 hover:text-primary"
                    >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        <SquareArrowOutUpRight />
                        Landing
                    </Button>
                </motion.div> */}

                {/* Notifications */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {/* <NotificationCenter /> */}
                </motion.div>
            </div>
        </header>
    );
}

export { TopBar };
