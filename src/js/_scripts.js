var r = document.querySelector(':root');

//стили тем
var lightTheme = '--default-color: #000;--primary-color: #000;--header-footer-color: #b0bec5;--logo-color: #000;--bg-color: #e2f1f8;--box-shadow: rgba(0,0,0, .5);--border-color: #ccc;--btn-color: #fff;--hover: #fff;';
var darkTheme = '--default-color: #fff;--primary-color: #000;--header-footer-color: #212121;--logo-color: #ccc;--bg-color: #484848;--box-shadow: rgba(255,255,255, .5);--border-color: #000;--btn-color: #fff;--hover: #ccc;';
var grayTheme = '--default-color: #fff;--primary-color: #000;--header-footer-color: #757575;--logo-color: #ccc;--bg-color: #a4a4a4;--hover: #ccc;';

//смена темы
function changeTheme(el, val) {
	el.style.cssText = val;
};

//переключение на тему light
var ligth = document.querySelectorAll('.light-theme');
for (var i = 0; i < ligth.length; i++) {
	ligth[i].addEventListener('click', function (e) {
		changeTheme(r, lightTheme);
		//если разрешение экрана планшет button
		if (window.matchMedia('(max-width: 1080px) and (min-width: 640px)').matches) {
			btnClick();
			e.target.classList.add('active');
		};
	});
};

//переключение на тему dark
var dark = document.querySelectorAll('.dark-theme');
for (var i = 0; i < dark.length; i++) {
	dark[i].addEventListener('click', function (e) {
		changeTheme(r, darkTheme);
		//если разрешение экрана планшет button
		if (window.matchMedia('(max-width: 1080px) and (min-width: 640px)').matches) {
			btnClick();
			e.target.classList.add('active');
		};
	});
};


//переключение на тему gray
var gray = document.querySelectorAll('.gray-theme');
for (var i = 0; i < gray.length; i++) {
	gray[i].addEventListener('click', function (e) {
		changeTheme(r, grayTheme);
		//если разрешение экрана планшет button
		if (window.matchMedia('(max-width: 1080px) and (min-width: 640px)').matches) {
			btnClick();
			e.target.classList.add('active');
		};
	});
};


//Убираем активную кнопку
function btnClick() {
	var buttons = document.querySelectorAll('.header__btn');
	for (var j = 0; j < buttons.length; j++) {
		buttons[j].classList.remove('active');
	};
};

//Обработка выбора select 
if (window.matchMedia('(max-width: 640px)').matches) {
	var select = document.querySelector('.header__list');
	select.addEventListener('change', function () {
		switch (this.value) {
			case 'light':
				changeTheme(r, lightTheme);
				break;
			case 'dark':
				changeTheme(r, darkTheme);
				break;
			case 'gray':
				changeTheme(r, grayTheme);
				break;
		};
	});
};


//popup show-hide
var images = document.querySelectorAll('.img');
var out = document.querySelector('.popup__img');
var body = document.querySelector('body');
var popup = document.querySelector('.popup');
var close = document.querySelector('.popup__close');
for (var k = 0; k < images.length; k++) {
	images[k].addEventListener('click', function (e) {
		var path = e.target.getAttribute('src');
		out.setAttribute('src', path);
		body.style.overflow = 'hidden';
		popup.style.zIndex = 20;
		popup.style.opacity = 1;
	});
};
close.onclick = function () {
	popup.style.opacity = 0;
	popup.style.zIndex = -100;
	body.style.overflow = 'visible';
};



//анимация заголовка
var text = 'Backendless Gallery';
var line = 0;
var count = 0;
var result = '';
function typeLine() {
	var interval = setTimeout(
		function () {
			result += text[line][count]
			document.querySelector('.content__title').innerHTML = result + '|';
			count++;
			if (count >= text[line].length) {
				count = 0;
				line++;
				if (line == text.length) {
					line = 0;
					count = 0
					result = '';
					return true;
				}
			}
			typeLine();
		}, 200);
};
typeLine();
setInterval(function () {
	typeLine();
}, 6000);
