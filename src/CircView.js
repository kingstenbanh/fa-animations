var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function CircView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createCircSurfaces.call(this);
}

CircView.prototype = Object.create(View.prototype);
CircView.prototype.constructor = CircView;

CircView.DEFAULT_OPTIONS = {};

function _createCircSurfaces() {
  var circSurfaces = createGrid('Circ', [3, 1]);
  this.mainNode.add(circSurfaces);
}










