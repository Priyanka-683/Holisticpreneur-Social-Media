gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // Hero Entrance
    gsap.to(".h-card", { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" });

    // Section 01 Animation
    gsap.to(".p-card", {
        scrollTrigger: { trigger: ".planning-grid", start: "top 85%" },
        opacity: 1, y: 0, stagger: 0.15, duration: 0.8
    });

    // Section 02 Animation (Fixed)
    gsap.to(".c-card", {
        scrollTrigger: { trigger: ".creation-horizontal-grid", start: "top 85%" },
        opacity: 1, x: 0, y: 0, stagger: 0.2, duration: 1, ease: "power4.out"
    });

    // Stats Bar Animation
    gsap.from(".stat-item", {
        scrollTrigger: { trigger: ".stats-container", start: "top 90%" },
        scale: 0.8, opacity: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)"
    });
});











gsap.from(".stat-square", {
    duration: 1,
    scale: 0.5, 
    opacity: 1, 
    stagger: 0.2,
    ease: "back.out(1.7)", // Premium bounce effect
    scrollTrigger: {
        trigger: ".stats-wrapper",
        start: "top 85%",
    }
});














// Section 04 Category Cards Animation
gsap.from(".cat-card", {
    scrollTrigger: { trigger: ".category-grid", start: "top 85%" },
    opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.8, ease: "back.out(1.2)"
});

// Hooks Card Entrance
gsap.from(".hooks-main-card", {
    scrollTrigger: { trigger: ".hooks-main-card", start: "top 80%" },
    opacity: 0, y: 50, duration: 1, ease: "power4.out"
});

// Analytics Cards Side-Slide
gsap.from(".a-card", {
    scrollTrigger: { trigger: ".analytics-grid", start: "top 85%" },
    opacity: 0, x: (i) => i % 2 === 0 ? -50 : 50, duration: 1, stagger: 0.2
});

// Dashboard Stats Number Pop
gsap.from(".dash-stat", {
    scrollTrigger: { trigger: ".dashboard-container", start: "top 85%" },
    opacity: 0, y: 20, stagger: 0.2, duration: 0.8, ease: "power2.out"
});


















// Section 06 Entrance
gsap.from(".eng-card", {
    scrollTrigger: { trigger: ".engagement-grid", start: "top 85%" },
    opacity: 0, x: (i) => i === 0 ? -40 : 40, duration: 1, stagger: 0.2
});

// Selling Card Pop
gsap.from(".selling-main-card", {
    scrollTrigger: { trigger: ".selling-main-card", start: "top 85%" },
    opacity: 0, y: 50, duration: 1, ease: "power3.out"
});

gsap.from(".price-card", {
    scrollTrigger: {
        trigger: ".pricing-grid",
        start: "top 85%", // Screen ke thoda niche aate hi start hoga
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    clearProps: "all" // Animation ke baad cards ko original CSS par chhod dega
});
// ROI Squares Bounce
gsap.from(".roi-section .m-stat-box-purple", {
    scrollTrigger: { trigger: ".roi-section", start: "top 90%" },
    scale: 0.7, opacity: 0, stagger: 0.15, duration: 0.8, ease: "back.out(2)"
});




















// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Footer Box Ka Entrance (Niche se upar aayega thoda bounce ke saath)
gsap.from(".cta-box", {
    scrollTrigger: {
        trigger: ".footer-section",
        start: "top 80%", // Jab section screen par 80% niche ho tab start hoga
        toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

// 2. Features Grid (Ek-ek karke dikhenge - Stagger effect)
gsap.from(".cta-feat-item", {
    scrollTrigger: {
        trigger: ".cta-features-grid",
        start: "top 85%"
    },
    x: -30,
    opacity: 0,
    stagger: 0.15, // Ek ke baad ek card aayega
    duration: 0.8,
    ease: "back.out(1.7)"
});

// 3. Main Button Ka Pulse Effect (CTA image ke gradient button par)
gsap.to(".btn-gradient", {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// 4. Stars aur Trust Text Ka Fade In
gsap.from(".footer-trust", {
    scrollTrigger: {
        trigger: ".footer-trust",
        start: "top 95%"
    },
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5
});
















// Button Pulse Animation
gsap.to(".reel-btn", {
    scale: 1.03,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});