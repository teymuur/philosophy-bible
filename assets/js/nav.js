document.addEventListener('DOMContentLoaded', function() {
    // Create navbar
    const navbar = document.createElement('nav');
    navbar.style.backgroundColor = '#333';
    navbar.style.padding = '10px';
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-between';
    navbar.style.margin = '0 auto';
    navbar.style.flexWrap = 'wrap';

    // Container for title and dropdowns
    const leftContainer = document.createElement('div');
    leftContainer.style.display = 'flex';
    leftContainer.style.alignItems = 'center';
    leftContainer.style.flexGrow = '1';
    leftContainer.className = 'btnnn';


    // Create navbar content for home link
    const homeLink = document.createElement('a');
    homeLink.style.color = 'white';
    homeLink.style.textDecoration = 'none';
    homeLink.style.fontSize = '24px';
    homeLink.style.marginRight = '20px';
    homeLink.textContent = 'Philosophy Bible';
    const aboutLink = document.createElement('a');
    aboutLink.style.color = 'white';
    aboutLink.style.textDecoration = 'none';
    aboutLink.style.fontSize = '20px';
    aboutLink.textContent = 'About';
    aboutLink.style.marginRight = '10px';

    // Create dropdown menus
    const createDropdown = (title, items) => {
        const dropdown = document.createElement('div');
        dropdown.style.position = 'relative';
        dropdown.style.display = 'inline-block';
        dropdown.style.marginRight = '20px';

        const button = document.createElement('button');
        button.style.backgroundColor = '#333';
        button.style.color = 'white';
        button.style.fontSize = '20px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.className = 'btnnn';
        button.textContent = title;

        const dropdownContent = document.createElement('div');
        dropdownContent.style.display = 'none';
        dropdownContent.style.position = 'absolute';
        dropdownContent.style.backgroundColor = '#333';
        dropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
        dropdownContent.style.zIndex = '1';

        items.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.text;
            link.style.color = 'white';
            link.style.padding = '12px 16px';
            link.style.textDecoration = 'none';
            link.style.display = 'block';
            link.style.textAlign = 'left';

            link.addEventListener('mouseover', () => {
                link.style.backgroundColor = '#575757';
            });

            link.addEventListener('mouseout', () => {
                link.style.backgroundColor = '#333';
            });

            dropdownContent.appendChild(link);
        });

        dropdown.appendChild(button);
        dropdown.appendChild(dropdownContent);

        dropdown.addEventListener('mouseover', () => {
            dropdownContent.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', () => {
            dropdownContent.style.display = 'none';
        });

        return dropdown;
    };

    // Define dropdown items
    const schools = [
        { text: 'Absurdism', href: 'schools/absurdism' },
        { text: 'Nihilism', href: 'schools/nihilism' },
        { text: 'Existentialism', href: 'schools/existentialism' },
        { text: 'Stoicism', href: 'schools/stoicism' },
        { text: 'Utilitarianism', href: 'schools/utilitarianism' },
        { text: 'Confucianism', href: 'schools/confucianism' },
        { text: 'Taoism', href: 'schools/taoism' },
        { text: 'Rationalism', href: 'schools/rationalism' },
        { text: 'Empiricism', href: 'schools/empiricism' },
        { text: 'Postmodernism', href: 'schools/postmodernism' },
        { text: 'Deconstruction', href: 'schools/deconstruction' },
    ];

    const philosophers = [
        { text: 'Socrates', href: 'philosophers/socrates' },
        { text: 'Plato', href: 'philosophers/plato' },
        { text: 'Aristotle', href: 'philosophers/aristotle' },
        { text: 'René Descartes', href: 'philosophers/descartes' },
        { text: 'Immanuel Kant', href: 'philosophers/kant' },
        { text: 'Friedrich Nietzsche', href: 'philosophers/nietzsche' },
        { text: 'Martin Heidegger', href: 'philosophers/heidegger' },
        { text: 'Michel Foucault', href: 'philosophers/foucault' },
        { text: 'Gilles Deleuze', href: 'philosophers/deleuze' },
        { text: 'Jacques Derrida', href: 'philosophers/derrida' },
        { text: 'Jean-Paul Sartre', href: 'philosophers/sartre' },
    ];

    // Determine URL and set href for homeLink
    const currentUrl = window.location.pathname;
    if (currentUrl.startsWith('/schools/') || currentUrl.startsWith('/philosophers/')) {
        homeLink.href = '/';
    } else {
        homeLink.href = '/philosophy-bible';
    }

    // Set href for aboutLink
    if (currentUrl.startsWith('/schools/') || currentUrl.startsWith('/philosophers/')) {
        aboutLink.href = '/about.html';
    } else {
        aboutLink.href = '/philosophy-bible/about.html';
    }

    // Append homeLink and dropdowns to leftContainer
    leftContainer.appendChild(homeLink);
    leftContainer.appendChild(createDropdown('Schools', schools));
    leftContainer.appendChild(createDropdown('Philosophers', philosophers));

    // Create a container for all nav items and aboutLink
    const navContent = document.createElement('div');
    navContent.id = 'nav-content';
    navContent.style.display = 'flex';
    navContent.style.flexDirection = 'row';
    navContent.style.flexGrow = '1';
    navContent.appendChild(leftContainer);
    navContent.appendChild(aboutLink);

    // Append hamburger and navContent to navbar

    navbar.appendChild(navContent);

    // Append navbar to the body
    document.body.insertBefore(navbar, document.body.firstChild);



    // Add FontAwesome icons
    const icons = document.createElement('link');
    icons.rel = 'stylesheet';
    icons.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    document.head.appendChild(icons);

    // Add styles for hamburger menu and mobile view
    const styles = document.createElement('style');
    styles.textContent = `

        @media (max-width: 600px) {

            .btnnn {
                display: none;
                flex-direction: column;
                width: 100%;
            }

            
        }
    `;
    document.head.appendChild(styles);
});
