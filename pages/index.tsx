import { useEffect, useState } from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ThemeContext, ThemeTypes, ThemeModeTypes, themes, getInitialTheme } from "../components/context/theme"
import { getCookie, setCookie } from 'cookies-next'
import Head from 'next/head'
import Body from '../components/Body'

export const getServerSideProps = ({req, res}: {req: NextApiRequest, res: NextApiResponse}) => {
  const themeModeDefault = getCookie('theme_mode', {req, res}) === 'dark' ? 'dark' : 'light'

  return { props: { themeModeDefault } }
};

const Home = ({ themeModeDefault } : { themeModeDefault: ThemeModeTypes }) => {
  const [themeMode, setThemeMode] = useState<ThemeModeTypes>(themeModeDefault)
  const theme: ThemeTypes = themes[themeMode]

  // Remember state for page load
  setCookie('theme_mode', themeMode)

  const toggleTheme = (themeMode: ThemeModeTypes) => {
    setThemeMode( (prev: ThemeModeTypes) => {
      if (themeMode) {
        return themeMode
      }
      
      return prev === 'dark' ? 'light' : 'dark'
    })
  }

  useEffect(() => {
    if (!themeMode) {
      toggleTheme( getInitialTheme() )
    }
  }, [])

  return (
    <>
      <Head>
        <title>SSR Theme mode toggle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <style jsx global>{`
          body {
            color: ${theme.foreground};
            background: ${theme.background};
            transition: 255ms ease;
          }
        `}</style>

        <Body />
      </ThemeContext.Provider>
    </>
  )
}

export default Home
