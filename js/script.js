
const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3,
    autoScroll: {
        speed: .5
    },
    arrows: false,
    pagination: false,
});

splide.mount( window.splide.Extensions );


const textArea = document.querySelector('#email-content')

textArea.addEventListener('input', (e) => {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
})

