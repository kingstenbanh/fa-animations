var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function BounceView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createBounceSurfaces.call(this);
}

BounceView.prototype = Object.create(View.prototype);
BounceView.prototype.constructor = BounceView;

BounceView.DEFAULT_OPTIONS = {};

function _createBounceSurfaces() {
  var bounceSurfaces = createGrid('Bounce', [3, 1]);
  this.mainNode.add(bounceSurfaces);
}










