import { useState, useEffect } from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ThemeContext, ThemeTypes, themes, getInitialTheme } from "../components/context/theme"
import { getCookie, setCookie, CookieValueTypes } from 'cookies-next'
import Head from 'next/head'
import Body from '../components/Body'

export const getServerSideProps = ({req, res}: {req: NextApiRequest, res: NextApiResponse}) => {
  const themeMode: CookieValueTypes = getCookie('theme_mode', {req, res}) ?? 'light'
  return { props: { themeMode } }
};

const Home = ({ themeMode } : { themeMode: CookieValueTypes }) => {
  const [theme, setTheme] = useState<ThemeTypes>(themes[themeMode as keyof typeof themes])
  
  const toggleTheme = () => {
    setTheme( (prev) => {
      setCookie('theme_mode', prev === themes.dark ? 'light' : 'dark');
      return prev === themes.dark ? themes.light : themes.dark
    })
  }

  useEffect(() => {
    const themeMode: CookieValueTypes = getCookie('theme_mode')
    const theme = themes[themeMode as keyof typeof themes]
    setTheme(theme ? theme : getInitialTheme())
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
