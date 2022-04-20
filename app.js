const b1Path = {
  values: [
    { x: 0, y: 0 }
  ]
};

const tween = new TimelineLite();

tween.from("#b1", 1, {
    transform: 'matrix(11,0,0,11,2500,0)',
},0)
.from("#i", 1, {
    transform: 'matrix(13,0,0,13,1800,-1200)',
},0.2)
.from("#d", 1, {
    transform: 'matrix(20,0,0,20,2200,2000)',
},0.4)
.from("#t", 1, {
    transform: 'matrix(15,0,0,15,400,-1200)',
},0.5)
.from("#a", 1, {
    transform: 'matrix(11,0,0,11,-300,1200)',
},0.6)
.from("#b2", 1, {
    transform: 'matrix(16,0,0,16,-1000,-1200)',
},0.8)
.from("#l", 1, {
    transform: 'matrix(20,0,0,20,-1700,1000)',
},0.7)
.from("#e", 1, {
    transform: 'matrix(11,0,0,11,-2400,-1000)',
},0.6)

.from("#we", 1, {
  transform: 'matrix(20,0,0,20,13000,2000)',
},2)
.from("#look", 1, {
  transform: 'matrix(20,0,0,20,6000,2000)',
},2.1)
.from("#to1", 1, {
  transform: 'matrix(20,0,0,20,20000,2000)',
},2.2)
.from("#revolutionise", 1, {
  transform: 'matrix(20,0,0,20,6000,2000)',
},2.3)
.from("#the", 1, {
  transform: 'matrix(20,0,0,20,-6000,2000)',
},2.4)
.from("#construction1", 1, {
  transform: 'matrix(20,0,0,20,1100,2000)',
},2.5)
.from("#industry", 1, {
  transform: 'matrix(20,0,0,20,-12000,2000)',
},2.6)
.from("#for", 1, {
  transform: 'matrix(20,0,0,20,16000,2000)',
},3)
.from("#construction2", 1, {
  transform: 'matrix(20,0,0,20,1100,2000)',
},3.1)
.from("#and", 1, {
  transform: 'matrix(20,0,0,20,6000,2000)',
},3.2)
.from("#non", 1, {
  transform: 'matrix(20,0,0,20,0,2000)',
},3.3)
.from("#construction3", 1, {
  transform: 'matrix(20,0,0,20,12000,2000)',
},3.4)
.from("#minds", 1, {
  transform: 'matrix(20,0,0,20,-12000,2000)',
},3.5)

.to("#tagline", 1, {
  y: -100,
  opacity: 0
},6.5)

.from("#bidtable", 1, {
  transform: 'matrix(20,0,0,20,13000,2000)',
},7)
.from("#will", 1, {
  transform: 'matrix(20,0,0,20,6000,2000)',
},7.1)
.from("#connect", 1, {
  transform: 'matrix(20,0,0,20,20000,2000)',
},7.2)
.from("#all", 1, {
  transform: 'matrix(20,0,0,20,6000,2000)',
},7.3)
.from("#players", 1, {
  transform: 'matrix(20,0,0,20,-6000,2000)',
},7.4)
.from("#between", 1, {
  transform: 'matrix(20,0,0,20,11000,2000)',
},7.5)
.from("#inception", 1, {
  transform: 'matrix(20,0,0,20,10000,2000)',
},8.2)
.from("#of1", 1, {
  transform: 'matrix(20,0,0,20,2000,2000)',
},8.3)
.from("#idea", 1, {
  transform: 'matrix(20,0,0,20,10000,2000)',
},8.4)
.from("#to2", 1, {
  transform: 'matrix(20,0,0,20,000,2000)',
},8.5)
.from("#handing", 1, {
  transform: 'matrix(20,0,0,20,-6000,2000)',
},8.6)
.from("#over", 1, {
  transform: 'matrix(20,0,0,20,6000,2000)',
},8.7)
.from("#of2", 1, {
  transform: 'matrix(20,0,0,20,-20000,2000)',
},8.8)
.from("#project", 1, {
  transform: 'matrix(20,0,0,20,-10000,2000)',
},8.9)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".tagline-section",
  duration: 5000,
  triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin(".tagline-section")
.addTo(controller);
