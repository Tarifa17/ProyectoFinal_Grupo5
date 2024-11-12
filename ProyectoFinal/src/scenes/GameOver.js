import Phaser from "phaser";
class GameOver extends Phaser.Scene{
    constructor(){
        super('GameOver');// Llama al constructor de la clase padre y define el nombre de la escena como 'gameOver'

    }
// Método init que permite recibir datos desde otra escena
    init(data){ //Sirve para capturar datos de otra escena
        this.puntaje = data.puntaje;
    }

    create(){
        //muestra un texto GameOver con un tamaño de 64px posicion 400,200 y un color blanco
        this.add.text(400,200, 'GameOver', {fontSize: '64px', fill:'#fff'}).setOrigin(0.5);
        // Muestra el puntaje del jugador en la posición (400, 300) con fuente de 64px y color blanco
        this.add.text(400,300,'Puntaje:'+this.puntaje,{fontSize : '64px',fill: '#fff'}).setOrigin(0.5);
          //muestra un texto "R" para volver a jugar  con un tamaño de 34px posicion 400,400 y un color blanco
        this.add.text(400,400,' "R" para volver a jugar',{fontSize : '34px',fill: '#fff'}).setOrigin(0.5);
       //detecta la tecla precionda que tiene que ser una R 
        this.input.keyboard.once('keydown-R',() => {
           //al pulsar la tecla r llama a escena main y definimos el puntaje en 0
  this.scene.start('EscenaMain', {puntaje : 0});
    });
}



}
export default GameOver;