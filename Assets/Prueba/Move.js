#pragma strict

public var x : float;
public var y : float;
public var g : GameObject;
public var potd : boolean = false;
public var pote : boolean = false;
public var potamu : boolean = false;
public var potava : boolean = false;

function Start () {

}

function Update () {
	if (g.transform.position + Vector3(x, 0, 0) == transform.position) pote = true;
	else pote = false;
	if (g.transform.position - Vector3(x, 0, 0) == transform.position) potd = true;
	else potd = false;
	if (g.transform.position + Vector3(0, y, 0) == transform.position) potava = true;
	else potava = false;
	if (g.transform.position - Vector3(0, y, 0) == transform.position) potamu = true;
	else potamu = false;
}

function move () {
	if (potd) {
		transform.position.x += x;
		g.transform.position.x -= x;
	}
	else if (pote) {
		transform.position.x -= x;
		g.transform.position.x += x;
	}
	else if (potamu) {
		transform.position.y += y;
		g.transform.position.y -= y;
	}
	else if (potava) {
		transform.position.y -= y;
		g.transform.position.y += y;
	}
}

