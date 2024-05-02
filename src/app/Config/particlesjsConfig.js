const particlesConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 300
      }
    },
    color: {
      value: "#ffffff"
    },
    
    shape: {
      type:"images",
      stroke: {
        width: 10,
        color: "#00ff00"
      },
      polygon: {
        nb_sides: 12
      },
      images: [
        {
          "src": "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        {
          "src": "https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        {
          "src": "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        {
          "src": "https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        {
          "src": "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        {
          "src": "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        {
          "src": "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
          "width": 100,
          "height": 100
        },
        

      ],

    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 50,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 72.56425968329731,
        size: 30,
        duration: 0.8,
        opacity: 1,
        speed: 5
      },
      repulse: {
        distance: 80,
        duration: 0.3
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
export default particlesConfig