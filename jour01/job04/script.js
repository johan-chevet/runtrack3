function bisextile(annee) {
    console.log("La fonction bisextile a été appelée avec l'année : " + annee);
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}