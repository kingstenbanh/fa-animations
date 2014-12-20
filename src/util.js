var GridLayout = famous.views.GridLayout;

function createGrid(easingCurve, dimensions) {
  var grid = new GridLayout({
    dimensions: dimensions
  });

  var types = ['in', 'out', 'inOut'];

  var views = [];

  for (var i = 0; i < dimensions[0] * dimensions[1]; i++) {
    var view = new View();

    var sizeModifier = new StateModifier({
      size: [100, 100]
    });

    var transitionModifier = new StateModifier();
    transitionModifier.setTransform(
      Transform.translate(0, 100, 0),
      { duration: 1000, curve: Easing[types[i] + easingCurve] }
    );

    var surface = new Surface({
      content: types[i] + easingCurve,
      size: [undefined, undefined],
      properties: {
        backgroundColor: '#FA5C4F',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '100px',
        borderRadius: '50px',
        boxShadow: '2px 2px 100px grey'
      }
    });

    view.add(sizeModifier).add(transitionModifier).add(surface);

    views.push(view);
  }

  grid.sequenceFrom(views);

  return grid;
}








