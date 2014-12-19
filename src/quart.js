var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inQuart curve
var inQuartSurface = new Surface(defaultOptions('inQuart'));

var inQuartModifier = new StateModifier();

inQuartModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inQuart')
);

// outQuart curve
var outQuartSurface = new Surface(defaultOptions('outQuart'));

var outQuartModifier = new StateModifier();

outQuartModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outQuart')
);

// inOutQuart curve
var inOutQuartSurface = new Surface(defaultOptions('inOutQuart'));

var inOutQuartModifier = new StateModifier();

inOutQuartModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutQuart')
);
