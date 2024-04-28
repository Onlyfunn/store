const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__close')
const consultation = document.querySelector('.info__button.--white')
const form = document.querySelector('.modal__form')
const anchors = document.querySelectorAll('.menu__link')
const elements = document.querySelectorAll('.form-phone')
const maskOptions = {
	mask: '+7 (000) 000-00-00',
	lazy: false,
}
const questions = document.querySelectorAll('.pluse-1__question')
const more = document.querySelector('.products__table-more')
const table = document.querySelector('.products__table')
const success = document.querySelector('.success')

burger.addEventListener('click', function (e) {
	e.stopPropagation()
	menu.classList.toggle('_active')
	burger.classList.toggle('_active')
	body.classList.toggle('_fixed')
})

document.addEventListener('click', function (e) {
	const target = e.target
	const its_menu = target == menu || menu.contains(target)
	const its_btnMenu = target == burger
	const menu_is_active = menu.classList.contains('_active')

	if (!its_menu && !its_btnMenu && menu_is_active) {
		menu.classList.remove('_active')
		burger.classList.remove('_active')
		body.classList.remove('_fixed')
	}
})

window.addEventListener('scroll', function (e) {
	if (this.pageYOffset > 0) {
		header.classList.add('_active')
	} else {
		header.classList.remove('_active')
	}
})

consultation.addEventListener('click', function (e) {
	modal.classList.add('_active')
	body.classList.add('_fixed')
})
close.addEventListener('click', function (e) {
	modal.classList.remove('_active')
	body.classList.remove('_fixed')
})

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
		menu.classList.remove('_active')
		burger.classList.remove('_active')
		body.classList.remove('_fixed')
	})
}

for (element of elements) {
	IMask(element, maskOptions)
}

for (let question of questions) {
	question.addEventListener('mouseenter', function (e) {
		question.parentNode.parentNode.parentNode.parentNode.classList.add(
			'_active'
		)
		console.log(question.parentNode.parentNode)
		question.parentNode.parentNode
			.querySelector('.pluse-1__clue')
			.classList.add('_active')
	})
	question.addEventListener('mouseout', function (e) {
		question.parentNode.parentNode.parentNode.parentNode.classList.remove(
			'_active'
		)
		question.parentNode.parentNode.parentNode
			.querySelector('.pluse-1__clue')
			.classList.remove('_active')
	})
}

more.addEventListener('click', function (e) {
	table.classList.add('_active')
	more.classList.add('_active')
})

document.querySelector('#submit').addEventListener('click', function (e) {
	modal.classList.remove('_active')
	body.classList.remove('_fixed')
	success.classList.add('_active')
	setTimeout(removeSuccess, 2000)
	e.preventDefault()
})

document.querySelector('#submit2').addEventListener('click', function (e) {
	success.classList.add('_active')
	setTimeout(removeSuccess, 2000)
	e.preventDefault()
})

function removeSuccess() {
	success.classList.remove('_active')
}
