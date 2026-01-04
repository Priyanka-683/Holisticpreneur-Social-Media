document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    gsap.from("#header-anim", { opacity: 0, y: -20, duration: 1 });
    gsap.from("#libraryForm", { opacity: 0, y: 30, duration: 1, delay: 0.3 });
});

document.getElementById('libraryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('libBtn');
    btn.innerText = "Processing Access...";
    btn.disabled = true;

    try {
        const response = await fetch("https://formspree.io/f/xanpwdjb", {
            method: "POST",
            body: new FormData(e.target),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            Swal.fire({
                title: 'Check WhatsApp!',
                text: 'The Viral Vault link is on its way.',
                icon: 'success',
                confirmButtonColor: '#8b5cf6'
            }).then(() => {
                window.location.href = "index.html";
            });
        }
    } catch (err) {
        Swal.fire('Error', 'Something went wrong', 'error');
        btn.disabled = false;
        btn.innerText = "Get Instant Access →";
    }
});