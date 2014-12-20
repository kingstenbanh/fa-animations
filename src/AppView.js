var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function AppView() {
    View.apply(this, arguments);

    _createQuadCurves.call(this);
    _createCubicCurves.call(this);
    _createQuartCurves.call(this);
    _createQuintCurves.call(this);
    _createSineCurves.call(this);
    _createExpoCurves.call(this);
    _createCircCurves.call(this);
    _createElasticCurves.call(this);
    _createBackCurves.call(this);
    _createBounceCurves.call(this);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {};

function _createQuadCurves() {
  var quadCurvesView = new QuadView();

  var quadCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 50, 0)
  });

  this.add(quadCurvesModifier).add(quadCurvesView);
}

function _createCubicCurves() {
  var cubicCurvesView = new CubicView();

  var cubicCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 250, 0)
  });

  this.add(cubicCurvesModifier).add(cubicCurvesView);
}

function _createQuartCurves() {
  var quartCurvesView = new QuartView();

  var quartCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 450, 0)
  });

  this.add(quartCurvesModifier).add(quartCurvesView);
}

function _createQuintCurves() {
  var quintCurvesView = new QuintView();

  var quintCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 650, 0)
  });

  this.add(quintCurvesModifier).add(quintCurvesView);
}

function _createSineCurves() {
  var sineCurvesView = new SineView();

  var sineCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 850, 0)
  });

  this.add(sineCurvesModifier).add(sineCurvesView);
}

function _createExpoCurves() {
  var expoCurvesView = new ExpoView();

  var expoCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 1050, 0)
  });

  this.add(expoCurvesModifier).add(expoCurvesView);
}

function _createCircCurves() {
  var circCurvesView = new CircView();

  var circCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 1250, 0)
  });

  this.add(circCurvesModifier).add(circCurvesView);
}

function _createElasticCurves() {
  var elasticCurvesView = new ElasticView();

  var elasticCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 1450, 0)
  });

  this.add(elasticCurvesModifier).add(elasticCurvesView);
}

function _createBackCurves() {
  var backCurvesView = new BackView();

  var backCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 1650, 0)
  });

  this.add(backCurvesModifier).add(backCurvesView);
}

function _createBounceCurves() {
  var bounceCurvesView = new BounceView();

  var bounceCurvesModifier = new StateModifier({
    transform: Transform.translate(600, 1850, 0)
  });

  this.add(bounceCurvesModifier).add(bounceCurvesView);
}
