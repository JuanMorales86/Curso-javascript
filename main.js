//!Segunda Entrega --- Juego Frio  ---
//Historia Creada
console.log(`Inicia tu viaje hacia un campamento con temperaturas invernales de -20 grados y bajando a maximas de -90 grados bajo cero,  dependiendo de tu ruta se emplearan mas objetos o menos objetos segun la seleccion.
Necesitaras llegar hasta el campamento para averiguar si el ultimo bastion de la humanidad sigue en pie en este mundo que se a convertido en un congelador gigantesco`);

console.log(
  `Tienes Adelante un viaje con tres rutas diferentes cada ruta representa un desgaste en tu inventario y en tu salud total, a lo largo del viaje podras encontrar objetos que te ayudaran a sobrevivir hasta el final`
);

let Life = 100;
let Keepgoing = true;

// class adquire{
//     constructor(){
//         this.obtain = []
// }
// }

const adquire = [];

class Backpack {//Hago una clase para agregar a un jugador lo items que va a llevar
  constructor(food, wood, yesca, water, endurance) {
    this.food = food;
    this.wood = wood;
    this.yesca = yesca;
    this.water = water;
    this.endurance = endurance;
    this.check = function () {
      console.log(`En tu mochila cargas estos Items: 😶‍🌫️ Unidades
        Alimento: ${this.food} Unidades
        Madera: ${this.wood} Unidades
        Yesca: ${this.yesca} Unidades
        Agua Embotellada: ${this.water} Unidades
        Resistencia: ${this.endurance} Unidades
        `);
    };
    this.see = function () {//Metodo devuelve Array
      return [this.food, this.wood, this.yesca, this.water, this.endurance];
    };
  }
}
const Jugador1 = new Backpack(900, 900, 900, 900, 900);//Items de Jugador

Jugador1.check();//Llamo al metodo check para que salga por consola y el usuario vea que lleva en la mochila


function transformarr() {//crea un array apartir de un parametro no tiene mucho sentido
  return Array.from(arguments);
}


const Jugador1Array = Jugador1.see();//borralo
console.log(Jugador1Array);

function journeyManagement2(inputArray) {//Funcion resta entre dos arrays
  const resultArray = [];

  for (let i = 0; i < inputArray.length; i++) {//Para poder restar los arrays por cada index comparado
    Jugador1.food -= inputArray[i][0];
    Jugador1.wood -= inputArray[i][1];
    Jugador1.yesca -= inputArray[i][2];
    Jugador1.water -= inputArray[i][3];
    Jugador1.endurance -= inputArray[i][4];

    const updatedValues = [//LLamar a los valores de jugador1 del array principal y almacenar en esta variable
      Jugador1.food,
      Jugador1.wood,
      Jugador1.yesca,
      Jugador1.water,
      Jugador1.endurance,
    ];
    console.log(//Mostrar por consola cada interaccion de los post y el consumo de recursos
      `En el asentamiento ${
        i + 1
      } Tu arribo consumio en el trayecto ${updatedValues}`
    );

    resultArray.push(updatedValues);
  }

  console.log(
    `Llegaste al ultimo asentamiento con estos items:` +
      `\nComida = ${Jugador1.food} Unidades` +
      `\nMadera = ${Jugador1.wood} Unidades` +
      `\nYesca = ${Jugador1.yesca} Unidades` +
      `\nAgua Embotellada = ${Jugador1.water} Unidades` +
      `\nResistencia = ${Jugador1.endurance} Unidades`
  );

  return resultArray;
}

function getTotalRemainingValues(resultArray) {
  const totalValues = [0, 0, 0, 0, 0];

  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < 5; j++) {
      totalValues[j] -= resultArray[i][j];
    }
  }

  return totalValues;
}

questions1();

function questions1() {
  let desition = "";
  while (desition !== "A" && desition !== "B" && desition !== "C"){
    desition = 
    prompt(`Elija la ruta que desea tomar:
    Ruta A
    Ruta B
    Ruta C
    Nota:"Ingrese solo las letras A,B O C"
    `).toUpperCase();
    if(desition == ""){
      console.log(`Debe agregar un dato valido`);
    }
  }
  adventure(desition);

}

function adventure(desition) {
  let response = ""
  const defaultvalue = "S"
  


  if (desition === ""){
    alert("Ingresa una opción valida por favor: (A, B o C):");
    questions1()
  }else if (desition == "A") {
      console.log(desition);
      console.log(
        `Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento en direccion de ruta ${desition}`
      );
  
      //arrays POST de los asentamientos por donde va a pasar el Jugador1 y a los cuales le voy a restar items
      const journeyArray = [
        [100, 40, 20, 50, 60],
        [150, 80, 40, 100, 120],
        [250, 210, 160, 200, 300],
        [200, 160, 80, 150, 200],
      ];
  
      //Llamo a la funcion restar backpack jugador - los post
      const result = journeyManagement2(journeyArray);
   

    } else if (desition == "B") {//Ruta B
      console.log(desition);
      console.log(
        `Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento hacia la ruta ${desition}`
      );
  
      //arrays de los asentamientos por donde va a pasar el Jugador1 y a los cuales le voy a restar items
      const journeyArray = [
        [200, 150, 50, 150, 200],
        [400, 400, 120, 190, 250],
        [100, 200, 200, 220, 300],
        [100, 50, 300, 200, 50],
      ];
  
      //funcion restar backpack jugador - los post
      const result = journeyManagement2(journeyArray);
     
    }else if (desition == "C") {//Ruta C
      console.log(desition);
      console.log(
        `Tu viaje sale de la base hacia el yermo Super Frio.Llegaras el primer asentamiento hacia la ruta ${desition}`
      );
  
      //arrays de los asentamientos por donde va a pasar el Jugador1 y a los cuales le voy a restar items
      const journeyArray = [
        [200, 150, 50, 150, 200],
        [400, 400, 120, 190, 250],
        [100, 200, 200, 220, 300],
        [100, 50, 300, 200, 50],
      ];
  
      //funcion restar backpack jugador - los post
      const result = journeyManagement2(journeyArray);
      
    }  else {
      console.log(
        `no ingreso nada, sigues con la misma cantidad de intems en la mochila ${Jugador1Array}`
      );
    }

    response = prompt("Quieres Elegir otro camino?--'S'--'N'", defaultvalue).toUpperCase();

    if(response === "S"){
      let checkeo = Jugador1.see()
      console.log(checkeo)
      const initialValues = [//LLamar a los valores de jugador1 del array principal y almacenar en esta variable
      Jugador1.food = 900,
      Jugador1.wood = 900,
      Jugador1.yesca = 900,
      Jugador1.water = 900,
      Jugador1.endurance = 900,
    ];

    Jugador1.splice(0, 4, 900, 900, 900, 900, 900);

    //Jugador1.push(initialValues)

    }else if(response ==="N"){
      console.log(`Juego Terminado`)
    }else if(response == ""){
      console.log(`Error valor vacio`)
    }

  }

  

