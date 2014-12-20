var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function QuadView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createQuadSurfaces.call(this);
}

QuadView.prototype = Object.create(View.prototype);
QuadView.prototype.constructor = QuadView;

QuadView.DEFAULT_OPTIONS = {};

function _createQuadSurfaces() {
  var quadSurfaces = createGrid('Quad', [3, 1]);
  this.mainNode.add(quadSurfaces);
}










