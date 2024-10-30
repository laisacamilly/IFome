document.addEventListener("DOMContentLoaded", function () {

    console.log("ultimoIngred");

    popup = document.querySelector(".popup");
    adicionar = popup.querySelector("#adicionar");
    main = document.querySelector("main");

    ul = popup.querySelector("ul");
    ol = popup.querySelector("ol");

    ul.addEventListener("input", function (event) {

        liIngred = ul.querySelectorAll("li");
        ultimoIngred = liIngred[liIngred.length - 1];

        form = ultimoIngred.querySelector("form");
        valor = form.querySelector("input").value;
        console.log(valor);
        
        if (valor != "") {
            novoLi = document.createElement("li");
            form = document.createElement("form");
            input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Escreva Aqui";
            form.appendChild(input);
            novoLi.appendChild(form);
            ul.appendChild(novoLi);

        }
    })

    ol.addEventListener("input", function (event) {

        liEtapas = ol.querySelectorAll("li");
        ultimaEtapa = liEtapas[liEtapas.length - 1];

        form = ultimaEtapa.querySelector("form");
        valor = form.querySelector("input").value;
        console.log(valor);
        
        if (valor != "") {
            novoLi = document.createElement("li");
            form = document.createElement("form");
            input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Escreva Aqui";
            form.appendChild(input);
            novoLi.appendChild(form);
            ol.appendChild(novoLi);
        }
    })

    adicionar.addEventListener("click", function () {

        article = document.createElement("article");
        nome = popup.querySelector("input[type='text']").value;
        h2 = document.createElement("h2");
        h2.innerHTML = nome;
        article.appendChild(h2);

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

        div = document.createElement("div");
        article.appendChild(div);

        h2_ingred = document.createElement("h2");
        h2_ingred.innerHTML = "Ingredientes:";
        div.appendChild(h2_ingred);
        ul = document.createElement("ul");

        for (li of popup.querySelectorAll("ul li")) {
            novoLi = document.createElement("li");
            valor = li.querySelector("input").value;
            if (valor != "") {
                novoLi.innerHTML = valor;
                ul.appendChild(novoLi);
            }
    
        }

        div.appendChild(ul);

        h2_etapas = document.createElement("h2");
        h2_etapas.innerHTML = "Modo de preparo:";

        div.appendChild(h2_etapas);

        ol = document.createElement("ol");
        
        for (li of popup.querySelectorAll("ol li")) {
            novoLi = document.createElement("li");
            valor = li.querySelector("input").value;
            if (valor != "") {
                novoLi.innerHTML = valor;
                ol.appendChild(novoLi);
            }
        }

        div.appendChild(ol);

        article.appendChild(div);
        
        main.appendChild(article);


    })

})