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
});
