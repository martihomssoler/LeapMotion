#pragma strict

private var p : boolean = false;
private var o : GameObject = null;
private var t : float = 0.0;
public var maxt : float = 0.0;

function OnTriggerEnter (c : Collider) {
	if (!p && c.gameObject.tag == "cub" && c.gameObject != o) {
		t = 0.0;
		p = true;
	}
	else if (p && c.gameObject.tag == "magic") {
		p = false;
		if (o != null) o.SendMessage ("move");
	}
}

function OnTriggerStay (c : Collider) {
	t += Time.deltaTime;
	if (t >= maxt) {
		o = c.gameObject;
	}
}

function OnTriggerExit (c : Collider) {
	if (t <  maxt) {
		p = false;
		o = null;
	}
}