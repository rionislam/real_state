//------ CHANGE HEADER BACKGROUND ------//
const scrollHeader =  () =>{
    let header = document.getElementById('header')
    if (this.scrollY >= 50) {
        header.classList.add('sticky_header')
    } else {
        header.classList.remove('sticky_header')
    }
}
window.addEventListener('scroll', scrollHeader)

//------ SWIPER POPULAR ------//
let swiperPopular = new Swiper(".popular_container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

//------ VALUE ACCORDION ------//
let accordionItems = Array.from(document.getElementsByClassName('value_accordion-item'))

accordionItems.forEach((element) => {
    let accordionHeader = element.getElementsByClassName('value_accordion-header')[0]

    accordionHeader.addEventListener('click', () => {
        let openedAccordion = document.getElementsByClassName('accordion-open')[0];

        toggleItem(element)

        if (openedAccordion && openedAccordion != element) {
            toggleItem(openedAccordion)
        }
    })
})

const toggleItem = (element) => {
    let accordionContent = element.getElementsByClassName('value_accordion-content')[0];

    if (element.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        element.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        element.classList.add('accordion-open')
    }
}

//------ SCROLL SECTION ACRIVE LINK ------//
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    let scrollY = window.pageYOffset

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//------ SHOW SCROLL UP ------//
const scrollUp = () => {
    let scrollUp = document.getElementById('scrollup');
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

/*------ DARK LIGHT THEME ------*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//------ SCROLL REVEAL ANIMATION ------//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    reset: false
})

sr.reveal('.home_title, .popular_container, .subscribe_container, .footer_container')
sr.reveal('.home_description, .footer_info', { delay: 500 })
sr.reveal('.home_search', { delay: 600 })
sr.reveal('.home_value', { delay: 700 })
sr.reveal('.home_images', { delay: 800, origin: 'bottom'})
sr.reveal('.logos_img', { interval: 100 })
sr.reveal('.value_images, .contact_content', { origin: 'left' })
sr.reveal('.value_content, .contact_images', {origin: 'right'})
