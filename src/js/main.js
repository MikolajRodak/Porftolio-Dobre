const burgerBtn = document.querySelector('.hamburger--squeeze')
const navActive = document.querySelector('.nav__active')
const email = document.querySelector('#email')
const title = document.querySelector('#title')
const textarea = document.querySelector('#msg')
const sendBtn = document.querySelector('.send')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup')

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('is-active')

	if (burgerBtn.classList.contains('is-active')) {
		navActive.classList.add('menu')
	} else {
		navActive.classList.remove('menu')
	}
})

// ---------------------------regExp walidator

const showError = (input, msg) => {
	const formBox = input.parentElement

	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkTextarea = input => {
	if (input.value === '') {
		showError(input, 'Please write a content...')
	} else {
		clearError(input)
	}
}

const checkMail = email => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (reg.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const checkError = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) errorCount++
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	} else {
		console.log('error')
	}
}

// closeBtn.addEventListener('click', () => {
// 	popup.classList.remove('show-popup')
// })

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([email, title])
	checkTextarea(textarea)
	checkMail(email)
	// checkError()
})
