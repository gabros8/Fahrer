using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Rotar2 : MonoBehaviour {


	int acelerar=0;
	int reversa=0;
	int freno=0;
	int derecha=0;
	int izquierda=0;
	int boolean1=1;
	int boolean2=0;
	int boolean3=0;
	int boolean4=0;
	int booleander=1;
	int booleanini=0;
	public Camera Conductor;
	public Camera Prueba;
	public Text texto;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if(boolean1==1){
			if(Input.GetButtonUp("ButtonA")){
				Debug.Log("Has apretado W");
				acelerar++;
			}
		}


		if(acelerar==3){
			texto.text="Bien hecho! Ahora veremos el movimiento del volante. Mueve el joystick izquierdo a la derecha";
			this.transform.localEulerAngles=new Vector3(0,90,0);
			boolean1=0;
			boolean2=1;
		}

		if(boolean2==1){
			if(booleander==1){
				if(Input.GetAxis("EjeX")==1){
					derecha++;
				}
			}
			else{
				if(Input.GetAxis("EjeX")==-1){

					izquierda++;
				}
			}


		}

		if(derecha>0){
			Debug.Log("Te has movido a la derecha");
			texto.text="Ahora mueve el joystick izquierdo a la izquierda";
			booleander=0;
			acelerar = 0;
			derecha = 0;
		}
		if(izquierda>0){
			izquierda = 0;
			Debug.Log("Te has movido a la izquierda");
			texto.text="Muy bien! Lo siguiente será el botón de reversa, oprime el Botón 'B' tres veces";
			boolean2=0;
			transform.localEulerAngles=new Vector3(0,180,0);
			boolean3 = 1;
		}

		if (boolean3 == 1) {
			if(Input.GetButtonUp("ButtonB")){
				Debug.Log("Has apretado A");
				reversa++;
			}
		}

		if (reversa == 3) {
			boolean3 = 0;
			texto.text="Ahora solo nos falta el botón de frenado y estarás listo para la simulación. Aprieta el Botón 'R' 3 veces";
			boolean4 = 1;
			transform.localEulerAngles=new Vector3(0,270,0);
			reversa = 0;
		}

		if (boolean4 == 1) {
			if(Input.GetButtonUp("ButtonR")){
				Debug.Log("Has apretado S");
				freno++;
			}
		}
		if (freno == 3) {
			freno = 0;
			boolean4 = 0;
			texto.text="Listo, aprieta el botón de acelerar 3 veces e iniciará la simulación";
			booleanini = 1;
		}
		if (booleanini == 1) {
			if(Input.GetButtonUp("ButtonA")){
				acelerar++;
			}
			if (acelerar == 3) {
				Conductor.enabled = true;
				Prueba.enabled = false;
			}
		}	
	}
}




