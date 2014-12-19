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
var downModifier = new StateModifier({
  transform: Transform.translate(0, 200, 0)
});


// Add Quad curve to the context
mainContext.add(inQuadModifier).add(inQuadSurface);
mainContext.add(rightModifier1).add(outQuadModifier).add(outQuadSurface);
mainContext.add(rightModifier2).add(inOutQuadModifier).add(inOutQuadSurface);
