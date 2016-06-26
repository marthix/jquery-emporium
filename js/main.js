var log = console.log.bind(console),
    qs = document.querySelector.bind(document),
    navButtons = document.querySelectorAll('.nav-button')


//Navigation to hide or show the various plug-in windows
for (i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click", function() {
      var navButtonId = this.getAttribute('id')

      if (navButtonId === 'btn-sparkle') {
        qs('.scrollorama').classList.add('hidden')
        qs('.oridomi').classList.add('hidden')
        qs('.default').classList.add('hidden')
        qs('.sparkle').classList.remove('hidden')
      } else if (navButtonId === 'btn-scrollorama') {
        qs('.sparkle').classList.add('hidden')
        qs('.oridomi').classList.add('hidden')
        qs('.default').classList.add('hidden')
        qs('.scrollorama').classList.remove('hidden')
      } else if (navButtonId === 'btn-oridomi') {
        qs('.scrollorama').classList.add('hidden')
        qs('.sparkle').classList.add('hidden')
        qs('.default').classList.add('hidden')
        qs('.oridomi').classList.remove('hidden')
      }
    })
}


//jQuery Plugins
$(document).ready(function(){
  //Sparkle Plugin
  $("#sparkle-button").sparkle({
    color: "rainbow",
    count: 80,
    overlap: 15,
    speed: 1.7,
    minSize: 3,
    maxSize: 8,
    direction: "down"
  });

  $("#sparkle-header").sparkle({
    color: ["#FFFFFF","#82e6c2"],
    count: 90,
    overlap: 2,
    speed: 0.7,
    minSize: 3,
    maxSize: 8,
    direction: "both"
  });

  $("#sparkle-magic").sparkle({
    color: "#ec79fa",
    count: 50,
    overlap: 25,
    speed: 0.7,
    minSize: 3,
    maxSize: 8,
    direction: "both"
  });

  $("#sparkle-text").sparkle({
    color: ["#FFFFFF","#82e6c2"],
    count: 80,
    overlap: 3,
    speed: 1.2,
    minSize: 3,
    maxSize: 5,
    direction: "both"
  });



  //OriDomi Plugin
  var $folded = $('#paper').oriDomi({
    vPanels:         5,     // number of panels when folding left or right (vertically oriented)
    hPanels:         3,     // number of panels when folding top or bottom
    speed:           1200,  // folding duration in ms
    ripple:          2,     // backwards ripple effect when animating
    shadingIntesity: .5,    // lessen the shading effect
    perspective:     800,   // smaller values exaggerate 3D distortion
    maxAngle:        40,    // keep the user's folds within a range of -40 to 40 degrees
    shading:         'soft' // change the shading type
  });

})
