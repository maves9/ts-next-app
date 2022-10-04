import { createContext } from "react";

export const themes = {
    light: {
        darkMode: false,
        foreground: "#222222",
        background: "#eeeeee"
    },
    dark: {
        darkMode: true,
        foreground: "#ffffff",
        background: "#222222"
    }
}

export interface ThemeTypes {
    foreground: string
    background: string
    darkMode: boolean
}

export interface iContext {
    theme: ThemeTypes
    toggleTheme: Function
}

export const getInitialTheme = (): ThemeTypes => {
    const { matches } = window.matchMedia(('(prefers-color-scheme: dark)'))
    return matches ? themes.dark : themes.light 
}

export const ThemeContext = createContext<iContext>({
    theme: themes.light,
    toggleTheme: () => {}
})
