using UnityEngine;
using System.Collections;
using Leap;

public class PuzzleHand : MonoBehaviour {
	public bool g;
	public GameObject dit;
	// Use this for initialization
	void Start () {
	}

	// Update is called once per frame
	void Update() {
		Hand leap_hand = GetComponent<HandModel>().GetLeapHand();
		float confidence = leap_hand.Confidence;
		if (leap_hand != null) {
			Renderer[] renders = GetComponentsInChildren<Renderer> ();
			foreach (Renderer render in renders)
				SetRendererAlpha (render, confidence);



			if (leap_hand.GrabStrength > 0.7) {
				GameObject.Find ("/RigidRoundHand(Clone) 1(Clone)/index/bone1/GameObject").SendMessage ("act");
			} else {
				GameObject.Find ("/RigidRoundHand(Clone) 1(Clone)/index/bone1/GameObject").SendMessage ("deac");
			}
		} else {
			
		}
	}


	protected void SetRendererAlpha(Renderer render, float alpha) {
		Color new_color = render.material.color;
		new_color.a = alpha;
		render.material.color = new_color;
	}
		
}
