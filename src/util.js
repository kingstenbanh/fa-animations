// helper methods
var defaultOptions = function(easingCurve) {
  return {
    size: [100, 100],
    content: easingCurve,
    properties: {
      borderRadius: '100px',
      textAlign: 'center',
      lineHeight: '100px',
      backgroundColor: '#FA5C4F',
      color: 'white'
    }
  };
};

var setTransition = function(easingCurve) {
  return {
    duration: 1000,
    curve: Easing[easingCurve]
  };
};
