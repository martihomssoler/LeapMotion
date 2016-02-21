#pragma strict

public var cara : GameObject[];
public var mid : GameObject[];
public var x : int;
public var y : int;
public var z : int;
public var papa : GameObject;
private var gt : int = 0;
private var gir : boolean = false;
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
			allow();
			for (var c : GameObject in cara) {
				c.gameObject.transform.parent = papa.transform;
			}
			for (var c : GameObject in mid) {
				c.SendMessage ("allow");
				c.SendMessage ("Detect");
				c.SendMessage ("Detect1");
				c.SendMessage ("Detect2");
				c.SendMessage ("Detect3");
			}
			Detect();
			if (r) {
				x = -x;
				y = -y;
				z = -z;
			}
			r = false;
			gir = false;
		}
	}
}

function girar (d : boolean) {
	if (!t) {
		if (d) {
			x = -x;
			y = -y;
			z = -z;
			r = true;
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

function Detect () {
	GetComponent.<BoxCollider>().size.y += 2;
	GetComponent.<BoxCollider>().size.x += 2;		
}

function OnCollisionEnter (c : Collision) {
	Debug.Log ("Z");
	cara = new GameObject [8];
	var i : int = 0;
	for (var r : ContactPoint in c.contacts) {
		cara [i] = r.otherCollider.gameObject;
	}
	GetComponent.<BoxCollider>().size.y -= 2;
	GetComponent.<BoxCollider>().size.x -= 2;
}