#pragma strict

public var cam : GameObject;
private var g : boolean = false;

function OnTriggerEnter (c : Collider) {
	if (g) {
		if (c.gameObject.tag == "camd") cam.SendMessage ("mov", 0);
		else if (c.gameObject.tag == "came") cam.SendMessage ("mov", 1);
		else if (c.gameObject.tag == "camam") cam.SendMessage ("mov", 2);
		else if (c.gameObject.tag == "camav") cam.SendMessage ("mov", 3);
	}
}

	function OnTriggerExit (c : Collider) {
		if (c.gameObject.tag == "camd" || c.gameObject.tag == "came" || c.gameObject.tag == "camam" || c.gameObject.tag == "camav")
			cam.SendMessage ("mov", 4);
	}

function act () {
	g = true;
}

function deac () {
	g = false;
}