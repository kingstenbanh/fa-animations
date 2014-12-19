/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
// var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

var mainContext = Engine.createContext();

// move to right Modifier
var rightModifier = new StateModifier({
  transform: Transform.translate(200, 0, 0)
});

// move down Modifier
var downModifier = new StateModifier({
  transform: Transform.translate(0, 200, 0)
});

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

mainContext.add(inQuadModifier).add(inQuadSurface);

mainContext.add(rightModifier).add(outQuadModifier).add(outQuadSurface);
