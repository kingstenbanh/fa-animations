var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inBounce curve
var inBounceSurface = new Surface(defaultOptions('inBounce'));

var inBounceModifier = new StateModifier();

inBounceModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inBounce')
);

// outBounce curve
var outBounceSurface = new Surface(defaultOptions('outBounce'));

var outBounceModifier = new StateModifier();

outBounceModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outBounce')
);

// inOutBounce curve
var inOutBounceSurface = new Surface(defaultOptions('inOutBounce'));

var inOutBounceModifier = new StateModifier();

inOutBounceModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutBounce')
);
