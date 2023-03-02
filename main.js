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
        this.check = function(){console.log(`En tu mochila cargas estos Items: Unidades
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
let foodconsumption
let woodconsumption
let yescaconsumption
let waterconsumption
let enduranceconsumption
switch(position){
    case 1:
    foodconsumption = 20
    woodconsumption = 15
    yescaconsumption = 10
    waterconsumption = 20
    enduranceconsumption = 100
    break
}
return foodconsumption, 
            woodconsumption, 
                yescaconsumption,
                    waterconsumption,
                        enduranceconsumption

}


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
adventure(desition)


}

function adventure(Juagador1,desition){
  
    if(desition == "A" ){
        console.log(desition);
        console.log(`Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento hacia la ruta ${desition}`)
    }else{
    console.log(`no ingreso nada`)


}
}
