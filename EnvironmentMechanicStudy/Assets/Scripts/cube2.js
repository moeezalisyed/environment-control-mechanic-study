public var bullet : GameObject;
var gameOver = false;

// Function called ~60 times per second
function Update() {
    // Get the rigidbody component
   transform.Translate ( Input.GetAxis ("Horizontal")*2* Time.deltaTime, 0f, 0f);
		transform.Translate (  0f,  Input.GetAxis ("Vertical")*2* Time.deltaTime, 0f);

  // When the spacebar is pressed
    if (Input.GetKeyDown("space")) {
        // Create a new bullet at “transform.position”
        // Which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
        Instantiate(bullet, transform.position, Quaternion.identity);
    }

    if(transform.localScale.x < 0 && gameOver == false){
    	gameOver = true;

    }


}


   // Function called when the enemy collides with another object
function OnTriggerEnter2D(obj) {
	if(!gameOver){
     // Name of the object that collided with the enemy
   // print("o");
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet(Clone)") {
        // Destroy itself (the enemy) and the bullet
        transform.localScale -= new Vector3(0.01F, 0.01F, 0F);

        Destroy(obj.gameObject);
    }

    if(name == "dattack(Clone)" || name == "rattack(Clone)"  || name == "uattack(Clone)"  || name == "lattack(Clone)" ){

    	transform.localScale -= new Vector3(0.1F, 0.1F, 0F);
    	Destroy(obj.gameObject);

    }

    // If the enemy collided with the spaceship
    }
}


  function OnGUI() {
  if(gameOver){
  		print("game is over");
  		GUI.color = Color.white;
        GUI.Button (Rect(Screen.width/2 - 70, Screen.height/2 - 50,150,100), "GAME OVER!!!");

 }
 }  

