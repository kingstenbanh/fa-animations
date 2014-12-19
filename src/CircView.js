var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function CircView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInCirc.call(this);
    _createOutCirc.call(this);
    _createInOutCirc.call(this);
}

CircView.prototype = Object.create(View.prototype);
CircView.prototype.constructor = CircView;

CircView.DEFAULT_OPTIONS = {};

// inCirc curve
function _createInCirc() {
  var inCircSurface = new Surface(defaultOptions('inCirc'));

  var inCircModifier = new StateModifier();

  inCircModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inCirc')
  );

  this.mainNode.add(inCircModifier).add(inCircSurface);
}


// outCirc curve
function _createOutCirc() {
  var outCircSurface = new Surface(defaultOptions('outCirc'));

  var outCircModifier = new StateModifier();

  outCircModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outCirc')
  );

  this.mainNode.add(outCircModifier).add(outCircSurface);
}

// inOutCirc curve
function _createInOutCirc() {
  var inOutCircSurface = new Surface(defaultOptions('inOutCirc'));

  var inOutCircModifier = new StateModifier();

  inOutCircModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutCirc')
  );

  this.mainNode.add(inOutCircModifier).add(inOutCircSurface);

}










