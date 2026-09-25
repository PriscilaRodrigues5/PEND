navigator.geolocation.getCurrentPosition(
    function(posicao) {
        document.getElementById("localizacaoPermitida").style.display = "block";
        document.getElementById("localizacaoNegada").style.display = "none";
        
        console.log("Latitude: " + posicao.coords.latitude);
        console.log("Longitude: " + posicao.coords.longitude);
        console.log("Precisão: " + posicao.coords.accuracy);
    },
    function(erro) {
        document.getElementById("localizacaoPermitida").style.display = "none";
        document.getElementById("localizacaoNegada").style.display = "block";
        
        console.log("Não foi possível obter a localização.", erro);
    },
);