var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function ExpoView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInExpo.call(this);
    _createOutExpo.call(this);
    _createInOutExpo.call(this);
}

ExpoView.prototype = Object.create(View.prototype);
ExpoView.prototype.constructor = ExpoView;

ExpoView.DEFAULT_OPTIONS = {};

// inExpo curve
function _createInExpo() {
  var inExpoSurface = new Surface(defaultOptions('inExpo'));

  var inExpoModifier = new StateModifier();

  inExpoModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inExpo')
  );

  this.mainNode.add(inExpoModifier).add(inExpoSurface);
}


// outExpo curve
function _createOutExpo() {
  var outExpoSurface = new Surface(defaultOptions('outExpo'));

  var outExpoModifier = new StateModifier();

  outExpoModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outExpo')
  );

  this.mainNode.add(outExpoModifier).add(outExpoSurface);
}

// inOutExpo curve
function _createInOutExpo() {
  var inOutExpoSurface = new Surface(defaultOptions('inOutExpo'));

  var inOutExpoModifier = new StateModifier();

  inOutExpoModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutExpo')
  );

  this.mainNode.add(inOutExpoModifier).add(inOutExpoSurface);

}










