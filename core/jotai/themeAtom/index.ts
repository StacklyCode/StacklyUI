import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import Cookies from 'js-cookie';
import { ThemesFamily } from 'types';

const themeAtom = atomFamily((props: ThemesFamily) => {
  const { select, machine } = props;
  const themeAtomInFamily = atom(
    {
      key: 'light',
      theme: select['light']
    },
    (_, set, arg) => {
      const cookie = Cookies.get('THEME');
      const theme = cookie ?? 'light';
      if (!cookie) Cookies.set('THEME', theme, { expires: 365 });
      const nextState = (arg ??
        machine.transition(theme, 'TOGGLE').value.toString()) as string;
      const newTheme = {
        key: nextState,
        theme: select[nextState]
      };
      set(themeAtomInFamily, newTheme);
      Cookies.set('THEME', nextState, { expires: 365 });
    }
  );
  return themeAtomInFamily;
});

export default themeAtom;
