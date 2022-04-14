const b1Path = {
  values: [
    { x: 0, y: 0 }
  ]
};

const tween = new TimelineLite();

tween.from("#b1", 1, {
    transform: 'matrix(11,0,0,11,2500,0)',
  },0).from("#i", 1, {
    transform: 'matrix(13,0,0,13,1800,-1000)',
},0.2).from("#d", 1, {
    transform: 'matrix(20,0,0,20,1100,1000)',
},0.3).from("#t", 1, {
    transform: 'matrix(15,0,0,15,400,-1000)',
},0.5).from("#a", 1, {
    transform: 'matrix(11,0,0,11,-300,1000)',
},0.6).from("#b2", 1, {
    transform: 'matrix(11,0,0,11,-1000,-1000)',
},0.6).from("#l", 1, {
    transform: 'matrix(20,0,0,20,-1700,1000)',
},0.7).from("#e", 1, {
    transform: 'matrix(11,0,0,11,-2400,-1000)',
},0.6);



const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1000,
  triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin(".animation")
.addTo(controller);
