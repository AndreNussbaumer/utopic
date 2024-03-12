const date = new Date()
/* <p id="date">` + "MOON PHASE: " + getLunarPhase().toString() +  `</p>
IDEA FOR THE PAGE TO BE JUST A SINGLE PAGE THAT EITHER REVEALS OR HIDES CONTENT
*/
class Nav extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML =

    `
    <div id="nav">
      <div id="logo">
        <a href="index.html"><img id="logoImg" src="images/utopiclogo.png"/></a>
          <a href="index.html">
          <p id="featured">
            FEATURED
          </p>
          </a>
          <p id="links">
            <a href="index.html#linksFirst">
              ARTICLES
            </a>
          </p>
          <p id="links">
            <a href="index.html#homagesText">
              HOMAGES
            </a>
          </p>
          <p id="links">
            <a href="dreamjournal.html">
              DREAM JOURNAL
            </a>
          </p>
          <div id="subscribe">
            <div class="subscribe">
                SUBSCRIBE
            </div>
          </div>
      </div>
    </div>
    `
  }

}

customElements.define("header-nav", Nav)

class Footer extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML =

    `
    <div id="container">
      <div id="AOTM">
        <p id="affiliates" class="affiliates">
          <a href="https://andrenussbaumer.github.io/noblecause/index.html" target="_blank">NOBLE CAUSE</a> | <a href="https://andrenussbaumer.github.io/anwebsite/index.html" target="_blank">ANDRÉ NUSSBAUMER</a> | <a href="https://andrenussbaumer.github.io/theikons/index.html" target="_blank">THE IKONS </a>
        </p>
        <p id="footer">
          © <i><b>UTOPIC</b></i> 2023
        </p>
      </div>
    </div>
    `
  }

}

customElements.define("foot-nav", Footer)

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
