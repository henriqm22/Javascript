     // Apenas um teste aleatório

     function trocar_nome() {
     document.getElementById("nome").value = "Trocou de nome!";	
}		
     // Criei um botão que quando descer o scroll da janela e clicar nele ele volta pra cima

     function subirTela(){
     window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
     });
}
     // Função pra esconder o botão

     function hideButton(){
     if(window.scrollY === 0){
          document.querySelector('.scrollbutton').style.display = 'none';
     } else {
          document.querySelector('.scrollbutton').style.display = 'block';
     }
}
window.addEventListener('scroll', hideButton); 


     // Função pra mudar a cor quando clicar no botão

function laranja(){
     limparbotao()
     document.getElementById("frase").classList.add('laranja');

}

function azul(){
     limparbotao()
     document.getElementById("frase").classList.add('azul');

}

function limparbotao(){
     document.getElementById("frase").classList.remove('azul');
     document.getElementById("frase").classList.remove('laranja');

}

// Criando Arrays

let Computador = ['placa-mae','processador','memoria-ram','placa-de-video','fonte','ssd'];
