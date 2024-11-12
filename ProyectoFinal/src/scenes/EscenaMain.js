import Phaser from "phaser";
class EscenaMain extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaMain' });
        this.jugador = null;
        this.cursors = null;
        this.puntaje = 0;
        this.textoPuntaje = 0;
    }

    preload() {
        this.load.image('cielo', '/public/img/sky.jpeg');
        //this.load.image('nave', '/public/resources/SS2.png');
        this.load.image('proyectil', '/public/img/bullet1.png');//cargando la imagen bala

        this.load.image('meteoro2', '/public/img/meteoroA.png');
        this.load.image('Coin', '/public/img/Coin.png');
        this.load.audio('MusicaFondo','/public/sound/MusicaFondo.mp3');
        this.load.audio('disparo', '/public/sound/disparoS.mp3');
        this.load.audio('explosion', '/public/sound/explosion1.mp3');
        this.load.spritesheet('nave', '/public/img/sheep-Sheet.png', {frameWidth:32, frameHeight: 30})
     
    }

    create() {
        this.add.image(400, 300, 'cielo');//fondo de ka esceba
        this.jugador = this.physics.add.sprite(400, 550, 'nave');
       
        this.jugador.setCollideWorldBounds(true);//el jugador no puede salir de los limites visibles de la pantalla
       //agega propiedades ficicas a los grupos
        this.grupoMeteoros = this.physics.add.group();
        this.grupoObjetoEspecial = this.physics.add.group(); // Grupo para el objeto especial
        //generamos meteoros cada segundo
        this.time.addEvent({ delay: 1000, callback: this.generarMeteoros, callbackScope: this, loop: true });
     //definimos las teclas para mover al jugador
        this.cursors = this.input.keyboard.createCursorKeys();
 
        //collision jugador meteoros
        this.physics.add.collider(this.jugador, this.grupoMeteoros, this.gameOver, null, this);
// Detectar colisión entre jugador y monedas
this.physics.add.overlap(this.jugador, this.grupoObjetoEspecial, this.recogerObjetoEspecial, null, this);
//collision meteoros y bullet
// Crea una animación llamada 'izquierda' para la nave
this.anims.create({
    key: 'izquierda', // Nombre
    frames: [{key: 'nave', frame: 0}],// Usa el primer cuadro de la textura 'nave' para esta animación
    frameRate: 20  // Establece la velocidad de reproducción en 20 cuadros por segundo
});
// Crea una animación llamada 'normal' para la nave
this.anims.create({
    key: 'normal', // Nombre
    frames: [{key: 'nave', frame:1}],// Usa el segundo cuadro de la textura 'nave' para esta animación
    frameRate: 20
})
// Crea una animación llamada 'derecha' para la nave
this.anims.create({
    key: 'derecha', // Nombre de la animación
    frames: [{ key: 'nave', frame: 2 }], // Usa el tercer cuadro de la textura 'nave' para esta animación
    frameRate: 20 // Establece la velocidad de reproducción en 20 cuadros por segundo
})

        this.textoPuntaje = this.add.text(16,16,'Puntaje: 0', { fontSize: '32px', fill: '#fff' });
        
        // Generar bonus después de 10 segundos
        this.time.addEvent({
            delay: 10000, 
            callback: this.generarObjetoEspecial, // Llama al método para generar el objeto
            callbackScope: this,
            loop: false 
        });
        //musica de fondo
        this.MusicaFondo =this.sound.add ('MusicaFondo',{loop :true});
    this.MusicaFondo.play();
    }

    // Método para generar el objeto en una posición aleatoria
    generarObjetoEspecial() {
        //phaser math es una funcion predefinida de phaser que sen encarga de generar de manera mas eficiente un numero aleatorio 
        const x = Phaser.Math.Between(0, 800);
        const bonus = this.grupoObjetoEspecial.create(x, 0, 'Coin'); 
        //a bonus(moneda) se le asigna una velocidad  de caida constante de 200  en Y
        bonus.setVelocityY(200);
        
    }
    //este metodo es llamado al haber una colision entre jugador y coin
    recogerObjetoEspecial(jugador, coin) {
        coin.destroy(); // Elimina la moneda (Coin) una vez recogida
        console.log("Moneda recogida!");
        this.scene.start('EscenaBonus', { puntaje: this.puntaje }); // Cambia a la escena "EscenaBonus" y pasa el puntaje
        this.MusicaFondo.stop(); 
    }
    //metodo para usarse al volver de la EScenaBonus
    init(data) {
        this.puntaje = data.puntaje || 0; // Si no hay puntaje recibido, lo deja en 0
    }
    

    generarMeteoros() {
        const x = Phaser.Math.Between(0, 800);// Posición aleatoria en el eje X
        const meteoro = this.grupoMeteoros.create(x, 0, 'meteoro2');//crea un meteoro deste la parte superior de la pantalla
        meteoro.setVelocityY(200);
    }
 // Método de Game Over al colisionar con un meteoro
    gameOver(jugador) {
        this.physics.pause(); // Pausa todas las físicas
        jugador.setTint(0xff0000);
        console.log('Game Over');
        this.scene.start('GameOver', { puntaje: this.puntaje });
        this.MusicaFondo.stop();
    }

    update() {
         // Inicializar las velocidades de la nave en 0 para detener su movimiento
        this.jugador.setVelocityX(0);
        this.jugador.setVelocityY(0);
         // Movimiento a la izquierda
        if (this.cursors.left.isDown) {
            this.jugador.setVelocityX(-300);
            this.jugador.anims.play('izquierda', true);

        }
         // Movimiento a la derecha
        else if (this.cursors.right.isDown) {
            this.jugador.setVelocityX(300);
            this.jugador.anims.play('derecha', true);
        }else{
            this.jugador.anims.play('normal', true);
        }

        if (this.cursors.up.isDown) {
            this.jugador.setVelocityY(-150);
        } else if (this.cursors.down.isDown) {
            this.jugador.setVelocityY(150);
        }
        //aumenta el puntaje en cada frame
        this.puntaje += 1;
        this.textoPuntaje.setText('Puntaje: ' + this.puntaje);  // Actualizar el texto del puntaje
// Cambiar a la escena "EscenaHorizontal" al alcanzar un puntaje de 4000
        if (this.puntaje >= 4000) {
            console.log('Cambiando a EscenaHorizontal');
            this.MusicaFondo.stop(); // Detener la música de fondo
            this.scene.start('EscenaHorizontal', { puntaje: this.puntaje, bossGenerado: false }); // Cambiar a la escena "EscenaHorizontal" y pasar el puntaje
        }
        
    }
}

export default EscenaMain;
