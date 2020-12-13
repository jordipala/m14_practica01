const prompt = require('prompt-promise');

async function main () {
    let input = await prompt("Escriu una llista de 4 paraules separades per espai: ")

    // TODO: 
    // Separa les paraules que ha introduït l'usuari pel caracter espai
    // Si l'usuari no ha escrit exactament 4 paraules escriu per pantalla "Has escrit X paraules, no 4 paraules", a on X és el nombre de paraules que ha escrit
    // Escriu per pantalla: "La segona paraula que has escrit és Y", a on Y és la paraula que ocupa la segona posició
    // Si alguna de les paraules és "gos" escriu per pantalla el text "Hi ha un gos a la llista"
}

main()
