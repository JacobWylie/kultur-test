const hamburger = document.querySelector('.hamburger');
const dropdownNav = document.querySelector('.dropdown-nav');
const grid = document.querySelector('.grid');

// Functionality for burger menu
function burgerMenu() {
	// Adds/Removes class from burger for css animation
	this.classList.toggle('is-active');
	dropdownNav.classList.toggle('fade')
}

hamburger.addEventListener('click', burgerMenu);

// Masonry
imagesLoaded(grid, () => {
	const msnry = new Masonry( grid, {
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 300,
	  gutter: 10,
	  fitWidth: true
	});
})




