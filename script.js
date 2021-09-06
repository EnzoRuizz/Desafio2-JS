let saludo = prompt("Hola!")
let pedirNumero

if((saludo == "hola")||(saludo == "Hola")||(saludo == "HOLA")){
    pedirNumero = parseInt(prompt("Escribí un numero entero"))
    alert("El numero que elejiste es " + pedirNumero)
    if(pedirNumero < 500){
        alert("Ademas es menor a 500")
    } else if(pedirNumero > 500){
        alert("Ademas es mayor a 500")
    }
} else {
    do{
        pedirSaludo = prompt("¿No saludás?")
    } while((pedirSaludo != "hola")&&(pedirSaludo != "Hola")&&(pedirSaludo != "HOLA"))
    alert("Bien ahora si")
    pedirNumero = parseInt(prompt("Escribí un numero entero"))
    alert("El numero que elejiste es " + pedirNumero)
    if(pedirNumero < 500){
        alert("Ademas es menor a 500")
    } else if(pedirNumero > 500){
        alert("Ademas es mayor a 500")
    }
}

alert("Adiós")