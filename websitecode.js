document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('.exp-txt-side-head');

    headings.forEach(heading => {
        heading.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Hide all other contents and remove rotation from other headings
            document.querySelectorAll('.exp-txt-cntnt').forEach(c => {
                if (c !== content) {
                    c.classList.remove('show');
                    c.previousElementSibling.classList.remove('rotate');
                }
            });

            // Toggle current content and rotation
            content.classList.toggle('show');
            this.classList.toggle('rotate');
        });
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.header-menu-icon');
    const sidebar = document.querySelector('.header-main-sidebar');
    const sideBarCnt = document.querySelector('.header-sidebar-cnt');
    const sideHeads = document.querySelectorAll('.sec-head');
    const navAnchors = document.querySelectorAll('.nav-ancr');

    // Initial state
    let isSidebarVisible = false;

    // Toggle sidebar visibility
    function toggleSidebar() {
        if (isSidebarVisible) {
            // Hide the sidebar
            sideBarCnt.style.visibility = 'hidden';
            sidebar.style.transform = 'translate(280px)'; // Slide out of view
            menuIcon.style.opacity = '1';
            sideHeads.forEach(sideHead => sideHead.style.zIndex = '');
        } else {
            // Show the sidebar
            sideBarCnt.style.visibility = 'visible';
            sidebar.style.transform = 'translate(0)'; // Slide into view
            menuIcon.style.opacity = '0';
            sideHeads.forEach(sideHead => sideHead.style.zIndex = '0');
        }

        // Toggle the state
        isSidebarVisible = !isSidebarVisible;
    }

    // Handle clicks on the menu icon
    menuIcon.addEventListener('click', function () {
        toggleSidebar();
    });

    // Handle clicks outside the sidebar
    document.addEventListener('click', function (event) {
        // Check if the click is outside the sidebar and the menu icon
        if (isSidebarVisible && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            toggleSidebar();
        }
    });

    // Handle clicks on the nav anchors
    navAnchors.forEach(navAnchor => {
        navAnchor.addEventListener('click', function () {
            if (isSidebarVisible) {
                toggleSidebar();
            }
        });
    });
});








const root = document.documentElement;

// Function to load theme from localStorage
function loadTheme() {
    const clrWhite = localStorage.getItem('clr-white') || 'white';
    const clrBlack = localStorage.getItem('clr-black') || 'black';
    const clrWhiteBody = localStorage.getItem('clr-white-body') || 'white';

    root.style.setProperty('--clr-white', clrWhite);
    root.style.setProperty('--clr-black', clrBlack);
    root.style.setProperty('--clr-white-body', clrWhiteBody);
}

// Function to save theme to localStorage
function saveTheme(clrWhite, clrBlack, clrWhiteBody) {
    localStorage.setItem('clr-white', clrWhite);
    localStorage.setItem('clr-black', clrBlack);
    localStorage.setItem('clr-white-body', clrWhiteBody);
}

document.querySelector('.theme-changer').addEventListener('click', () => {
    const currentWhite = getComputedStyle(root).getPropertyValue('--clr-white').trim();
    const currentBlack = getComputedStyle(root).getPropertyValue('--clr-black').trim();
    const currentWhiteBody = getComputedStyle(root).getPropertyValue('--clr-white-body').trim();

    if (currentWhite === 'white' && currentBlack === 'black' && currentWhiteBody === 'white') {
        root.style.setProperty('--clr-white', '#1F2937');
        root.style.setProperty('--clr-black', '#fff');
        root.style.setProperty('--clr-white-body', '#111827');
        saveTheme('#1F2937', '#fff', '#111827');
    } else {
        root.style.setProperty('--clr-white', 'white');
        root.style.setProperty('--clr-black', 'black');
        root.style.setProperty('--clr-white-body', 'white');
        saveTheme('white', 'black', 'white');
    }
});

// Load theme on page load and remove blur
window.addEventListener('load', () => {
    loadTheme();
    document.body.classList.add('loaded');
});
