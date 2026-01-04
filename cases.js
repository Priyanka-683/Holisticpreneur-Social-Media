document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GSAP ENTRANCE ANIMATIONS
    // Header setup
    gsap.from("header h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out"
    });

    // Step Cards Stagger
    gsap.from(".step-card", {
        opacity: 0,
        x: -30,
        stagger: 0.3,
        duration: 1.2,
        delay: 0.5,
        ease: "expo.out"
    });

    // 2. MOUSE TRACKING EFFECT (Luxury Feel)
    const cards = document.querySelectorAll('.step-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // 3. SCROLL REVEAL (Simple version if not using more GSAP)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.step-card').forEach(card => {
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});