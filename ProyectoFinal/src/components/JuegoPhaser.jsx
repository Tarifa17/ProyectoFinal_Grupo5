import Phaser from "phaser";
import { useEffect } from "react";
//juego
import EscenaBonus from "../scenes/EscenaBonus";
import GameOver from "../scenes/GameOver";
import EscenaMain from "../scenes/EscenaMain";
import EscenaHorizontal from "../scenes/EscenaHorizontal";
function JuegoPhaser(){
    useEffect(() => {
        // Configuración del juego Phaser
        let config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'game',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            },
            scene: [EscenaMain, GameOver, EscenaBonus, EscenaHorizontal]
        };
        
        // Inicialización del juego
        let game = new Phaser.Game(config);

        // Limpiar el juego al desmontar el componente
        return () => {
            game.destroy(true); // Asegúrate de destruir el juego cuando el componente se desmonte
        };
    }, []);
return(
    <div className="container" id="game">
    
    </div>
) 

}
export default JuegoPhaser;