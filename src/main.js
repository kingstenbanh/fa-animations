/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
// var Transform = famous.core.Transform;
// var ImageSurface = famous.surfaces.ImageSurface;
// var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier;
// var Easing = famous.transitions.Easing;

var mainContext = Engine.createContext();

// move to right Modifier
var rightModifier1 = new StateModifier({
  transform: Transform.translate(200, 0, 0)
});

var rightModifier2 = new StateModifier({
  transform: Transform.translate(400, 0, 0)
});

// move down Modifier
var downModifier1 = new StateModifier({
  transform: Transform.translate(0, 200, 0)
});


// Add Quad curves to the context
// mainContext.add(inQuadModifier).add(inQuadSurface);
// mainContext.add(rightModifier1).add(outQuadModifier).add(outQuadSurface);
// mainContext.add(rightModifier2).add(inOutQuadModifier).add(inOutQuadSurface);

// Add Cubic curves to the context
// mainContext.add(inCubicModifier).add(inCubicSurface);
// mainContext.add(rightModifier1).add(outCubicModifier).add(outCubicSurface);
// mainContext.add(rightModifier2).add(inOutCubicModifier).add(inOutCubicSurface);

// Add Quart curves to the context
// mainContext.add(inQuartModifier).add(inQuartSurface);
// mainContext.add(rightModifier1).add(outQuartModifier).add(outQuartSurface);
// mainContext.add(rightModifier2).add(inOutQuartModifier).add(inOutQuartSurface);

// Add Quint curves to the context
// mainContext.add(inQuintModifier).add(inQuintSurface);
// mainContext.add(rightModifier1).add(outQuintModifier).add(outQuintSurface);
// mainContext.add(rightModifier2).add(inOutQuintModifier).add(inOutQuintSurface);

// Add Sine curves to the context
// mainContext.add(inSineModifier).add(inSineSurface);
// mainContext.add(rightModifier1).add(outSineModifier).add(outSineSurface);
// mainContext.add(rightModifier2).add(inOutSineModifier).add(inOutSineSurface);

// Add Expo curves to the context
// mainContext.add(inExpoModifier).add(inExpoSurface);
// mainContext.add(rightModifier1).add(outExpoModifier).add(outExpoSurface);
// mainContext.add(rightModifier2).add(inOutExpoModifier).add(inOutExpoSurface);

// Add Circ curves to the context
// mainContext.add(inCircModifier).add(inCircSurface);
// mainContext.add(rightModifier1).add(outCircModifier).add(outCircSurface);
// mainContext.add(rightModifier2).add(inOutCircModifier).add(inOutCircSurface);

// Add Elastic curves to the context
mainContext.add(inElasticModifier).add(inElasticSurface);
mainContext.add(rightModifier1).add(outElasticModifier).add(outElasticSurface);
mainContext.add(rightModifier2).add(inOutElasticModifier).add(inOutElasticSurface);

























