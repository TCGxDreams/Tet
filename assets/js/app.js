const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
} 

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// parallax
let parallax = new Rellax('.parallax');

//gsap
gsap.from('.home__img-1', 5, {opacity: 0, x: 400})
gsap.from('.home__img-6', 1.5, {opacity: 0, y: 200, delay: .1, ease:'back.out(1.5)'})
gsap.from('.home__img-3', 1.5, {opacity: 0, y: 400, delay: .3, ease:'back.out(1.5)'})
gsap.from('.home__img-5', 1.5, {opacity: 0, y: 400, delay: .5, ease:'back.out(1.5)'})
gsap.from('.home__img-2', 1.5, {opacity: 0, y: 400, delay: .8, ease:'back.out(1.5)'})
gsap.from('.home__img-4', 1.5, {opacity: 0, y: 200, delay: 1.8, ease:'back.out(1.5)'})
gsap.from('.home__data', 1.5, {opacity: 0, y: -100, delay: 2.5, ease:'back.out(1.5)'})
gsap.from('.home__lantern-1', 1.5, {opacity: 0, y: 70, delay: 3, ease:'back.out(1.5)'})
gsap.from('.home__lantern-2', 1.5, {opacity: 0, y: -70, delay: 3.5, ease:'back.out(1.5)'})

//sakura
const sakura = new Sakura('.sakura-petals' )

// scrollreveal 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.about__data, .celebrate__img', {origin: 'right'})
sr.reveal('.about__img, .celebrate__data', {origin: 'left'})
sr.reveal('.send__card', {interval: 100})
sr.reveal('.footer')


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
        const send = document.querySelector('.nav__menu a[href*=send]');
        const celebrate = document.querySelector('.nav__menu a[href*=celebrate]');
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-58) {
            celebrate.classList.add('active-link');
            send.classList.remove('active-link');
        }                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// Select all parallax images
const parallaxElements = document.querySelectorAll('.parallax');

// Add scroll event listener
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  parallaxElements.forEach((element, index) => {
    const speed = 0.2 + index * 0.1; // Adjust speed based on index
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

// GSAP Parallax Animation
gsap.utils.toArray('.parallax').forEach((element, index) => {
    const speed = 0.2 + index * 0.1;
  
    gsap.to(element, {
      y: () => -(window.scrollY * speed),
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
  