var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function BackView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createBackSurfaces.call(this);
}

BackView.prototype = Object.create(View.prototype);
BackView.prototype.constructor = BackView;

BackView.DEFAULT_OPTIONS = {};

function _createBackSurfaces() {
  var backSurfaces = createGrid('Back', [3, 1]);
  this.mainNode.add(backSurfaces);
}










