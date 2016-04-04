public var envRelease : GameObject;
var count:int = 0;
var counter:int = 0;
 var ScriptB : MonoScript;

function Start(){
	var x:float = 0.0F;
	var y:float = 0.0F;
	var sel:int = Random.Range(1,4);

	if(sel ==  1){
		x = Random.Range(-6,-1.3);
		y = Random.Range(-4.5,-1.3);
	}else if(sel ==2) {
	x = Random.Range(-6,-1.3);
		y = Random.Range(1.3, 4.5);

	}else if(sel ==3){
	x = Random.Range(1.3,6);
		y = Random.Range(-4.5,-1.3);
	} else{
	x = Random.Range(1.3,6);
		y = Random.Range(1.3,4.5);
	
	}



	transform.localPosition += new Vector3(x, y, 0F);
}



function OnTriggerEnter2D(obj) {
    // Name of the object that collided with the enemy
    //print("o");
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet1(Clone)") {
        // Destroy itself (the enemy) and the bullet
        	count++;
        	Destroy(obj.gameObject);
        	if(count > 10){
        		counter++;
        		count = 0;
        		Instantiate(envRelease, transform.position, Quaternion.identity);
        		if(counter > 0){
        		print("counterhgiher");

        		Destroy(gameObject);
        		}
           		
           }
    }



    // If the enemy collided with the spaceship

}  