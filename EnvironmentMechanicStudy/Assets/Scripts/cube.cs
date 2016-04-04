using UnityEngine;
using System.Collections;

public class cube : MonoBehaviour {


	// Use this for initialization
	void Start () {
		print ("I am a cube"); 
	}

	// Update is called once per frame
	void Update () {
		//sprint (Input.GetAxis ("Horizontal"));
		transform.Translate ( Input.GetAxis ("Horizontal")*2* Time.deltaTime, 0f, 0f);
		transform.Translate (  0f,  Input.GetAxis ("Vertical")*2* Time.deltaTime, 0f);


	}



		
	
	

}
