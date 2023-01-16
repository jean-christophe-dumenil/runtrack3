function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }
    return numbers;
}

console.log(tri([1, 87, 74, 2], 'desc'))
console.log(tri([100, 7, 7465, 802, 1], 'asc'))


/*Ce code définit une fonction "tri" qui prend en paramètres un tableau de 
nombres "numbers" et une variable "order" qui contient "asc" ou "desc". 
La fonction utilise la méthode sort() de javascript pour trier le tableau selon le paramètre passé. 
Si "order" est égal à "asc", le tableau sera trié dans l'ordre croissant.
Si "order" est égal à "desc", le tableau sera trié dans l'ordre décroissant. 
Enfin, la fonction retourne le tableau trié.*/