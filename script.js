function checkScroll() {
    // Tamam windows ko pakrain (Classes use ki hain)
    const containers = document.querySelectorAll('.scroll-window');

    containers.forEach(container => {
        // Sirf IS container ke andar wale text ko pakrain
        const textElement = container.querySelector('.scrolling-text-item');

        if (textElement) {
            // Logic: Agar text ki width container se bari hai (+2px buffer)
            const isOverflowing = textElement.scrollWidth > container.clientWidth + 2;

            if (isOverflowing) {
                // Agar bara hai toh animation wali class lagao
                textElement.classList.add('scrolling-text');
            } else {
                // Agar chota hai toh animation hata do
                textElement.classList.remove('scrolling-text');
            }
        }
    });
}

// Load aur Resize par run karen
window.addEventListener('load', checkScroll);
window.addEventListener('resize', checkScroll);
