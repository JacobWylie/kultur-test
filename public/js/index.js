const hamburger = document.querySelector('.hamburger');
const dropdownNav = document.querySelector('.dropdown-nav');

// Functionality for burger menu
function burgerMenu() {
	// Adds/Removes class from burger for css animation
	this.classList.toggle('is-active');
	dropdownNav.classList.toggle('fade')
}

hamburger.addEventListener('click', burgerMenu);

