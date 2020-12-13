const prompt = require('prompt-promise');

async function main () {


    let conte = 'Una ovella molt feliç es va perdre pel bosc'

    let posicioOvella = conte.indexOf("ovella")
    let posicioGuineu = conte.indexOf("perdre")
    
    posicioImprimir = posicioGuineu
    posicioImprimir = posicioOvella
    console.log(posicioImprimir)

    prompt.end()
}

main()
