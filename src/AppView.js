var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function AppView() {
    View.apply(this, arguments);

    createQuadCurves.call(this);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {};

function createQuadCurves() {
  var quadCurvesView = new QuadView();

  var quadCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 50, 0)
  });

  this.add(quadCurvesModifier).add(quadCurvesView);
}

