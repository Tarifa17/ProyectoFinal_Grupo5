import Phaser from "phaser";
class EscenaHorizontal extends Phaser.Scene {

    constructor() {
        super({ key: 'EscenaHorizontal' });
        this.jugador = null;
        this.cursors = null;
        this.puntaje = 0;
        this.textoPuntaje = 0;
        this.boss = null;
    }

    preload() {
        this.load.image('space2', '/public/img/space2.png');

        this.load.image('bullet', '/public/img/bullet.png');
        //this.load.image('nave', '/public/resources/SS2.png');
        this.load.image('enemigoA', '/public/img/enemigoA.png');
        this.load.image('boss', '/public/img/boss1.png');
        this.load.audio('finalBoss', '/public/sound/finalBoss.mp3');
        this.load.audio('MusicaFondo', '/public/sound/MusicaFondo.mp3');
        this.load.audio('disparo', '/public/sound/disparoS.mp3');
        this.load.audio('explosion', '/public/sound/explosion1.mp3');
        this.load.spritesheet('nave1', '/public/img/nave2-Sheet.png', { frameWidth: 64, frameHeight: 54 })
    }

    create() {
        this.add.image(400, 300, 'space2');
        this.jugador = this.physics.add.sprite(20, 300, 'nave1');
        this.jugador.setCollideWorldBounds(true);

        this.grupoProyectiles = this.physics.add.group(); // Crear el grupo de proyectiles
        this.teclaDisparo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.teclaEspacio = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.grupoMeteoros = this.physics.add.group();
        this.time.addEvent({ delay: 1000, callback: this.generarMeteoros, callbackScope: this, loop: true });
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.jugador, this.grupoMeteoros, this.gameOver, null, this);
        this.physics.add.collider(this.grupoProyectiles, this.grupoMeteoros, this.destruirMeteoro, null, this);
        //boss---------------------------------------------------------------------------------
        this.boss = this.physics.add.sprite(900, 200, 'boss');
        this.boss.visible = false;
        this.boss.setActive(false);
        

        this.anims.create({
            key: 'up',
            frames: [{ key: 'nave1', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'normalito',
            frames: [{ key: 'nave1', frame: 1 }],
            frameRate: 20
        })

        this.anims.create({
            key: 'down',
            frames: [{ key: 'nave1', frame: 2 }],
            frameRate: 20
        })



        this.textoPuntaje = this.add.text(16, 16, 'Puntaje: 0', { fontSize: '32px', fill: '#fff' });

        this.MusicaFondo = this.sound.add('MusicaFondo', { loop: true });
        this.MusicaFondo.play();
    }

    

    generarMeteoros() {
        const y = Phaser.Math.Between(0, 600);
        const meteoro = this.grupoMeteoros.create(600, y, 'enemigoA');
        meteoro.setVelocityX(-100);
    }

    gameOver(jugador) {
        this.physics.pause(); 
        jugador.setTint(0xff0000);
        console.log('Game Over');
        this.scene.start('GameOver', { puntaje: this.puntaje });
        this.MusicaFondo.stop();
        if (this.finalBoss && this.finalBoss.isPlaying) {
            this.finalBoss.stop();
        }
    }
    disparar() {
        const proyectil = this.grupoProyectiles.create(this.jugador.x, this.jugador.y, 'bullet');
        proyectil.setVelocityX(400); 
        this.sound.play('disparo');
    }
    destruirMeteoro(proyectil, meteoro) {
        proyectil.destroy(); // Destruye el proyectil
        meteoro.destroy(); // Destruye el meteoro
        this.sound.play('explosion');
        this.puntaje += 400; // Aumenta el puntaje o realiza cualquier otra acción que desees
        this.textoPuntaje.setText('Puntaje: ' + this.puntaje); // Actualiza el puntaje en pantalla
    }
    destruirBoss(proyectil, boss) {
        proyectil.destroy(); // Destruir proyectil al colisionar
        this.sound.play('explosion');
        boss.destroy(); // Destruir al jefe
        if (this.finalBoss && this.finalBoss.isPlaying) {
            this.finalBoss.stop(); // Detener musica del jefe
        }
    
        // Reiniciar la música de fondo
        if (this.MusicaFondo && !this.MusicaFondo.isPlaying) {
            this.MusicaFondo.play();
        }
    }
    aparecerBoss() {
        // Mostrar el jefe 
        this.boss.visible = true;
    this.boss.setActive(true); // Activar el jefe para que interactúe con la física
    //this.boss.body.enable = true;
    
        // Animación de entrada del jefe 
        this.tweens.add({
            targets: this.boss,
            x: 700, 
            duration: 5000, 
            ease: 'Power2',
        });
    
        // Animación  del jefe
        this.tweens.add({
            targets: this.boss,
            y: '+=50', 
            duration: 1500,
            yoyo: true,
            repeat: -1, 
            ease: 'Sine.easeInOut'
        });
    
        // Reproducir la música del jefe
        this.finalBoss = this.sound.add('finalBoss'); 
        this.finalBoss.play();
        this.MusicaFondo.stop();
    
        console.log('El jefe ha aparecido!');

        this.physics.add.collider(this.grupoProyectiles, this.boss, this.destruirBoss, null, this);
    }
    


    update() {
        this.jugador.setVelocityX(0);
        this.jugador.setVelocityY(0);
        
        if (this.cursors.right.isDown) {
            this.jugador.setVelocityX(200);
        }else if(this.cursors.left.isDown){
            this.jugador.setVelocityX(-200)
        }

        if (this.cursors.up.isDown) {
            this.jugador.setVelocityY(-150);
            this.jugador.anims.play('up', true);
        } else if (this.cursors.down.isDown) {
            this.jugador.setVelocityY(150);
            this.jugador.anims.play('down', true);
        }else{
            this.jugador.anims.play('normalito', true);
        }

        this.puntaje += 1;
        this.textoPuntaje.setText('Puntaje: ' + this.puntaje); 

        if (Phaser.Input.Keyboard.JustDown(this.teclaDisparo) || Phaser.Input.Keyboard.JustDown(this.teclaEspacio)) {
            this.disparar();
        }
            //boss/.--------------------------------------------------------------------------------------------------
            if (this.puntaje >= 2000 && !this.boss.visible) {
                this.aparecerBoss(); // Llamar a una función para manejar la aparición del jefe
            }
            
            
    ///boss-------------------------------------------------------------------------------------------

    }
}
export default EscenaHorizontal;