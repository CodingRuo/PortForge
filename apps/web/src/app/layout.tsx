import { Sidebar } from "@/components/layout/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactQueryProvider } from "./_providers/react-query/react-query-provider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PortForge",
    description: "PortForge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ReactQueryProvider>
                    <TooltipProvider>
                        <div className="min-h-screen text-slate-50 overflow-x-hidden">
                            <div className="min-h-screen flex">
                                <Sidebar />
                                <main className="flex-1 overflow-hidden">
                                    <div className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
                                        {children}
                                    </div>
                                </main>
                            </div>
                        </div>
                    </TooltipProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
