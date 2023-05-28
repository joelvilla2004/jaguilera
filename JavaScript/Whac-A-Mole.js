let intervalo = 2000; 
let topos = []; 
let puntos = 0; 
window.onload = function () {
    let celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        topos[i] = celdas[i].getElementsByTagName("img")[0];
        topos[i].onclick = function () { 
            if (topos[i].src.endsWith("topoSi.jpg")) { 
                topos[i].src = "topoPam.jpg";
                setTimeout(function () {
                    topos[i].src = "topoNo.jpg";
                    puntos++;
                    document.getElementById("puntos").textContent = puntos;
                }, 500); 
            }
        };
    }

    setInterval(cambiarTopos, intervalo);
};

function cambiarTopos() {
    let indice = Math.floor(Math.random() * topos.length);
    if (topos[indice].src.endsWith("topoNo.jpg")) {
        topos[indice].src = "topoSi.jpg";
        setTimeout(function () {
            if (topos[indice].src.endsWith("topoSi.jpg")) {
                topos[indice].src = "topoNo.jpg";
            }
        }, intervalo / 2);
    }
}

function cambiarIntervalo(valor) {
    intervalo = valor;
    clearInterval();
    setInterval(cambiarTopos, intervalo);
}
