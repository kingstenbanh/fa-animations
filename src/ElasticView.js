var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function ElasticView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createElasticSurfaces.call(this);
}

ElasticView.prototype = Object.create(View.prototype);
ElasticView.prototype.constructor = ElasticView;

ElasticView.DEFAULT_OPTIONS = {};

function _createElasticSurfaces() {
  var elasticSurfaces = createGrid('Elastic', [3, 1]);
  this.mainNode.add(elasticSurfaces);
}










