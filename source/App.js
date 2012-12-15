enyo.kind({
	name: "App",
	fit: true,
	layoutKind: "FittableRowsLayout",
	startX: 0,
	offset: 0,
	components:[
		{name: "animator", kind: "Animator", duration: 1000, endValue: 2, onStep: "animatorStep"},
		{classes: "container",
		fit: true,
		ondragstart: "startdrag",
		ondrag: "dragged",
		components:[
			{name: "div1", classes: "div1"},
			{name: "div2", classes: "div2"},
			{name: "div3", classes: "div3"},
			{name: "div4", classes: "div4"},
			{name: "div5", classes: "div5"},
			{name: "div6", classes: "div6"},
			{name: "div7", classes: "div7"},
			{name: "div8", classes: "div8"},
			{name: "div9", classes: "div9"}
		]},
		{kind: "onyx.Toolbar", components:[
			{kind: "onyx.Button", content: "Activate", ontap: "activated"}
		]}
	],
	activated: function(inSender, inEvent) {
		this.$.animator.play();
	},
	animatorStep: function(inSender, inEvent) {
		enyo.log("Step" + inSender.value);
		this.$.div1.applyStyle("opacity", Math.min(inSender.value, 0.9));
		this.$.div2.applyStyle("opacity", Math.min(inSender.value - 0.2, 0.8));
		this.$.div3.applyStyle("opacity", Math.min(inSender.value - 0.4, 0.7));
		this.$.div4.applyStyle("opacity", Math.min(inSender.value - 0.6, 0.6));
		this.$.div5.applyStyle("opacity", Math.min(inSender.value - 0.8, 0.5));
		this.$.div6.applyStyle("opacity", Math.min(inSender.value - 1.0, 0.4));
		this.$.div7.applyStyle("opacity", Math.min(inSender.value - 1.2, 0.3));
		this.$.div8.applyStyle("opacity", Math.min(inSender.value - 1.4, 0.2));
		this.$.div9.applyStyle("opacity", Math.min(inSender.value - 1.6, 0.1));
	},
	startdrag: function(inSender, inEvent) {
		this.startX = inEvent.pageX;
		this.startOffset = this.offset;
	},
	dragged: function(inSender, inEvent) {
		var diff = this.startX - inEvent.pageX;
		this.offset = this.startOffset - diff;
		
		this.$.div1.applyStyle("left", this.offset + "px");
		this.$.div1.applyStyle("right", -this.offset + "px");
		
		this.$.div2.applyStyle("left", this.offset * 0.9 + "px");
		this.$.div2.applyStyle("right", -this.offset * 0.9 + "px");
		
		this.$.div3.applyStyle("left", this.offset * 0.8 + "px");
		this.$.div3.applyStyle("right", -this.offset * 0.8 + "px");
		
		this.$.div4.applyStyle("left", this.offset * 0.7 + "px");
		this.$.div4.applyStyle("right", -this.offset * 0.7 + "px");
		
		this.$.div5.applyStyle("left", this.offset * 0.6 + "px");
		this.$.div5.applyStyle("right", -this.offset * 0.6 + "px");
		
		this.$.div6.applyStyle("left", this.offset * 0.5 + "px");
		this.$.div6.applyStyle("right", -this.offset * 0.5 + "px");
		
		this.$.div7.applyStyle("left", this.offset * 0.4 + "px");
		this.$.div7.applyStyle("right", -this.offset * 0.4 + "px");
		
		this.$.div8.applyStyle("left", this.offset * 0.3 + "px");
		this.$.div8.applyStyle("right", -this.offset * 0.3 + "px");
		
		this.$.div9.applyStyle("left", this.offset * 0.2 + "px");
		this.$.div9.applyStyle("right", -this.offset * 0.2 + "px");
	}
});
