// document.body.style.backgroundColor ="yellow"

// let player1 = document.querySelector('p');
// player1.innerText = 'player 3'

function play (){
    let randomNumber = Math.ceil(Math.random() * 6)
    
    let randomDiceImage = 'Dice '  + randomNumber + '.jpg';
    
    let randomImageSource = 'diceimage/' +  randomDiceImage ;
    
    let diceimage = document.querySelectorAll('img')[0];
    
    diceimage.setAttribute('src', randomImageSource);
    
    // player 2
    
    
    let randomNumber2 = Math.ceil(Math.random() * 6)
        
    let randomDiceImage2 = 'Dice '  + randomNumber2+ '.jpg';
    
    let randomImageSource2 = 'diceimage/' +  randomDiceImage2 ;
    
    let diceimage2 = document.querySelectorAll('img')[1];
    
    diceimage2.setAttribute('src', randomImageSource2);
    
    let segun = document.body.querySelector('.refresh')
    if (randomNumber>randomNumber2){
        segun.innerHTML= "PLAYER ONE WINS 🏆🏆"   
    }else if (randomNumber2>randomNumber){
        segun.innerHTML="PLAYER TWO WINS 🏆🏆"
    }else{
        segun.innerHTML="DRAW 🎭🎭"
    }
}

  let butt = document.body.querySelector('.butt');


 butt.addEventListener('click', play)