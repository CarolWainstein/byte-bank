addEventListener("message", event => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000)
})

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/last/AUD-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.AUDBRL)
}