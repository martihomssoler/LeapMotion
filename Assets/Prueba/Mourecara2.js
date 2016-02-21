#pragma strict

public var cara : GameObject[];
public var mid : GameObject[];
public var x : int;
public var y : int;
public var z : int;
public var papa : GameObject;
public var cubmig : boolean = false;
private var gt : int = 0;
private var gir : boolean = false;
private var v : Vector3;
public var t : boolean = false;
private var r : boolean = false;
private var n : int;

function Start () {
}

function Update () {
	if (gir) {
		gt += 1;
		transform.rotation.eulerAngles += Vector3 (x, y, z);
		if (gt >= 90) {
			gt = 0;
			gir = false;
			for (var c : GameObject in cara) {
				c.gameObject.transform.parent = papa.transform;
			}
			for (var c : GameObject in mid) {
				c.SendMessage ("Detect");
				c.SendMessage ("Detect1");
				c.SendMessage ("Detect3");
				c.SendMessage ("allow");
			}
			Detect2();
			if (r) {
				x = -x;
				y = -y;
				z = -z;
			}
			t = false;
			r = false;
			if (cubmig) {
					GetComponent.<Mourecara1>().enabled= true;
					GetComponent.<Mourecara3>().enabled= true;
			}
		}
	}
}

function girar2 (d : boolean) {
	if (!t) {
		if (d) {
			x = -x;
			y = -y;
			z = -z;
			r = true;
		}
		if (cubmig) {
			GetComponent.<Mourecara1>().enabled= false;
			GetComponent.<Mourecara3>().enabled= false;
		}
		for (var c : GameObject in cara) {
			c.gameObject.transform.parent = gameObject.transform;
		}
		prohibeix();
		for (var c : GameObject in mid) {
			c.SendMessage ("prohibeix");
		}
		gir = true;
	}
}

function canvigir () {
	x = -x;
	y = -y;
	z = -z;
}

function prohibeix () {
	t = true;
	for (var c : GameObject in cara) {
		c.gameObject.GetComponent.<BoxCollider>().isTrigger = false;
	}
}

function allow () {
	t = false;
	for (var c : GameObject in cara) {
		c.gameObject.GetComponent.<BoxCollider>().isTrigger = true;
	}
}

function Detect2 () {
	GetComponent.<BoxCollider>().size.z += 2;
	GetComponent.<BoxCollider>().size.x += 2;		
}

function OnCollisionEnter (c : Collision) {
	cara = new GameObject [8];
	var i : int = 0;
	for (var r : ContactPoint in c.contacts) {
		cara [i] = r.otherCollider.gameObject;
	}
	GetComponent.<BoxCollider>().size.z -= 2;
	GetComponent.<BoxCollider>().size.x -= 2;
}