var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inQuint curve
var inQuintSurface = new Surface(defaultOptions('inQuint'));

var inQuintModifier = new StateModifier();

inQuintModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inQuint')
);

// outQuint curve
var outQuintSurface = new Surface(defaultOptions('outQuint'));

var outQuintModifier = new StateModifier();

outQuintModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outQuint')
);

// inOutQuint curve
var inOutQuintSurface = new Surface(defaultOptions('inOutQuint'));

var inOutQuintModifier = new StateModifier();

inOutQuintModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutQuint')
);
