import Phaser from "phaser";
class EscenaBonus extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaBonus' });
        this.jugador = null;
        this.cursors = null;
        this.puntaje = 0;
        this.textoPuntaje = null;
        this.tiempoRestante = 15; 
        this.textoTiempo = null; 
    }

    // Recibe el puntaje desde la escena principal
    init(data) {
        this.puntaje = data.puntaje || 0; // Si no hay puntaje, lo establece a 0
                this.tiempoRestante = 15; // Reiniciar el tiempo cada vez que inicia la escena
    }

    preload() {
        this.load.image('Space', '/public/img/Space.jpg');
        this.load.image('nave', '/public/img/SS2.png');
        this.load.image('coin', '/public/img/Coin.png'); 
        this.load.audio('BonusS','/public/sound/BonusS.mp3');
    }

    create() {
        this.add.image(400, 300, 'Space');
        this.BonusS = this.sound.add('BonusS'); // Agrega esta línea para definir el sonido

    this.BonusS.play(); // Ahora esto funcionará correctamente
        // Jugador
        this.jugador = this.physics.add.sprite(400, 550, 'nave');
        this.jugador.setCollideWorldBounds(true); // Evita que el jugador salga de los bordes del mundo

        // Grupo para las monedas (Coin)
        this.grupoObjetoEspecial = this.physics.add.group();

        // Detectar colisiones entre jugador y monedas
        this.physics.add.overlap(this.jugador, this.grupoObjetoEspecial, this.recogerMoneda, null, this);

        // Mostrar el puntaje en pantalla
        this.textoPuntaje = this.add.text(16, 16, 'Puntaje: ' + this.puntaje, { fontSize: '32px', fill: '#fff' });

        // Mostrar el tiempo restante en pantalla
        this.textoTiempo = this.add.text(16, 50, 'Tiempo: ' + this.tiempoRestante, { fontSize: '32px', fill: '#fff' });

        // Generar monedas repetidamente
        this.time.addEvent({
            delay: 1000, // Generar una moneda cada 1.5 segundos
            callback: this.generarCoin,
            callbackScope: this,
            loop: true // Se repite infinitamente
        });

        // Temporizador para volver a la escena despues  de 50 segundos
        this.time.delayedCall(15000, this.terminarEscenaBonus, [], this); // 50 segundos (50,000 ms)

        // Controles del jugador
        this.cursors = this.input.keyboard.createCursorKeys();

        // Temporizador para actualizar el tiempo restante cada segundo
        this.time.addEvent({
            delay: 1000, // Cada 1 segundo
            callback: this.actualizarTiempo,
            callbackScope: this,
            loop: true // Repetir cada segundo
        });
    }

    // Método para generar monedas (Coin) en posiciones aleatorias
    generarCoin() {
        const x = Phaser.Math.Between(0, 800); // Posición aleatoria en el eje X
        const coin = this.grupoObjetoEspecial.create(x, 0, 'coin'); // Crear la moneda (Coin)
        coin.setVelocityY(300); // Establecer la velocidad de caída de la moneda
    }

    // Método que se llama cuando el jugador recoge una moneda
    recogerMoneda(jugador, coin) {
        coin.destroy(); // Destruye la moneda
        this.puntaje += 300; // Aumenta el puntaje en 100 puntos
        this.textoPuntaje.setText('Puntaje: ' + this.puntaje); // Actualiza el texto del puntaje
    }

    // Método que termina la escena bonus después de 50 segundos
    terminarEscenaBonus() {
        // Regresa a la escena principal pasando el puntaje acumulado
        this.BonusS.stop();
        this.scene.start('EscenaMain', { puntaje: this.puntaje });
    }

    // Método que actualiza el tiempo restante
    actualizarTiempo() {
        this.tiempoRestante--; // Resta un segundo al tiempo restante
        this.textoTiempo.setText('Tiempo: ' + this.tiempoRestante); // Actualiza el texto del tiempo

        // Si el tiempo llega a 0, termina la escena
        if (this.tiempoRestante <= 0) {
            this.terminarEscenaBonus(); // Llama a terminar la escena
        }
    }

    update() {
        this.jugador.setVelocityX(0);
        this.jugador.setVelocityY(0);

        // Controlar el movimiento del jugador con las flechas del teclado
        if (this.cursors.left.isDown) {
            this.jugador.setVelocityX(-300); // Movimiento a la izquierda
            this.jugador.anims.play('izquierda', true);
        } else if (this.cursors.right.isDown) {
            this.jugador.setVelocityX(300); // Movimiento a la derecha
            this.jugador.anims.play('derecha', true);
        }else{
            this.jugador.anims.play('normal', true);
        }

        if (this.cursors.up.isDown) {
            this.jugador.setVelocityY(-250); // Movimiento hacia arriba
        } else if (this.cursors.down.isDown) {
            this.jugador.setVelocityY(250); // Movimiento hacia abajo
        }
    }
}

export default EscenaBonus;
