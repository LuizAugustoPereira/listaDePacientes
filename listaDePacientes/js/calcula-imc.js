const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length ; i++){
    let paciente = pacientes[i]
    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");

    let imcTd = paciente.querySelector(".info-imc");
    
    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        imcTd.textContent = "Peso inválido";

        paciente.classList.add('paciente-invalido')
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        imcTd.textContent = "Altura inválida";

        paciente.classList.add('paciente-invalido')
    }
    
    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso,altura)
        imcTd.textContent = imc
    }
}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000) {
        return true
    }else{
        return false
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.0) {
        return true
    }else{
        return false
    }
}

function calculaImc(peso,altura){
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}