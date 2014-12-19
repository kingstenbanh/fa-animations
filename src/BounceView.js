var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function BounceView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInBounce.call(this);
    _createOutBounce.call(this);
    _createInOutBounce.call(this);
}

BounceView.prototype = Object.create(View.prototype);
BounceView.prototype.constructor = BounceView;

BounceView.DEFAULT_OPTIONS = {};

// inBounce curve
function _createInBounce() {
  var inBounceSurface = new Surface(defaultOptions('inBounce'));

  var inBounceModifier = new StateModifier();

  inBounceModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inBounce')
  );

  this.mainNode.add(inBounceModifier).add(inBounceSurface);
}


// outBounce curve
function _createOutBounce() {
  var outBounceSurface = new Surface(defaultOptions('outBounce'));

  var outBounceModifier = new StateModifier();

  outBounceModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outBounce')
  );

  this.mainNode.add(outBounceModifier).add(outBounceSurface);
}

// inOutBounce curve
function _createInOutBounce() {
  var inOutBounceSurface = new Surface(defaultOptions('inOutBounce'));

  var inOutBounceModifier = new StateModifier();

  inOutBounceModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutBounce')
  );

  this.mainNode.add(inOutBounceModifier).add(inOutBounceSurface);

}










