const inputFiltro = document.querySelector('#filtrar-tabela')

inputFiltro.addEventListener('input', function() {

    let pacientes = [...document.querySelectorAll('.paciente')]

    if(this.value.length > 0) {
        for(let i = 0; i < pacientes.length; i++) {
            let pacienteAtual = pacientes[i]
            let tdNome = pacienteAtual.querySelector('.info-nome')
            let nome = tdNome.textContent
            const regex = new RegExp(this.value, 'i')
            if(!regex.test(nome)) {
                pacienteAtual.classList.add('hidden')
            }else{
                pacienteAtual.classList.remove('hidden')
            }
        }
    }else{
        for(let i = 0; i < pacientes.length; i++) {
            pacienteAtual = pacientes[i]
            pacienteAtual.classList.remove('hidden')
        }
    }
    
})