var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function QuadView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInQuad.call(this);
    _createOutQuad.call(this);
    _createInOutQuad.call(this);
}

QuadView.prototype = Object.create(View.prototype);
QuadView.prototype.constructor = QuadView;

QuadView.DEFAULT_OPTIONS = {};

// inQuad curve
function _createInQuad() {
  var inQuadSurface = new Surface(defaultOptions('inQuad'));

  var inQuadModifier = new StateModifier();

  inQuadModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inQuad')
  );

  this.mainNode.add(inQuadModifier).add(inQuadSurface);
}


// outQuad curve
function _createOutQuad() {
  var outQuadSurface = new Surface(defaultOptions('outQuad'));

  var outQuadModifier = new StateModifier();

  outQuadModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outQuad')
  );

  this.mainNode.add(outQuadModifier).add(outQuadSurface);
}

// inOutQuad curve
function _createInOutQuad() {
  var inOutQuadSurface = new Surface(defaultOptions('inOutQuad'));

  var inOutQuadModifier = new StateModifier();

  inOutQuadModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutQuad')
  );

  this.mainNode.add(inOutQuadModifier).add(inOutQuadSurface);

}










