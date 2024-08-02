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
            menuIcon.style.display = 'grid';
            // sideHeads.forEach(sideHead => sideHead.style.zIndex = '');
            sideHeads.forEach(sideHead => sideHead.style.transform = 'translate(0)');
            sideHeads.forEach(sideHead => sideHead.style.opacity = '1');
            sideHeads.forEach(sideHead => sideHead.style.transition = 'all .6s ease');
        } else {
            // Show the sidebar
            sideBarCnt.style.visibility = 'visible';
            sidebar.style.transform = 'translate(0)'; // Slide into view
            menuIcon.style.display = 'none';
            // sideHeads.forEach(sideHead => sideHead.style.zIndex = '0');
            sideHeads.forEach(sideHead => sideHead.style.opacity = '0');
            sideHeads.forEach(sideHead => sideHead.style.transform = 'translate(-20px)');
            sideHeads.forEach(sideHead => sideHead.style.transition = 'all 0s ease');
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
        root.style.setProperty('--clr-white', '#111');
        root.style.setProperty('--clr-black', '#fff');
        root.style.setProperty('--clr-white-body', 'black');
        saveTheme('#111', '#fff', 'black');
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
















document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.querySelector('.editProfileBtn');
    const profileEditingInputsCnt = document.querySelector('.profileEditingInputsCnt');

    // Show modal
    editProfileBtn.addEventListener('click', () => {
        profileEditingInputsCnt.style.display = 'grid';

        // Populate input fields with current values
        const userNameDisplay = document.querySelector('.userName').textContent;
        const userBioDisplay = document.querySelector('.userBio').textContent;

        document.getElementById('UserNameInput').value = userNameDisplay;
        document.getElementById('UserBioInput').value = userBioDisplay;
    });

    // Hide modal when clicking outside
    document.addEventListener('click', (event) => {
        if (!profileEditingInputsCnt.contains(event.target) && !editProfileBtn.contains(event.target)) {
            profileEditingInputsCnt.style.display = 'none';
        }
    });

    // Your previous JavaScript code here
    const userNameInput = document.getElementById('UserNameInput');
    const userBioInput = document.getElementById('UserBioInput');
    const profileDpImageInput = document.getElementById('profileDpImageInput');
    const profileBgImageInput = document.getElementById('profileBgImageInput');
    const updateButton = document.querySelector('.inputsUpdateBtn');
    const userNameDisplay = document.querySelector('.userName');
    const userBioDisplay = document.querySelector('.userBio');
    const profilePicCnt = document.querySelector('.profilePicCnt');
    const sidebarUserDetailsCnt = document.querySelector('.sideber-userDetails-cnt');

    // Load data from localStorage
    if (localStorage.getItem('userName')) {
        userNameDisplay.textContent = localStorage.getItem('userName');
    }

    if (localStorage.getItem('userBio')) {
        userBioDisplay.textContent = localStorage.getItem('userBio');
    }

    if (localStorage.getItem('profilePic')) {
        profilePicCnt.style.backgroundImage = `url(${localStorage.getItem('profilePic')})`;
    }

    if (localStorage.getItem('profileBg')) {
        sidebarUserDetailsCnt.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.85)), url(${localStorage.getItem('profileBg')})`;
    }

    // Update data
    updateButton.addEventListener('click', () => {
        // Update user name and bio
        const userName = userNameInput.value;
        const userBio = userBioInput.value;

        userNameDisplay.textContent = userName;
        userBioDisplay.textContent = userBio;

        localStorage.setItem('userName', userName);
        localStorage.setItem('userBio', userBio);

        // Update profile picture
        const profileDpFile = profileDpImageInput.files[0];
        if (profileDpFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profilePicUrl = e.target.result;
                profilePicCnt.style.backgroundImage = `url(${profilePicUrl})`;
                localStorage.setItem('profilePic', profilePicUrl);
            };
            reader.readAsDataURL(profileDpFile);
        }

        // Update background image
        const profileBgFile = profileBgImageInput.files[0];
        if (profileBgFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profileBgUrl = e.target.result;
                sidebarUserDetailsCnt.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.85)), url(${profileBgUrl})`;
                localStorage.setItem('profileBg', profileBgUrl);
            };
            reader.readAsDataURL(profileBgFile);
        }
    });
});

function closeProfInpMdl() {
    document.querySelector('.profileEditingInputsCnt').style.display = 'none';
}