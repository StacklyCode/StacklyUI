/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom, useSetAtom } from 'jotai';
import Cookies from 'js-cookie';
import { AnyEventObject, createMachine, StateMachine, } from 'xstate';

export type ThemesFamily = {
    select: {
        [key: string]: IPalette;
    },
    machine: StateMachine<string, any, AnyEventObject>;
}

export const themeAtom = atomFamily((props: ThemesFamily) => {
    const { select, machine } = props;
    const themeAtomInFamily = atom(
        ({
            key: 'light',
            theme: select['light']
        }),
        (_, set, arg) => {
            const cookie = Cookies.get("THEME");
            const theme = cookie ?? "light";
            if (!cookie) Cookies.set("THEME", theme, { expires: 365 });
            const nextState = (arg ?? machine.transition(theme, 'TOGGLE').value.toString()) as string;
            const newTheme = {
                key: nextState,
                theme: select[nextState]
            }
            set(themeAtomInFamily, newTheme);
            Cookies.set("THEME", nextState, { expires: 365 });
        }
    );
    return themeAtomInFamily;
})


import { ThemeProvider } from "@emotion/react";
import { useAtom, } from "jotai";
import { ReactNode, useEffect } from 'react';
import { atomFamily } from 'jotai/utils';
import { FCWC } from 'types';
import { IPalette } from 'styles/theme';

type ThemeContextProps = {
    themes: ThemesFamily
    children: ReactNode
}

type ThemesFamilyType = {
    key: string;
    toggle: () => void
}
export const themeContextAtom = atom({
    key: 'NULL',
    toggle: () => null
} as ThemesFamilyType);

const ThemeContext: FCWC<ThemeContextProps> = (props) => {
    const { children, themes } = props;
    const setThemeContext = useSetAtom(themeContextAtom);
    const [theme, toggle] = useAtom(themeAtom(themes));
    useEffect(() => setThemeContext({
        key: theme.key,
        toggle
    }), [theme.key, toggle]);
    useEffect(() => {
        const key = Cookies.get("THEME");
        toggle(key);
    }, [])

    return (
        <ThemeProvider theme={theme.theme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeContext;

type ICustomTheme = (themes: ThemesFamily['select']) => ThemesFamily;

export const CreateThemes: ICustomTheme = (themes) => {
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
