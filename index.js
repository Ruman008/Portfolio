document.addEventListener('DOMContentLoaded', () => {
            // --- Mobile Menu functionality ---
            const menuButton = document.getElementById('menu-button');
            const closeMenuButton = document.getElementById('close-menu');
            const mobileMenu = document.getElementById('mobile-menu');

            menuButton.addEventListener('click', () => {
                mobileMenu.classList.add('active');
            });

            closeMenuButton.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });

            // --- Scroll animation functionality ---
            const sections = document.querySelectorAll('.animate-on-scroll');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, {
                root: null, // viewport as the root
                threshold: 0.1 // 10% of the item is visible
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        });