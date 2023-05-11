

navButton = document.querySelector('.hamburgerToggle')
mainNavList = document.querySelector('.mainNavList')
image = "Resources/close.svg"


navButton.addEventListener('click', () => {
    let visibility = mainNavList.getAttribute('data-visible') === 'true';
    if (!visibility) {
      mainNavList.setAttribute('data-visible', 'true');
      mainNavList.setAttribute('aria-expanded', 'true');
      console.log(mainNavList.getAttribute('aria-expanded'));
      navButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5rem" height="1.5rem" fill="#FFFFFF"> <path d="M19.78 6.36l-1.42-1.42L12 10.59 6.64 5.22 5.22 6.64 10.59 12l-5.37 5.36 1.42 1.42L12 13.41l5.36 5.37 1.42-1.42L13.41 12l5.37-5.36z"/> </svg>';


    } else {
      mainNavList.setAttribute('data-visible', 'false');
      mainNavList.setAttribute('aria-expanded', 'false');
      console.log(mainNavList.getAttribute('aria-expanded'));
      navButton.innerHTML = '  <svg class="hambutton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="1rem" height="1rem"> <path d="M3 12h18M3 6h18M3 18h18"></path></svg>';
    }
  });
  
navBtn = document.querySelectorAll('.navBtn')
imageSlides = document.querySelectorAll('.imageSlide')
descriptions = document.querySelectorAll('.description')


changeColour = (manual) => {

   navBtn.forEach(navBtnInner => {
    navBtnInner.classList.remove('activeBtn')
   })


   imageSlides.forEach( imageSlide => {
    imageSlide.classList.remove('active')
    
   })

   descriptions.forEach( description => {
    description.classList.remove('activeDesc')
    
   })

   descriptions[manual].classList.add('activeDesc')
    navBtn[manual].classList.add('activeBtn')
    imageSlides[manual].classList.add('active')
}


navBtn.forEach((navBtnInner, i) => {

    navBtnInner.addEventListener ('click', () => {

            changeColour(i)      

    })

    
    
});


// For the slide show on the home page
counter = 1

setInterval (() => {
    
    navBtn.forEach(navBtnInner => {
        navBtnInner.classList.remove('activeBtn')
       })

       imageSlides.forEach( imageSlide => {
        imageSlide.classList.remove('active')
        
       })

       descriptions.forEach( description => {
        description.classList.remove('activeDesc')
        
       })

       //timer for description
       descriptions[counter].classList.add('activeDesc')

       //timer for pictures
       imageSlides[counter].classList.add('active')

       //timer for navbuttons
        navBtn[counter].classList.add('activeBtn')


    counter++
    if(counter > 4) {
        counter = 0
    }

}, 7000)



dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {

    select = dropdown.querySelector('.select')
    menu = dropdown.querySelector('.menu')
    options = dropdown.querySelectorAll('.menu li a')
    selected = dropdown.querySelector('.selected')



    select.addEventListener('click', ()=> {
        select.classList.toggle('select-clicked')
        menu.classList.toggle('menu-open')
    })
    
    options.forEach(option => {
        option.addEventListener('click', ()=> {
    
            // selected.innerText = option.innerText
            select.classList.remove('select-clicked')
    
            options.forEach(option => {
                option.classList.remove('activeList')
            })
    
            option.classList.add('activeList')
        })
    })
})


