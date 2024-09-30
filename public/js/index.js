
//Menu Hamburguesa
const toggleButton = document.querySelector('.custom-toggle-button');
const navbarLinks = document.querySelector('.custom-navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    console.log("bot ok")
    navbarLinks.classList.toggle('hidden');
});


