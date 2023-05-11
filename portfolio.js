modalBigDiv = document.querySelector('.modalBigDiv')
modalDiv = document.querySelector('.modalDiv')
cards = document.querySelectorAll('.cards')
modalCloseIcon = document.querySelector('.modalCloseIcon')



cards.forEach(card => {
    card.addEventListener('click', () => {
        modalBigDiv.classList.add('modalActive')
        modalDiv.style.backgroundImage =  `url(${card.src})`

       
    })

    modalCloseIcon.addEventListener('click', () => {

        if (modalBigDiv.style.opacity ='1'){
            modalBigDiv.classList.remove('modalActive')
        }
    })

    

});







