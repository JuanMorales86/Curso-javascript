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
            precio = 99
            break
        case 5:
            precio = 10
            break
        case 6:
            precio = 15
            break
        case 7:
            precio = 3
            break
        case 8:
            precio = 5
            break
    }
    return precio;


    
}

showstock()

function showstock(){//una mejora de los alerts que tenia
    const producto = Number(prompt(
`Los combos del dia son: 
1) combo1: pochoclos + gaseosa. 
2) combo2: pochoclos + gaseosa + chocolate. 
3) combo3: 2x pochoclos + 2x gaseosa + chocolate + gomitas.
4) combo4: 3x pochoclos + 3x gaseosa + 3x chocolate + 3x gomitas.

Nota: "Ingresar SOLO numeros dle 1 al 3"
`));

        const producto2 = Number(prompt(
        `Por unidad solo: 
        5) gomitas 
        6) birra
        7) caramelos
        8) chicles
        Nota: "Ingresar SOLO numeros dle 4 al 7"`))
        

        const socio = String(prompt(`Es socio de la empresa?,Responda solo con "SI" O "NO"`)).toUpperCase()

    productprocess(producto,producto2,socio)//llamo la funcion productprocess para correrla ya que tengo las dos variables llenas
    // console.log(producto);//prueba
    // console.log(producto2);//prueba    
}


function productprocess(producto,producto2,socio){
    //Compruebo si escoge algo o no
if (((producto != 0)) || ((producto2 !=0)) || ((socio !=""))) {
    console.log(`Su seleccion es: Combo: ${producto} Unidad: ${producto2}`+ ` 🔶🍿🍭🎦🔶`);
    const val = productos(producto)
    const val2 = productos(producto2)
    // console.log(val)//prueba para calculo
    // console.log(val2)//prueba para calculo
    let total = calculo(val,val2)
    console.log(total);//prueba suma de calculo
    let porc5 = desc5(total)
    // console.log(porc5);//prueba porcentaje de calculo
    let usuario = afiliado(socio,total,porc5)
    console.log(usuario);//prueba porcentaje de calculo
    const desicion = function (a,b) {if (a < b){return a}else{return b}}
    let resultado = Number(desicion(usuario,total))
    console.log(resultado);
   
    console.log("El monto a abonar de sus productos es de: "+resultado)

}else{
    alert(`No escogio nada. Se reiniciara la operacion`);
    showstock();
    
}
}
//Sumo los objetos escogidos para trabajar despues con los descuentos en los condionales
function calculo(val,val2){
    let suma = val + val2
    return suma
}
//Saco el resto del descuento a partir del total y lo guardo
function desc5(total){
const porcentaje = function (a,b,c) {return (a / b)*c}
let resto = Number(porcentaje(5,100,total))
return resto//se debe colocar return
}

//Comparo si es socio y lo que gasto
function afiliado(socio,total,porc5){
if(socio === "SI"){
    if((total <= 50) && (total >= 5)){
        totaldesc = (total - 1)
        return totaldesc
    }else if((total >= 50) && (total < 100)){
        totaldesc = (total - porc5);
        return totaldesc
    }else if(total >= 100){
        totaldesc = (total - 15)
        return totaldesc
    
}else{
        return total
    }
    
}else{
    alert(`no es socio "PERO ESPERE 😁"`)
    let calculo = nosocio(total)
    return calculo
}
}

//Funcion si no es socio
function nosocio(total){
    if (total>100){
        totaldesc =  (total - 5)  
        return totaldesc
    }else if (total<100){
        return total 
    }else{
    alert('Verifique el tipo de socio y los productos. Vuelva a correr el programa, presione "/ESC/"'); 
    
    }
}
