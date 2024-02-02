const borde = document.querySelector ('.imagen')
console.log ('imagen') 

borde.addEventListener ("click", function(){
    borde.style.border = "2px solid red"
    if (borde.style.border = "2px solid red") {
      borde.addEventListener ("click", function (){
        borde.style.border = "0px"
      })
    }
})

