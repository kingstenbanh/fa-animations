var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function SineView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createSineSurfaces.call(this);
}

SineView.prototype = Object.create(View.prototype);
SineView.prototype.constructor = SineView;

SineView.DEFAULT_OPTIONS = {};

function _createSineSurfaces() {
  var sineSurfaces = createGrid('Sine', [3, 1]);
  this.mainNode.add(sineSurfaces);
}










