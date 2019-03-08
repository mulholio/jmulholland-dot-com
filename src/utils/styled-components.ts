import * as styledComponents from 'styled-components'
import theme from './theme'

type Theme = typeof theme

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme
>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
