#pragma strict

private var p : boolean = false;
private var o : GameObject;

function OnTriggerEnter (c : Collider) {
	if (!p && c.gameObject.tag == "cub") {
	Debug.Log ("in");
		p = true;
		o = c.gameObject;
	}
	else if (p && c.gameObject.tag == "magic") {
		Debug.Log ("out");
		p = false;
		o.SendMessage ("move");
	}
}