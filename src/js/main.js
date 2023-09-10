const burgerBtn = document.querySelector('.hamburger--squeeze')
const navActive = document.querySelector('.nav__active')

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('is-active')

	if (burgerBtn.classList.contains('is-active')) {
		navActive.classList.add('menu')
	} else {
		navActive.classList.remove('menu')
	}
})
