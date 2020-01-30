const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/rodolfo.jpg",
    color: ["atigrado", "blanco", "negro", "marron",],
    sexo: "masculino"
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/muzarella.jpg",
    color: ["blanco"],
    sexo: "femenino"
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/artilugia.jpg",
    color: ["negro"],
    sexo: "femenino"
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/wosito.jpg",
    color: ["blanco", "gris"],
    sexo: "masculino"
  },

  {
    name: "Calamardo",
    shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/calamardo.jpg",
    color: ["blanco", "negro", "naranja", "marron"],
    sexo: "masculino"

  },

]

let acumuladoraCards = "";
let acumuladora = ""

const contenedoraDeCards = (acumuladora) => {
  for (let i = 0; i < gatos.length; i++) {
    acumuladora += `
  <div>
  <img src=${gatos[i].img} alt=${gatos[i].name}>
  <h3>${gatos[i].name}</h3>
  <p>${gatos[i].shortDesc}</p>
  <button class="boton-vermas">Ver mas</button>
  </div>
  `;
  }
  return acumuladora
}

// for (let i = 0; i < gatos.length; i++) {

  
   // acumuladoraCards += `
   //   <div>
   //   <img src=${gatos[i].img} alt=${gatos[i].name}>
   //   <h3>${gatos[i].name}</h3>
   //   <p>${gatos[i].shortDesc}</p>
   //   <button class="boton-vermas">Ver mas</button>
   //   </div>
   //   `;

// }

const tarjetaDeGatitos = document.getElementById("cards");

tarjetaDeGatitos.innerHTML = contenedoraDeCards(acumuladora);

const modal = document.getElementById("myModal");

const botonVerMas = document.getElementsByClassName("boton-vermas");
const modalcontenido = document.querySelector(".modalcontent")

for (let i = 0; i < botonVerMas.length; i++) {
  botonVerMas[i].onclick = () => {
    console.log(`Cualquier cosa`)
    modal.classList.remove("nomostrar")

    modalcontenido.innerHTML = `
        <div>
        <img src=${gatos[i].img} alt=${gatos[i].name}>
        </div>
        <div class= "desc-long">
        <h3>${gatos[i].name}<h3>
        <p>${gatos[i].longDesc}</p></div>
        `
  }

}
const botonCerrarModal = document.getElementById("cerrarModal")


botonCerrarModal.onclick = () => {
  console.log(`Aprete boton`)
  modal.classList.add("nomostrar")
}

const formularioDeAdopcion = document.querySelector('form')
const checkBoxes = document.querySelectorAll("input[type= 'checkbox']")
const radios = document.querySelectorAll("input[type= 'radio']")
const inputsText = document.querySelectorAll("input[type= 'text']")
const nombreUsuario = inputsText[0]
const telefonoUsuario = inputsText[1]


formularioDeAdopcion.onsubmit = e => {
  e.preventDefault();

  console.log(nombreUsuario.value)
  console.log(telefonoUsuario.value)

  let opcionesElegidas = []

  for (let i = 0; i < checkBoxes.length; i++) {

    if (checkBoxes[i].checked) {
      opcionesElegidas.push(checkBoxes[i].value)


    }


  }
  if (!opcionesElegidas.length) {
    console.log("No soleccionó ninguna opción")
  } else {
    if (opcionesElegidas.length === 1) {
      console.log(`Elegiste la opción ${opcionesElegidas[0]}`)
    } else {
      console.log(`Elegiste las opciones ${opcionesElegidas.join(" , ")}`)
    }
  }
  let acumuladoraColor = ""

  for (let i = 0; i < gatos.length; i++) {

    for (let x = 0; x < gatos[i].color.length; x++) {

      if (gatos[i].color.includes(opcionesElegidas[x])) {

        acumuladoraColor += `
     <div>
     <img src=${gatos[i].img} alt=${gatos[i].name}>
     <h3>${gatos[i].name}</h3>
     <p>${gatos[i].shortDesc}</p>
     <button class="boton-vermas">Ver mas</button>
     </div>`
        break;
      }

    }
    tarjetaDeGatitos.innerHTML = acumuladoraColor;
  }

  let opcionesElegidasradio = ""

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      opcionesElegidasradio += radios[i].value
      console.log(`El sexo elegido es ${opcionesElegidasradio}`)

    }

  }
  if (!opcionesElegidasradio.length) {
    console.log("No soleccionó ninguna sexo")

  }

  let acumuladoraGatos = ""

  for (let i = 0; i < gatos.length; i++) {
    if (gatos[i].sexo === opcionesElegidasradio) {
      acumuladoraGatos += `
      <div>
      <img src=${gatos[i].img} alt=${gatos[i].name}>
      <h3>${gatos[i].name}</h3>
      <p>${gatos[i].shortDesc}</p>
      <button class="boton-vermas">Ver mas</button>
      </div>`;

    }
    tarjetaDeGatitos.innerHTML += acumuladoraGatos;

  }

}  
















