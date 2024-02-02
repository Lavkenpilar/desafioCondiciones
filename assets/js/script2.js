const cant1 = document.querySelector ('#input1').value 
console.log  (input1)
const cant2 = document.querySelector ('#input2').value
console.log (input2)
const cant3 = document.querySelector ('#input3').value
console.log (input3)
const suma = +cant1 + +cant2 + +cant3
console.log (suma)
const parra = document.querySelector ('.parra')
console.log (parra)

if (suma === 0) {
    parra.innerHTML = "La cantidad de stickers que llevas es de "
} 
else if (suma <= 10) {
    parra.innerHTML = suma
}
else {
    parra.innerHTML = "Llevas demasiados stickers"
}