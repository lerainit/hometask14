const colorButton = document.querySelector('.color_theme');

//localStorage.clear()
//const header = document.querySelector('header')
//const aside = document.querySelector('ul')

//const footer = document.querySelector('footer')

//let container =document.querySelector('.container')

//const picture = document.querySelector('.picture')

style = document.querySelector('link:nth-child(7)')
//console.log(style)
//style.setAttribute('href','./color_theme.css')
//const nav = document.querySelectorAll('.navlink')



/*colorButton.addEventListener('click',()=>{ style.setAttribute('href','./img/color_theme.css')
	localStorage.setItem('style',`.${style.href.slice(38,59)}`)
	 console.log(localStorage.getItem('style'))


	})

	if(localStorage.getItem('style') === './img/color_theme.css'){

style.setAttribute('href',`${localStorage.getItem('style')}`)

//style.setAttribute('href','./img/color_theme.css')
	}*/
// console.log(style.href.slice(37,55))

const setDarkTheme = () => {


	//localStorage.setItem('container.style.backgroundColor','rgb(128, 128, 128)')
	//localStorage.setItem('container.style.color' , "#fff")
	//localStorage.setItem('header.style.backgroundColor' ,"#fff")
	//container.style.backgroundColor = localStorage.getItem('container.style.backgroundColor')
	//container.style.color = localStorage.getItem('container.style.color')
	//header.style.backgroundColor= localStorage.getItem('header.style.backgroundColor')

	//Storage.setItem('container.style.backgroundColor','rgb(128, 128, 128)')

	//if(window.getComputedStyle(container).backgroundColor === 'rgb(128, 128, 128)'){
	style.setAttribute('href', './img/color_theme.css')
	//localStorage.setItem('style',`.${style.href.slice(37,55)}`)

	localStorage.setItem('style', './img/color_theme.css')

	if (localStorage.getItem('style') === './img/color_theme.css') {


		colorButton.removeEventListener('click', setDarkTheme)
	}

	colorButton.addEventListener('click', setInitialTheme)
}

const setInitialTheme = () => {

	//container.style.backgroundColor = 'rgb(255, 255, 255)'
	//container.style.color = "#000"
	//header.style.backgroundColor ="#000"
	//if(window.getComputedStyle(container).backgroundColor === 'rgb(255, 255, 255)'){
	style.setAttribute('href', './img/hometask3.css')
	//localStorage.setItem('style',`.${style.href.slice(37,55)}`)
	localStorage.setItem('style', './img/hometask3.css')

	if (localStorage.getItem('style') === './img/hometask3.css') {
		colorButton.removeEventListener('click', setInitialTheme)

	}

	colorButton.addEventListener('click', setDarkTheme)
}

colorButton.addEventListener('click', setDarkTheme

	//console.log(window.getComputedStyle(container).backgroundColor)

	//if(window.getComputedStyle(container).backgroundColor === 'rgb(128, 128, 128)'){

	//console.log('ok')
	//}
)

/*if(localStorage.getItem('style') === './img/hometask3.css')

{style.setAttribute('href',`${localStorage.getItem('style')}`)}

if(localStorage.getItem('style') === './img/color_theme.css'){
console.log(style.getAttribute('href'))

style.setAttribute('href',`${localStorage.getItem('style')}`)

}  */


if (localStorage.getItem('style')) { style.setAttribute('href', `${localStorage.getItem('style')}`) }



