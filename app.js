let userName = prompt('please enter your name:');
console.log(userName);
document.write('<h2>' + userName + '</h2>');

let userAnswer = prompt('DO you like MMA?:')
console.log(userAnswer);

if (userAnswer == 'yes') {
    document.write('<h3>Welcome ' + userName +'</h3>');
}
 else {
    document.write('<h3>' + userName +' , you should try it out</h3>');
}