import { createGlobalStyle, css } from 'styled-components'

const darkValues = css`
  --text: ${({ theme }) => theme.colors.white};
  --textLight: hsl(0, 0%, 45%);
  --textLighter: hsl(0, 0%, 60%);
  --textInverse: ${({ theme }) => theme.colors.white};
  --textCode: ${({ theme }) => theme.colors.white};
  --backgroundPrimary: hsl(0, 0%, 8%);
  --backgroundSecondary: hsl(0, 0%, 10%);
  --backgroundTertiary: hsl(0, 0%, 12%);
  --backgroundInverse: hsl(0, 0%, 8%);
  --backgroundElevatedPrimary: '';
  --backgroundElevatedSecondary: hsl(0, 0%, 12%);
  --backgroundElevatedInverse: hsl(0, 0%, 10%);
  --backgroundBody: ${({ theme }) => theme.colors.black};
  --backgroundSubscribeBanner: hsl(0, 0%, 2%);
  --backgroundCode: hsl(0, 0%, 2%);
  --border: hsl(0, 0%, 12%);
  --buttonBorderPrimary: ${({ theme }) => theme.colors.white};
  --buttonBackgroundPrimary: transparent;
  --buttonTextPrimary: ${({ theme }) => theme.colors.white};
  --buttonBorderSecondary: hsl(210, 15%, 95%);
  --buttonBackgroundSecondary: transparent;
  --buttonTextSecondary: ${({ theme }) => theme.colors.white};
  --primary: ${({ theme }) => theme.colors.blueDarkest};
  --accent: ${({ theme }) => theme.colors.red};
  --selection: hsla(0, 0%, 100%, 0.15);
  --elevationLow: 0 0 0 0.1em var(--selection);
  --elevationMedium: 0 0 0 0.2em var(--selection);
  --elevationHigh: 0 0 0 0.3em var(--selection);
  --gradientGray: linear-gradient(169deg, transparent 5%, hsl(0, 0%, 50%) 100%);
  --illustrationHeroShapeBackground: hsl(0, 0%, 60%);
  --illustrationLineShade1: hsl(240, 3%, 12%);
  --illustrationLineShade2: hsl(240, 5%, 15%);
  --illustrationLineShade3: hsl(240, 7%, 19%);
`

const GlobalStyle = createGlobalStyle`
  :root {
    --text: ${({ theme }) => theme.colors.blueDarkest};
    --textLight: hsl(210, 15%, 40%);
    --textLighter: hsl(210, 15%, 60%);
    --textInverse: hsl(0, 0%, 100%);
    --textCode: hsl(210, 15%, 40%);
    --backgroundPrimary: ${({ theme }) => theme.colors.white};
    --backgroundSecondary: hsl(210, 15%, 97.5%);
    --backgroundTertiary: hsl(210, 15%, 92.5%);
    --backgroundInverse: ${({ theme }) => theme.colors.blueDarkest};
    --backgroundElevatedPrimary: '';
    --backgroundElevatedSecondary: ${({ theme }) => theme.colors.white};
    --backgroundElevatedInverse: ${({ theme }) => theme.colors.blueDarker};
    --backgroundBody: ${({ theme }) => theme.colors.blueDarkest};
    --backgroundSubscribeBanner: ${({ theme }) => theme.colors.white};
    --backgroundCode: hsl(210, 15%, 97%);
    --border: hsl(210, 15%, 90%);
    --buttonBorderPrimary: ${({ theme }) => theme.colors.blueDarkest};
    --buttonBackgroundPrimary: ${({ theme }) => theme.colors.blueDarkest};
    --buttonTextPrimary: ${({ theme }) => theme.colors.white};
    --buttonBorderSecondary: hsl(210, 15%, 90%);
    --buttonBackgroundSecondary: transparent;
    --buttonTextSecondary: ${({ theme }) => theme.colors.blueDarkest};
    --primary: ${({ theme }) => theme.colors.blueDarkest};
    --accent: ${({ theme }) => theme.colors.red};
    --selection: hsla(210, 67%, 11%, 0.15);
    --elevationLow: 0 0 0 1px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.12);
    --elevationMedium: 0 0 0 1px rgba(0,0,0,0.05), 0 5px 10px rgba(0,0,0,0.15);
    --elevationHigh: 0 0 0 1px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.2);
    --gradientGray: linear-gradient(169deg, hsl(0, 0%, 100%) 5%, hsl(0, 0%, 95%) 100%);
    --illustrationHeroShapeBackground: hsl(240, 12%, 60%);
    --illustrationLineShade1: hsl(240, 14%, 89%);
    --illustrationLineShade2: hsl(240, 14%, 85%);
    --illustrationLineShade3: hsl(240, 14%, 80%);

    .theme-dark {
      ${darkValues}
    }

    .no-js {
      @media (prefers-color-scheme: dark) {
        ${darkValues}
      }
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: border-color 0.2s ease-out, background 0.2s ease-out, color 0.2s ease-out, fill 0.2s ease-out, stroke 0.2s ease-out;
  }

  ::selection {
    background-color: var(--selection);
  }

  pre::selection {
    background-color: rgba(250, 250, 250, 0.15);
  }

  *:focus {
    box-shadow: 0 0 0 0.2em var(--selection);
    outline: 0;
  }

  body {
    min-width: 20rem;
    ${({ withBackground }) => withBackground && 'background-color: var(--backgroundBody)'};
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "DM Serif Text", serif;
    font-weight: 400 !important;
  }

  p a {
    color: var(--text);
  }

  p code {
    padding: 0.125rem 0.25rem;
    border-radius: 2px;
    background-color: var(--backgroundSecondary);
  }

  a {
    text-decoration-color: var(--textLighter);
  }

  .noscript {
    display: block;
    padding: ${({ theme }) => theme.spacing.s};
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: 16px;
    background-color: var(--accent);
    color: ${({ theme }) => theme.colors.white};
  }

  .tippy-tooltip.jh-theme {
    background-color: var(--backgroundTertiary);
    color: var(--text);

    &[data-placement^='bottom'] {
      .tippy-arrow {
        border-bottom-color: var(--backgroundTertiary);
      }
    }
  }
`

export default GlobalStyle
