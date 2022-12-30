const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider-frame');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom')

let slideNumber = 1;
const length = images.length;

//Second
for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'dots';
    bottom.appendChild(div);
}

const dots = document.querySelectorAll('.dots')
dots[0].style.backgroundColor = 'lightGrey';

const dotsBg = () => {
    dots.forEach((dot) => {
        dot.style.backgroundColor = 'transparent';
    })
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        dotsBg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        dot.style.backgroundColor = 'lightGrey';
    });
});


//First

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++; 
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2 ) * 800}px)`;
    slideNumber--; 
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length; 
}

const getFirstslide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const changeColor = () => {
    dotsBg();
    dots[slideNumber - 1].style.backgroundColor = 'lightGrey';  
}

right.addEventListener('click', () => {
    // if (slideNumber < images.length) {
    //     slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    //     slideNumber++;  
    // } else {
    //     slider.style.transform = `translateX(0px)`;
    //     slideNumber = 1;  
    // }
    
    slideNumber < length ? nextSlide() : getFirstslide();
    changeColor(); 
});

left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
});

