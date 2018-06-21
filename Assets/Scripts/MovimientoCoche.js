#pragma strict

var RuedaTI:WheelCollider;
var RuedaTD:WheelCollider;
var RuedaDI:WheelCollider;
var RuedaDD:WheelCollider;
var Aceleracion:int=300;
var AceleracionTotal:int;
var Velocidad:int;
var VelocidadMax:int=1000;
var RotacionDI:Transform;
var RotacionDD:Transform;
var angulo:float=7.5;
var anguloGiroizq:int;
var anguloGiroder:int;
var desaceleracion:int=80;
var contadordesegundos:float;
var contadordesegundos2:float=0;
var giroder:boolean=false;
var giroizq: boolean=false;
var neutro:boolean=false;
var CentroDD:Transform;
var vector:Vector3;
var Volante:Transform;
var freno:boolean=false;
var X;
var Y;


function Start () {
	transform.GetComponent.<Rigidbody>().centerOfMass=new Vector3(-.3,-.5,.2);
}

function FixedUpdate () {
	
	X=Input.GetAxis("EjeX");

	Y=Input.GetAxis("EjeY");



	if(Input.GetAxis("EjeX")>0f){
		if(!giroizq&&!neutro){
			giroder=true;
		}
		else{
		giroizq=false;
		contadordesegundos=0;
		neutro=false;
		}
	}
	else if(Input.GetAxis("EjeX")<0f){
		if(!giroder&&!neutro){
			giroizq=true;
		}
		else{
		giroder=false;
		contadordesegundos=0;
		neutro=false;
		}
	}
	else{
		giroder=false;
		giroizq=false;
		contadordesegundos=0;
		neutro=true;
	}
	
	if(giroder){
		if(contadordesegundos<6){
		
		contadordesegundos+=Time.deltaTime*1.75;
		anguloGiroder=angulo*contadordesegundos;
		anguloGiroizq=anguloGiroder*1.1;
		Volante.localEulerAngles=Vector3(0,0,-anguloGiroder*6.75);
		}
		else{
			contadordesegundos=6;
		}
	}
	
	else if(giroizq){
		if(contadordesegundos<6){
		
		contadordesegundos+=Time.deltaTime*1.75;
		anguloGiroizq=angulo*-contadordesegundos;
		anguloGiroder=anguloGiroizq*1.1;
		Volante.localEulerAngles=Vector3(0,0,-anguloGiroizq*6.75);
		}
		else{
			
			contadordesegundos=6;
		}
	}
	else if(neutro){
		if(anguloGiroder>2){
			contadordesegundos-=Time.deltaTime;
		anguloGiroder+=angulo*contadordesegundos*1.35;
		anguloGiroizq=anguloGiroder*1.2;
		Volante.localEulerAngles=Vector3(0,0,-anguloGiroder*6.75);
		}
		else if(anguloGiroizq<-2){
			contadordesegundos+=Time.deltaTime;
		anguloGiroizq+=angulo*contadordesegundos*1.35;
		anguloGiroder=anguloGiroizq*1.2;
		Volante.localEulerAngles=Vector3(0,0,-anguloGiroizq*6.75);
		}
		else{
			anguloGiroder=0;
			anguloGiroizq=0;
			contadordesegundos=0;
			Volante.localEulerAngles=Vector3(0,0,-anguloGiroder*6.75);
		}
	}
	
	
	if(Input.GetButton("ButtonA")){
	AceleracionTotal=80;
	
	Velocidad=Mathf.Abs(AceleracionTotal)*.35*3.6;
	Velocidad=Mathf.Round(Velocidad);
	}
	else if(Input.GetButton("ButtonB")){
	AceleracionTotal=-80;
	
	Velocidad=Mathf.Abs(AceleracionTotal)*.35*3.6;
	Velocidad=Mathf.Round(Velocidad);
	}
	else{
	AceleracionTotal=0;
	
	Velocidad=Mathf.Abs(AceleracionTotal)*.35*3.6;
	Velocidad=Mathf.Round(Velocidad);
	}

	
	if(Mathf.Abs(Velocidad)<VelocidadMax&&!freno){
	RuedaTI.motorTorque=AceleracionTotal;
	RuedaTD.motorTorque=AceleracionTotal;
	RuedaDI.motorTorque=AceleracionTotal;
	RuedaDD.motorTorque=AceleracionTotal;
	}
	else{
	RuedaTI.motorTorque=0;
	RuedaTD.motorTorque=0;
	RuedaDI.motorTorque=0;
	RuedaDD.motorTorque=0;
	}

	if(Input.GetButton("ButtonR")){
	RuedaTI.brakeTorque=desaceleracion;
		RuedaTD.brakeTorque=desaceleracion;
		RuedaDI.brakeTorque=desaceleracion;
		RuedaDD.brakeTorque=desaceleracion;
		
	
	}
	else{
		RuedaTI.brakeTorque=0;
		RuedaTD.brakeTorque=0;
		RuedaDI.brakeTorque=0;
		RuedaDD.brakeTorque=0;
	}
	if(Input.GetButton("ButtonR")){
	freno=true;
		RuedaTI.motorTorque=0;
	RuedaTD.motorTorque=0;
	RuedaDI.motorTorque=0;
	RuedaDD.motorTorque=0;
	RuedaTI.brakeTorque=desaceleracion*30;
		RuedaTD.brakeTorque=desaceleracion*30;
		RuedaDI.brakeTorque=desaceleracion*30;
		RuedaDD.brakeTorque=desaceleracion*30;
		
	}
	else{
		freno=false;
	}

	RuedaDI.steerAngle=anguloGiroizq;
	RuedaDD.steerAngle=anguloGiroder;
	RotacionDI.localEulerAngles=Vector3(0,RuedaDI.steerAngle,0);
	RotacionDD.localEulerAngles=Vector3(0,RuedaDD.steerAngle,0);

	
}

function OnGUI(){


	GUI.Box(Rect(200,200,120,60),"X: "+X+"\n Y: "+Y+"\n Velocidad: "+Velocidad);
}
