#pragma strict

private var k : int = 0;

function Start () {

}

function Update () {
	if (k == 1) transform.rotation.eulerAngles += Vector3(0, -1, 0);
	else if (k == 2) transform.rotation.eulerAngles += Vector3(0, 1, 0);
	else if (k == 3) transform.rotation.eulerAngles += Vector3(-1, 0, 0);
	else if (k == 4) transform.rotation.eulerAngles += Vector3(1, 0, 0);
}

function mov (n : int) { 
	if (n == 0) k = 1;
	else if (n == 1) k = 2;
	else if (n == 2) k = 3;
	else if (n == 3) k = 4;
	else if (n == 4) k = 0;
	
}