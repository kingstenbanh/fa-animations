var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inCirc curve
var inCircSurface = new Surface(defaultOptions('inCirc'));

var inCircModifier = new StateModifier();

inCircModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inCirc')
);

// outCirc curve
var outCircSurface = new Surface(defaultOptions('outCirc'));

var outCircModifier = new StateModifier();

outCircModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outCirc')
);

// inOutCirc curve
var inOutCircSurface = new Surface(defaultOptions('inOutCirc'));

var inOutCircModifier = new StateModifier();

inOutCircModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutCirc')
);
