
function saibaMais() {
    document.getElementById("producao").scrollIntoView({
        behavior: "smooth"
    });
}

function animarContador(id, valorFinal) {

    let numero = 0;
    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        numero += Math.ceil(valorFinal / 100);

        if(numero >= valorFinal){
            numero = valorFinal;
            clearInterval(intervalo);
        }

        elemento.textContent = numero;

    }, 20);
}

window.onload = () => {
    animarContador("numero1", 500);
    animarContador("numero2", 1200);
    animarContador("numero3", 300);
};
