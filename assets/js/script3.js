const valor1 = document.querySelector ('#primerSelect').value
console.log (primerSelect)
const valor2 = document.querySelector ('#segundoSelect').value
console.log (segundoSelect)
const valor3 = document.querySelector ('#tercerSelect').value
console.log (tercerSelect)
const clave = valor1 + valor2 + valor3 
console.log (clave)
const button = document.querySelector ('button')
console.log (button)
const parra3 = document.querySelector('.parra3')
console.log (parra3)
button.addEventListener ("click", function(){
    if (clave === "911") {
        parra3.innerHTML = "Password 1 Correcto"
    }
    else if (clave==="714"){
        parra3.innerHTML = "Password 2 Correcto"
    }
    else { 
        parra3.innerHTML = "Password Incorrecto"
    }
})