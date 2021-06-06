const personas = [];

document.querySelector("#survey-form").addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let edad = document.querySelector("#number").value;
    let gradoDeInstruccion = document.querySelector("#dropdown").value;
    let genero = document.querySelector(".form-check-input").value;
    let areaInteresada = document.querySelector("#dropdown2").value;
    let programas = document.querySelector(".form-check-input").value;
    let texto = document.querySelector("#exampleFormControlTextarea1").value;

    const datosPersonas = {
        nombre: nombre,
        email: email,
        edad: edad,
        gradoDeInstruccion: gradoDeInstruccion,
        genero: genero,
        areaInteresada: areaInteresada,
        programas: programas,
        texto: texto
    }
    personas.push(datosPersonas);
    e.preventDefault();
    guardarDatos();
    let myAlert =document.getElementById('liveToast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
    document.querySelector("#survey-form").reset();
})
const guardarDatos = () => {
    localStorage.setItem("Datos", JSON.stringify(personas))
}