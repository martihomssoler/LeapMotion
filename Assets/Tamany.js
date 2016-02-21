#pragma strict

public var h : float = 5;
public var r : float = 0.001;

function Start () {
	GetComponent.<CapsuleCollider>().height = h;
	GetComponent.<CapsuleCollider>().radius = r;
}

function Update () {
	if (GetComponent.<CapsuleCollider>().height != h) {
		GetComponent.<CapsuleCollider>().height = h;
		GetComponent.<CapsuleCollider>().radius = r;
	}
	//GetComponent.<CapsuleCollider>().height = 5;
	//GetComponent.<CapsuleCollider>().radius = 0.001;
}