const form = document.querySelector("#form-login");
const imagenTable = document.querySelector("#imagenTable");
const infoTable = document.querySelector("#infoTable");
const imagenPokemon = document.querySelector("#imagenPokemon");
const fechaActual = document.querySelector("#fechaActual");
const nombrePokemon = document.querySelector("#nombrePokemon");
const alturaPokemon = document.querySelector("#alturaPokemon");
const pesoPokemon = document.querySelector("#pesoPokemon");

var nuevo = document.getElementById("botonGuardar");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#dato-login").value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((response) => {
      if (!response.ok) {
        throw Error("No se encontró el Pokemon");
      }
      return response.json();
    })
    .then((data) => {
      const imagenUrl = data.sprites.front_default;
      const fecha = new Date().toLocaleDateString();
      const nombre = data.name;
      const altura = data.height / 10; // La API devuelve la altura en decímetros, dividimos por 10 para obtener metros
      const peso = data.weight / 10; // La API devuelve el peso en hectogramos, dividimos por 10 para obtener kilogramos
      imagenPokemon.src = imagenUrl;
      fechaActual.innerText = fecha;
      nombrePokemon.innerText = nombre;
      alturaPokemon.innerText = altura + " m";
      pesoPokemon.innerText = peso + " kg";
      imagenTable.style.display = "block";
      infoTable.style.display = "block";
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
});

nuevo.addEventListener("click", function(){
  window.comunicacion.nuevoRegistro([fechaActual.innerText,nombrePokemon.innerText,alturaPokemon.innerText,pesoPokemon.innerText]);
  alert("Datos guardados en la base de datos");
});
