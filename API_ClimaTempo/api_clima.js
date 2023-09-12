function previsaoTempo() {
    const cidade = document.getElementById("cidade").value;
    const apiKey = '64ed82577ced7f69cb1687f0ce536131';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const nomeCidade = data.name;
            const temperatura = data.main.temp;
            const umidade = data.main.humidity;
            const vento = data.wind.speed;

            document.getElementById("nomeCidade").innerHTML = `Cidade: ${nomeCidade}`;
            document.getElementById("temperatura").innerHTML = `Temperatura: ${temperatura}°C`;
            document.getElementById("umidade").innerHTML = `Umidade: ${umidade}%`;
            document.getElementById("vento").innerHTML = `Velocidade do Vento: ${vento} m/s`;
        })
        .catch(error => {
            alert('Cidade não encontrada ou erro na solicitação. Verifique o nome da cidade e tente novamente.');
        });
}

function GoogleEarth() {
    const cidade = document.getElementById("cidade").value;
    const googleEarthURL = `https://earth.google.com/web/search/${cidade}`;
    window.open(googleEarthURL, "_blank");
}