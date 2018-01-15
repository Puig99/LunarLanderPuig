# Lunar Lander
El joc ha estat desenvolupat utilitzant html, css i javaScript.
La versió amb html i css només incluia les imatges i l'estil de la pàgina del joc.
Aquesta versió comptava amb tres capes, les quals es dividien en indicadors dels parametres, espai per a la nau i opcions, situats d'esquerra a dreta i ocupant un 33% de la pantalla cada un.A més, es va afegir una capa en horitzontal, per que la nau hi aterrés, que ocupava un 20% de la pantalla.
La capa esquerra conté 3 imatges: fuel, velocitat i altura; cada una d'elles té el seu propi indicador numéric.
A la capa central hi trobam la nau, situada a la part d'adalt de la pantalla.
A la capa de la dreta hi ha les opcions, que són formades per 4 botons, un botó de play, un de pausa, un d'informació, i un per reiniciar el joc.
El boto d'informació ens porta a una altre pàgina, i porta un enllaçc per tornar a la pàgina del joc.

Les modificacions respecte a la anterior versió s'han fet totes amb funcions JavaScript.

S'ha afegit moviment a la nau, de manera que es pugui moure adalt i abaix només amb la barra espaiadora.
La imatge canvia quan feim clic a la barra espaiadora per propulsar la nau, fent que aparegui la imatge de la nau amb el foc del propulsor.
Els botons de pausa i play ara son funcionals, i aturen i reanuden el joc respectivament.
Els indicadors situats a la esquerra varien els seus valors constantment, de manera que el jugador es troba informat.
Quan la nau aterra es mostra una imatge depenent de la velocitat a la que s'ha aterrat, si es major a 5 Km/h es la nau explota, si es inferior es mostra una imatge que indica que has guanyat, les dues imatges venen acompanyades d'una alerta que es mostra al navegador indicant si has guanyat o perdut.

La versió de movil ara té un menú despleglable, el qual conté les mateixes opcions que el de la versió normal, pero que en obrir-se atura el joc.

Pots probar el joc amb aquest link https://rawgit.com/Puig99/LunarLanderPuig/master/index.html


