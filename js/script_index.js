// script.js
document.addEventListener("DOMContentLoaded", function() {

    document.documentElement.requestFullscreen().catch(err => {
        alert(`Erro ao tentar entrar em modo de tela cheia: ${err.message} (${err.name})`);
    });

    var menuButton = document.getElementById("botao_menu");
    var closeButton = document.getElementById("closeButton");
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("mainContent");
    

    menuButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        sidebar.style.width = "10rem";
        mainContent.style.marginLeft = "10rem";
    });

    closeButton.addEventListener("click", function() {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    });
})