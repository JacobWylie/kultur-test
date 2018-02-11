const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('burgerMenu', () => {
	let document;
	let hamburger;
	let dropDownNav;
	// Jasmine method to handle async function
	beforeEach(done => {
		JSDOM.fromFile("./index.html")
			.then(dom => {
				document = dom.window.document;
				hamburger = document.querySelector('.hamburger');
				dropdownNav = document.querySelector('.dropdown-nav'); 
				done();
			})
	})

	it('should be a DOM element', () => {
		expect(hamburger).toBeTruthy();
	})

	it('should not be active', () => {
		expect(hamburger.classList.contains('is-active')).toBeFalsy();
	})

	it('should have a click event listener', () => {
		let off;
		function checkEvent() {
			off = 'on';
		}
		hamburger.addEventListener('click', checkEvent);
		hamburger.click();
		expect(off).toEqual('on');
	})

	it('should toggle is-active class on click', () => {
		function burgerMenu() {
			this.classList.toggle('is-active')
		}
		hamburger.addEventListener('click', burgerMenu);
		hamburger.click();
		expect(hamburger.classList.contains('is-active')).toBeTruthy();
	})

	it('should have a hidden dropdown menu in the DOM', () => {
		expect(dropdownNav).toBeTruthy();
	})

	it('dropdown menu should not have class "fade"', () => {
		expect(dropdownNav.classList.contains('fade')).toBeFalsy();
	})

	it('should toggle the "fade" class on the nav when burger is clicked', () => {
		function fadeNav() {
			dropdownNav.classList.toggle('fade');
		}
		hamburger.addEventListener('click', fadeNav);
		hamburger.click();
		expect(dropdownNav.classList.contains('fade')).toBeTruthy();
	})
})

































