/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
document.getElementsByTagName("form")[0].addEventListener("submit", convert);

function convert(event) {
    event.preventDefault();

    let weightInKg = document.getElementById("search").value;

    if (!weightInKg || weightInKg < 0) {
        alert("Please enter valid weight in kilograms");
        return;
    }

    let weightInPounds = weightInKg * 2.2046;
    let weightInGrams = weightInKg / 0.001;
    let weightInOunces = weightInKg * 35.274;

    document.getElementById("output").innerHTML = `<div class="result">
        <div class="number">${weightInPounds.toFixed(2)}</div>
        <div class="unit">Pounds (lb)</div>
     </div>
     <div class="result">
        <div class="number">${weightInGrams.toFixed(2)}</div>
        <div class="unit">Grams (g)</div>
     </div>
     <div class="result">
        <div class="number">${weightInOunces.toFixed(2)}</div>
        <div class="unit">Ounces (oz)</div>
     </div>`;
}