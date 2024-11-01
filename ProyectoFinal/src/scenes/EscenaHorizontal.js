import Phaser from "phaser";
class EscenaHorizontal extends Phaser.Scene {

    constructor() {
        super({ key: 'EscenaHorizontal' });
        this.jugador = null;
        this.cursors = null;
        this.puntaje = 0;
        this.textoPuntaje = 0;
        this.boss = null;
        this.vidaBoss = 10;
        this.bossActivo = false;
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
           //boss proyectile
           this.load.image('meteoro2', '/public/img/meteoroA.png');
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
               //----------------------------------------------proyectileBoss---------
        // ... configuración inicial existente ...
        this.grupoProyectilesBoss = this.physics.add.group(); // Crear el grupo para proyectiles del jefe

        // Configura las colisiones
        this.physics.add.collider(this.jugador, this.grupoProyectilesBoss, this.gameOver, null, this);
        //------------------------------Boss---
        

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
    Ganaste(jugador) {
        this.physics.pause(); 
        jugador.setTint(0xff0000);
        
        this.scene.start('Ganaste', { puntaje: this.puntaje });
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
    aparecerBoss() {
        this.vidaBoss = 10; //Reiniciamos las vidas del jefe
        this.bossActivo = true;
        
        // Mostrar el jefe 
        this.boss.visible = true; //Mostramos el jefe
        this.boss.setActive(true); // Activamos las colisiones del jefe para interactuar con las fisicas
        //this.boss.body.enable = true;
          // Temporizador para disparos del jefe
          this.time.addEvent({
            delay: 5000, // Dispara cada 5 segundos
            callback: this.dispararBoss,
            callbackScope: this,
            loop: true
        });
    
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

        this.physics.add.overlap(this.grupoProyectiles, this.boss, this.reducirVidaBoss, null, this);
    }
    // Método para disparar un proyectil desde el jefe hacia el jugador
    dispararBoss() {
        if (!this.bossActivo) return; // Verifica si el jefe sigue activo
    
        // Calcula la dirección hacia el jugador
        const posX = this.jugador.x - this.boss.x;
        const posY = this.jugador.y - this.boss.y;
        const velocidad = 0.3;
        // Crea y dispara el proyectil en la dirección del jugador
        const proyectilBoss = this.grupoProyectilesBoss.create(this.boss.x, this.boss.y, 'meteoro2');
        
        // Asigna velocidad en la dirección del jugador
        proyectilBoss.setVelocityX(posX * velocidad);
        proyectilBoss.setVelocityY(posY * velocidad);
    }
    
    reducirVidaBoss(boss, proyectil) {
        // Verificar si el jefe aún tiene vidas
        if (!this.bossActivo) return; // Salir si el jefe ya ha sido destruido

        proyectil.destroy(); // Destruir el proyectil

        this.vidaBoss -= 1; // Reducir las vidas del jefe
        console.log(`El jefe tiene ${this.vidaBoss} vidas restantes`);

        // Verificar si las vidas del jefe han llegado a 0
        if (this.vidaBoss <= 0) {
            this.derrotarBoss(boss);
        }
    }

    derrotarBoss(boss){
        this.bossActivo = false; // Marcar el jefe como inactivo
        boss.destroy(); // Destruir al jefe
        this.finalBoss.stop();
        console.log('El jefe ha sido derrotado!');

        this.scene.start('Ganaste', { puntaje: this.puntaje });
        
 
        
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
            if (this.puntaje >= 2000 && !this.boss.visible && !this.bossGenerado) {
                this.aparecerBoss(); // Llamar a una función para manejar la aparición del jefe
                this.bossGenerado = true; // Marcar que el jefe ha sido generado
            }
            
            
    ///boss-------------------------------------------------------------------------------------------

    }
}
export default EscenaHorizontal;