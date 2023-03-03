//!Segunda Entrega --- Juego Frio  --- 
console.log(`Inicia tu viaje hacia un campamento con temperaturas invernales de -20 grados y bajando a maximas de -90 grados bajo cero,  dependiendo de tu ruta se emplearan mas objetos o menos objetos segun la seleccion.
Necesitaras llegar hasta el campamento para averiguar si el ultimo bastion de la humanidad sigue en pie en este mundo que se a convertido en un congelador gigantesco`)


console.log(`Tienes Adelante un viaje con tres rutas diferentes cada ruta representa un desgaste en tu inventario y en tu salud total, a lo largo del viaje podras encontrar objetos que te ayudaran a sobrevivir hasta el final`)

let Life = 100
let Endurace = 500
let Keepgoing = true


class Backpack{
    constructor(food, wood, compass, pedernal, yesca, water, campingtent, gasstove, knive, shovel) {
        this.food = food;
        this.compass   = compass;
        this.wood  = wood;
        this.perdernal  = pedernal;
        this.yesca  = yesca;
        this.water  = water;
        this.campingtent  = campingtent;
        this.gasstove  = gasstove;
        this.knive  = knive;
        this.shovel  = shovel;
        this.check = function(){console.log(`En tu mochila cargas estos Items: 😶‍🌫️ Unidades
        Alimento: ${this.food} Unidades
        Burjula: ${this.compass} Unidades
        Madera: ${this.wood} Unidades
        Pedernal: ${this.pedernal} Unidades
        Yesca: ${this.yesca} Unidades
        Agua Embotellada: ${this.water} Unidades
        Tienda de Camping: ${this.campingtent} Unidades
        Estuda a Gas: ${this.gasstove} Unidades
        Cuchillo Afilado: ${this.knive} Unidades
        Pala: ${this.shovel} Unidades
        `)}
        
    }
}


function settlementsA(position){
let post


switch(position){
    case 1:

    post = {foodconsumption: 20,
        woodconsumption: 15,
        yescaconsumption: 10,
        waterconsumption: 20,
        enduranceconsumption: 100}
        for(const recovery in post){//CICLO FOR IN
            let algo = recovery;
            let algo2 = post[recovery]
            console.log(algo2);
            console.log(algo);  
            adquire.push(algo2)
        
            // spin(algo2, (el) =>{
        //         adquire.push(el)})
           
        }
        
        
    break
    case 2:
    post = [foodconsumption = 30,
        woodconsumption = 15,
        yescaconsumption = 10,
        waterconsumption = 50,
        enduranceconsumption = 200]
        break
}return post
                        
}

function spin(arr,fn){
    for(const el of arr){
    fn(el)}}

const adquire = []
console.log(adquire)

const Juagador1 = new Backpack(20, 40, 1, 1, 50, 20, 1, 1, 1, 1);

Juagador1.check();

function journeyManagement(settlementsA,Jugador1){
    return this.food = Jugador1.food - settlementsA(foodconsumption)
}

questions1();

function questions1(){
const desition = String(prompt(`Elija la ruta que desea tomar:
Ruta A
Ruta B
Ruta C
Nota:"Ingrese solo las letras A,B O C"
`).toUpperCase());

//console.log(desition);
adventure(desition,Juagador1)


}

function adventure(desition,Jugador1){
  
    if(desition == "A" ){
        console.log(desition);
        console.log(`Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento hacia la ruta ${desition}`)
    let obtain = settlementsA(1)
    console.log(obtain)
    // for (const num of obtain){
    //     let result = num.obtain
    //     console.log(result)
    // }
    }else if(desition == "B"){
        console.log(desition);
        console.log(`Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento hacia la ruta ${desition}`)
    let obtain = settlementsA(2)
    console.log(obtain)
    
    
       
    
    
    
    
    
    
    }else{
    console.log(`no ingreso nada ${Jugador1.food}`)


}
}