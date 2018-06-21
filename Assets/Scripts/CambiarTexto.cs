using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CambiarTexto : MonoBehaviour {

	public float segundos=0;
	public int minutos=0;
	public Text mostrar;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void FixedUpdate () {
		segundos += Time.deltaTime;
		if (Mathf.Round(segundos) % 1 == 0) {
			if (Mathf.Round (segundos) == 60) {
				minutos++;
				segundos = 0;
			}
			mostrar.text = "Minutos: "+minutos+"   Segundos: "+Mathf.Round(segundos).ToString();

		}
	}
}
