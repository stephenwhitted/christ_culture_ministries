import { setupSmoothScroll } from './smoothScroll.js';
import { setupFormHandler } from './formHandler.js';
import { setupGeolocation } from './geolocation.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScroll();
    setupFormHandler();
    setupGeolocation();
});
