var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
  },
        loop: true,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });



      
const menuBtn = document.querySelector('#menuBtn');
const menuIcon = document.querySelector('.menuIcon');
const searchIcon = document.querySelector('#search-icon');
const navbar = document.querySelector('.navbar');
const searchForm = document.querySelector('#search-form');
const closeBtn = document.querySelector('.fa-xmark');

const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

menuBtn.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('menu_active')

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top => offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      })
    }

  })
})

closeBtn.addEventListener('click', () => {
  searchForm.classList.remove('active')
})

searchIcon.addEventListener('click', () => {
 searchForm.classList.toggle('active')
})



var swiper = new Swiper(".newSlider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        
  loop: true,
        // breakpoints: {
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //    },
        // },
        
})
      

// let menu = document.getElementById('menu-bars');
// let navbar = document.getElementsByClassName('navbar');
// document.querySelector('#search-form')

// menu.onclick = () => {
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

// menu - bars.addEventListener('click', () => {
//  menu.classList.remove('fa-xmark');
//   navbar.classList.remove('active');  
// }) 
 


// let search = document.querySelector('#search-icon').onclick = () => {
//   document.querySelector('#search-form').classList.toggle('active');
// }

// document.getElementById('close').onclick = () => {
//   document.getElementById('search-form').classList.remove('active');
// }

