import type { NextComponentType } from 'next'
import { ThemeContext } from "../context/theme"

const ThemeToggle: NextComponentType = () => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <>
                    <style jsx>{`
                        .theme-toggle {
                            display: flex;
                            background: ${theme.foreground};
                            color: ${theme.background};
                            padding: 16px;
                            cursor: pointer;
                            font-size: 16px;
                        }
                    `}</style>

                    <button
                        className='theme-toggle'
                        onClick={() => toggleTheme()}
                    >
                        {theme.darkMode ? 'Toggle Theme to light 🌞' : 'Toggle Theme to dark 🌛'}
                    </button>
                </>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeToggle