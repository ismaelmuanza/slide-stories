const slide = document.querySelector('[data-slide="slide"]')
const items = slide.querySelectorAll('.slide-items > *')
const sizeItems = items.length
const thumb = document.querySelector('.slide-thumbs')
let thumbItems = []
let timeout
let active = 0

// functions
// active slide
function activeSlide (index) {
    active = index
    items.forEach(item => item.classList.remove('active'))
    items[index].classList.add('active')

    // thumbs
    thumbItems.forEach(item => item.classList.remove('active'))
    thumbItems[index].classList.add('active')
}

// next
function next () {
    autoSlide()
    if(active < sizeItems - 1) {
        activeSlide(active + 1)
    } else {
        activeSlide(0)
    }
}

// prev
function prev () {
    autoSlide()
    if(active > 0) {
        activeSlide(active - 1)
    } else {
        activeSlide(sizeItems - 1)
    }
}

// thumbs
function addThumbs () {
    items.forEach(() => thumb.innerHTML += `<span></span>`)
    thumbItems = Array.from(thumb.children)
}

// autoSlide
function autoSlide () {
    clearTimeout(timeout)
    timeout = setTimeout(next, 4000)
}

// events
slide.querySelector('.next').addEventListener('click', next)
slide.querySelector('.prev').addEventListener('click', prev)

addThumbs()
activeSlide(active)