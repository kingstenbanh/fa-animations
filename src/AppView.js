var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function AppView() {
    View.apply(this, arguments);

    _createQuadView.call(this);
    _createCubicView.call(this);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {};

function _createQuadView() {
  var quadView = new QuadView({
    size: [100, 100]
  });

  var quadModifier = new StateModifier({
    transform: Transform.translate(-150, 100, 0),
    origin: [0.5, 0.5],
    align: [0.5, 0]
  });

  this.add(quadModifier).add(quadView);
}



