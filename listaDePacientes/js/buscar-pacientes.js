const url = 'https://api-pacientes.herokuapp.com/pacientes'
const buttonBuscarPacientes = document.querySelector('#buscar-pacientes')

buttonBuscarPacientes.addEventListener('click', async function() {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        
        data.forEach(paciente => {
            adicionaPacienteNaTabela(paciente)
        })

    } catch (error) {
        console.log(error.message)
        alert('Ocorreu um erro ao buscar os pacientes!')
    }
  
})