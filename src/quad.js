var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inQuad curve
var inQuadSurface = new Surface(defaultOptions('inQuad'));

var inQuadModifier = new StateModifier();

inQuadModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inQuad')
);

// outQuad curve
var outQuadSurface = new Surface(defaultOptions('outQuad'));

var outQuadModifier = new StateModifier();

outQuadModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outQuad')
);

// inOutQuad curve
var inOutQuadSurface = new Surface(defaultOptions('inOutQuad'));

var inOutQuadModifier = new StateModifier();

inOutQuadModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutQuad')
);
