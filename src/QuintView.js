var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function QuintView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createQuintSurfaces.call(this);
}

QuintView.prototype = Object.create(View.prototype);
QuintView.prototype.constructor = QuintView;

QuintView.DEFAULT_OPTIONS = {};

function _createQuintSurfaces() {
  var quintSurfaces = createGrid('Quint', [3, 1]);
  this.mainNode.add(quintSurfaces);
}










