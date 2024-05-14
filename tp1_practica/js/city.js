
function autoComplete(ciudad) {
    const destino = ['Rio de Janeiro', 'San Pablo', 'Nueva York', 'Miami','Roma','Buenos Aires', 'Madrid', 'Barcelona', 'México DF', 'Bogota','Lima', 'Quito'];
        return destino.filter((valor) => {
            const valorMinuscula = valor.toLowerCase()
            const ciudadMinuscula = valor.toLowerCase()
            return valorMinuscula.includes(ciudadMinuscula)
        })
    }
    const campo = document.querySelector('.campo')
    const sugerencias = document.querySelector('.sugerencias')
    campo.addEventListener('input', ({ target }) => {
        const datosDelCampo = target.value
        if(datosDelCampo.length) {
                const autoCompleteValores = autoComplete(datosDelCampo)
                sugerencias.innerHTML = `
                    ${autoCompleteValores.map((value) => {
                            return (
                                    `<li>${value}</li>`
                                )
                    }).join('')}
            `}
    })