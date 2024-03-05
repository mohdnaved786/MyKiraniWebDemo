
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: Infinity,
  
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
      allowSlideNext: false,
    },
    // autoplay: {
    //   delay: 2000,
    // },
  
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1461: {
        slidesPerView: 7,
      },
      1661: {
        slidesPerView: 8,
      },
    },
  });
  let wiper = new Swiper(".offerSwiper", {
    spaceBetween: 20,
    loop: true,
  
  
    autoplay: {
      delay: 2000,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1461: {
        slidesPerView: 4,
      },
      1661: {
      },
    },
  });
  let fruits = new Swiper(".fruitsSwiper", {
    spaceBetween: 20,
    loop: Infinity,
    navigation: {
      prevEl: '.fruitsButton-prev',
      nextEl: '.fruitsButton-next',
      allowSlideNext: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1461: {
        slidesPerView: 6,
      },
      1661: {
        slidesPerView: 7,
      },
    },
  })
  
  let chemist = new Swiper(".chemistSwiper", {
    spaceBetween: 20,
    loop: Infinity,
    navigation: {
      prevEl: '.chemistButton-prev',
      nextEl: '.chemistButton-next',
      allowSlideNext: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1461: {
        slidesPerView: 6,
      },
      1661: {
        slidesPerView: 7,
      },
    },
  });
  let bank = new Swiper(".bankSwiper", {
    spaceBetween: 20,
    loop: Infinity,
    navigation: {
      prevEl: '.bankButton-prev',
      nextEl: '.bankButton-next',
      allowSlideNext: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
      1461: {
        slidesPerView: 2,
      },
      1661: {
        slidesPerView: 2,
      },
    },
  })
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
  var top = new Swiper(".topSwiper", {
    spaceBetween: 20,
    loop: Infinity,
    navigation: {
      prevEl: '.bankButton-prev',
      nextEl: '.bankButton-next',
      allowSlideNext: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1461: {
        slidesPerView: 4,
      },
      1661: {
        slidesPerView: 4,
      },
    },
  })
  var special = new Swiper(".specialSwiper", {
    spaceBetween: 20,
    loop: Infinity,
    navigation: {
      prevEl: '.specialButton-prev',
      nextEl: '.specialButton-next',
      allowSlideNext: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
     
      1661: {
        slidesPerView: 1,
      },
    },
  })