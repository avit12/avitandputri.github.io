module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sacramento: "'Sacramento', cursive;",
        greatvibes: "'Great Vibes', cursive;",
        oleo: "'Oleo Script Swash Caps', cursive;",
      },
      colors: {
        'color-1': '#795b43',
        'color-2': '#CEAB93',
        'color-3': '#E3CAA5',
        'color-4': '#FFFBE9',
        'color-5': '#ecf0f3',
        'background-ku': '#00000050',
        'bg-card': 'background:linear-gradient(135deg, #e7e1de 0%,#cbc0ba 100%);',
        'fill-ig': '#d6249f',
        coklat: '#dcd1c1',
      },
      TextEncoderStream: {
        'text-ku': '15px 15px 10px white;',
      },
      fontSize: {
        sm1: ['14px', '20px'],
        base1: ['16px', '24px'],
        lg1: ['18px', '28px'],
        xl1: ['50px', '50px'],
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        goyang: 'goyang 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
