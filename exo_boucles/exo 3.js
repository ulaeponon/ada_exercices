let input = prompt("Entrez un nombre entre 0 et 10 :");
let number = Number(input);

if (isNaN(number) || number < 0 || number > 10 || !Number.isInteger(number)) {
    alert("Erreur : vous devez entrer un nombre entier entre 0 et 10.");
} else {
    for (let i = number; i >= 0; i--) {
        alert(i);
    }
};
