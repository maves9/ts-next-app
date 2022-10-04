import type { NextComponentType } from 'next'
import ThemeToggle from "../components/elements/ThemeToggle";

const Top: NextComponentType = () => {
  return (
    <>
      <style jsx>{`
        .top__nav {
          display: flex;
          justify-content: center;
          padding: 8px;
          background: #444;
        }
      `}</style>
      <header className='top'>
        <nav className='top__nav'>
          <ThemeToggle />
        </nav>
      </header>
    </>
  )
}

export default Top
