// Public variable 
public var speed : int = 6;

// Function called once when the bullet is created
function Start () {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

    var dir:int = Random.Range(1,4);
    //Find which direction to move the bullet
    switch (dir) {
    case 1:
    	
         r2d.velocity.y = speed;
        break;
    case 2:
    transform.Rotate (Vector3.forward * 90);
          r2d.velocity.x = speed;
        break;
    case 3:
    transform.Rotate (Vector3.forward * 180);
         r2d.velocity.y = -1*speed;
        break;
    case 4:
    transform.Rotate (Vector3.forward * -90);
         r2d.velocity.x = -1*speed;
        break;
    
}


    // Make the bullet move upward
   // r2d.velocity.y = speed;






}

// Function called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the bullet 
    Destroy(gameObject);
}


 // Function called when the enemy collides with another object
function OnTriggerEnter2D(obj) {
	print("hijp");
    // Name of the object that collided with the enemy
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "Cube") {
        // Destroy itself (the enemy) and the bullet
        //Destroy(gameObject);
    //    Destroy(obj.gameObject);
    }

    // If the enemy collided with the spaceship

} 
 

 