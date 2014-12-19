var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function SineView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInSine.call(this);
    _createOutSine.call(this);
    _createInOutSine.call(this);
}

SineView.prototype = Object.create(View.prototype);
SineView.prototype.constructor = SineView;

SineView.DEFAULT_OPTIONS = {};

// inSine curve
function _createInSine() {
  var inSineSurface = new Surface(defaultOptions('inSine'));

  var inSineModifier = new StateModifier();

  inSineModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inSine')
  );

  this.mainNode.add(inSineModifier).add(inSineSurface);
}


// outSine curve
function _createOutSine() {
  var outSineSurface = new Surface(defaultOptions('outSine'));

  var outSineModifier = new StateModifier();

  outSineModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outSine')
  );

  this.mainNode.add(outSineModifier).add(outSineSurface);
}

// inOutSine curve
function _createInOutSine() {
  var inOutSineSurface = new Surface(defaultOptions('inOutSine'));

  var inOutSineModifier = new StateModifier();

  inOutSineModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutSine')
  );

  this.mainNode.add(inOutSineModifier).add(inOutSineSurface);

}










