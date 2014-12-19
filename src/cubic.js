var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inCubic curve
var inCubicSurface = new Surface(defaultOptions('inCubic'));

var inCubicModifier = new StateModifier();

inCubicModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inCubic')
);

// outCubic curve
var outCubicSurface = new Surface(defaultOptions('outCubic'));

var outCubicModifier = new StateModifier();

outCubicModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outCubic')
);

// inOutCubic curve
var inOutCubicSurface = new Surface(defaultOptions('inOutCubic'));

var inOutCubicModifier = new StateModifier();

inOutCubicModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutCubic')
);
