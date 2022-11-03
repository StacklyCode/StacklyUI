import { IPalette } from 'types';

const ThemeDark: IPalette = {
  general: {
    color: {
      primary: '#0072f5',
      secondary: '#49dc80',
      accent: '#d333f6',
      color2: '#f6d333',
      color3: '#33f6d3',
      tooltip: '#2c2c2c'
    },
    propierties: {
      blur: 'rgba(0, 0, 0, 0.6)'
    }
  },
  button: {
    color: {
      primary: '#0072f5',
      secondary: '#49dc80',
      accent: '#d333f6'
    },
    type: 'flat'
  },
  wrapper: {
    color: {
      primary: '#000000',
      secondary: '#1e2122',
      accent: '#0c1f54'
    }
  },
  icon: {
    color: {
      primary: '#fafafa',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    }
  },
  loader: {
    color: {
      primary: '#ff1bf7',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    propierties: {
      background: 'rgba(0, 0, 0, 0.6)'
    }
  },
  text: {
    color: {
      primary: '#e6e6e6',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    }
  },
  input: {
    color: {
      primary: '#e52d27',
      secondary: '#db4a4a',
      accent: '#6b39bd'
    }
  },
  scrollbar: {
    width: 7,
    thumb: '#db4a4a',
    track: '#e6e6e6'
  }
};

export default ThemeDark;
