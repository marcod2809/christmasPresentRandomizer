//randomly determine who offer present to who

let offreurs = ['pierre', 'paul', 'jacques', 'jeanne', 'papa', 'maman', 'papy', 'mamie']
let receveurs = ['pierre', 'paul', 'jacques', 'jeanne', 'papa', 'maman', 'papy', 'mamie']

function determinerOffreur(offreurs){
     return offreurs[Math.floor(Math.random() * offreurs.length)];
}

function determinerReceveur(receveurs){
    return receveurs[Math.floor(Math.random() * receveurs.length)];
}

function isSimilar(){
    if (offreur === receveur){
        return true
    } else {
        return false
    }
}

function deleteOncedetermined(personne, categorie){
    const index = categorie.indexOf(personne);
if (index > -1) { // only splice array when item is found
categorie.splice(index, 1); // 2nd parameter means remove one item only
}}

do {
    offreur = determinerOffreur(offreurs)
    receveur = determinerReceveur(receveurs)
    similar = isSimilar()
    if (similar === false){
        deleteOncedetermined(offreur, offreurs)
        deleteOncedetermined(receveur, receveurs)
        console.log(offreur + ' offre à ' + receveur)
}} while (receveurs.length >= 0)



