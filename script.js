// HIERMEE START/STOP JE DE MUZIEK//
let backgroundmusic = new Audio('mp3/Hip-Hop.mp3');
  backgroundmusic.loop = true;

  function geluidBackgroundMusic() {
    if (backgroundmusic.paused) { 
      backgroundmusic.play();
    } else {
      backgroundmusic.pause();
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.musicbutton');
    button.addEventListener("click", geluidBackgroundMusic);
  });  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DIT VERANDERD HET SHIRT VAN HET POPPETJE//
let shirts = ['', 'img/shirt1.svg', 'img/shirt2.svg', 'img/shirt3.svg']
let shirtIndex = 1
function nextShirt() {
 changeShirt(shirtIndex)

  if(shirtIndex + 1 > shirts.length -1) { shirtIndex = 0}
  else { shirtIndex ++}
}

function changeShirt(shirtIndex) {
  const shirt = document.querySelector('#shirt')
  shirt.src = shirts[shirtIndex]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DIT VERANDERD HET HAAR VAN HET POPPETJE//
let haars = ['', 'img/haar1.svg', 'img/haar2.svg', 'img/haar3.svg']
let haarIndex = 1
function nextHaar() {
  changeHaar(haarIndex)

  if(haarIndex + 1 > haars.length -1) { haarIndex = 0} 
  else { haarIndex ++}
}

function changeHaar(haarIndex) {
  const haar = document.querySelector('#haar')
  haar.src = haars[haarIndex]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DIT VERANDERD DE BRIL VAN HET POPPETJE//
let brils = ['', 'img/bril1.svg', 'img/bril2.svg', 'img/bril3.svg']
let brilIndex = 1
function nextBril() {
  changeBril(brilIndex)

  if(brilIndex + 1 > brils.length -1) { brilIndex = 0} 
  else { brilIndex ++}
}

function changeBril(brilIndex) {
  const bril = document.querySelector('#bril')
  bril.src = brils[brilIndex]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DIT VERANDERD DE WENKBRAUW VAN HET POPPETJE//
let wenks = ['', 'img/wenkbrouw1.svg', 'img/wenkbrouw2.svg', 'img/wenkbrouw3.svg']
let wenkIndex = 1
function nextWenk() {
  changeWenk(wenkIndex)
  if(wenkIndex + 1 > wenks.length -1) { wenkIndex = 0} 
  else { wenkIndex ++}

}

function changeWenk(wenkIndex) {
  const wenk = document.querySelector('#wenk')
  wenk.src = wenks[wenkIndex]
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RANDOM BUTTOM //

function randombutton() {
  changeShirt(shirtIndex = Math.floor(Math.random() * 4)); // random getal tussen 0 en 3
  shirtIndex ++
  changeHaar(haarIndex = Math.floor(Math.random() * 4)); // random getal tussen 0 en 3
  haarIndex ++
  changeBril(brilIndex = Math.floor(Math.random() * 4)); // random getal tussen 0 en 3
  brilIndex ++
  changeWenk(wenkIndex = Math.floor(Math.random() * 4)); // random getal tussen 0 en 3
  wenkIndex ++
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////bron: hulp van Nolivin en ChatGPT 
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelector('.buttons');

  function startSound() {
    let clickSound = new Audio('mp3/clicksound_1.mp3');
    clickSound.play();
  }

  buttons.addEventListener('click', startSound);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// CODE VOOR SPRAAKHERKENNING, BRON CHAT GPT ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//   recognition.lang = 'nl-NL';

//   recognition.onresult = function(event) {
//     const transcript = event.results[0][0].transcript.toLowerCase();

//     if (transcript.includes('up')) {
//       randombutton();
//     }
//   };

//   recognition.start();
// } else {
//   console.error('De browser ondersteunt geen spraakherkenning.');
// }

  