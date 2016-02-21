#pragma strict

public var g : GameObject[];

function Start () {

}

function Update () {

}

function OnTriggerEnter (c : Collider) {
	if (c.gameObject.tag == "laser") {
		for (var r : GameObject in g) {
			r.SendMessage ("move");
		}
	}
}