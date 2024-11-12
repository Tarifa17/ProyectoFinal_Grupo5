class Ganaste extends Phaser.Scene{
    constructor(){
        super('Ganaste');// Llama al constructor de la clase padre y define el nombre de la escena como 'Ganaste'

    }
    // Método init que permite recibir datos desde otra escena
    init(data){ //Sirve para capturar datos de otra escena
        this.puntaje = data.puntaje;
    }
 // Método create, se ejecuta una vez al iniciar la escena
    create(){
         // Agrega el texto "GANASTEE!!" en la posición (400, 200) con tamaño de fuente de 64px y color rojo
        this.add.text(400,200, 'GANASTEE!!', {fontSize: '64px', fill:'#FF0000 '}).setOrigin(0.5);

        this.add.text(400,300,'Puntaje:'+this.puntaje,{fontSize : '64px',fill: '#fff'}).setOrigin(0.5);
         // Agrega el texto con instrucciones para reiniciar el juego en la posición (400, 400)
        this.add.text(400,400,'"R" para para volver a jugar',{fontSize : '34px',fill: '#fff'}).setOrigin(0.5);
        // Detecta la primera vez que se presiona la tecla "R" para reiniciar el juego
        this.input.keyboard.once('keydown-R',() => {
           // Inicia la escena 'EscenaMain' y le pasa el puntaje al reiniciar
  this.scene.start('EscenaMain', {puntaje: 0});
    });
}



}
export default Ganaste;