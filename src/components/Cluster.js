import styled from 'styled-components'

export const Cluster = styled.div(
  ({ theme, space = 's0' }) => `

  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: calc(${theme.sizes[space]} / 2 * -1);
  }

  & > * > * {
    margin: calc(${theme.sizes[space]} / 2);
  }
`
)
