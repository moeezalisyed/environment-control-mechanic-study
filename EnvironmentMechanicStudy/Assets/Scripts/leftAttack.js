// Public variable 
public var speed : int = 2;

// Function called once when the bullet is created
function Start () {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();
    var x:int = Random.Range(1,6);
    if(x == 5){
    transform.localScale += new Vector3(0.00F, 1.5F, 0F);

    }
          r2d.velocity.x = -1*speed;
    //Find which direction to move the bullet


    // Make the bullet move upward
   // r2d.velocity.y = speed;






}

// Function called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the bullet 
    Destroy(gameObject);
}


function OnTriggerEnter2D(obj) {
    // Name of the object that collided with the enemy
    //print("o");
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet1(Clone)") {
        // Destroy itself (the enemy) and the bullet
 			print("destroy a bullter");
        	Destroy(obj.gameObject);

    }



    // If the enemy collided with the spaceship

} 
 

 