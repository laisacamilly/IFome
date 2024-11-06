document.addEventListener("DOMContentLoaded", function () {

    popup = document.querySelector(".popup");
    enviar = popup.querySelector("#publicar");
    main = document.querySelector("main");

    enviar.addEventListener("click", function (event) {
        article = document.createElement("article");

        h2 = document.createElement("h2");
        nome = localStorage.getItem("nome");
        if (nome) {
            h2.innerHTML = nome;
        } else {
            h2.innerHTML = "Anônimo";
        }
        
        article.appendChild(h2);

        // Obtém o arquivo do input[type='file']
        fileInput = document.querySelector("input[type='file']");
        file = fileInput.files[0];

        if (file) {
            // Cria uma URL temporária para o arquivo
            foto = document.createElement("img");
            foto.classList.add("comida");
            foto.src = URL.createObjectURL(file); // Define a URL temporária como src
            foto.alt = "Imagem 1";
            article.appendChild(foto);

            // Libera a URL temporária quando a imagem carrega
            foto.onload = () => {
                URL.revokeObjectURL(foto.src);
            };
        }

        p = document.createElement("p");
        p.innerHTML = document.querySelector("input[type='text']").value;
        article.appendChild(p);

        a = document.createElement("a");
        a.href = "#";

        img_like = document.createElement("img");
        img_like.src = "img/botoes.png";
        img_like.alt = "botão do like";
        img_like.classList.add("like");
        a.appendChild(img_like);

        article.appendChild(a);

        main.appendChild(article);

        event.stopPropagation();

        img_like = document.querySelectorAll(".like");

        img_like.forEach(function (element) {
            element.addEventListener("click", function (event) {
                if(element.getAttribute("src") == "img/botoes.png") {
                    element.src = "img/botoes_click.png";
                } else {
                    element.src = "img/botoes.png";
                }
            });
        });
    });

    img_like2 = document.querySelectorAll(".like");

    img_like2.forEach(function (element) {
        element.addEventListener("click", function (event) {
            if(element.getAttribute("src") == "img/botoes.png") {
                element.src = "img/botoes_click.png";
            } else {
                element.src = "img/botoes.png";
            }
            
        });
    });
});
