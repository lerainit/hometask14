const colorButton = document.querySelector('.color_theme');

//localStorage.clear()

style = document.querySelector('link:nth-child(7)')


const setDarkTheme = () => {

        style.setAttribute('href', './img/color_theme.css')
	
	localStorage.setItem('style', './img/color_theme.css')

	if (localStorage.getItem('style') === './img/color_theme.css') {


		colorButton.removeEventListener('click', setDarkTheme)
	}

	colorButton.addEventListener('click', setInitialTheme)
}

const setInitialTheme = () => {

	style.setAttribute('href', './img/hometask3.css')
	localStorage.setItem('style', './img/hometask3.css')

	if (localStorage.getItem('style') === './img/hometask3.css') {
		colorButton.removeEventListener('click', setInitialTheme)
         }

	colorButton.addEventListener('click', setDarkTheme)
}

colorButton.addEventListener('click', setDarkTheme)


if (localStorage.getItem('style')) { style.setAttribute('href', `${localStorage.getItem('style')}`) }



