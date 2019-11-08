import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import debounce from 'lodash/debounce'
import styled from 'styled-components'
import ThemeContext from '../context/theme'
import Spaced from '../jh-ui/Spaced'
import { breakpoints } from '../jh-ui/theme'
import Text from '../jh-ui/Text'
import Button from '../jh-ui/Button'
import Sun from '../img/icons/sun.svg'
import Moon from '../img/icons/moon.svg'
import ScreenReaderText from '../jh-ui/ScreenReaderText'

const DesktopMenuWrap = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
`

const MenuLink = styled(Link)`
  text-decoration: none;
`

const SiteTools = styled.section`
  display: flex;
  align-items: center;
`

const ThemeToggleButton = styled(Button)`
  color: var(--text);
  
  svg {
    stroke: var(--text);
  }
`

const DesktopMenu = () => {
  const { themeName, setTheme } = useContext(ThemeContext)
  const [visible, setVisibility] = useState(true)

  useEffect(() => {
    const rems = breakpoints.desktop.replace('rem', '')
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    const desktopWidth = rems * fontSize

    const handleResize = debounce(() => {
      setVisibility(window.innerWidth >= desktopWidth)
    }, 100)

    setVisibility(window.innerWidth >= desktopWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { style: { opacity: 0.5 } } : null
  }

  const toggleTheme = () => {
    setTheme(themeName === 'light' ? 'dark' : 'light')
  }

  return visible ? (
    <DesktopMenuWrap>
      <Spaced left="3x">
        <section aria-label="Site Links">
          <nav role="navigation">
            <Spaced right="xxl">
              <MenuLink
                to="/"
                rel="home"
                getProps={isActive}
              >
                <Text order="body" element="span">
                  Home
                </Text>
              </MenuLink>
              <MenuLink
                to="/blog"
                getProps={isActive}
              >
                <Text order="body" element="span">
                  Articles
                </Text>
              </MenuLink>
              <MenuLink
                to="/about"
                getProps={isActive}
              >
                <Text order="body" element="span">
                  About
                </Text>
              </MenuLink>
            </Spaced>
          </nav>
        </section>
        <SiteTools aria-label="Site Tools">
          <Spaced left="xl">
            <ThemeToggleButton unstyled onClick={toggleTheme}>
              <ScreenReaderText>
                Change Theme
              </ScreenReaderText>
              {themeName === 'light' ? <Sun/> : <Moon/>}
            </ThemeToggleButton>
            <Button order="secondary">
              Subscribe
            </Button>
          </Spaced>
        </SiteTools>
      </Spaced>
    </DesktopMenuWrap>
  ) : null
}

export default DesktopMenu
