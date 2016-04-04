// Public variable 
public var speed : int = 2;

// Function called once when the bullet is created
function Start () {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

          r2d.velocity.x = 1*speed;
    //Find which direction to move the bullet


    // Make the bullet move upward
   // r2d.velocity.y = speed;






}

// Function called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the bullet 
    Destroy(gameObject);
}



 

 