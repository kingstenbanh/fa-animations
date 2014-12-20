var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function CubicView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createCubicSurfaces.call(this);
}

CubicView.prototype = Object.create(View.prototype);
CubicView.prototype.constructor = CubicView;

CubicView.DEFAULT_OPTIONS = {};

function _createCubicSurfaces() {
  var cubicSurfaces = createGrid('Cubic', [3, 1]);
  this.mainNode.add(cubicSurfaces);
}










