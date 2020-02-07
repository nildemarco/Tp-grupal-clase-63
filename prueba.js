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

//FUNCION ACC DE TARJETAS



const contenedoraDeCards = (arrDeGatitos) => {
    let acumuladoraCards = "";
    for (let i = 0; i < arrDeGatitos.length; i++) {
        acumuladoraCards += `
    <div>
    <img src=${arrDeGatitos[i].img} alt=${arrDeGatitos[i].name}>
    <h3>${arrDeGatitos[i].name}</h3>
    <p>${arrDeGatitos[i].shortDesc}</p>
    <button class="boton-vermas">Ver mas</button>
    </div>
    `;
    }
    return acumuladoraCards
}

const tarjetaDeGatitos = document.getElementById("cards");

tarjetaDeGatitos.innerHTML = contenedoraDeCards(gatos);

//MODAL BOTON VER MAS


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

//BOTON DE CERRAR MODAL
botonCerrarModal.onclick = () => {
    console.log(`Aprete boton`)
    modal.classList.add("nomostrar")
}

const formularioDeAdopcion = document.querySelector('form')
const checkBoxes = document.querySelectorAll("input[type= 'checkbox']")
const arrCheckboxes = Array.from(checkBoxes)
const radios = document.querySelectorAll("input[type= 'radio']")
const arrRadios = Array.from(radios)
const inputsText = document.querySelectorAll("input[type= 'text']")
const nombreUsuario = inputsText[0]
const telefonoUsuario = inputsText[1]

formularioDeAdopcion.onsubmit = e => {
    e.preventDefault();

    console.log(nombreUsuario.value);
    console.log(telefonoUsuario.value)


    const opcionesElegidasColor = arrCheckboxes.filter(opciones => opciones.checked).map((color => color.value))


    const opcioneselegidasSexo = arrRadios.filter(opcionesSexo => opcionesSexo.checked).map(sexo => sexo.value)

    let gatitosSelec = []
    gatos.forEach(gato => {
        
        let condicionSexo = (gato.sexo === opcioneselegidasSexo[0]) || opcioneselegidasSexo[0] === "indiferente" || !opcioneselegidasSexo[0];
        
        opcionesElegidasColor.forEach(opcColor => {
            
            if (gato.color.includes(opcColor) && !gatitosSelec.includes(gato) && condicionSexo) {
                gatitosSelec.push(gato)
            }
        })

    })
    
    tarjetaDeGatitos.innerHTML = contenedoraDeCards(gatitosSelec)
}

