//L'objectif est de creer une fonction qui retourne 'oui' ou 'non'
//On donne en parametre, le prenom
//function hasKey(firstname)
//On va avoir un tableau avec les noms
//des personnes qui ont les clefs :
//['Pierre', 'Laure', 'Mathilde', 'Vi']
//console.log(hasKey('Jerem')) // affiche 'non'
//console.log(hasKey('Laure')) // affiche 'oui'
const firstnameHaskey = ['Pierre', 'Laure', 'Mathilde', 'Vi']
function hasKey(firstname) {
    if (firstnameHaskey.includes(firstname)) {
        return 'oui';
    }
    else {
        return 'non';

    }
}
console.log(hasKey('Laure'))
console.log(hasKey('Jerem'))
// 2eme Methode

const keyHolders = ['Pierre', 'Laure', 'Mathilde', 'Vi']
function haskey2(firstname) {
    for (let i = 0; i < keyHolders.length; index++) {
        if (keyHolders[i] === firstname) {
            return "oui";
        }
        return "non";
    }
}