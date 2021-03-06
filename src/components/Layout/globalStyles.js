import { createGlobalStyle, css } from 'styled-components'

import './code.css'

/*
Variation of:

http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/
const reset = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  span,
  html,
  body,
  div,
  iframe,
  figure,
  figcaption,
  summary,
  section,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  footer,
  header,
  menu,
  nav,
  img,
  audio,
  video {
    font: inherit;
    vertical-align: baseline;
    font-size: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

  button,
  input {
    border-radius: 0;
  }

  // Remove shadow on inputs
  input[type='email'],
  input[type='password'],
  input[type='text'] {
    /* Remove First */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  ul {
    list-style: disc;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

  ${reset}

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.sans};
    height: 100%;
  }
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    hyphens: auto;
  }
  
  button:active,
  input:active,
  input:focus,
  button:focus {
    outline: 2px solid ${({ theme }) => theme.colors.b500};
  }

  a:active,
  a:focus {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.b500};
    outline: none;
  }

  a,
  button {
    transition: outline 0.1s;
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.colors.n900};
  }

  body *::selection {
    background: ${(props) => props.theme.colors.b500};
    color: ${(props) => props.theme.colors.n900};
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.n200};
    font-weight: 600;
  }

  p, li, ul, ol, blockquote {
    font-size: ${(props) => props.theme.fontSizes.s0};
    line-height: 1.618;
    color: ${(props) => props.theme.colors.n200};
  }
  
  li {
    margin: 0;
  }

  ul, ol {
    padding-left: ${(props) => props.theme.sizes.s1};
  }

  figure {
    margin: ${(props) => props.theme.sizes.s2} 0;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.s2};
    hyphens: none;
    line-height: 1.1;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.s2};
    hyphens: none;
    line-height: 1.1;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSizes.s1};
    line-height: 1.1;
  }
  h4 {
    font-size: ${(props) => props.theme.fontSizes.s1};
    line-height: 1.1;
  }
  h5 {
    font-size: ${(props) => props.theme.fontSizes.s0};
    line-height: 1.1;
  }
  h6 {
    font-size: ${(props) => props.theme.fontSizes.s0};
    line-height: 1.1;
  }

  figcaption {
    color: ${(props) => props.theme.colors.n300};
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: ${(props) => props.theme.fontSizes.s0};
    margin-top: ${(props) => props.theme.sizes['s-1']};
    text-align: center;
  } 

  a {
    font-weight: 600;
    text-decoration: none;
    color: ${(props) => props.theme.colors.b400};
  }

  a:hover {
    color: ${(props) => props.theme.colors.b500};
  }

  // Overrride header link styles
  .anchor.before {
    position: absolute;
    left: -${(props) => props.theme.sizes.s1};
  }
  .anchor.before svg {
    height: 1em;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    padding-left: ${(props) => props.theme.sizes.s0};
    border-left: 2px solid ${(props) => props.theme.colors.b400};

    p {
      font-style: italic;
    }
  }
  // Source styling
  blockquote > footer:before {
    content: "— ";
  }
  blockquote > footer {
    margin-top: 0;
    font-style: normal;
  }
`

export { GlobalStyle }
