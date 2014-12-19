var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Transform = famous.core.Transform;
var Easing = famous.transitions.Easing;

// inElastic curve
var inElasticSurface = new Surface(defaultOptions('inElastic'));

var inElasticModifier = new StateModifier();

inElasticModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inElastic')
);

// outElastic curve
var outElasticSurface = new Surface(defaultOptions('outElastic'));

var outElasticModifier = new StateModifier();

outElasticModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('outElastic')
);

// inOutElastic curve
var inOutElasticSurface = new Surface(defaultOptions('inOutElastic'));

var inOutElasticModifier = new StateModifier();

inOutElasticModifier.setTransform(
  Transform.translate(100, 100, 0),
  setTransition('inOutElastic')
);
