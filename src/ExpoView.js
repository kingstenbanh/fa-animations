var View = famous.core.View;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Easing = famous.transitions.Easing;
var GridLayout = famous.views.GridLayout;

function ExpoView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: [600, 100],
      origin: [0.5, 0.5]
    });

    this.mainNode = this.add(this.rootModifier);

    _createExpoSurfaces.call(this);
}

ExpoView.prototype = Object.create(View.prototype);
ExpoView.prototype.constructor = ExpoView;

ExpoView.DEFAULT_OPTIONS = {};

function _createExpoSurfaces() {
  var expoSurfaces = createGrid('Expo', [3, 1]);
  this.mainNode.add(expoSurfaces);
}










