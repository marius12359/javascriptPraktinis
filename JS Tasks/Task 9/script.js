/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        return this.budget > 100000000;
    }
}

let avatar = new Movie("Avatar", "James Cameron", 237000000);
let theGodfather = new Movie("The Godfather", "Francis Ford Coppola", 6000000);

console.log(avatar.wasExpensive());
console.log(theGodfather.wasExpensive());
