// A variable that will contain our bullet prefab
public var bullet : GameObject;
public var dattack : GameObject;
public var rattack : GameObject;
public var lattack : GameObject;
public var uattack : GameObject;
public var envvar : GameObject;
public var x = 1;
public var speed : float = 10f;
var countenv:int = 1;

function Start(){
	var envinit:int = 6;
	for (i = 0; i < envinit; i++) { 
    	this.callenv();
	}
	countenv +=envinit;
}

function callenv(){
	Instantiate(envvar, transform.position, Quaternion.identity);
}

function Update() { 
    // Move the spaceship horizontally (no changes)
    var r2d = GetComponent.<Rigidbody2D>();
    if(countenv < 4){
    this.callenv();
    countenv++;	

    }
    /*if (Input.GetKey("right"))
        r2d.velocity.x = 10;
    else if (Input.GetKey("left"))
        r2d.velocity.x = -10;
    else
        r2d.velocity.x = 0;*/

    // When the spacebar is pressed

        // Create a new bullet at “transform.position”
        // Which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
       // transform.Rotate(Vector3.forward, speed * Time.deltaTime);
        x++;
        if(x%20 == 0){
       		// transform.localScale -= new Vector3(0.002F, 0, 0);
        	
        	Instantiate(bullet, transform.position, Quaternion.identity);
        }
        if(x%201 == 0){
        	Instantiate(dattack, transform.position, Quaternion.identity);
        	Instantiate(uattack, transform.position, Quaternion.identity);
        	Instantiate(rattack, transform.position, Quaternion.identity);
        	Instantiate(lattack, transform.position, Quaternion.identity);


        }
    
       	
    
}

	 // Function called when the enemy collides with another object
	function OnTriggerEnter2D(obj) {
	//print("hi");
    // Name of the object that collided with the enemy
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet1(Clone)") {
    	//print("this here");
        // Destroy itself (the enemy) and the bullet
      //Destroy(gameObject);
       transform.localScale -= new Vector3(0.01F, 0.01F, 0F);
      Destroy(obj.gameObject);
    }

    // If the enemy collided with the spaceship

} 



 