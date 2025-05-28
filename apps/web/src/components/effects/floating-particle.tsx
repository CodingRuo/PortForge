"use client";

import { useEffect, useRef } from 'react';

const FloatingParticles = () => {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const particlesContainer = particlesRef.current;
        if (!particlesContainer) return;

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animation = `particle ${Math.random() * 6 + 4}s linear infinite`;
            particlesContainer?.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 10000);
        }

        const interval = setInterval(createParticle, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div ref={particlesRef} id="particles" />;
}

export { FloatingParticles };
