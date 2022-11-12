import { IPalette } from 'types';

const ThemeLight: IPalette = {
  header: {
    properties: {
      blur: '#ffffff0d',
      background: '#ffffff'
    }
  },
  general: {
    color: {
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB',
      color2: '#5a6a8a',
      color3: '#7a8baa'
    },
    properties: {
      blur: '#ffffff0d',
      tooltip: '#909fbb',
      background: '#ffffff',
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
    properties: {
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
      primary: '#0072f5',
      secondary: '#5a6a8a',
      accent: '#1461EB',
      color2: '#5a6a8a',
      color3: '#7a8baa'
    },
    properties: {
      label: '#222222',
      background: '#edeff1'
    }
  },
  scrollbar: {
    width: 4,
    thumb: '#0072f5',
    track: '#c5c5c598'
  },
  dot: {
    color: {}
  }
};

export default ThemeLight;
