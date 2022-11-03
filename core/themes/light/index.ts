import { IPalette } from 'types';

const ThemeLight: IPalette = {
  general: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB',
      color2: '#5a6a8a',
      color3: '#7a8baa',
      tooltip: '#cacaca'
    },
    propierties: {
      blur: 'rgba(255, 255, 255, 0.05)',
      backgroundflash: '#ffffff'
    }
  },
  button: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    type: 'flat'
  },
  wrapper: {
    color: {
      primary: '#fafafa',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    }
  },
  icon: {
    color: {
      primary: '#202124',
      secondary: '#5a6a8a',
      accent: '#3459a8'
    }
  },
  loader: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB'
    },
    propierties: {
      background: 'rgba(255, 255, 255, 0.05)'
    }
  },
  text: {
    color: {
      primary: '#5a6a8a',
      secondary: '#fafafa',
      accent: '#1461EB'
    }
  },
  input: {
    color: {
      primary: '#fafafa',
      secondary: '#3459a8',
      accent: '#db4a4a'
    }
  },
  scrollbar: {
    width: 7,
    thumb: '#3459A8',
    track: '#e6e6e6'
  }
};

export default ThemeLight;
