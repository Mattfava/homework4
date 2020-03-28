var score = 0;
function addScore(){
  score++;
}
function minusScore(){
    score--;
}
var initial ="";
//call minus score on incorrect answers

//Create a 60 second timer next to Timer that start on the click of Start Quiz button
var timeleft = 2;
function time(){
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = timeleft;
  } 
      
  timeleft -= 1;
}, 1000);
}
startQuiz();
//Create a row and col to store all text data in
function startQuiz(){
var divContainer = document.createElement("div");
divContainer.setAttribute('class','container');
divContainer.setAttribute('id','container')
document.body.appendChild(divContainer);
var newDivRow = document.createElement("div");
newDivRow.setAttribute('class','row');
divContainer.appendChild(newDivRow);
var newDivCol = document.createElement("div");
newDivCol.setAttribute('class','col-4') 
newDivRow.appendChild(newDivCol);
var newDivCol2 = document.createElement("div");
newDivCol2.setAttribute('class','col-4','text-center','text-wrap');
newDivCol2.textContent = "Welcome to your week 4 Coding bootcamp quiz please select press quiz after that select 1 answer per question to promt the next question."
newDivRow.appendChild(newDivCol2);
var newDivCol4 = document.createElement("div");
newDivCol4.setAttribute('class','col-4') 
newDivRow.appendChild(newDivCol4);
var col2Row = document.createElement("div");
col2Row.setAttribute('class','row');
newDivCol2.appendChild(col2Row);
var startBtn = document.createElement("BUTTON");
startBtn.setAttribute('class','btn btn-dark btn-lg');
startBtn.setAttribute('id','button');
startBtn.textContent="Start Quiz";
startBtn.addEventListener("click",time);
startBtn.addEventListener("click",Q1);
col2Row.appendChild(startBtn);


//on start quiz clear the text contents and repopulate with Q1 repeat for Q2 and Q3 
function Q1(){
newDivCol2.value = "";
newDivCol2.textContent = "What variable type returns a true or false value?";
var q1Row1 = document.createElement("div");
q1Row1.setAttribute('class','row');
newDivCol2.appendChild(q1Row1);
var q1Row2 = document.createElement("div");
q1Row2.setAttribute('class','row');
newDivCol2.appendChild(q1Row2);
var q1Row3 = document.createElement("div");
q1Row3.setAttribute('class','row');
newDivCol2.appendChild(q1Row3);
var q1Row4 = document.createElement("div");
q1Row4.setAttribute('class','row');
newDivCol2.appendChild(q1Row4);
var a1 = document.createElement("BUTTON");
a1.setAttribute('class','btn btn-dark btn-md');
a1.setAttribute('id','button');
a1.textContent = "String  ";
q1Row1.appendChild(a1);
a1.addEventListener("click",Q2);
//a1.addEventListener("click",minusScore);
var a2 = document.createElement("BUTTON");
a2.setAttribute('class','btn btn-dark btn-md');
a2.setAttribute('id','button');
a2.textContent = "Boolean";
//add score increment
console.log(score);
q1Row2.appendChild(a2);
a2.addEventListener("click",Q2);
a2.addEventListener("click",addScore);
var a3 = document.createElement("BUTTON");
a3.setAttribute('class','btn btn-dark btn-md');
a3.setAttribute('id','button');
a3.textContent = "Integer";
q1Row3.appendChild(a3);
a3.addEventListener("click",Q2);
//a3.addEventListener("click",minusScore);
var a4 = document.createElement("BUTTON");
a4.setAttribute('class','btn btn-dark btn-md');
a4.setAttribute('id','button');
a4.textContent = "Float";
q1Row4.appendChild(a4);
a4.addEventListener("click",Q2);
//a4.addEventListener("click",minusScore);
}
//Q2on start quiz clear the text contents and repopulate with Q1 repeat for Q2 and Q3 
function Q2(){
  newDivCol2.value = "";
  newDivCol2.textContent = "How do you declare a variable in javascript?";
  var q1Row1 = document.createElement("div");
  q1Row1.setAttribute('class','row');
  newDivCol2.appendChild(q1Row1);
  var q1Row2 = document.createElement("div");
  q1Row2.setAttribute('class','row');
  newDivCol2.appendChild(q1Row2);
  var q1Row3 = document.createElement("div");
  q1Row3.setAttribute('class','row');
  newDivCol2.appendChild(q1Row3);
  var q1Row4 = document.createElement("div");
  q1Row4.setAttribute('class','row');
  newDivCol2.appendChild(q1Row4);
  var a1 = document.createElement("BUTTON");
  a1.setAttribute('class','btn btn-dark btn-md');
  a1.setAttribute('id','button');
  a1.textContent = "variable =";
  q1Row1.appendChild(a1);
  a1.addEventListener("click",Q3);
  //a1.addEventListener("click",minusScore);
  var a2 = document.createElement("BUTTON");
  a2.setAttribute('class','btn btn-dark btn-md');
  a2.setAttribute('id','button');
  a2.textContent = "v = ";
  console.log(score);
  q1Row2.appendChild(a2);
  a2.addEventListener("click",Q3);
  //a2.addEventListener("click",minusScore);
  var a3 = document.createElement("BUTTON");
  a3.setAttribute('class','btn btn-dark btn-md');
  a3.setAttribute('id','button');
  a3.textContent = "var =";
  //add score increment
  q1Row3.appendChild(a3);
  a3.addEventListener("click",Q3);
  a3.addEventListener("click",addScore);
  var a4 = document.createElement("BUTTON");
  a4.setAttribute('class','btn btn-dark btn-md');
  a4.setAttribute('id','button');
  a4.textContent = "google";
  q1Row4.appendChild(a4);
  a4.addEventListener("click",Q3);
  //a4.addEventListener("click",minusScore);
  }

//Q3on start quiz clear the text contents and repopulate with Q1 repeat for Q2 and Q3 
function Q3(){
  newDivCol2.value = "";
  newDivCol2.textContent = "What do you do if you can not figure out what is wrong with your code?";
  var q1Row1 = document.createElement("div");
  q1Row1.setAttribute('class','row');
  newDivCol2.appendChild(q1Row1);
  var q1Row2 = document.createElement("div");
  q1Row2.setAttribute('class','row');
  newDivCol2.appendChild(q1Row2);
  var q1Row3 = document.createElement("div");
  q1Row3.setAttribute('class','row');
  newDivCol2.appendChild(q1Row3);
  var q1Row4 = document.createElement("div");
  q1Row4.setAttribute('class','row');
  newDivCol2.appendChild(q1Row4);
  var a1 = document.createElement("BUTTON");
  a1.setAttribute('class','btn btn-dark btn-md');
  a1.setAttribute('id','button');
  a1.textContent = "Get in bed and cry";
  q1Row1.appendChild(a1);
  a1.addEventListener("click",done);
  //a1.addEventListener("click",minusScore);
  var a2 = document.createElement("BUTTON");
  a2.setAttribute('class','btn btn-dark btn-md');
  a2.setAttribute('id','button');
  a2.textContent = "Quit coding all together";
  console.log(score);
  q1Row2.appendChild(a2);
  a2.addEventListener("click",done);
  //a2.addEventListener("click",minusScore);
  var a4 = document.createElement("BUTTON");
  a4.setAttribute('class','btn btn-dark btn-md');
  a4.setAttribute('id','button');
  a4.textContent = "Throw your laptop out the window";
  //score increment
  a4.addEventListener("click",done);
  q1Row3.appendChild(a4);
  var a3 = document.createElement("BUTTON");
  a3.setAttribute('class','btn btn-dark btn-md');
  a3.setAttribute('id','button');
  a3.textContent = "Walk away and take a break";
  q1Row4.appendChild(a3);
  a3.addEventListener("click",done);
  a3.addEventListener("click",addScore);
  //a4.addEventListener("click",minusScore);
  }

//Repopulate screen that says all done displays the score and has an entry point to input initials for high score keeping
function done(){
  newDivCol2.value = "";
  newDivCol2.textContent = "All Done!";
  var q1Row1 = document.createElement("div");
  q1Row1.setAttribute('class','row');
  q1Row1.textContent = "Your final score is: "+score;
  newDivCol2.appendChild(q1Row1);
  var q1Row2 = document.createElement("div");
  q1Row2.setAttribute('class','row');
  newDivCol2.appendChild(q1Row2); 
  var textform = document.createElement("div");
  //have form appear on screen
  textform.setAttribute('class','col');
  textform.textContent = "Input Initials: Up to 3 Letters only";
  q1Row2.appendChild(textform);

  var inputField = document.createElement("INPUT");
  inputField.setAttribute('class','col');
  inputField.setAttribute('class','form-group mx-sm-3 mb-2');
  inputField.setAttribute('id','initials');
  inputField.setAttribute('class','form-control');
  inputField.setAttribute('type','text');
  q1Row2.appendChild(inputField);
  console.log(inputField.value);
  


  var formButton = document.createElement("BUTTON");
  formButton.setAttribute('class','col');
  formButton.setAttribute('class','btn btn-primary mb-2');
  formButton.textContent = "Submit";
  formButton.addEventListener("click",setInitial);
  q1Row2.appendChild(formButton);
  
  


  function scorePage(){
    newDivCol2.value = "";
    newDivCol2.textContent = "High Scores!";
    var scoreDivRow = document.createElement("div");
    scoreDivRow.setAttribute('class','row');
    newDivCol2.appendChild(scoreDivRow);
    var scoreDivCol = document.createElement("div");
    scoreDivCol.setAttribute('class','col');
    scoreDivRow.appendChild(scoreDivCol);
    localStorage.setItem('initial',JSON.stringify(initial));
    var scoreInt = JSON.parse(localStorage.getItem('initial'));
    console.log(scoreInt);
    scoreDivCol.textContent = ""+scoreInt+" "+score;
    var highScoreDiv = document.createElement("div");
    highScoreDiv.setAttribute('class','row');
    var highScoreCol = document.createElement("div");
    highScoreCol.setAttribute('class','col-4');
    highScoreCol.setAttribute('id','clearhere');
    highScoreDiv.appendChild(highScoreCol);
    var highScoreRow = document.getElementById("highScore");
    console.log(highScoreRow);
    highScoreRow.appendChild(highScoreDiv);
    highScoreCol.textContent = ""+scoreInt+" "+score;
    
    
    
    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute('class','row');
    scoreDivCol.appendChild(buttonDiv);
    var resetCol = document.createElement("div");
    resetCol.setAttribute('class','col');
    buttonDiv.appendChild(resetCol);
    var clearCol = document.createElement("div");
    clearCol.setAttribute('class','col');
    buttonDiv.appendChild(clearCol);
    var resetButton = document.createElement("BUTTON");
    resetButton.setAttribute('class','col');
    resetButton.setAttribute('class','btn btn-primary mb-2');
    resetButton.textContent = "Start Quiz Over";
    resetCol.appendChild(resetButton);
    resetButton.addEventListener("click",restart);
    
    var clearButton = document.createElement("BUTTON");
    clearButton.setAttribute('class','col');
    clearButton.setAttribute('class','btn btn-primary mb-2');
    clearButton.textContent = "Clear Scores";
    clearCol.appendChild(clearButton);
    clearButton.addEventListener("click",clear);
  }
  function setInitial(){
    initial=inputField.value;
    if(initial.length>3 || initial.length == 0){
        alert("Please enter Initials with less than 3 characters");
        done();
    }else{
        scorePage();
    }
    console.log(initial);
    
}

}
}
function restart(){
  var q = document.getElementById("container");
  q.innerHTML = "";
  startQuiz();
}
function clear(){
  var w = document.getElementById("clearhere");
  w.innerHTML="";
}

//fix score keeping
//have input field work
//Store high scores with initials to local storage and display in top left under High scores