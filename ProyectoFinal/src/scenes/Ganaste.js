class Ganaste extends Phaser.Scene{
    constructor(){
        super('Ganaste');
    }

    init(data){ //Sirve para capturar datos de otra escena
        this.puntaje = data.puntaje;
    }

    create(){
        this.add.text(400,200, 'Ganaste', {fontSize: '64px', fill:'#fff'}).setOrigin(0.5);
        this.add.text(400,300,'Puntaje:'+this.puntaje,{fontSize : '64px',fill: '#fff'}).setOrigin(0.5);
        this.add.text(400,400,'Barra espaciadora para volver a jugar',{fontSize : '34px',fill: '#fff'}).setOrigin(0.5);
       
        this.input.keyboard.once('keydown-SPACE',() => {
           
  this.scene.start('EscenaMain');
  this.scene.Puntaje = 0;
    });
}



}
export default Ganaste;