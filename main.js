// // Instructions
// // In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// // We will provide the HTML page.
// // You only have to work with a JS file.

// //creation d'un tableau comportant le systeme solaire
// // For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// //ajout de div a chaque element du gtableau planet
 const planets = ['neptune','saturne','mars','jupiter','saturne','uranus','venus','terre']

// //Créez une div pour chaque planète en utilisant la méthode createElement et en lui attribuant la classe planet :

const planetDivs = planets.map((planet) => {
    const div = document.createElement('div');
    div.classList.add('planet');
    return div;
});

// //Ajoutez une classe de couleur de fond différente à chaque div de planète et ajouter les differentes div a la section comportant la classe .listPlanets:

const planetColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown'];
planetDivs.forEach((div, i) => {
    div.classList.add(planetColors[i]);
    document.querySelector('.listPlanets').appendChild(div);
});

let Colred=document.querySelector(' .red')
Colred.style.background =  "red";

let Colororange=document.querySelector(' .orange')
Colororange.style.background =  "orange";

let Coloryellow=document.querySelector(' .yellow')
Coloryellow.style.background =  "yellow";

let Colorgreen=document.querySelector(' .green')
Colorgreen.style.background =  "green";

let Colorblue=document.querySelector(' .blue')
Colorblue.style.background =  "blue";

let Colorpurple=document.querySelector(' .purple')
Colorpurple.style.background =  "purple";

let Colorpink=document.querySelector(' .pink')
Colorpink.style.background =  "pink";

let Colorbrown=document.querySelector(' .brown')
Colorbrown.style.background =  "brown";

let Colred=document.querySelector(' .red')
Colred.style.background =  "red";