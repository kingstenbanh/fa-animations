var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function AppView() {
    View.apply(this, arguments);

    _createQuadView.call(this);
    _createCubicView.call(this);
    _createQuartView.call(this);
    _createQuintView.call(this);
    _createSineView.call(this);
    _createExpoView.call(this);
    _createCircView.call(this);
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

function _createCubicView() {
  var cubicView = new CubicView({
    size: [100, 100]
  });

  var cubicModifier = new StateModifier({
    transform: Transform.translate(-150, 300, 0),
    origin: [0.5, 0.5],
    align: [0.5, 0]
  });

  this.add(cubicModifier).add(cubicView);
}


function _createQuartView() {
  var quartView = new QuartView({
    size: [100, 100]
  });

  var quartModifier = new StateModifier({
    transform: Transform.translate(-150, 500, 0),
    origin: [0.5, 0.5],
    align: [0.5, 0]
  });

  this.add(quartModifier).add(quartView);
}

function _createSineView() {
  var sineView = new SineView({
    size: [100, 100]
  });

  var sineModifier = new StateModifier({
    transform: Transform.translate(-150, 900, 0),
    origin: [0.5, 0.5],
    align: [0.5, 0]
  });

  this.add(sineModifier).add(sineView);
}

function _createExpoView() {
  var expoView = new ExpoView({
    size: [100, 100]
  });

  var expoModifier = new StateModifier({
    transform: Transform.translate(-150, 1100, 0),
    origin: [0.5, 0.5],
    align: [0.5, 0]
  });

  this.add(expoModifier).add(expoView);
}

function _createCircView() {
  var circView = new CircView({
    size: [100, 100]
  });

  var circModifier = new StateModifier({
    transform: Transform.translate(-150, 1100, 0),
    origin: [0.5, 0.5],
    align: [0.5, 0]
  });

  this.add(circModifier).add(circView);
}
