

const buttons = document.querySelectorAll('button');

const imputField=document.getElementById('result');


for (let i=0; i<buttons.length; i++){
buttons[i].addEventListener('click',()=>{
const buttonValue=	buttons[i].textContent;

if(buttonValue === 'C'){
	clearResult()
} else if(buttonValue === '='){
	calculateResult();
}
else{
	appendValue(buttonValue);
}
});
 

}



function clearResult(){
imputField.value='';
}

function calculateResult(){
imputField.value=eval(imputField.value)
}

function appendValue(buttonValue){

imputField.value += buttonValue

}