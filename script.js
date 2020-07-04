
var pointVal = 99;
var health = 3;
var seconds = 0;
var e = window.event;
var hero = document.getElementById('heroImg');
hero.style.left = '180px'
hero.style.bottom = '180px'
var distance = 10;

var isGameOn = false

document.getElementById('points').innerHTML = pointVal;
document.getElementById('health').innerHTML = health;
document.getElementById('seconds').innerHTML = seconds;



function startGame() {
    // document.onkeydown = checkKey;
    document.getElementById('seconds').innerHTML = seconds++;
    if (59 < seconds) {
        seconds = 0; 
        //Inc speed of monsters.
    }

    document.addEventListener('keydown', function(e) {
        if (e.which === 37) {
            var leftNumbers = hero.style.left.replace('px', '')
            var left = parseInt(leftNumbers, 10)
        
          hero.style.left = `${left - distance}px`
        }
        else if (e.which === 40) {
            var leftNumbers = hero.style.bottom.replace('px', '')
            var left = parseInt(leftNumbers, 10)
        
          hero.style.bottom = `${left - distance}px`
        }
        else if (e.which === 39) {
            var leftNumbers = hero.style.left.replace('px', '')
            var left = parseInt(leftNumbers, 10)
        
          hero.style.left = `${left + distance}px`
        }
        else if (e.which === 38) {
            var leftNumbers = hero.style.bottom.replace('px', '')
            var left = parseInt(leftNumbers, 10)
        
          hero.style.bottom = `${left + distance}px`
        }
      })
}


