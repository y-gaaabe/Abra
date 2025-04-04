function mostrarTelaPrincipal() {
    document.getElementById("tela-inicial").classList.add("escondido");
    document.getElementById("tela-principal").classList.remove("escondido");
}

function atualizarContador() {
    const inicio = new Date("July 17, 2022 18:30:00");
    const agora = new Date();
    let diff = agora - inicio;

    let anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= anos * (1000 * 60 * 60 * 24 * 365.25);
    let meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= meses * (1000 * 60 * 60 * 24 * 30.44);
    let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= dias * (1000 * 60 * 60 * 24);
    let horas = Math.floor(diff / (1000 * 60 * 60));
    diff -= horas * (1000 * 60 * 60);
    let minutos = Math.floor(diff / (1000 * 60));

    document.getElementById("contador").innerHTML =
        `Estamos há ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas e ${minutos} minutos nos amando.`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Alternância automática de imagens
const imagens = [];
for (let i = 1; i <= 14; i++) {
    imagens.push(`imagem${i}.jpg`);
}
let index = 0;

function atualizarImagem() {
    const img = document.getElementById("imagem");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = imagens[index];
        img.style.opacity = 1;
    }, 500);
}

setInterval(() => {
    index = (index + 1) % imagens.length;
    atualizarImagem();
}, 5000);
