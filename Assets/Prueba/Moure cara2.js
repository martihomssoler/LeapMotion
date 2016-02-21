#pragma strict

public var cara : GameObject[];
public var mid : GameObject[];
public var x : int;
public var y : int;
public var z : int;
public var cubmig : boolean = false;
private var gt : int = 0;
private var gir : boolean = false;
private var v : Vector3;
private var t : boolean = false;

function Start () {
}

function Update () {
	if (!t) { 
		if (Input.GetKeyDown(KeyCode.E)) girar();
		if (Input.GetKeyDown(KeyCode.W)) canvigir();
		if (gir) {
			gt += 1;
			transform.rotation.eulerAngles += Vector3 (x, y, z);
			if (gt == 90) {
				gt = 0;
				gir = false;
				for (var c : GameObject in cara) {
					c.gameObject.transform.parent = null;
				}
				for (var c : GameObject in mid) {
					c.SendMessage ("allow");
				}
				if (cubmig) {
					GetComponent.<Mourecara1>().enabled= true;
					GetComponent.<Mourecara3>().enabled= true;
				}
			}
		}
	}
}

function girar () {
	for (var c : GameObject in mid) {
		c.SendMessage ("prohibeix");
	}
	if (cubmig) {
		GetComponent.<Mourecara1>().enabled= false;
		GetComponent.<Mourecara3>().enabled= false;
	}
	for (var c : GameObject in cara) {
		c.gameObject.transform.parent = gameObject.transform;
	}
	v = transform.rotation.eulerAngles;
	gir = true;
}

function canvigir () {
	x = -x;
	y = -y;
	z = -z;
}

function prohibeix () {
	t = true;
}

function allow () {
	t = true;
}