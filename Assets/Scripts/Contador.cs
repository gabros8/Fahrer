using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Contador : MonoBehaviour {
    public float tiempo = 5;

    public Text texto;
    public void Update()
    {
        tiempo -= Time.deltaTime;
        texto.text = "La simulación se iniciará en: \n" + (int)tiempo;
        if ((int)tiempo == 0)
        {
            SceneManager.LoadScene(2);
        }
    }
}
