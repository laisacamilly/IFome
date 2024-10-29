document.addEventListener("DOMContentLoaded", function() {

    popup = document.querySelector(".popup");
    enviar = popup.querySelector("#publicar");
    main = document.querySelector("main");

    enviar.addEventListener("click", function(event) {

        article = document.createElement("article");
        
        h2 = document.createElement("h2");
        // h2.innerHTML = localStorage.getItem("nome");
        h2.innerHTML = "Jefferson";
        article.appendChild(h2);

        foto = document.createElement("img");
        foto.classList.add("comida");
        foto.src = document.querySelector("input[type='file']").value;
        foto.alt = "Imagem 1";
        article.appendChild(foto);

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

        console.log(article);

        main.appendChild(article);

        event.stopPropagation();

    })
})