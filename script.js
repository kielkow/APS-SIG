let imagens = [
    "imagens/temperos1.jpg",
    "imagens/temperos2.jpg",
    "imagens/temperos3.jpg"
]
let num = 0
function next(){
    var slider = document.getElementById("slider")
    num++
    if(num >= imagens.length){
        num = 0
    }
    slider.src = imagens[num]
}
function prev(){
    var slider = document.getElementById("slider")
    num--
    if(num < 0){
        num = imagens.length-1
    }
    slider.src = imagens[num]
}
setTimeout(next(), 2000)

function btnEnviar(){
    alert("Mensagem enviada com sucesso!")
    document.getElementById("input_email").value = ''
    document.getElementById("input_mensagem").value = ''
}

function btnWhats(){
    alert("Ligue para (011)90000-0000")
}