const dreams = document.getElementById("dreamJournal")
const ctxDream = dreams.getContext("2d")

ctxDream.font = "16px Open Sans"

// Mouse events

let dreamsX
let dreamsY

dreams.addEventListener('mousemove', (event) => {

    dreamsX = event.clientX - dreams.offsetLeft
    dreamsY = event.clientY - dreams.offsetTop

})

// random number

function randomIntMinMax (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

let dreamStars = []
const journalAssets = []

let timerStars = 100
let handle = false

class DreamStars {

    constructor(x, y){
      this.x = x
      this.y = y
      this.size = 5
      this.radius = randomInt(3)
      this.opacity = 1
    }

    draw(){
      ctxDream.save()
      ctxDream.globalAlpha = this.opacity
      ctxDream.beginPath()
      ctxDream.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
      ctxDream.fillStyle = "#FFD700"
      ctxDream.fill()
      ctxDream.restore()
    }

    fadeInOut() {

      if(this.opacity >= 0 && !handle){
        this.opacity -= 0.01
        if(this.opacity <= 0){
          handle = true
        }
      }

      if(handle){
        this.opacity += 0.01
        if(this.opacity >= 1){
          handle = false
        }
      }

    }

}


function handleDreamStars() {

  for(let i = 0; i < 600 ; i++){
    dreamStars.push(new DreamStars(randomInt(1900), randomInt(1800)))
  }

}

function drawDreamStars() {
  for(let i = 0; i < dreamStars.length ; i++){
    dreamStars[i].draw()
    dreamStars[i].fadeInOut()
  }
}

drawDreamStars()


const journalLetters = new Image()
journalLetters.src = "images/dreamjournal.png"

class JournalAssets {

  constructor(x, y, img, color) {
    this.x = x
    this.y = y
    this.img = img
    this.color = color
    journalAssets.push(this)
  }

  updatePosition() {
    if(dreamsX > 959.5){
      this.x++
      if(this.x > 470)
      this.x = 470
    }
    if(dreamsX < 959.5){
      this.x--
      if(this.x < 300)
      this.x = 300
    }
  }

  updatePosition1() {
    if(dreamsX > 959.5){
      this.x++
      if(this.x > 1570)
      this.x = 1570
    }
    if(dreamsX < 959.5){
      this.x--
      if(this.x < 1400)
      this.x = 1400
    }
  }


  draw() {
    ctxDream.drawImage(this.img, this.x, this.y)
  }

  drawCircles(){
    ctxDream.beginPath();
    ctxDream.arc(this.x, this.y, 40, 0, 2 * Math.PI)
    ctxDream.fillStyle = this.color
    ctxDream.fill()
  }

}

handleDreamStars()

let LetteringJournal = new JournalAssets(dreams.width / 2 - 445 / 2, dreams.height / 2 - 81 / 2, journalLetters)

let Moon = new JournalAssets(350, 100, undefined, "gold")
let Sun = new JournalAssets(385, 100, undefined, "black")
let Moon1 = new JournalAssets(1450, 100, undefined, "gold")
let Sun1 = new JournalAssets(1485, 100, undefined, "black")

function journalLoop() {
  ctxDream.clearRect(0, 0, dreams.width, dreams.height)
  ctxDream.fillStyle = "gold"
  /* CANVAS MOON PHASE RENDER
  ctxDream.fillText('MOON PHASE: ' + getLunarPhase(), dreams.width / 2 - 200 / 2, dreams.height / 2 + 80)
  */
  drawDreamStars()
  LetteringJournal.draw()
  Moon.drawCircles()
  Moon.updatePosition()
  Sun.drawCircles()
  Moon1.drawCircles()
  Moon1.updatePosition1()
  Sun1.drawCircles()
  requestAnimationFrame(journalLoop)
}

journalLoop()
