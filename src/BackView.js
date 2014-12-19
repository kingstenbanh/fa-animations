var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function BackView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInBack.call(this);
    _createOutBack.call(this);
    _createInOutBack.call(this);
}

BackView.prototype = Object.create(View.prototype);
BackView.prototype.constructor = BackView;

BackView.DEFAULT_OPTIONS = {};

// inBack curve
function _createInBack() {
  var inBackSurface = new Surface(defaultOptions('inBack'));

  var inBackModifier = new StateModifier();

  inBackModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inBack')
  );

  this.mainNode.add(inBackModifier).add(inBackSurface);
}


// outBack curve
function _createOutBack() {
  var outBackSurface = new Surface(defaultOptions('outBack'));

  var outBackModifier = new StateModifier();

  outBackModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outBack')
  );

  this.mainNode.add(outBackModifier).add(outBackSurface);
}

// inOutBack curve
function _createInOutBack() {
  var inOutBackSurface = new Surface(defaultOptions('inOutBack'));

  var inOutBackModifier = new StateModifier();

  inOutBackModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutBack')
  );

  this.mainNode.add(inOutBackModifier).add(inOutBackSurface);

}










