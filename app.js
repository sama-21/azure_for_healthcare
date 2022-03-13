// Body Circle Pointer using Vanilla JS

document.addEventListener('mousemove', (ev) => cursorMove(ev));

function cursorMove(ev) {
  let circle = document.getElementById('circle');
  let posY = ev.clientY;
  let posX = ev.clientX;
  
  circle.style.top = posY + 'px';
  circle.style.left = posX + 'px';
}


// Scroll Effects

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'left',
  distance: '100%' 
});

sr.reveal("#main-left", {
  duration: 2500,
  origin: 'left',
  distance: '50%'
})

sr.reveal("#main-right", {
  duration: 2500,
  origin: 'right',
  distance: '50%'
})

sr.reveal("#core-features", {
  duration: 2500,
  origin: 'bottom',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#features1", {
  duration: 2500,
  origin: 'left',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#features2", {
  duration: 2500,
  origin: 'top',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#features3", {
  duration: 2500,
  origin: 'bottom',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#features4", {
  duration: 2500,
  origin: 'right',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#area-covered", {
  duration: 2500,
  origin: 'right',
  distance: '100%',
  vue: 0.2
})

sr.reveal("#area-content1", {
  duration: 2500,
  origin: 'top',
  distance: '100%',
  vue: 0.2
})

sr.reveal("#area-content2", {
  duration: 2500,
  origin: 'bottom',
  distance: '100%',
  vue: 0.2
})

sr.reveal("#area-content3", {
  duration: 2500,
  origin: 'top',
  distance: '100%',
  vue: 0.2
})

sr.reveal("#area-content4", {
  duration: 2500,
  origin: 'bottom',
  distance: '100%',
  vue: 0.2
})

sr.reveal("#area-content1", {
  duration: 2500,
  origin: 'top',
  distance: '100%',
  vue: 0.2
})

sr.reveal("#row-one-left", {
  duration: 2500,
  origin: 'left',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#row-one-right", {
  duration: 2500,
  origin: 'right',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#row-two-left", {
  duration: 2500,
  origin: 'left',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#row-two-right", {
  duration: 2500,
  origin: 'right',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#row-three-left", {
  duration: 2500,
  origin: 'left',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#row-three-right", {
  duration: 2500,
  origin: 'right',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#azure-tools1", {
  duration: 2500,
  origin: 'left',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#azure-tools2", {
  duration: 2500,
  origin: 'top',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#azure-tools3", {
  duration: 2500,
  origin: 'bottom',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#azure-tools4", {
  duration: 2500,
  origin: 'right',
  distance: '50%',
  vue: 0.2
})

sr.reveal("#btn-explore", {
  duration: 3500,
  origin: 'bottom',
  distance: '100%',
  vue: 0.2
})