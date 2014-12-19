var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;

function ElasticView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [400, 100],
    });

    this.mainNode = this.add(this.rootModifier);

    _createInElastic.call(this);
    _createOutElastic.call(this);
    _createInOutElastic.call(this);
}

ElasticView.prototype = Object.create(View.prototype);
ElasticView.prototype.constructor = ElasticView;

ElasticView.DEFAULT_OPTIONS = {};

// inElastic curve
function _createInElastic() {
  var inElasticSurface = new Surface(defaultOptions('inElastic'));

  var inElasticModifier = new StateModifier();

  inElasticModifier.setTransform(
    Transform.translate(100, 100, 0),
    setTransition('inElastic')
  );

  this.mainNode.add(inElasticModifier).add(inElasticSurface);
}


// outElastic curve
function _createOutElastic() {
  var outElasticSurface = new Surface(defaultOptions('outElastic'));

  var outElasticModifier = new StateModifier();

  outElasticModifier.setTransform(
    Transform.translate(300, 100, 0),
    setTransition('outElastic')
  );

  this.mainNode.add(outElasticModifier).add(outElasticSurface);
}

// inOutElastic curve
function _createInOutElastic() {
  var inOutElasticSurface = new Surface(defaultOptions('inOutElastic'));

  var inOutElasticModifier = new StateModifier();

  inOutElasticModifier.setTransform(
    Transform.translate(500, 100, 0),
    setTransition('inOutElastic')
  );

  this.mainNode.add(inOutElasticModifier).add(inOutElasticSurface);

}










