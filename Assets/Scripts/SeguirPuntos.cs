using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class SeguirPuntos : MonoBehaviour {

    public Transform[] arraypuntos;
    public NavMeshAgent agente;
    public int cont=0;
    public Vector3 distancia;
    
    // Use this for initialization
    void Start () {
        if (agente == null)
        {
            agente = this.gameObject.GetComponent<NavMeshAgent>();
        }
        
        
    }
	
	// Update is called once per frame
	void Update () {
		Debug.Log (cont);
		if (cont > arraypuntos.Length-1) {
			cont = 0;
		}

		agente.SetDestination (arraypuntos [cont].position);

       
		distancia = transform.position - arraypuntos [cont].position;

		if (distancia.magnitude <= 6) {
           
			cont++;
  
		}

	}
}
