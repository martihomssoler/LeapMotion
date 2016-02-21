#pragma strict

public var alvol : GameObject;
public var anterior : GameObject;
public var d : boolean = false;
public var mid : int = 0;

function Start () {

}

function Update () {

}

function Alvoltant (ant : GameObject) {
	if (ant == anterior) {
		Debug.Log ("A");
		alvol.SendMessage ("girar", d);
		if (mid == 1) alvol.SendMessage ("girar1", d);
		else if (mid == 2) alvol.SendMessage ("girar2", d);
		else if (mid == 3) alvol.SendMessage ("girar3", d);
	}
}
