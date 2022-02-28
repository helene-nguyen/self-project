"use strict"

// Fonction variadique
function moy (){
    let somme = 0;
    for (let i = 0; i < arguments.length; i++) {
        somme += arguments[i]; // arguments pseudo tableau, on a pas la possibilité de faire une boucle for/of, il se comporte comme un tableau, on juste pas la méthode array qui focnitonne

    let moyenne = (somme / arguments.length) || 0;
        console.log(moyenne);
    
    }

}

moy(12, 8, 13);

//Spread operator (disperser)
let notes = [12, 8, 13]; //Cas très fréquent
moy(...notes);  //ici on est pas dans les parenthèses d'une fonction et non dans les parenthèses du corps d'une fonction
//Permet de transformer le tableau en une série et distribue les valeurs
//Bien faire attention, ce n'est pas un rest parameter càd que ça ne va pas appliquer les valeurs à "notes"
//ici, ça va reprendre toutes les valeurs de notes et ça fait le tour

/*Récursivité
Factorielle : 
0! = 1 //Factorielle 0 et est égale à 1 arbitrairement
1! = 1 * 0! = 1
2! = 2 * 1! = 2
3! = 3 * 2! = 6
4! = 4 * 3! = 24 etc etc.
n! = n * n-1! // Règle immuable

Raisonnement récursif = quand pour connaître une chose il faut connaître la précédente 
*/
/* function facto(n) {
        if (n == 0) { // si n = 0, alors retourne 1
            return 1;
        }
    return n * facto (n - 1); //sinon ça // nouveau n à chaque "réentrée" facto, la pile des appels ne va pas cesser d'augmenter la stack 
    si on demande un très grand nombre, la pile va augmenter en mémoire et on va arriver à un dépassement de pile = stackoverflow = nom d'une erreur connue = débordement de pile dans le cas 
}

console.log(facto(10));
Comme 10 != 0, alors on applique la 2e ligne donc 10 * 9! où 9! = 362 880
Ici on créée une pile et on peut suivre étape par étape le dépilement
 */
// Passage par valeur d'un nombre
/*Type primitif = valeur, array = object*/
/* function f1(n) {
    n++; // a bien lieu mais sur un autre n, ici block scope, pointe sur une case mémoire différente que celui d'en dessous
}
let n = 3;
f1(n);
console.log(n);
Passage par valeur consomme de la mémoire

Passage par référence d'un objet, ici un tableau
function f2(tab) {
    tab[0]++;
}
let tab = [3];
f2(tab);
console.log(tab); */ //4 car ce qui a dans la fonction a eu un impact dans le programme principal, pas de block scope
//ici ce qu'il se passe c'est qu'on ne va pas cibler l'élément en l'appelant, on cherche sa "case mémoire", ce passage par référence ne consomme pas de mémoire

/* function f(n) {
    return f(n-1);
}
console.log(f(3)); */

//Exceptions : erreurs à l'EXECUTION (pas erreur de syntaxes)
/* try{
    console.log(n);
} catch{

} */

//en ne mettant rien, la fonction catch va attrapper l'eception et rien ne s'affiche

//Si on ajoute une fonction ou autre dans catch, ça va l'afficher
//en général on appelle les exceptions e
try{
    console.log(n);
} catch (e){
    console.log(e.message);
}
console.log("OK"); // là le programme va continuer car on a bien attrappé l'erreur et on l'a fait affiché

//Limite de récursivité du navigateur
//Quand le stackoverflow va se produire, à quel moment la card-zone mémoire du navigateur va saturer, on veut savoir
//quand c'est un compteur, par  convention on l'appelle k
//quand c'est une exception, par convention on l'appelle e

function f(){
    k++;
    f();
}
//f();  là, ya un débordement

let k = 0;
try{
    f();
} catch {
    console.log(k); //on veut savoir le nombre d'appel récursif au moment où l'exception se déclenche
}
//S'affichera donc un nombre qui dépend du navigateur, de la RAM (mémoire), dépend de la version de l'OS, déoend de pas mal de choses
