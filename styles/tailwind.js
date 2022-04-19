const keyframes = {
  'fading-in-out': {
    '0%, 10%, 90%, 100%': {opacity: 1},
    '40%, 60%': {opacity: 0},
  },
  'flashing': {
    '0%, 44%, 51%, 90%, 100%': {opacity: 1},
    '45%, 50%': {opacity: 0},
  },
}

const animations = {
  'fading': 'fading-in-out 4s linear infinite',
  'flashing': 'flashing 4s linear infinite',
}

module.exports = {keyframes, animations}
