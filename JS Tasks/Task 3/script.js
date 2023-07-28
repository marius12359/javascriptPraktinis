/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", function () {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `
          <div class="card">
            <img src="${user.avatar_url}" alt="Avatar of ${user.login}">
            <h2>${user.login}</h2>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((error) => console.error(error));
  document.getElementById("message").style.display = "none";
});
