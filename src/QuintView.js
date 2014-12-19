var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function QuintView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInQuint.call(this);
    _createOutQuint.call(this);
    _createInOutQuint.call(this);
}

QuintView.prototype = Object.create(View.prototype);
QuintView.prototype.constructor = QuintView;

QuintView.DEFAULT_OPTIONS = {};

// inQuint curve
function _createInQuint() {
  var inQuintSurface = new Surface(defaultOptions('inQuint'));

  var inQuintModifier = new StateModifier();

  inQuintModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inQuint')
  );

  this.mainNode.add(inQuintModifier).add(inQuintSurface);
}


// outQuint curve
function _createOutQuint() {
  var outQuintSurface = new Surface(defaultOptions('outQuint'));

  var outQuintModifier = new StateModifier();

  outQuintModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outQuint')
  );

  this.mainNode.add(outQuintModifier).add(outQuintSurface);
}

// inOutQuint curve
function _createInOutQuint() {
  var inOutQuintSurface = new Surface(defaultOptions('inOutQuint'));

  var inOutQuintModifier = new StateModifier();

  inOutQuintModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutQuint')
  );

  this.mainNode.add(inOutQuintModifier).add(inOutQuintSurface);

}










