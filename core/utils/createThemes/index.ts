import { ThemesFamily } from 'types';
import { createMachine } from 'xstate';

type ICustomTheme = (themes: ThemesFamily['select']) => ThemesFamily;

const CreateThemes: ICustomTheme = (themes) => {
  const arrayThemes = Object.entries(themes);
  const stateObject = arrayThemes.reduce((acc, [key], idx) => {
    const nextKey = arrayThemes[idx + 1]
      ? arrayThemes[idx + 1][0]
      : arrayThemes[0][0];
    return {
      ...acc,
      [key]: {
        on: {
          TOGGLE: nextKey
        }
      }
    };
  }, {});
  const themeMachine = createMachine<string>({
    id: 'THEME_MACHINE',
    initial: arrayThemes[0][0],
    states: stateObject
  });
  return {
    machine: themeMachine,
    select: themes
  };
};

export default CreateThemes;
