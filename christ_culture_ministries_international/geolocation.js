export function setupGeolocation() {
    const geolocationEl = document.getElementById('geolocation');
    if (geolocationEl) {
        fetchGeolocation(geolocationEl);
    } else {
        console.error('Geolocation element not found'); // Debugging log
    }
}

async function fetchGeolocation(element) {
    try {
        const response = await fetch('https://ipinfo.io/json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        element.textContent = `You are in ${data.city}, ${data.region}, ${data.country}.`;
    } catch (error) {
        console.error('Error fetching geolocation:', error);
        element.textContent = 'Error fetching geolocation.';
    }
}
