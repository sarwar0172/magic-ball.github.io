 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];


function generate_random(max_number){
  return Math.round(Math.random()*max_number)
}


function onAnswerRequested(){
const answer= document.getElementById("answer");
const question= document.getElementById('question')
if(question.value!==""){
  let randomnubmer=generate_random(3)
  if(randomnubmer==0){
    answer.innerHTML=`<p>${positiveAnswers[generate_random(4)]}</p>`
    answer.style.opacity=1
    answer.style.background="#fff"
  }else if(randomnubmer==1){
    answer.innerHTML=`<p>${negativeAnswers[generate_random(4)]}</p>`
    answer.style.opacity=1
    answer.style.background="#fff"

  }else{
    answer.innerHTML=`<p>${maybeAnswers[generate_random(4)]}</p>`
    answer.style.opacity=1
    answer.style.background="#fff";
  }


}else{
  answer.innerHTML=`<p></p>`
   answer.style.background="transparent"
  answer.style.opacity=1
}
}








