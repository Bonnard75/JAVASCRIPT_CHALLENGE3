"use strict";

//exercice 1

let poidsBernard = 78;
let tailleBernard = 1.69;

let poidsMarcel = 92;
let tailleMarcel = 1.95;

function imc(poids, taille) {
  return poids / (taille * taille);
}

let donnéeBernard = imc(poidsBernard, tailleBernard);
let donnéeMarcel = imc(poidsMarcel, tailleMarcel);

let bernardHigherIMC =
  donnéeBernard > donnéeMarcel;

  if (bernardHigherIMC) {
    console.log("oui, Bernard a un IMC plus grand que celui de Marcel.");
  } else {
    console.log("non, Bernard n'a pas un IMC plus grand que celui de Marcel.");
  }



console.log(bernardHigherIMC);
console.log("l'IMC de Bernard est : " + donnéeBernard.toFixed(2));
console.log("l'IMC de Marcel est : " + donnéeMarcel.toFixed(2));

//exercice 2

if (donnéeBernard > donnéeMarcel) {
  console.log("Bernard a un IMC plus élevé que Marcel");
} else {
  console.log("Bernard a un IMC inferieur a Marcel");
}


//exercice 3

    

    function tableauImc(userName,imc){
      
    if ( imc < 20 ){
      console.log(`${userName} : est en insuffisance pondérale`)
  }else if (imc <= 25){
      console.log(`${userName} : est en poids normal`)
  }else if (imc <= 30 ){
      console.log(`${userName} : est en surpoids`)
  }else if (imc <= 40){
      console.log(`${userName} : est en obésité`)
  }else{
      console.log(`${userName} : est en obésité importante`)
  }
};
      
      tableauImc ("Bernard",donnéeBernard);
      tableauImc ("Marcel",donnéeMarcel);

  
