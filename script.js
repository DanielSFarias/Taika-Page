let imagem = document.getElementById('print');

function trocaImagem(){

    if(imagem.style.opacity == 0 ){
        imagem.style.opacity = 1
    }else{
        imagem.style.opacity = 0
    }
    
}

setInterval(function(){
    trocaImagem()
},3000);
