function displayPrevious (number){
    document.querySelector('#disp-item-previous').innerText =  number;
};

function getPrevious (){

}

function displayCurrent (number){
    document.querySelector('#disp-item-current').innerText =  number;
};

 


displayCurrent(')
displayPrevious('')
 
var allClear = function(){};







/*var calculate = function(previous, current){
    var operationsBtn = prompt('unesi operaciju');
    if(operationsBtn == '+'){
        return previous + current;
    }  else if(operationsBtn == '-'){
        return previous - current;
    }  else if(operationsBtn == '*'){
        return previous * current;
    }  else if(operationsBtn == '/'){
        return previous / current;
    }  else if (operationsBtn == '%'){
        return (previous * current)/100;
   
};

var calculate = function(previous, current){
    
    switch (operations){
        case '+':
            return previous + current;
        case '-':
            return previous - current;
        case '*':
            return previous * current;
        case '/':
            return previous / current;
        case '%':
            return (previous * current)/100;
        

    }
}



console.log (calculate ( 20, 80));
 




var previousRes = document.querySelector('#disp-item-previous');
var currentRes = document.querySelector('#disp-item-current');*/
var allClearBth = document.querySelector('#delete');
var equalsBth = document.querySelector('#equals');



var numberBtn = document.querySelectorAll('.number');
for(var i = 0; i < numberBtn.length; i++){
    var nc;
    numberBtn[i].addEventListener('click', function(){
    
        
        
        var output ;
        output = output + this.innerText;
        displayCurrent(output);

    
        
    
    });   
}


var operationsBtn = document.querySelectorAll('.math-op');

for(var i = 0; i < operationsBtn.length; i++){
    operationsBtn[i].addEventListener('click', function(){
     console.log (this.innerText)
    });
} 

document.querySelector('#delete').addEventListener ('click', function(){
    displayCurrent('');
    displayPrevious('');
})