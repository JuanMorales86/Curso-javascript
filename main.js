//SOCIOS:

//Funcion para crear los productos con sus precios
function productos(tipo){
    let precio;
    switch(tipo){
        case 1:
            precio = 15;
            break
        case 2:
            precio = 21
            break
        case 3:
            precio = 80
            break
        case 4:
            precio = 10
            break
        case 5:
            precio = 5
            break
        case 6:
            precio = 2
            break
        case 7:
            precio = 1
            break
    }
    return precio;


    
}
let numb = 2
let valor = productos(numb)
console.log(valor);

function showstock(){//una mejora de los alerts que tenia
    const producto = prompt(
`Los combos del dia son: 
1) combo1: pochoclos + gaseosa. 
2) combo2: pochoclos + gaseosa + chocolate. 
3) combo3: 2x pochoclos + 2x gaseosa + chocolate + gomitas.

Nota: "Ingresar SOLO numeros dle 1 al 3"
`);

        const producto2 = prompt(
        `Por unidad solo: 
        4) gomitas 
        5) birra
        6) caramelos
        7) chicles
        Nota: "Ingresar SOLO numeros dle 4 al 7"`)
        

    // let selection2 = prompt(`Quiere algo mas?`).toLowerCase()

    productprocess(producto,producto2)//llamo la funcion productprocess para correrla ya que tengo las dos variables llenas
    console.log(producto);
    console.log(producto2);

    productos(producto)
    productos(producto2)
    console.log(`El resultado es `+ productos(producto))
   
}


function productprocess(producto,producto2){
    //Compruebo si escoge algo o no
if (((producto != 0)) || ((producto2 !=0))) {
    alert(`Su seleccion es: Item: ${producto} Item: ${producto2}`+ ` 🔶🍿🍭🎦🔶`);
    selecto = producto, producto2//confirmarsocio(total)
}else{
    alert(`No escogio nada`);
    showstock();
    
}
}
   
alert (showstock())






//Hago la comparacion aqui del producto con la seleccion
//let cliente = prompt(`Usted es afiliado?`).toUpperCase();
let resto
let totaldesc

//Sumo los objetos escogidos para trabajar despues con los descuentos en los condionales
const suma = choose + choosee
console.log(suma);

//Saco el resto del descuento a partir del total y lo guardo
const porcentaje = function (a,b,c) {return (a / b)*c}
resto = porcentaje(5,100,suma)
console.log(resto)

//Comparo si es socio y lo que gasto
if(cliente === "SI"){
    if((suma <= 50) && (suma >= 5)){
        totaldesc = (suma - 1)
        alert(`El total a abonar por ser socio es de: ${totaldesc} usd`)
    }else if((suma >= 50) && (suma < 100)){
        totaldesc = (suma - resto);
        alert(`El total a abonar por ser socio es de: ${totaldesc} usd`)
    }else if(suma >= 100){
        totaldesc = (suma - 15)
        alert(`El total a abonar por ser socio es de: ${totaldesc} usd`)
    
}else{
        alert(`no llega a poseer descuentos por que el monto total no es suficiente ${suma} usd`)
    }
    
}else{
    alert(`no es socio "PERO ESPERE 😁"`)
    nosocio(suma)
}

//Funcion si no es socio
function nosocio(a){
    if (a>100){
        totaldesc =  (suma - 5)  
        alert(`Tenemos un pequeno descuento a pesar de que no es socio SE LE OTORGO UN "DESCUENTO" DE "💵 5 USD" ${totaldesc}`)
    }else if (a<100){
        alert('No es posible ofrecerle un descuento especial para los No SOCIOS🥲, por favor afiliece y disfrute de nuestros descuentos 😁'+ "El total a pagar es de: " + suma);  
    }else{
    alert('Verifique el tipo de socio vuelva a correr el programa'); 
    
    }
}