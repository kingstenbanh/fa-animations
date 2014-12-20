var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function QuartView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createQuartSurfaces.call(this);
}

QuartView.prototype = Object.create(View.prototype);
QuartView.prototype.constructor = QuartView;

QuartView.DEFAULT_OPTIONS = {};

function _createQuartSurfaces() {
  var quartSurfaces = createGrid('Quart', [3, 1]);
  this.mainNode.add(quartSurfaces);
}










