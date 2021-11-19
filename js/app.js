
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


//--------------------------------menu-------------------------------------

function menuOpen() {
   let  menuBody = document.querySelector('.sidebar');
   let  iconMenu = document.querySelector('.menu__icon');
   let  overLay = document.querySelector('.overlay');

   lockScroll = () => {
      document.body.classList.add('lock');
   }

   iconMenu.addEventListener('click', function(e) {
      menuBody.classList.add('active');
      overLay.classList.add('active');
      lockScroll();
   })
}
menuOpen();

function menuClose() {
   let  menuBody = document.querySelector('.sidebar');
   let  overLay = document.querySelector('.overlay');

   unlockScroll = () => {
      document.body.classList.remove('lock');
   }

   overLay.addEventListener('click', function(e) {
      menuBody.classList.remove('active');
      overLay.classList.remove('active');
      unlockScroll();
   })
}
menuClose();

//---------------------------------swiper---------------------------------------

//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if(document.querySelector('.swiper')) {
   new Swiper('.swiper', {
      pagination: {
         el:'.swiper-pagination',
         type:'fraction',
         renderFraction: function(currentClass,totalClass) {
            return '0<span class="' + currentClass +'"></span>' + ' / ' +
            '0<span class="' + totalClass + '"></span>';
         }
      },
      mousewheel:{
         sensitivity:1,
         eventsTarget:'.swiper-slide'
      },

      loop:true,
      effect:'fade',
      fadeEffect: {
         crossFade:true,
      },
   });
}

//=========================================================================

