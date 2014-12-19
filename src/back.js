var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inBack curve
var inBackSurface = new Surface(defaultOptions('inBack'));

var inBackModifier = new StateModifier();

inBackModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inBack')
);

// outBack curve
var outBackSurface = new Surface(defaultOptions('outBack'));

var outBackModifier = new StateModifier();

outBackModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outBack')
);

// inOutBack curve
var inOutBackSurface = new Surface(defaultOptions('inOutBack'));

var inOutBackModifier = new StateModifier();

inOutBackModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutBack')
);
