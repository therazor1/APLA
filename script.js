
let inicio = document.querySelector('#inicio ')
let hamburguesa = document.querySelector('#hamburguesa')
let close = document.querySelector('#close')
let siteHeader = document.querySelector('#siteHeader')
let enlaces = document.querySelectorAll('.navegacion a')

eventos()

function eventos(){
    document.addEventListener('DOMContentLoaded', inicioDom)
    hamburguesa.addEventListener('click', mostrarNav)
    close.addEventListener('click', desaparecerNav)
    // window.addEventListener('scroll', mostrarCelular)
}

function inicioDom(){
    document.body.style.overflow = 'hidden';
    setTimeout(()=>{
        inicio.style.opacity = '0'
        inicio.style.zIndex= '0'
        inicio.style.display = 'none'
        inicio.style.transition = 'all .3s ease-in-out'
        document.body.style.overflow = 'visible';
    },7000)
    let posicion = window.pageYOffset
    if(window.location.reload){
        inicio.style.top = posicion +"px";
    }
}

function mostrarNav(e){
    e.preventDefault()
    hamburguesa.style.opacity = '0'
    hamburguesa.style.transition = 'all .3s ease-in-out'
    siteHeader.style.opacity = '1'
    siteHeader.style.zIndex= '1000'
    close.style.opacity = '1'
    close.style.zIndex= '1000'
    enlaces[0].style.top = '0'
    enlaces[1].style.top = '0'
    enlaces[2].style.top = '0'
    enlaces[0].style.opacity = '1'
    enlaces[1].style.opacity = '1'
    enlaces[2].style.opacity = '1'
    enlaces[0].style.cursor = 'pointer'
    enlaces[1].style.cursor = 'pointer'
    enlaces[2].style.cursor = 'pointer'
    document.body.style.overflow = 'hidden';
}
function desaparecerNav(e){
    e.preventDefault()
    siteHeader.style.opacity = '0'
    siteHeader.style.zIndex= '0'
    siteHeader.style.transition ='all .3s ease-in-out'
    close.style.opacity = '0'
    close.style.transition = 'all .3s ease-in-out'
    close.style.zIndex= '0'
    hamburguesa.style.transition = 'all .3s ease-in-out'
    hamburguesa.style.opacity = '1'
    enlaces[0].style.top = '-100px'
    enlaces[1].style.top = '-100px'
    enlaces[2].style.top = '-100px'
    enlaces[0].style.opacity = '0'
    enlaces[1].style.opacity = '0'
    enlaces[2].style.opacity = '0'
    enlaces[0].style.cursor = 'default'
    enlaces[1].style.cursor = 'default'
    enlaces[2].style.cursor = 'default'
    document.body.style.overflow = 'visible';
}
let ubicacionPrincipal = window.pageYOffset

window.onscroll = function(){
    let desplazamiento = window.pageYOffset
    if(ubicacionPrincipal >= 800){
        document.getElementById('hero').style.opacity = '0'
        
    }
    else if(ubicacionPrincipal >= 700){
        document.getElementById('hero').style.opacity = '.1'
        
    }
    else if(ubicacionPrincipal >= 500){
        document.getElementById('hero').style.opacity = '.4'
        
    }
    else if(ubicacionPrincipal >= 500){
        document.getElementById('hero').style.opacity = '.5'
        
    }
    else if(ubicacionPrincipal >= 400){
        document.getElementById('hero').style.opacity = '.6'
        
    }
    else if(ubicacionPrincipal >= 300){
        document.getElementById('hero').style.opacity = '.7'
        
    }
    else if(ubicacionPrincipal >= 200){
        document.getElementById('hero').style.opacity = '.8'
        
    }
    else{
        document.getElementById('hero').style.opacity = '1'
    }
    ubicacionPrincipal = desplazamiento
}


// function mostrarCelular(){
//     let valor = window.pageYOffset
//     let textoH2 = document.querySelector('#texto h2')
//     let textoP = document.querySelector('#texto p')
//     let textoA = document.querySelector('#texto a')
//     let celular = document.querySelector('#celular')
//     if(valor >= 25){
//         celular.style.bottom = '-75' +'%'
//         celular.style.opacity = '1'
//         textoH2.style.left = '0'
//         textoH2.style.opacity = '1'
//         textoP.style.left = '0'
//         textoP.style.opacity = '1'
//         textoA.style.left = '0'
//         textoA.style.opacity = '1'

//     }
// }