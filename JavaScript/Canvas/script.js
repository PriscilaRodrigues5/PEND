const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//desenhar uma linha
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
//para fazer outra linha 
contexto.lineTo(200, 200); 
contexto.stroke();

//desenhar um retangulo
contexto.fillRect(50, 50, 150, 100);
//                x, y, largura, altura

//para fazer o contorno de um retangulo
contexto.strokeRect(250, 50, 150, 100);

//desenhar um circulo
//x e y
//raio 
//true = sentido anti-horario
//PI = 3,14
//anguloInicial 
//anguloFinal 
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
contexto.stroke();
