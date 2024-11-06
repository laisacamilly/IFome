// script.js
document.addEventListener("DOMContentLoaded", function() {

    var menuButton = document.getElementById("botao_menu");
    var closeButton = document.getElementById("closeButton");
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("mainContent");

    // Solicitar tela cheia ao carregar a página
    function requestFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Erro ao tentar entrar em modo de tela cheia: ${err.message} (${err.name})`);
            });
        }
    }

    // Tentar entrar em modo de tela cheia ao carregar a página
    requestFullScreen();

    menuButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        sidebar.style.width = "10rem";
        mainContent.style.marginLeft = "10rem";
    });

    closeButton.addEventListener("click", function() {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    });
});