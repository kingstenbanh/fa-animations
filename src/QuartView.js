var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function QuartView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInQuart.call(this);
    _createOutQuart.call(this);
    _createInOutQuart.call(this);
}

QuartView.prototype = Object.create(View.prototype);
QuartView.prototype.constructor = QuartView;

QuartView.DEFAULT_OPTIONS = {};

// inQuart curve
function _createInQuart() {
  var inQuartSurface = new Surface(defaultOptions('inQuart'));

  var inQuartModifier = new StateModifier();

  inQuartModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inQuart')
  );

  this.mainNode.add(inQuartModifier).add(inQuartSurface);
}


// outQuart curve
function _createOutQuart() {
  var outQuartSurface = new Surface(defaultOptions('outQuart'));

  var outQuartModifier = new StateModifier();

  outQuartModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outQuart')
  );

  this.mainNode.add(outQuartModifier).add(outQuartSurface);
}

// inOutQuart curve
function _createInOutQuart() {
  var inOutQuartSurface = new Surface(defaultOptions('inOutQuart'));

  var inOutQuartModifier = new StateModifier();

  inOutQuartModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutQuart')
  );

  this.mainNode.add(inOutQuartModifier).add(inOutQuartSurface);

}










