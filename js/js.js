//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;



//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
		document.getElementById("reanudar").onclick=function(){reanudar();};
		document.getElementById("pausa").onclick=function(){pausar();};
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById("showm").style.display="none";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("showm").style.display="block";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = function(e){
			if (e.keyCode==32) motorOn();
	}
	document.onkeyup = motorOff;

	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v.toFixed(2);
	altura.innerHTML=y.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		if(v>=5){
		document.getElementById("naveOff").src="img/explosion2.gif";
		window.alert("HAS PERDIDO!!!!!");
		}
		else{ 
		document.getElementById("naveOff").src="img/ganaste1.gif";
		window.alert("HAS PERDIDO!!!!!");
		}

	}
}
function motorOn(){
	
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
	
	if (c<=0) { motorOff();
		documentGetElementById("fuel").innerHTML=0;
		}
document.getElementById('naveOff').src="img/nauFoc.jpg";
	
}

function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById('naveOff').src="img/cohete.png";
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c< 0 ) { c=0|motorOff();}
	combustible.innerHTML=c.toFixed(2);	
}

function reanudar() {
	stop();
	start();
}

function pausar() {
	stop();
}

	
