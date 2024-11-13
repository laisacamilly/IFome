document.addEventListener("DOMContentLoaded", function () {

    const popup = document.querySelector(".popup");
    const enviar = popup.querySelector("#publicar");
    const main = document.querySelector("main");

    enviar.addEventListener("click", function (event) {
        const article = document.createElement("article");

        const h2 = document.createElement("h2");
        const nome = localStorage.getItem("nome");
        h2.innerHTML = nome ? nome : "Anônimo";
        article.appendChild(h2);

        // Obtém o arquivo do input[type='file']
        const fileInput = document.querySelector("input[type='file']");
        const file = fileInput.files[0];

        if (file) {
            // Cria uma URL temporária para o arquivo
            const foto = document.createElement("img");
            foto.classList.add("comida");
            foto.src = URL.createObjectURL(file); // Define a URL temporária como src
            foto.alt = "Imagem 1";
            article.appendChild(foto);

            // Libera a URL temporária quando a imagem carrega
            foto.onload = () => {
                URL.revokeObjectURL(foto.src);
            };
        }

        const p = document.createElement("p");
        p.innerHTML = document.querySelector("input[type='text']").value;
        article.appendChild(p);

        const a = document.createElement("a");
        a.href = "#";

        const img_like = document.createElement("img");
        img_like.src = "img/botoes.png";
        img_like.alt = "botão do like";
        img_like.classList.add("like");
        a.appendChild(img_like);

        // Adiciona o evento de clique no botão "like" criado
        img_like.addEventListener("click", function () {
            if (img_like.getAttribute("src") === "img/botoes.png") {
                img_like.src = "img/botoes_click.png";
            } else {
                img_like.src = "img/botoes.png";
            }
        });

        article.appendChild(a);
        main.appendChild(article);

        event.stopPropagation();
    });
});
