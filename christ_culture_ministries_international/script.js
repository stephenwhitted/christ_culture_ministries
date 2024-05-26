document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

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

    // Handling form submission
    document.getElementById('contactForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => { data[key] = value; });

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Contact image interactive effects
    const contactImage = document.querySelector('.contact-img');
    contactImage.addEventListener('mouseenter', () => {
        contactImage.style.transform = 'scale(1.1)';
    });
    contactImage.addEventListener('mouseleave', () => {
        contactImage.style.transform = 'scale(1)';
    });

    // Fetching and displaying calendar events using FullCalendar
    const calendarEl = document.getElementById('calendar-container');
    console.log('Initializing FullCalendar'); // Debugging log

    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [ 'dayGrid' ],
            initialView: 'dayGridMonth',
            events: async function(fetchInfo, successCallback, failureCallback) {
                try {
                    const response = await fetch('https://fullcalendar.io/demo-events.json');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const events = await response.json();
                    console.log('Events fetched:', events); // Add log here
                    successCallback(events);
                } catch (error) {
                    console.error('Error fetching calendar events:', error);
                    failureCallback(error);
                }
            }
        });

        calendar.render();
    } else {
        console.error('Calendar element not found'); // Debugging log
    }
});
