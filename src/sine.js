var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inSine curve
var inSineSurface = new Surface(defaultOptions('inSine'));

var inSineModifier = new StateModifier();

inSineModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inSine')
);

// outSine curve
var outSineSurface = new Surface(defaultOptions('outSine'));

var outSineModifier = new StateModifier();

outSineModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outSine')
);

// inOutSine curve
var inOutSineSurface = new Surface(defaultOptions('inOutSine'));

var inOutSineModifier = new StateModifier();

inOutSineModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutSine')
);
