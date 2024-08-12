gsap.fromTo('.hero', {opacity: 1}, {
    opacity: 0, 
        scrollTrigger: {
        trigger: '.hero', 
        start: 'top',
        end: '900', 
        scrub: true
    }
})

gsap.fromTo('.selling-container', { x: -500, opacity: 0 }, { 
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.hero', 
        start: 'top',
        end: 'center', 
        duration: 1, 
        ease: 'power2.in-out', 
        scrub: true
    }
})

gsap.fromTo('.ani-selling-col', { x: 500, opacity: 0 }, { 
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.hero', 
        start: 'center',
        end: 'bottom', 
        duration: .8, 
        ease: 'power2.in-out', 
        scrub: true
    }
})

if (ScrollTrigger.isTouch !==1) {
    gsap.fromTo('.left-part', { y: -200, opacity: 0 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.gallery-1', 
            start: 'top',
            end: 'bottom', 
            scrub: true
        }
    })
    
    gsap.fromTo('.right-part', { y: 200, opacity: 0 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.gallery-1', 
            start: 'top',
            end: 'bottom', 
            scrub: true
        }
    })
} 
else {
    gsap.fromTo('.left-part', { x: -50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.gallery-1', 
            start: 'center',
            end: 'bottom', 
            scrub: true
        }
    })
}

gsap.fromTo('.item-good-1', { x: -100, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.left-part',
        start: 'top',
        end: 'center', 
        scrub: true
    }
})

gsap.fromTo('.item-good-2', { x: 100, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.left-part',
        start: 'top',
        end: 'center', 
        scrub: true
    }
})

gsap.fromTo('.item-good-3', { y: -100, opacity: 0 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
        trigger: '.left-part',
        start: 'top',
        end: 'center', 
        scrub: true
    }
})

if (ScrollTrigger.isTouch !==1) {
    gsap.fromTo('.feedback-ani-1', { xy: 100, opacity: 0 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.variants-ani',
            start: 'top',
            end: 'center', 
            scrub: true
        }
    })
    
    gsap.fromTo('.feedback-ani-2', { y: 100, opacity: 0 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.variants-ani',
            start: 'top',
            end: 'center', 
            scrub: true
        }
    })
    
    gsap.fromTo('.feedback-ani-3', { y: 100, opacity: 0 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.variants-ani',
            start: 'top',
            end: 'center', 
            scrub: true
        }
    })
} else {
    gsap.fromTo('.feedback-ani-1', { x: 200, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.variants-ani',
            start: 'top',
            end: 'bottom', 
            scrub: true
        }
    })
    
    gsap.fromTo('.feedback-ani-2', { x: 200, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.variants-ani',
            start: 'top',
            end: 'bottom', 
            scrub: true
        }
    })
    
    gsap.fromTo('.feedback-ani-3', { x: 200, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.variants-ani',
            start: 'top',
            end: 'bottom', 
            scrub: true
        }
    })
}

gsap.fromTo('.form-ani-left', { x: -200, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.variants-ani', 
        start: 'top',
        end: 'bottom', 
        scrub: true
    }
})

gsap.fromTo('.form-ani-right', { x: 200, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
        trigger: '.variants-ani', 
        start: 'top',
        end: 'bottom', 
        scrub: true
    }
})