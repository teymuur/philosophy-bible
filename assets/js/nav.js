document.addEventListener('DOMContentLoaded', function() {
    // Create navbar
    const navbar = document.createElement('nav');
    navbar.style.backgroundColor = '#333';
    navbar.style.padding = '10px';
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-between'
    navbar.style.margin = '0 auto';

    // Create navbar content for home link
    const homeLink = document.createElement('a');
    homeLink.style.color = 'white';
    homeLink.style.textDecoration = 'none';
    homeLink.style.fontSize = '24px';
    homeLink.style.marginRight = '20px';
    homeLink.textContent = 'Philosophy Bible';

    // Create navbar content for about link
    const aboutLink = document.createElement('a');
    aboutLink.style.color = 'white';
    aboutLink.style.textDecoration = 'none';
    aboutLink.style.fontSize = '24px';
    aboutLink.textContent = 'About';

    // Determine URL and set href for homeLink
    const currentUrl = window.location.pathname;

    if (currentUrl.startsWith('/schools/') || currentUrl.startsWith('/philosophers/')) {
        homeLink.href = '/';
    } else if (currentUrl.startsWith('/philosophy-bible/school/')) {
        homeLink.href = '/philosophy-bible';
    } else {
        homeLink.href = '/';
    }

    // Set href for aboutLink
    if (currentUrl.startsWith('/schools/') || currentUrl.startsWith('/philosophers/')) {
        aboutLink.href = '/about.html';
    } else {
        aboutLink.href = '/philosophy-bible/about.html';
    }

    // Append links to navbar
    navbar.appendChild(homeLink);
    navbar.appendChild(aboutLink);

    // Append navbar to the body
    document.body.insertBefore(navbar, document.body.firstChild);
});
