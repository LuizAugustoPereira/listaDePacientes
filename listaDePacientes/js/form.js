let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')
    let paciente = obtemPacienteDoFormulario(form)

    let erros = validaPaciente(paciente)

    if(erros.length > 0) {
        exibeMensagensDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
    document.querySelector('#mensagem-erro').innerHTML = ''
})

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function exibeMensagensDeErro(erros) {
    const ulErros = document.querySelector('#mensagem-erro')
    ulErros.innerHTML = ''

    erros.forEach((erro) => {
        const li = document.createElement('li')
        li.textContent = erro
        ulErros.appendChild(li)
    })
}

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTd(dado, classe){
    let td = document.createElement('td')
    td.classList.add(classe)
    td.textContent = dado

    return td
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    //cria as TD's e adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function validaPaciente(paciente) {
    let erros = []

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0) {
        erros.push('Peso inválido')
    }

    if(!validaAltura(paciente.altura) || paciente.altura.length == 0) {
        erros.push('Altura inválida')
    }

    if(paciente.nome.length < 2) {
        erros.push('Nome inválido')
    }

    if(paciente.gordura.length <= 0) {
        erros.push('Percentual de gordura inválido')
    }

    return erros
}