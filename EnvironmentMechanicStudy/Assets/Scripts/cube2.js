public var bullet : GameObject;

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


}


   // Function called when the enemy collides with another object
function OnTriggerEnter2D(obj) {
    // Name of the object that collided with the enemy
    print("o");
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet(Clone)") {
        // Destroy itself (the enemy) and the bullet
        transform.localScale -= new Vector3(0.01F, 0.01F, 0F);

        Destroy(obj.gameObject);
    }

    // If the enemy collided with the spaceship

}  

