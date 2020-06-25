let texto = document.querySelector("#texto-servicios")
let web = document.querySelector("#web")
eventos()

function eventos(){
    document.addEventListener("DOMContentLoaded", inicioDom)
}

function inicioDom(){
    setTimeout(()=>{
        texto.style.top = '13%'
        texto.style.opacity = '1'
    }, 7500)
    
    setTimeout(()=>{
        web.style.top = '60%'
        web.style.opacity = '1'
    }, 7500)
}