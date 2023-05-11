// ABOUT PAGE

// For the Client Number on the about page

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'auto';
  });
  

clientNumber = document.querySelector('.clientNumber')

Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

window.addEventListener('load', () => {

    let timesRun = 0

    interval = setInterval(() => {
        clientNumber.innerText = clientNumber.innerText.split('')
        .map ((number, index) => {

            if (index < timesRun) {

            return clientNumber.dataset.value[index]
        }
            
            return Numbers[Math.floor(Math.random() * 10)]
        })
        .join('')

        if(timesRun >= clientNumber.dataset.value.length) clearInterval(interval)

        timesRun += 1 / 3

    }, 150)
   
   
})


smilesNumber = document.querySelector('.smilesNumber')

NumbersSmiles = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

window.addEventListener('load', () => {

    let timesRunSmiles = 0

    intervalSmiles = setInterval(() => {
        smilesNumber.innerText = smilesNumber.innerText
        .split('')
        .map ((number, indexSmiles) => {

            if (indexSmiles < timesRunSmiles) {

            return smilesNumber.dataset.value[indexSmiles]
        }
            
            return NumbersSmiles[Math.floor(Math.random() * 10)]
        })
        .join('')

        if(timesRunSmiles >= smilesNumber.dataset.value.length) clearInterval(intervalSmiles)

        timesRunSmiles += 1 / 3

    }, 100)
   
   
})



aboutMainPic =  document.querySelector('.aboutMainPic')
aboutTeamIntro = document.querySelector ('.aboutTeamIntro')
aboutMainPicTextDiv = document.querySelectorAll('.aboutMainPicTextDiv')


window.addEventListener('scroll', () => {
 
      aboutMainPic.style.backgroundSize = `${290 - window.pageYOffset / 7}%`;
  
});
  

const scrollbar = document.querySelector('.scrollbar')

window.addEventListener('scroll', () => {
    scrollbar.style.transform = `translateY(${window.pageYOffset/2.6}px)`

})



// squares = document.querySelectorAll('.square')
// options = { 
//     root:null,
//   threshold: 0.5,
// //    rootMargin: '200px'
// }
// observer = new IntersectionObserver(
//     (entries, observer)=> {       

//     entries.forEach(entry =>{
//         console.log(entry)
//     })
    
// }, options)

// squares.forEach (square => {
//     observer.observe(square)
   
// })



//FADE OBSERVER

faders = document.querySelectorAll('.fade-in')
sliders = document.querySelectorAll('.slide-in')

appearOptions = {
    threshold: 0.5
 } 
const appearOnScroll = new IntersectionObserver(
    (enteries, appearOnScroll) => {

        enteries.forEach (entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
           

        })

}, appearOptions)

faders.forEach (fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach (slider => {
    appearOnScroll.observe(slider)
})
 
    
    
