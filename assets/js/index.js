const btnIMC = document.querySelector(".btn-imc")

btnIMC.addEventListener("click", () => {
    const pesoIMC = document.querySelector("#peso").value
    const alturaIMC = document.querySelector("#altura").value
    const alturaIMCConvert = alturaIMC / 100
    let dica = alturaIMC - 100

    const resultadoIMC = document.querySelector(".result-peso")
    const resultadoEstado = document.querySelector(".estado-imc")
    const resultadoDica = document.querySelector(".dica-imc")


    if (alturaIMC === "" || pesoIMC === "") {
        alert("Preencha os campos com valores validos")
    } else {
        const ConvertValues = (pesoIMC / alturaIMCConvert ** 2).toFixed(1)
        resultadoIMC.innerHTML = ConvertValues
        resultadoDica.innerHTML = dica + " Kilos"

        if (ConvertValues <= 18.5) {
            resultadoEstado.innerHTML = "Magreza"
        } else if (ConvertValues <= 24.9) {
            resultadoEstado.innerHTML = "Normal"
        } else if (ConvertValues <= 29.9) {
            resultadoEstado.innerHTML = "Sobrepeso"
        } else if (ConvertValues <= 39.9) {
            resultadoEstado.innerHTML = "Obesidade"
        } else {
            resultadoEstado.innerHTML = "Obesidade grave"
        }
    }
    document.querySelector("#peso").value = ""
    document.querySelector("#altura").value = ""
})



const btnCalcular = document.querySelector(".btn-calorias")
btnCalcular.addEventListener("click", () => {
    const idade = document.querySelector("#idade").value
    const peso =document.querySelector("#pesoCaloria").value
    const altura =document.querySelector("#alturaCaloria").value

    if (idade === "" || peso === "" || altura === "") {
        alert("Preencha todos os campos")
    } else {
        const genero = getSelectValue("genero")
        const nivelAtt = getSelectValue("nivel-atividade-fisica")

        const basal = document.querySelector(".basal")
        const manterPeso = document.querySelector(".manterPeso")
        const perderPeso = document.querySelector(".perderPeso")
        const ganharPeso = document.querySelector(".ganharPeso")

        const tmb = (
            genero === "Mulher" ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)))

        const maintenance = Math.round((tmb * Number(nivelAtt)))
        const loseWeight = maintenance - 450;
        const gaiWeight = maintenance + 450;

        basal.innerHTML = tmb
        manterPeso.innerHTML = maintenance
        perderPeso.innerHTML = loseWeight
        ganharPeso.innerHTML = gaiWeight
    }

})

function getSelectValue(id) {
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
}


const dark = document.querySelector(".bi-moon-stars-fill")
let containerIMC = document.querySelector(".container-imc")
let containerCalorias = document.querySelector(".container-calorias")
let containerFooter = document.querySelector(".container-footer")

dark.addEventListener("click", function(){
    if(this.classList.toggle("bi-sun-fill")){
        this.classList.remove("bi-moon-stars-fill")
        containerIMC.classList.add("dark")
        containerCalorias.classList.add("dark")
        containerFooter.classList.add("dark")
    } else if(this.classList.toggle("bi-moon-stars-fill")){
        this.classList.remove("bi-sun-fill")
        containerIMC.classList.remove("dark")
        containerCalorias.classList.remove("dark")
        containerFooter.classList.remove("dark")
    }
})
