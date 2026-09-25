const canvas = document.querySelector('#canvas');
const video = document.querySelector('#camera');
const botao = document.querySelector('#botao');
const foto = document.querySelector('#foto');

// ==============================
// GEOLOCALIZAÇÃO
// ==============================

function obterLocalizacao() {

    const latitude = document.getElementById("latitude");
    const longitude = document.getElementById("longitude");
    const precisao = document.getElementById("precisao");
    const mensagem = document.getElementById("mensagem");

    // Verifica se o navegador possui Geolocation
    if (!navigator.geolocation) {

        mensagem.innerText =
            "Seu navegador não suporta geolocalização.";

        return;
    }

    mensagem.innerText = "Obtendo localização...";

    navigator.geolocation.getCurrentPosition(

        function (posicao) {

            const dados = posicao.coords;

            latitude.innerText =
                dados.latitude;

            longitude.innerText =
                dados.longitude;

            precisao.innerText =
                dados.accuracy.toFixed(2) + " metros";

            mensagem.innerText =
                "Localização obtida com sucesso!";

        },

        function (erro) {

            mensagem.innerText =
                "Não foi possível obter sua localização.";

            console.log(erro);

        }

    );
}


// ==============================
// CÂMERA
// ==============================

let stream = null;

async function abrirCamera() {

    const camera = document.getElementById("camera");

    try {

        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        camera.srcObject = stream;

    } catch (erro) {

        alert(
            "Não foi possível acessar a câmera."
        );

        console.log(erro);

    }
}


// ==============================
// PARAR CÂMERA
// ==============================

function pararCamera() {

    if (stream) {

        stream.getTracks().forEach(function (track) {
            track.stop();
        });

        document.getElementById("camera").srcObject = null;

        stream = null;
    }
}

function tirarFoto() {
    if (!stream) {
        alert("Ative a câmera antes de tirar a foto.");
        return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext('2d');

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL('image/png');
}