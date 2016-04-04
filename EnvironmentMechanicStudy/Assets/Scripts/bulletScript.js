// Public variable 
public var speed : int = 6;

// Function called once when the bullet is created
function Start () {
    // Get the rigidbody component
    var r2d = GetComponent.<Rigidbody2D>();

    var dir:int = Random.Range(1,15);
    //Find which direction to move the bullet
    if(dir > 4){
    var dirrandom:int = Random.Range(-180,180);
    	transform.Rotate (Vector3.forward * dirrandom);
          r2d.velocity.x = speed;
        


    }else{

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
}


    // Make the bullet move upward
   // r2d.velocity.y = speed;






}

// Function called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the bullet 
    Destroy(gameObject);
}



 

 