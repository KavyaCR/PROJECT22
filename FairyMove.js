function fairyMovement() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 5;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 5;
	}

	if (keyCode === DOWN_ARROW) {
		phyBody.setStatic(starBody,false); 
	}
}