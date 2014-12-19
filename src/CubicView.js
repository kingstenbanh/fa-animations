var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function CubicView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInCubic.call(this);
    _createOutCubic.call(this);
    _createInOutCubic.call(this);
}

CubicView.prototype = Object.create(View.prototype);
CubicView.prototype.constructor = CubicView;

CubicView.DEFAULT_OPTIONS = {};

// inCubic curve
function _createInCubic() {
  var inCubicSurface = new Surface(defaultOptions('inCubic'));

  var inCubicModifier = new StateModifier();

  inCubicModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inCubic')
  );

  this.mainNode.add(inCubicModifier).add(inCubicSurface);
}


// outCubic curve
function _createOutCubic() {
  var outCubicSurface = new Surface(defaultOptions('outCubic'));

  var outCubicModifier = new StateModifier();

  outCubicModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outCubic')
  );

  this.mainNode.add(outCubicModifier).add(outCubicSurface);
}

// inOutCubic curve
function _createInOutCubic() {
  var inOutCubicSurface = new Surface(defaultOptions('inOutCubic'));

  var inOutCubicModifier = new StateModifier();

  inOutCubicModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutCubic')
  );

  this.mainNode.add(inOutCubicModifier).add(inOutCubicSurface);

}










