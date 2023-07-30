/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor() { }

    sum(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

let calculator = new Calculator();

console.log(calculator.sum(20, 10));
console.log(calculator.subtraction(20, 10));
console.log(calculator.multiplication(20, 10));
console.log(calculator.division(20, 10));
