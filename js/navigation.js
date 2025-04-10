document.addEventListener('DOMContentLoaded', function () {
    console.log('Navigation script loaded successfully');

    // Get all navigation links in the sidebar
    const navLinks = document.querySelectorAll('.sidebar .nav-item a');
    console.log('Found ' + navLinks.length + ' navigation links');

    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Link clicked: ' + this.textContent.trim());

            // Get the page ID from the link's data attribute
            const pageId = this.getAttribute('data-section');
            console.log('Loading page: ' + pageId);

            // Show/hide the appropriate content sections
            const contentSections = document.querySelectorAll('.section');
            contentSections.forEach(section => {
                if (section.id === pageId) {
                    section.classList.add('active');
                    section.style.display = 'block';
                } else {
                    section.classList.remove('active');
                    section.style.display = 'none';
                }
            });

            // Update active state in the sidebar
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');

            // Update the page title
            document.getElementById('page-heading').textContent = this.textContent.trim();

            // If we're on a mobile device, close the sidebar
            if (window.innerWidth < 768) {
                document.querySelector('body').classList.add('sidebar-toggled');
                document.querySelector('.sidebar').classList.add('toggled');
            }
        });
    });

    // Load the default page (Home)
    const defaultPage = 'dashboard'; // Set default page to 'dashboard'
    const defaultLink = document.querySelector(`a[data-section="${defaultPage}"]`);
    if (defaultLink) {
        defaultLink.click();
    } else {
        // If no specific link matches, click the first link
        const firstLink = document.querySelector('.sidebar .nav-item a');
        if (firstLink) {
            firstLink.click();
        }
    }
});