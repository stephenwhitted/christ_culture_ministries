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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Log data to the console for demonstration purposes
    console.log('Form Data Submitted: ', data);

    // Normally you would send this data to a server to handle emailing
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
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
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar-container');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ],
        initialView: 'dayGridMonth',
        events: function(fetchInfo, successCallback, failureCallback) {
            axios.get('https://fullcalendar.io/demo-events.json')
            .then(response => {
                successCallback(response.data);
            })
            .catch(error => {
                console.error('Error fetching calendar events with Axios:', error);
                failureCallback(error);
            });
        }
    });

    calendar.render();
});
