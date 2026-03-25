/* 
Micro-Animations & Visual Enhancements
Author: Antigravity
Purpose: Add interactive elements to the UI
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Subtle Parallax Effect for the glass box
    const glassBox = document.querySelector('.glass-box');
    const nextBtn = document.getElementById('next-btn');
    const mainMsg = document.getElementById('target-message');
    const subMsg = document.getElementById('target-sub-message');

    const quotes = [
        { main: "오늘도 힘내세요!", sub: "당신의 하루가 찬란하게 빛나길 바랍니다." },
        { main: "포기하지 마세요.", sub: "가장 어두운 밤이 지나면 반드시 해가 뜹니다." },
        { main: "충분히 잘하고 있어요.", sub: "당신의 노력은 언젠가 큰 열매를 맺을 거예요." },
        { main: "어제보다 나은 오늘.", sub: "작은 변화가 모여 위대한 결과를 만듭니다." },
        { main: "당신은 특별합니다.", sub: "세상에 단 하나뿐인 소중한 존재라는 걸 잊지 마세요." },
        { main: "새로운 시작입니다.", sub: "오늘이라는 기회를 즐거운 마음으로 맞이하세요." }
    ];

    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        // Simple Fade Transition
        mainMsg.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        subMsg.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        mainMsg.style.opacity = '0';
        subMsg.style.opacity = '0';
        mainMsg.style.transform = 'translateY(-10px)';
        subMsg.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % quotes.length;
            mainMsg.textContent = quotes[currentIndex].main;
            subMsg.textContent = quotes[currentIndex].sub;

            mainMsg.style.opacity = '1';
            subMsg.style.opacity = '1';
            mainMsg.style.transform = 'translateY(0)';
            subMsg.style.transform = 'translateY(0)';
        }, 400);
    });
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        
        glassBox.style.transition = 'transform 0.1s ease-out';
        glassBox.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    // 2. Simple Particle System (Vanilla JS)
    const particleContainer = document.getElementById('particles-js');
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }

    function createParticle(container) {
        const p = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * -15;

        p.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: moveParticle ${duration}s linear infinite ${delay}s;
            pointer-events: none;
        `;
        
        container.appendChild(p);
    }

    // Add keyframes dynamically for particles
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes moveParticle {
            0% { transform: translate(0, 0) scale(1); opacity: 0; }
            30% { opacity: 0.6; }
            100% { transform: translate(${Math.random() * 200 - 100}px, ${-100 - Math.random() * 100}px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);
});
