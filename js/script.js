'use strict'


fixMenu();

	function fixMenu() {
    
		window.onscroll = () => {

			if ( scrollY > 0 ) {
      
				header.classList.add('fixed');
				main.style.marginTop =  header.offsetHeight + 'px';

			} else {

				header.classList.remove('fixed');
				main.style.marginTop =  0 + 'px';
			}
		}
	}

	const navMenu = document.querySelector('.header__menu')
// Look for .hamburger
const menuBtn = document.querySelector(".header__menu-btn");
// On click
menuBtn.addEventListener("click", function(e) {
  // Toggle class "is-active"
  menuBtn.classList.toggle("is-active");
  // Do something else, like open/close menu
  navMenu.classList.toggle('active-menu'); 
  e.stopPropagation(); //Останавливаем всплытие для корректной работы функции закрытия меню по клику вне области меню
});

document.addEventListener ('click', function(e) {
    if (!(navMenu.contains(e.target)) && 
        (navMenu.classList.contains('active-menu'))) {

        menuBtn.classList.toggle("is-active");
        navMenu.classList.toggle('active-menu');     
    }
})


document.addEventListener ('click', function(e) {
	if ( (e.target.classList.contains('header__menu-item')) && 
			(navMenu.classList.contains('active-menu'))) {

			menuBtn.classList.toggle("is-active");
			navMenu.classList.toggle('active-menu');     
	}
})



 const swiperComp = new Swiper('.swiper-company', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

		// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true, 
},

	breakpoints: {

			1300: {
					slidesPerView: 4,
					slidesPerGroup: 1,
					spaceBetween: 40,
			},
			
			900: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 70,
		},

		800: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 30,
	},

	550: {
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 30,
},
}

})

const swiperOrd = new Swiper('.swiper-orders', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

		// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true, 
},

	breakpoints: {

			1300: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 10,
			},
			
			991: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				spaceBetween: 10,
		},

		700: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween:10,
	},

	320: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween:5,
},
}})

const swiperPresent = new Swiper('.swiper-presents', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

		// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true, 
},

	breakpoints: {

			1300: {
					slidesPerView: 4,
					slidesPerGroup: 1,
					spaceBetween: 10,
			},

		1000: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween:10,
	},

	700: {
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween:5,
},

	320: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween:5,
},
}})

const swiperAdv = new Swiper('.swiper-advantages', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

		// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true, 
},

	breakpoints: {

			1300: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 10,
			},
			
			1000: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 10,
		},

		700: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween:5,
	},

	320: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween:5,
},
}})

const swiperCont = new Swiper('.swiper-contacts', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

		// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true, 
},

	breakpoints: {

			1300: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 10,
			},
			
			991: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				spaceBetween: 10,
		},

		700: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween:10,
	},

	320: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween:5,
},
}})

accordeon(document.querySelectorAll('.block__title'));
function accordeon(items) {
	for (let item of items) {
		item.addEventListener('click', function() { this.parentNode.classList.toggle('_active')
	})
}
}


const timer = (id, deadline) => {
	const addZero = (num) => {
		if (num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	}

	const getTimeRemaining = (endtime) => {
		const t = Date.parse(endtime) - Date.parse(new Date()),
					seconds = Math.floor((t / 1000) % 60),
					minutes = Math.floor((t / 1000 / 60) % 60),
					hours = Math.floor((t / (1000 * 60 * 60)) % 24),
					days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};
	const setClock = (selector, endtime) =>{
		const timer = document.querySelector(selector),
					days = timer.querySelector('#days'),
					hours = timer.querySelector('#hours'),
					minutes = timer.querySelector('#minutes'),
					seconds = timer.querySelector('#seconds'),
					timeInterval = setInterval(updateClock, 1000);
		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';

			clearInterval(timeInterval);
			}
			
		}			
	};
	setClock(id, deadline);
	
}

let deadline = '2022-02-08';

timer('#timer', deadline);

$('.open-modal').click(function() {
	$('.modals__bg').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.modals__close').click(function() {
	$('.modals__bg').fadeOut(0);
	$('html').removeClass('no-scroll')
});


