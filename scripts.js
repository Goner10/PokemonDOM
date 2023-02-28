console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const elemento1 = document.querySelector("#gen-1");
elemento1.textContent = "Generasión 1 Pokimon"


//Cambia el color de fondo de la primera generación de Pokimon.

const fondo = document.getElementsByClassName('infocard-list')[0];
for(const fondo1 of fondo.children){
    fondo1.style.background = '#00FFFF'
}

//Imprime por consola la URL de la página.

console.log(document.URL)

//Imprime por consola el dominio de la página.
console.log(document.domain)

//Imprime todos los nodos de imagen.
const imagenes = document.getElementsByTagName('img');
console.log(imagenes)

//Sustituye el atributo "src" de todas las imágenes
 
   const cambioImagen = document.querySelectorAll("img");
   for(const imin of cambioImagen) {
    imin.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
    imin.setAttribute("alt", "Cara de Nicolas Cage")
}

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let fondopok = document.getElementsByClassName('itype flying')

 for (elem of fondopok) {
    elem.parentNode.parentNode.style.background = 'black'
}
        







