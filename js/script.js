function abrirTelaCheia() {
    const elem = document.documentElement; // Seleciona o elemento raiz da página
    
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Para navegadores Safari
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // Para o Internet Explorer / Edge antigos
      elem.msRequestFullscreen();
    }
  }
  
  // Chame a função ao carregar a página ou a partir de um botão
  document.addEventListener("DOMContentLoaded", abrirTelaCheia);