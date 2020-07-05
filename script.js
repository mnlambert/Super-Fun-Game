
var pointVal = 0; //= document.getElementById('points').innerHTML;
var health = 3;
var seconds = 0;
var e = window.event;
var hero = document.getElementById('heroImg');
hero.style.left = '180px';
hero.style.bottom = '180px';
var distance = 1;
var boardMaxHeight = 720;
var isGameOn = false
var enemyLevel = 0;
var point1 = document.getElementById('point1');
var point2 = document.getElementById('point2');
var point3 = document.getElementById('point3');
var point4 = document.getElementById('point4');
var enemy1 = document.getElementById('enemy1');
var enemy2 = document.getElementById('enemy2');
var distanceEnemy = 5;


//document.getElementById('points').innerHTML = pointVal;
document.getElementById('health').innerHTML = health;
//document.getElementById('seconds').innerHTML = seconds;



function startGame() {
    if (health < 1){
        isGameOn = false;
    }

    //Position of Points
    initialPos(point1);
    initialPos(point2);
    initialPos(point3);
    initialPos(point4);

    //Position of Enemies
    initialPos(enemy1);
    initialPos(enemy2);

    //boardMaxHeight = document.querySelector("#middleBand").textContent;
    // document.onkeydown = checkKey;
    document.getElementById('seconds').innerHTML = ++seconds;
    if (9 < seconds) {
        seconds = 0;
        //Inc speed of monsters.
        distanceEnemy *= 5;
    }

    heroMove();
    enemyMove(distanceEnemy, enemy1);
    enemyMove(distanceEnemy, enemy2);
    checkCollisionVar();


}

//Moves the Hero in the game
function heroMove() {
    document.addEventListener('keydown', function (e) {
        if (e.which === 37) {
            goLeft(distance, hero);
        }
        else if (e.which === 40) {
            goDown(distance, hero);

        }
        else if (e.which === 39) {
            goRight(distance, hero);

        }
        else if (e.which === 38) {
            goUp(distance, hero);

        }
    })
}

function enemyMove(distance, enemy) {
    let caseNumber = getRandomInt(4);
    switch (caseNumber) {
        case 0:
          goUp(distance, enemy);
          break;
        case 1:
            goDown(distance, enemy);
          break;
        case 2:
            goLeft(distance, enemy);
          break;
        case 3:
            goRight(distance, enemy);
          break;
    }
}



//Move functions
function goUp(distance, element) {
    let bottom = getBottomPosition(element);
    if (bottom < boardMaxHeight) {
        element.style.bottom = `${bottom + distance}px`
    }
}

function goDown(distance, element) {
    let bottom = getBottomPosition(element);
    if (bottom > 5) {
        element.style.bottom = `${bottom - distance}px`
    }
}

function goLeft(distance, element) {
    let left = getLeftPosition(element);
    if (left > 5) {
        element.style.left = `${left - distance}px`
    }
}

function goRight(distance, element) {
    let left = getLeftPosition(element);
    if (left < boardMaxHeight) {
        element.style.left = `${left + distance}px`
    }
}



//
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Set the initial positon of the point
function initialPos(point) {
    if (seconds === 0 && distanceEnemy === 5) {
        point.style.left = getRandomInt(751) + 'px';
        point.style.bottom = getRandomInt(751) + 'px';
    }
}

//Gives a new position
function newPos(point) {
    point.style.left = getRandomInt(751) + 'px';
    point.style.bottom = getRandomInt(751) + 'px';

}

//Calculates the left position of an element i.e. hero/point
function getLeftPosition(element) {
    let leftNumbers = element.style.left.replace('px', '');
    return parseInt(leftNumbers, 10)
}

//Calculates the bottom position of an element i.e. hero/point
function getBottomPosition(element) {
    let bottomNumbers = element.style.bottom.replace('px', '');
    return parseInt(bottomNumbers, 10)
}

function checkCollisionVar() {

    let heroPos = heroPosition(hero);
    let point1Pos = pointPosition(point1);
    let point2Pos = pointPosition(point2);
    let point3Pos = pointPosition(point3);
    let point4Pos = pointPosition(point4);
    let enemy1Pos = enemyPosition(enemy1);
    let enemy2Pos = enemyPosition(enemy2);
    
    checkCollisionPoint(heroPos, point1Pos, point1);
    checkCollisionPoint(heroPos, point2Pos, point2);
    checkCollisionPoint(heroPos, point3Pos, point3);
    checkCollisionPoint(heroPos, point4Pos, point4);

    checkCollisionEnemy(heroPos, enemy1Pos, enemy1);
    checkCollisionEnemy(heroPos, enemy2Pos, enemy2);
}

//Heros Position
function heroPosition(hero) {
    let bottomHero = getBottomPosition(hero);
    let leftHero = getLeftPosition(hero);
    let topHero = bottomHero + 75;
    let rightHero = leftHero + 75;

    return {
        bottomHero, leftHero, topHero, rightHero
    }
}

//Points Position
function pointPosition(point) {
    let bottomPoint = getBottomPosition(point);
    let leftPoint = getLeftPosition(point);
    let topPoint = bottomPoint + 40;
    let rightPoint = leftPoint + 40;

    //point1.document.getElementById('point1');
    return {
        bottomPoint, leftPoint, topPoint, rightPoint
    }
}

//Enemy Position
function enemyPosition(enemy) {
    let bottomEnemy = getBottomPosition(enemy);
    let leftEnemy = getLeftPosition(enemy);
    let topEnemy = bottomEnemy + 85;
    let rightEnemy = leftEnemy + 85;

    return {
        bottomEnemy, leftEnemy, topEnemy, rightEnemy
    }
}

function checkCollisionPoint(heroPos, pointPos, point) {
    //Check to see if hero and point position have collided.
    if (heroPos.topHero > pointPos.bottomPoint && heroPos.leftHero < pointPos.rightPoint && heroPos.bottomHero < pointPos.topPoint && heroPos.rightHero > pointPos.leftPoint) {
        document.getElementById('points').innerHTML = ++pointVal;
        newPos(point);
    }
}

function checkCollisionEnemy(heroPos, pointPos, point) {
    //Check to see if hero and point position have collided.
    if (heroPos.topHero > pointPos.bottomEnemy && heroPos.leftHero < pointPos.rightEnemy && heroPos.bottomHero < pointPos.topEnemy && heroPos.rightHero > pointPos.leftEnemy) {
        document.getElementById('health').innerHTML = --health;
        console.log(health)
    }
}

function endGame() {

}