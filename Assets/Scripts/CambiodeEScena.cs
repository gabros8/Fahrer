using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CambiodeEScena : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
		if (Input.GetButton ("Button-")||Input.GetButton ("Button+")) {
			SceneManager.LoadScene ("Demo");
		}


	}
}
