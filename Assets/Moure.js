#pragma strict

private var g : GameObject;

function OnTriggerEnter (c: Collider) {
	if (c.gameObject.tag == "cub") g = c.gameObject;
	else if (c.gameObject.tag == "magic" && g != null) {
		c.gameObject.SendMessage ("Alvoltant", g);
		Debug.Log(g);
	}
}