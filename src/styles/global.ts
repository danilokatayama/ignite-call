import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    borderbox: 'box-sizing',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
