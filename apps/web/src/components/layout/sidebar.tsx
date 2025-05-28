"use client"

import { motion } from 'framer-motion';
import {
    Activity,
    BarChart,
    Code,
    Database,
    GitBranch,
    Github,
    Layers,
    LucideBox,
    LucideChartLine,
    LucideUser,
    Network,
    Rocket,
    Server,
    Settings,
    Shield,
    Store,
    Terminal,
    Users
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarProps = {
    onPageChange: (page: string) => void;
}

const Sidebar = ({ onPageChange }: SidebarProps) => {
    const [location] = usePathname();

    const navItems = [
        { path: '/', label: 'Dashboard', icon: LucideChartLine },
        { path: '/applications', label: 'Applications', icon: Rocket },
        { path: '/deployments', label: 'Deployments', icon: GitBranch },
        { path: '/environments', label: 'Environments', icon: Layers },
        { path: '/github', label: 'GitHub', icon: Github },
        { path: '/monitoring', label: 'Monitoring', icon: Activity },
        { path: '/logs', label: 'Logs', icon: Terminal },
        { path: '/team', label: 'Team', icon: Users },
        { path: '/servers', label: 'Servers', icon: Server },
        { path: '/marketplace', label: 'Marketplace', icon: Store },
        { path: '/database', label: 'Database', icon: Database },
        { path: '/developer-tools', label: 'Dev Tools', icon: Code },
        { path: '/analytics', label: 'Analytics', icon: BarChart },
        { path: '/security', label: 'Security', icon: Shield },
        { path: '/pipelines', label: 'CI/CD', icon: Network },
        { path: '/settings', label: 'Settings', icon: Settings }
    ];

    const isActive = (path: string) => {
        if (path === '/' && location === '/') return true;
        if (path !== '/' && location.startsWith(path)) return true;
        return false;
    };
    return (
        <aside className="w-64 glass border-r border-slate-600/50 flex flex-col">
            {/* logo */}
            <div className="p-6 border-b border-slate-600/50">
                <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-primary to-purple-500 flex items-center justify-center">
                        <LucideBox />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                            PortForge
                        </h1>
                        <p className="text-xs text-slate-400">Mini-PaaS Platform</p>
                    </div>
                </motion.div>
            </div>
            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link href={item.path}>
                            <div
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${isActive(item.path)
                                    ? 'bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 text-primary'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 cyber-button'
                                    }`}
                                onClick={() => onPageChange(item.label)}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </nav>

            {/* User Profile */}
            <motion.div
                className="p-4 border-t border-slate-600/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="flex items-center space-x-3 p-3 rounded-lg glass">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                        <LucideUser />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-200">René Schober</p>
                        <p className="text-xs text-slate-400 truncate">rene@portforge.dev</p>
                    </div>
                </div>
            </motion.div>
        </aside>
    );
}

export { Sidebar };
