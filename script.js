document.addEventListener("DOMContentLoaded", function () {
    const pecas = document.querySelectorAll(".pecas");
    
    pecas.forEach(peca => {
        const infoBox = document.createElement("div");
        infoBox.classList.add("info-box");
        infoBox.innerText = peca.dataset.info;
        document.body.appendChild(infoBox);

        peca.addEventListener("mouseenter", function (e) {
            infoBox.style.display = "block";
            peca.classList.add("ativo");
        });

        peca.addEventListener("mousemove", function (e) {
            infoBox.style.top = `${e.pageY + 10}px`;
            infoBox.style.left = `${e.pageX + 10}px`;
        });

        peca.addEventListener("mouseleave", function () {
            infoBox.style.display = "none";
            peca.classList.remove("ativo");
        });

        peca.addEventListener("click", function () {
            alert(`Peça selecionada: ${peca.dataset.info}`);
        });
    });
});
