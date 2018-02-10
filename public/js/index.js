const hamburger = document.querySelector('.hamburger');

// Functionality for burger menu
function burgerMenu() {
	// Adds/Removes class from burger for css animation
	this.classList.toggle('is-active');
}

hamburger.addEventListener('click', burgerMenu);

