// This file is for any custom JavaScript you want to add.
// It's a good place for handling interactive elements, like a mobile menu or a contact form.

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('header button');
    const navMenu = document.querySelector('header nav');
    
    mobileMenuButton.addEventListener('click', () => {
        // Toggle the 'hidden' class on the navigation menu
        navMenu.classList.toggle('hidden');
    });
    
    });