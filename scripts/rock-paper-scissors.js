/* Object to store the results of the game */
score = {
    wins : 0 ,
    loses: 0 ,
    ties : 0
};

function resetScore(){
    score.wins = 0 ;
    score.loses = 0 ;
    score.ties = 0 ;

    document.querySelector('.scoree').innerHTML = 'Wins: 0, Losses: 0, Ties: 0' ;
    document.querySelector('.result').innerHTML = '' ;
}

function playGame(move){
    let comp = generateCompMove() ;

    let res = '' ;

    if(move === 'rock'){
        if(comp === 'rock'){
            res = 'tie' ;
        }
        else if(comp === 'paper'){
            res = 'lose' ;
        }
        else{
            res = 'win' ;
        }
    }
    else if(move === 'paper'){
        if(comp === 'rock'){
            res = 'win' ;
        }
        else if(comp === 'paper'){
            res = 'tie' ;
        }
        else{
            res = 'lose' ;
        }
    }
    else{
        if(comp === 'scissors'){
            res = 'tie' ;
        }
        else if(comp === 'paper'){
            res = 'win' ;
        }
        else{
            res = 'lose' ;
        }
    }

    if(res === 'win'){
        score.wins++ ;
    }
    else if(res === 'lose'){
        score.loses ++ ;
    }
    else{
        score.ties++ ;
    }

    /* show the result on the screen */

    let show = document.querySelector('.result') ;

    show.innerHTML = `You <img class="res-img" src="res/${move}-emoji.png"> <img class="res-img" src="res/${comp}-emoji.png"> Computer. ${res.toUpperCase()}.` ;


    updateScore() ;
}

function updateScore(){

    document.querySelector('.scoree').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}` ;
}

function generateCompMove() {
    /*
    To choose the random move of the computer, generate a random number between 0 and 1
    Rock -> 0 to 1/3
    Paper -> 1/3 to 2/3
    Scissors -> 2/3 to 1
    */

    let num = Math.random() ;

    if(num >= 0 && num <1/3){
        return 'rock' ;
    }
    else if(num >= 1/3 && num<2/3){
        return 'paper' ;
    }
    else{
        return 'scissors' ;
    }
}

let flag = false ;
let id ;

function autoPlay() {    

    if(!flag){
        id = setInterval(()=>{
            const move = generateCompMove() ;
            playGame(move) ;
        },1000);
        flag = true ;
    }
    else{
        clearInterval(id) ;
        flag = false ;
    }
    
}