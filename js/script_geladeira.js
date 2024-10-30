// Função para formatar a data
function formatarData(data) {
    const partes = data.split("-");
    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];
    return `${dia}/${mes}/${ano}`;
}

document.addEventListener("DOMContentLoaded", function () {

    main = document.querySelector("main");
    popup = document.querySelector(".popup");
    confirmar = popup.querySelector("#confirmar");

    confirmar.addEventListener("click", function () {

        selecao = popup.querySelector("select");
        valor = selecao.value;

        console.log(valor);

        laticinios = document.querySelector(".laticinios ul");
        proteinas = document.querySelector(".proteinas ul");
        frutas = document.querySelector(".frutas ul");
        verduras = document.querySelector(".verduras ul");
        carboidratos = document.querySelector(".carboidratos ul");
        doces = document.querySelector(".doces ul");

        data = document.createElement("li");
        data.classList.add("validade");
        data.innerHTML = `Validade: ${formatarData(popup.querySelector("input[type='date']").value)}`;
        ingrediente = document.createElement("li");
        ingrediente.innerHTML = popup.querySelector("input[type='text']").value;

        switch(valor) {
            case "laticinio":
                laticinios.appendChild(ingrediente);
                laticinios.appendChild(data);
                break;
            case "proteina":
                proteinas.appendChild(ingrediente);
                proteinas.appendChild(data);
                break;
            case "fruta":
                frutas.appendChild(ingrediente);
                frutas.appendChild(data);
                break;
            case "verdura":
                verduras.appendChild(ingrediente);
                verduras.appendChild(data);
                break;
            case "carboidrato":
                carboidratos.appendChild(ingrediente);
                carboidratos.appendChild(data);
                break;
            case "doce":
                doces.appendChild(ingrediente);
                doces.appendChild(data);
                break;
            default:
                console.error("Categoria não encontrada");
        }
    });
});
