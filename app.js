let user1;

let url ="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2019/01/henry-cejudo-ufc-brooklyn-post-fight-4.jpg?w=1000&h=576&crop=1";

function getuserName(){
   let userName = prompt('please enter your name:');
    console.log(userName);
    user1= userName
    return (userName);
}

console.log(user1);

function getuserAnswer(){
    let userAnswer = prompt('DO you like MMA?:')
    console.log(userAnswer);
    
    if (userAnswer.toLowerCase() == 'yes') {
        document.write('<h3>Welcome ' + user1 +'</h3>') ;
    } else {
        document.write('<h3>' + user1 +' , you should try it out</h3>');
    }
}


function getbeltanswer(){
let userAnswer = prompt('Do you want to see how the current UFC belt looks like?');
document.write('<img src="' + url + '"/>')
if (userAnswer.toLowerCase() == 'no') {
    let url ='<img src="https://i.imgflip.com/1jmzdm.jpg"/>'
    document.write(url)
}
}



function userGuessingGame(){
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer)
    let userAttempts = 6;

    for(let i = 0; i < userAttempts; i++){
    let userGuess = prompt('please enter a number 1-100');
    while(userGuess < 1 || userGuess > 100){
        userGuess = prompt('wrong range. go again');
    }
    if (userGuess == correctAnswer){
        alert ('you got it right!');
        break;
    }else if(userGuess< correctAnswer){
        alert('too low. try again')
    }else if (userGuess > correctAnswer){
        alert('too high. try again.')
    }else {
        alert('something broke');
    }
    console.log(i);
    if (i == userAttempts - 1){
        alert('you did not win. Correct Answer is:' + correctAnswer);
    }
}
}



function theBelts(){
    let numberoftheBelts = prompt('how many times do you want to see the gold?')
    for (let i = 0; i < numberoftheBelts; i++){
        document.write('<img src="' + url + '">')
    }
}


