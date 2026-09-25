const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//formato
contexto.lineWidth = 7;
contexto.lineCap = "round";
contexto.lineJoin = "round";


//linha vertical
contexto.beginPath();
contexto.moveTo(400, 150);  // → início
contexto.lineTo(400, 300);  // → fim
contexto.stroke();

//circulo
contexto.beginPath();
contexto.arc(400, 120, 30, 0, Math.PI * 2);
contexto.stroke();

//braco esquerdo
contexto.beginPath();
contexto.moveTo(400, 150);
contexto.lineTo(350, 200);
contexto.stroke();
//2 parte do braço esquerdo
contexto.beginPath();
contexto.moveTo(350, 200);
contexto.lineTo(420, 220);
contexto.stroke();

//braço direito
contexto.beginPath();
contexto.moveTo(400, 150);
contexto.lineTo(450, 200);
contexto.stroke();
//2 parte do braço direito 
contexto.beginPath();
contexto.moveTo(450, 200);
contexto.lineTo(500, 170);
contexto.stroke();

//perna esquerda
contexto.beginPath();
contexto.moveTo(400, 300);
contexto.lineTo(350, 350);
contexto.stroke();
//2 parte da perna esquerda
contexto.beginPath();
contexto.moveTo(350, 350);
contexto.lineTo(350, 420);
contexto.stroke();

//perna direita
contexto.beginPath();
contexto.moveTo(400, 300);
contexto.lineTo(450, 350);
contexto.stroke();
//2 parte da perna direita
contexto.beginPath();
contexto.moveTo(450, 350);
contexto.lineTo(450, 420);
contexto.stroke();