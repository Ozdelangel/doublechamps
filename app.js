let user1; 
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
//getuserAnswer();

function getbeltanswer(){
let userAnswer = prompt('Do you want to see how the current UFC belt looks like?');

let url ="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2019/01/henry-cejudo-ufc-brooklyn-post-fight-4.jpg?w=1000&h=576&crop=1"
document.write('<img src="' + url + '"/>')
if (userAnswer.toLowerCase() == 'no') {
    let url ='<img src="https://i.imgflip.com/1jmzdm.jpg"/>'
    document.write(url)
}
} 










 