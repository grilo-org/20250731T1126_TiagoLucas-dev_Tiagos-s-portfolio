'use client'

import { useRef, useEffect } from 'react';

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Define dimensões do canvas conforme a janela
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Configuração de partículas (exemplo)
        const numParticles = 20;
        let particles = [];

        // Função para inicializar as partículas
        function initParticles() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    radius: 2
                });
            }
        }

        // Função para desenhar e atualizar a animação
        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Desenha cada partícula
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Atualiza posição das partículas
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Rebater ao atingir as bordas
                if (p.x < 0 || p.x > width) p.vx = -p.vx;
                if (p.y < 0 || p.y > height) p.vy = -p.vy;
            });

            requestAnimationFrame(animate);
        }

        // Inicializa e inicia a animação
        initParticles();
        animate();

        // Atualiza as dimensões do canvas se a janela for redimensionada
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        
            <div className="z-[-1] fixed opacity-50

">
                <canvas ref={canvasRef}/>
            </div>
    );
}
