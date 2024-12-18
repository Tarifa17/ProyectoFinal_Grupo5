import Phaser from "phaser";
import { useEffect } from "react";
//juego
import EscenaBonus from "../scenes/EscenaBonus";
import GameOver from "../scenes/GameOver";
import EscenaMain from "../scenes/EscenaMain";
import EscenaHorizontal from "../scenes/EscenaHorizontal";
import Ganaste from "../scenes/Ganaste";
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
            scene: [EscenaMain, GameOver, EscenaBonus, EscenaHorizontal,Ganaste]
        };
        
        // Inicialización del juego
        let game = new Phaser.Game(config);

        // Limpiar el juego al desmontar el componente
        return () => {
            game.destroy(true); // Asegúrate de destruir el juego cuando el componente se desmonte
        };
    }, []);
return(
    // Acomodamos el juego dentro de un div mediante su parent llamado game
    <div className="container-flex" id="game"> 
    
    </div>
) 

}
export default JuegoPhaser;