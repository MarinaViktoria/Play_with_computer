
let text = "Geben Sie die Zahl von 1 bis 20 ein!";
let i = 0;
let speed = 60;
function textType(){
    if (i<text.length){
        document.querySelector(".whatToDo").textContent += text.charAt(i);
        i++;
        setTimeout(textType, speed)
    }
}
textType()
gsap.to(".question", {opacity: 1, delay: 3, duration: 2})
gsap.to("#guess", {opacity: 1, delay: 4, duration: 1})
gsap.to("#btn", {opacity: 1, delay: 5, duration: 1})

const guess = document.querySelector("#guess");
const button = document.querySelector("#btn");
const computerNumber = Math.floor(Math.random()*20+1)
const container = document.querySelector("#container")

console.log(computerNumber)

guess.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        play();
    }
})
button.addEventListener("click", play);

function play(){
    const userNumber = document.querySelector("#guess").value;
    
    if (userNumber < 1 || userNumber > 20){
      Swal.fire({
        icon: 'error',
        text: 'Geben Sie die Zahl von 1 bis 20 ein!',
    })
        document.querySelector("#guess").value = " ";
    }
    else if (isNaN(userNumber)){
      Swal.fire({
        icon: 'error',
        text: 'Sie müssen eine Zahl eingeben!',
    })
        document.querySelector("#guess").value = " ";
    }
    else {
    if (userNumber < computerNumber){
      Swal.fire('Versuchen Sie mit einer höheren Zahl!');
      document.querySelector("#guess").value = " ";
    }
    else if (userNumber > computerNumber){
      Swal.fire('Versuchen Sie mit einer niedrigeren Zahl!');
      document.querySelector("#guess").value = " ";
    }
    else {
      Swal.fire({
        imageUrl: 'https://images.unsplash.com/photo-1575252663512-b25714ec27f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bHVmdGJhbGxvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        title: 'Gewonnen!',
        imageHeight: 300,
        imageWidth: 500,
        imageAlt: 'Gewonnen!'
    })
      document.querySelector("#guess").value = " ";
    }
}
}
//Codepen von VincentGarreau
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#A084DC"
      },
      "shape": {
        "type": "circle",
        //"type": "image",
        "stroke": {
          "width": 2,
          "color": "#A084DC"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          //"src": "img/github.svg",
          //"src": "https://img.icons8.com/fluency/2x/invert-colors.png",
          "width": 60,
          "height": 60
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 170,
        "color": "#A084DC",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 240,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 300,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
