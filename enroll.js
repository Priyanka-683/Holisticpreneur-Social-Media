// 1. Entrance Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#header-anim", { opacity: 0, y: -30, duration: 1, ease: "power4.out" });
    gsap.from(".premium-field-group", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8, delay: 0.4 });
});

// 2. Services List Configuration
const services = [
    "Short-form Reels", "Static Content", "DM Management", 
    "Lead Generation", "Paid Ad Campaigns", "Brand Identity", 
    "SEO Strategy", "Engagement Growth", "Influencer Outreach"
];

const grid = document.getElementById('servicesGrid');
const masterAll = document.getElementById('masterAll');

// 3. Generating Services (Fixed Selection Logic)
services.forEach((s, i) => {
    const label = document.createElement('label');
    label.className = "cursor-pointer group block h-full";
    
    label.innerHTML = `
        <input type="checkbox" name="Services[]" value="${s}" class="peer hidden service-checkbox">
        <div class="service-card">
            <div class="check-dot"></div>
            <span class="block text-[8px] font-black text-slate-300 uppercase mb-1 tracking-widest">Option 0${i+1}</span>
            <span class="block text-[13px] font-bold text-slate-700">${s}</span>
        </div>
    `;

    // Event listener attached individually so it never breaks
    const checkbox = label.querySelector('.service-checkbox');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            masterAll.checked = false; // Uncheck 360 plan if specific service picked
        }
    });

    grid.appendChild(label);
});

// 4. Master All Plan Logic
masterAll.addEventListener('change', () => {
    if (masterAll.checked) {
        document.querySelectorAll('.service-checkbox').forEach(cb => {
            cb.checked = false; // Uncheck specific services if 360 plan is picked
        });
    }
});

// 5. Form Submission Handling
document.getElementById('enrollForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const originalText = btn.innerText;
    
    btn.innerText = "Securing Slot...";
    btn.disabled = true;

    try {
        const response = await fetch("https://formspree.io/f/xanpwdjb", {
            method: "POST",
            body: new FormData(e.target),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            Swal.fire({
                title: 'Application Confirmed!',
                text: 'Our team will contact you on WhatsApp within 24 hours.',
                icon: 'success',
                confirmButtonColor: '#8b5cf6',
                confirmButtonText: 'Great'
            }).then(() => {
                window.location.href = "index.html";
            });
        }
    } catch (err) {
        Swal.fire('Error', 'Please check your internet connection.', 'error');
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
});