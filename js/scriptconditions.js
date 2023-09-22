"use strict";
//les conditions permettent de verifier si l'une ou l'autre condition est vrai ou pas pour savoir si on execute une autre ligne ou pas

let prenom="alex";
let fruit="pastèque";

let nbr1=5;
let nbr2=8;
let nbr3="5";

/* outils comparateur (comme "<, >, =, etc...")
signe égal, en mettre deux pour tester égalité simple ou trois pour tester égalité stricte
ex : pour vérifier la valeur et le type de la valeur, utiliser le triple égal, 
sinon, double égal pour vérifier simplement la valeur */

//si nbr1 egal nbr 3 message alert egalite "idem"
if(nbr1 == nbr3){
    alert("Idem");
}

if(nbr1 === nbr3){ //si nbr1 est strictement egam à nbr3 message alert "idem bis"
    alert("idem bis");
}else{ //sinon, message alert "Je suis dans le else"
    alert("Je suis dans le else");
}

//si (qlql chose){on execute} sinon si (qlq chose){on execute} sinon{}

if (nbr1<nbr2){
    alert("nbr1 est le plus petit");   
}else if (nbr1>nbr2){
    alert ("nbr1 est le plus grand");
}else {
    alert("je ne sais pas")
}

if (prenom == "alex"){
    alert("le prenom est correct");
}else {
    alert ("le prenom n'est pas correct");
}
console.log(prenom);
console.log(fruit);

//Switch, autre type de commande qui permet de faire des conditions mais ne peut que tester l'égalité
switch(nbr1){
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2:
        console.log("je suis le chiffre 2");
        break;
    case 3:
        console.log("je suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
default://si rien ne correspond
    console.log("je suis un autre chiffre");
}

switch(nbr2){
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2:
        console.log("je suis le chiffre 2");
        break;
    case 3:
        console.log("je suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
default:
    console.log("je suis un autre chiffre");
}

switch(2){
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2: //sans le break, il trouve la ligne mais il continue sur la case 3
        console.log("je suis le chiffre 2"); //donc bien penser à ne pas oublier le break
    case 3:
        console.log("je suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
default:
    console.log("je suis un autre chiffre");
}

//les deux esperluettes (&&) égal "si nrb1 égal 5 ET nbr2 égal 8 alors "alert jsuis trop fort", sinon, alert "NOOB""
if(nbr1==5 && nbr2==8){ 
    alert("je suis trop fort");
}else{
    alert ("NOOB");
}
//OU les deux barres (||) veulent dire "ou", sois l'un sois l'autre
if (nbr1==5 || nbr2==5){
    alert("je suis soi moi, sois l'autre ; trop fort.");
}else{
    alert ("NOOB bis")
}
let a=4;
let b=4;
let c=3;

switch(a){
    case (b):
        console.log ("egal à b");
        break;
    case(c):
    console.log ("egal à c");
    break;
default:
    console.log("egal à rien");
}

//WHILE

let aB=3;
while(aB<9){
    aB++
    if(aB==7){
        continue
    }
    if(aB==8){
        break
    }
    console.log(aB);
}
console.log('Jai cassé la boucle au bout de '+aB+" tours");