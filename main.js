//SOCIOS:

//Funcion para crear los productos con sus precios
function productos (tipo){
    switch(tipo){
        case 'combo1':
            return price = 15;
            break;
        case `combo2`:
            return price = 21
        case `combo3`:
            return price = 80
        case `birra`:
            return price = 10
        case `gomitas`:
            return price = 5
        case `chicles`:
            return price = 2
        case `caramelos`:
            return price = 1
    }
}

alert('Los combos del dia son: 1) combo1: pochoclos + gaseosa. 2) combo2: pochoclos + gaseosa + chocolate. 3) combo3: 2x pochoclos + 2x gaseosa + chocolate + gomitas.')
alert('por unidad solo: gomitas | birra | caramelos | chicles')

//Hago las preguntas estrictas
let selection = prompt(`Elija su combo, recuerde ingresar solo: combo1,combo2,combo3,gomitas o birra`).toLowerCase()
let selection2 = prompt(`Quiere algo mas?`).toLowerCase()

//Compruebo si escoge algo o no
if ((selection != 0) || (selection2 != 0)){
    alert(`Su seleccion es: ${selection}`+ ` 🔶🍿🍭🎦🔶` +`${selection2}`);
// }else if((selection = undefined)&&(selection2 = undefined)){
//     alert(`Su seleccion es: ${selection} ${selection2}` + `Escogido`);
//     selection = 0;
//     selection2 = 0;

}else{
    alert(`Su seleccion es: ${selection} ${selection2}` + `No escogio nada`);
    // selection2 = 0
    // selection = 0
    
}


let choose = productos(selection)
console.log(choose);//prueba

let choosee = productos(selection2)
console.log(choosee);//prueba


//Hago la comparacion aqui del producto con la seleccion
let cliente = prompt(`Usted es afiliado?`).toUpperCase();
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