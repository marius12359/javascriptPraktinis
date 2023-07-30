/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var button = document.getElementById("btn__element");
var state = document.getElementById("btn__state");

var count = 0;

button.addEventListener("click", function () {
    count++;
    state.innerText = count;
});