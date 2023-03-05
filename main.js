//!Segunda Entrega --- Juego Frio  --- 
//Historia Creada
console.log(`Inicia tu viaje hacia un campamento con temperaturas invernales de -20 grados y bajando a maximas de -90 grados bajo cero,  dependiendo de tu ruta se emplearan mas objetos o menos objetos segun la seleccion.
Necesitaras llegar hasta el campamento para averiguar si el ultimo bastion de la humanidad sigue en pie en este mundo que se a convertido en un congelador gigantesco`)


console.log(`Tienes Adelante un viaje con tres rutas diferentes cada ruta representa un desgaste en tu inventario y en tu salud total, a lo largo del viaje podras encontrar objetos que te ayudaran a sobrevivir hasta el final`)



let Life = 100
let Keepgoing = true

// class adquire{
//     constructor(){
//         this.obtain = []
// }
// }

const adquire = []


        



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
       this.see = function(){return [this.food,this.wood,this.yesca,this.water,this.endurance]}
    }}
    const Jugador1 = new Backpack(900,900,900,900,900);
    const Jugador2 = new Backpack(400,200,150,600,1000);
    Jugador1.check();
    Jugador2.check();

    // const Runpost = [new Backpack(100,40,20,50,60,1),
    //                 new Backpack(150,80,40,100,120.2),
    //                 new Backpack(200,160,80,150,200,3),
    //                 new Backpack(250,210,160,200,300,4)]

    function post(){
        return Array.from(arguments);
    }



    // const post1 = new Backpack(100,40,20,50,60)
    // const post2 = new Backpack(150,80,40,100,120)
    // const post3 = new Backpack(200,160,80,150,200)
    // const post4 = new Backpack(250,210,160,200,300)


    // function spin(arr,fn){
    //     for(const el of arr){
    //     fn(el)}}

      
    
    function journeyManagement(arr,arr2){
            for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i] - arr2[i]}
        
    }

   // let rest = function(a,b){ for(let i = 0; i < a.length; i++){
            //     a[i] = a[i] - b[i]}}
            // let algo = rest(record, result)
            // console.log(algo)

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
        console.log(`Llegaste al primer asentamiento el consumo de recursos es de: ${post(100,40,20,50,60)}`)
            let convert = Jugador1.see()//convierto el jugador1 a array de nuevo por q no me lolee simplemente colocando jugador1
            console.log(convert)
            let post1 = post(100,40,20,50,60)
            
            const substrac = function(items,items2){for(const el in items){//sirvio
                let a1 = items[el]
                let a2 = items2[el]
                Jugador1 = a1 - a2
                console.log(a1 - a2)
            }}
            
            Jugador1 = new Backpack(substrac(convert,post1))
            let este = Jugador1.see()
            console.log(este)
            // let obtain = new adquire(settlementsA(1))        
        }else{
        console.log(`no ingreso nada ${Jugador1}`)
    
    
    }
    }
   
                    

    




