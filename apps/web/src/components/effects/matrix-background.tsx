"use client";

import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const matrixRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const matrix = matrixRef.current;
        if (!matrix) return;

        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let columns = Math.floor(window.innerWidth / 20);
        let drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            if (!matrix) return;

            let content = '';
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                const opacity = Math.random();
                content += `<span style="position: absolute; left: ${i * 20}px; top: ${drops[i] * 20}px; color: rgba(14, 165, 233, ${opacity}); font-size: 12px; font-family: monospace;">${text}</span>`;

                if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            matrix.innerHTML = content;
        }

        const interval = setInterval(draw, 100);

        const handleResize = () => {
            columns = Math.floor(window.innerWidth / 20);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="matrix-bg">
            <div
                ref={matrixRef}
                className="text-primary text-xs font-mono leading-none whitespace-pre"
            />
        </div>
    );
}

export { MatrixBackground };
