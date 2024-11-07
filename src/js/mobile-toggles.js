import { toggleAriaExpanded } from './_helpers';
export function mobileToggles() {
    const mainNavToggle = document.getElementById('main-nav-toggle');
    const mainSearchToggle = document.getElementById('main-search-toggle');

    // Start collapsed
    mainNavToggle.setAttribute('aria-expanded', 'false');
    mainSearchToggle.setAttribute('aria-expanded', 'false');

    // Click event changes the ‘aria-expanded’ value
    mainNavToggle.addEventListener('click', () => toggleAriaExpanded(mainNavToggle));
    mainSearchToggle.addEventListener('click', () => toggleAriaExpanded(mainSearchToggle));
}

