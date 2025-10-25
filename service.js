document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeButton = document.querySelector('.close-button');
    const contentWrapper = document.querySelector('.content-wrapper');
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('show', isMenuOpen);
        if (isMenuOpen) {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            contentWrapper.appendChild(overlay);
            overlay.addEventListener('click', toggleMenu);
        } else {
            const overlay = contentWrapper.querySelector('.overlay');
            if (overlay) {
                contentWrapper.removeChild(overlay);
            }
        }
    };

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    if (closeButton) {
        closeButton.addEventListener('click', toggleMenu);
    }

    const toggleChevron = document.querySelector('.toggle-chevron');

    if (toggleChevron) {
        toggleChevron.addEventListener('click', (e) => {
            e.stopPropagation();
            const userTicketWrapper = document.querySelector('.user-ticket-wrapper');
            userTicketWrapper.classList.toggle('collapsed');
        });
    }
});