const inputOne=document.getElementById("input1");
const inputTwo=document.getElementById("input2");
const AmoutTwo=document.getElementById("AmoutTwo");
const AmoutOne=document.getElementById("AmoutOne")




// INPUT DIV
// inputOne.value=0;
// inputTwo.value=0;

//Amout DIV
// AmoutOne.innerHTML=0;
// AmoutTwo.innerHTML=0;

// const valeur=1;
// FONCTION POUR RECUPERER L'ENTREE DU INPUT


// function onchange(){
//     const valeur2=inputTwo.value;
// }



function getValue(){
    
    const valeur1 =inputOne.value;
    const valeur2=inputTwo.value;
    if (valeur1<0){
        document.getElementById("verif").innerHTML="Nombre negatif"
    }
    AmoutTwo.innerHTML=valeur1* valeur2;
    AmoutOne.innerHTML=valeur1* valeur2;

}

document.addEventListener("input",function(event){
    getValue();
})



