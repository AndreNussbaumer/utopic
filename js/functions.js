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

function readingTime() {

  const text = document.getElementById("article").innerText;
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm)
  document.getElementById("time").innerText = 'This will take ' + time + ' minute(s) to read.'

}





// Third part of page
/*
const firstBlock = document.getElementById('firstBlock')
const secondBlock = document.getElementById('secondBlock')
const thirdBlock = document.getElementById('thirdBlock')
const fourthBlock = document.getElementById('fourthBlock')

let imageBlocks = [firstBlock, secondBlock, thirdBlock, fourthBlock]
*/
