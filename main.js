//!Segunda Entrega --- Juego Frio  --- 
console.log(`Inicia tu viaje hacia un campamento con temperaturas invernales de -20 grados y bajando a maximas de -90 grados bajo cero,  dependiendo de tu ruta se emplearan mas objetos o menos objetos segun la seleccion.
Necesitaras llegar hasta el campamento para averiguar si el ultimo bastion de la humanidad sigue en pie en este mundo que se a convertido en un congelador gigantesco`)


console.log(`Tienes Adelante un viaje con tres rutas diferentes cada ruta representa un desgaste en tu inventario y en tu salud total, a lo largo del viaje podras encontrar objetos que te ayudaran a sobrevivir hasta el final`)

let Life = 100
let Keepgoing = true

const adquire = []
console.log(adquire)

class Backpack{
    constructor(food, wood, yesca, water, endurance) {
        this.food = food;
        this.wood  = wood;
        this.yesca  = yesca;
        this.water  = water;
        this.endurance = endurance;
        this.check = function(){console.log(`En tu mochila cargas estos Items: 😶‍🌫️ Unidades
        Alimento: ${this.food} Unidades
        Madera: ${this.wood} Unidades
        Yesca: ${this.yesca} Unidades
        Agua Embotellada: ${this.water} Unidades
        Resistencia: ${this.endurance} Unidades
        `)}
    
    }}




    function spin(arr,fn){
        for(const el of arr){
        fn(el)}}
    
    
    
    const Jugador1 = new Backpack(500,500,500,500,500);
    
    Jugador1.check();
    
    function journeyManagement(arr1,arr2){
        let subtract = 0;

        for(let i = 0; i < arr1.lenght + arr2.lenght; i++){
        if(i < arr1.lenght){
            subtract = subtract - arr1[i]
        }else subtract = subtract - arr2[i - arr1.lenght]
        }
        return subtract;
    }
    
    console.log(journeyManagement(Jugador1,adquire))
  

    questions1();
    
    function questions1(){
    const desition = String(prompt(`Elija la ruta que desea tomar:
    Ruta A
    Ruta B
    Ruta C
    Nota:"Ingrese solo las letras A,B O C"
    `).toUpperCase());
    
    //console.log(desition);
    adventure(desition,Jugador1)
    
    
    }

    function adventure(desition,Jugador1){
      
        if(desition == "A" ){
            console.log(desition);
            console.log(`Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento hacia la ruta ${desition}`)
        let obtain = settlementsA(1)
        console.log(obtain)
        let obtain2 = settlementsA(2)
        console.log(obtain2)
        let obtain3 = settlementsA(3)
        console.log(obtain3)
        let obtain4 = settlementsA(4)
        console.log(obtain4)


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

function settlementsA(position){
let post

switch(position){
    case 1:

    post =[foodconsumption= 20,
        woodconsumption= 15,
        yescaconsumption= 10,
        waterconsumption= 20,
        enduranceconsumption= 100]
        for(const recovery in post){//CICLO FOR IN
            let slot2 = recovery;
            let slot3 = post[recovery]
            adquire.push(slot3)   
        }     
    break
    case 2:
    post = [foodconsumption = 30,
        woodconsumption = 15,
        yescaconsumption = 10,
        waterconsumption = 50,
        enduranceconsumption = 100]
        for(const recovery in post){//CICLO FOR IN
            let slot2 = recovery;
            let slot3 = post[recovery]
            adquire.push(slot3)   
        }   
        break
        case 3:
    post = [foodconsumption = 40,
        woodconsumption = 25,
        yescaconsumption = 20,
        waterconsumption = 50,
        enduranceconsumption = 100]
        for(const recovery in post){//CICLO FOR IN
            let slot2 = recovery;
            let slot3 = post[recovery]
            adquire.push(slot3)   
        }   
        break
        case 4:
    post = [foodconsumption = 50,
        woodconsumption = 35,
        yescaconsumption = 30,
        waterconsumption = 50,
        enduranceconsumption = 100]
        for(const recovery in post){//CICLO FOR IN
            let slot2 = recovery;
            let slot3 = post[recovery]
            adquire.push(slot3)   
        }   
        break
}return post
                        
}

    




