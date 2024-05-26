export function setupSmoothScroll() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adding interactivity to sections and headers
    const sections = document.querySelectorAll('section, header');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            console.log(`Hovering over ${section.id || 'header'}`);
        });

        section.addEventListener('click', () => {
            console.log(`Clicked on ${section.id || 'header'}`);
        });

        section.addEventListener('mouseenter', () => {
            section.style.border = "5px solid gold";
        });

        section.addEventListener('mouseleave', () => {
            section.style.border = "";
        });
    });

    // Adding interactivity to all images
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });

        image.addEventListener('click', () => {
            console.log(`Image clicked: ${image.alt}`);
        });
    });
}
