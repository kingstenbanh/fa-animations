var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inExpo curve
var inExpoSurface = new Surface(defaultOptions('inExpo'));

var inExpoModifier = new StateModifier();

inExpoModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inExpo')
);

// outExpo curve
var outExpoSurface = new Surface(defaultOptions('outExpo'));

var outExpoModifier = new StateModifier();

outExpoModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outExpo')
);

// inOutExpo curve
var inOutExpoSurface = new Surface(defaultOptions('inOutExpo'));

var inOutExpoModifier = new StateModifier();

inOutExpoModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutExpo')
);
