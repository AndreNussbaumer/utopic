// POP UPS

const buyBeer = document.getElementById('buyBeer')
const dontSub = document.getElementById('dontSub')

let popz = localStorage.getItem("beerPop")
let subpopz = localStorage.getItem("subPop")

if(!popz){

  function displayIt() {
    buyBeer.style.display = 'flex'
  }

  setTimeout(function(){
    displayIt()
  },5000)

  localStorage.setItem('beerPop','true')

}


if(!subpopz){

  function displaySub() {
    dontSub.style.display = 'flex'
  }

  setTimeout(function(){
    displaySub()
  },17000)

  localStorage.setItem('subPop','true')

}

dontSub.addEventListener('click', () => {
  dontSub.style.display = 'none'
})

buyBeer.addEventListener('click', () => {
  buyBeer.style.display = 'none'
})

const popupbutton = document.querySelector('.subscribe')
const b = document.querySelector('.popup-container')

popupbutton.addEventListener('click', () => {
    b.style.visibility = 'visible'
})

b.addEventListener('click', (e) => {
  if(e.target.id !== ('content') && e.target.id !== ('poppy')) {
    b.style.visibility = 'hidden'
  }
})

const closepopup = document.querySelector('.popup-close')

closepopup.addEventListener('click', () => {
  if (b.style.visibility === 'visible') {
    b.style.visibility = 'hidden'
  } else {
    b.style.visibility = 'visible'
  }
})


const flashMessages = [
    {
        message: 'As long as good men live, Socialism will never die.'
    },
    {
        message: 'Profits are what comes from the difference between taking and giving.'
    },
    {
        message: 'The easy path usually descends into darkness, while the hard path, usually ascends into light.'
    },
    {
        message: 'Sex without love is the same as a beer without alcohol.'
    },
    {
        message: "Nature can go on without men, but men can't go on without nature."
    },
]





// Third part of page
/*
const firstBlock = document.getElementById('firstBlock')
const secondBlock = document.getElementById('secondBlock')
const thirdBlock = document.getElementById('thirdBlock')
const fourthBlock = document.getElementById('fourthBlock')

let imageBlocks = [firstBlock, secondBlock, thirdBlock, fourthBlock]
*/
