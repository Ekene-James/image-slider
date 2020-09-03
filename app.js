const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slider');
const timer = 5000;
let sliderCounter;

const nextFunc = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
}

next.addEventListener('click', () => {
    clearInterval(sliderCounter)
    autoFunc(nextFunc)
    nextFunc()})


const prevFunc = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
current.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length - 1].classList.add('current');
    }
}

prev.addEventListener('click', () => {
    clearInterval(sliderCounter)
    autoFunc(prevFunc)
    prevFunc()
}
    )

const autoFunc = func => {
  sliderCounter =  setInterval(() => func(), 5000)
}
autoFunc(nextFunc)
