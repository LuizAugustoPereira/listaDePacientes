function removePaciente() {
    let table = document.querySelector('#tabela-pacientes')
    table.addEventListener('dblclick', e => {
        e.target.parentNode.classList.add('fadeout')

        setTimeout(() => {
            if(e.target.tagName == 'TD') {
                e.target.parentNode.remove()
            }
        }, 500)
    })
    
}
removePaciente()
