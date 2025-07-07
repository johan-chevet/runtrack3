function estPremier(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    // Vérifie les diviseurs jusqu'à la racine carrée de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n est divisible → pas premier
        }
    }

    return true; // aucun diviseur trouvé → n est premier
}


function sommenombrespremiers(nb, nb2) {
    if (estPremier(nb) && estPremier(nb2)) {
        return nb + nb2;
    }
    return false;
}

console.log(sommenombrespremiers(2 , 2));
console.log(sommenombrespremiers(4 , 2));
console.log(sommenombrespremiers(12 , 12));
console.log(sommenombrespremiers(61 , 79));
