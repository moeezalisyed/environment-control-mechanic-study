// Public variable 
public var speed : int = 2;



// Function called once when the bullet is created
function Start () {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();
   
    //Find which direction to move the bullet
        var dir:int = Random.Range(1,4);
    //Find which direction to move the bullet
    if(dir > 4){
    var dirrandom:int = Random.Range(-180,180);
    	transform.Rotate (Vector3.forward * dirrandom);
          r2d.velocity.x = speed;
        


    }else{

    switch (dir) {
    case 1:
    	transform.Rotate (Vector3.forward * 90);
         r2d.velocity.y = speed;
        break;
    case 2:

          r2d.velocity.x = speed;
        break;
    case 3:
    transform.Rotate (Vector3.forward * 90);
         r2d.velocity.y = -1*speed;
        break;
    case 4:

         r2d.velocity.x = -1*speed;
        break;
     
    
	}
}

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

    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bosscube") {
        // Destroy itself (the enemy) and the bullet
        obj.transform.localScale -= new Vector3(0.08F, 0.08F, 0F);
        Destroy(gameObject);


    }


   
    // If the enemy collided with the spaceship

}





 

 