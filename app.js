particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 1000
      }
    },

    color: {
      value: "#00ffc3"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.18,
      random: true
    },

    size: {
      value: 2.5,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 180,
      color: "#00ffc3",
      opacity: 0.08,
      width: 1
    },

    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: false
      }
    },

    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.25
        }
      }
    }
  },

  retina_detect: true
});